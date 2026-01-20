import { v } from "convex/values";
import { internalMutation, query } from "../_generated/server";

/**
 * Mark AI auto-reply as sent and store the response content.
 */
export const markAIReplySent = internalMutation({
  args: {
    id: v.id("contactSubmissions"),
    aiReplyContent: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.id, {
      aiReplySent: true,
      aiReplySentAt: Date.now(),
      aiReplyContent: args.aiReplyContent,
      updatedAt: Date.now(),
    });
  },
});

/**
 * Save AI-generated summary for a submission.
 */
export const saveSummary = internalMutation({
  args: {
    id: v.id("contactSubmissions"),
    summary: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.id, {
      aiSummary: args.summary,
      aiSummaryGeneratedAt: Date.now(),
      updatedAt: Date.now(),
    });
  },
});

/**
 * Get conversation history for an email address.
 * Returns all submissions and email logs for a given email.
 */
export const getConversationHistory = query({
  args: {
    email: v.string(),
  },
  handler: async (ctx, args) => {
    // Get all submissions from this email
    const submissions = await ctx.db
      .query("contactSubmissions")
      .withIndex("by_email", (q) => q.eq("email", args.email))
      .order("desc")
      .collect();

    // Get all emails sent to this address
    const emailLogs = await ctx.db
      .query("adminEmailLogs")
      .withIndex("by_recipient", (q) => q.eq("recipientEmail", args.email))
      .order("desc")
      .collect();

    // Combine and sort by timestamp
    const timeline = [
      ...submissions.map((s) => ({
        type: "submission" as const,
        timestamp: s.createdAt,
        data: s,
      })),
      ...emailLogs.map((e) => ({
        type: "email" as const,
        timestamp: e.createdAt,
        data: e,
      })),
    ].sort((a, b) => b.timestamp - a.timestamp);

    return {
      email: args.email,
      submissions,
      emailLogs,
      timeline,
      totalInteractions: submissions.length + emailLogs.length,
    };
  },
});

/**
 * Get summary statistics for AI features.
 */
export const getAIStats = query({
  args: {},
  handler: async (ctx) => {
    const allSubmissions = await ctx.db.query("contactSubmissions").collect();

    const stats = {
      totalSubmissions: allSubmissions.length,
      aiRepliesSent: allSubmissions.filter((s) => s.aiReplySent).length,
      summariesGenerated: allSubmissions.filter((s) => s.aiSummary).length,
    };

    return stats;
  },
});
