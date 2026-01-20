/**
 * Email database operations (runs in V8 runtime)
 */

import { v } from "convex/values";
import { internalMutation, internalQuery } from "../_generated/server";

export const getSubmissionForEmail = internalQuery({
  args: { id: v.id("contactSubmissions") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.id);
  },
});

export const logEmail = internalMutation({
  args: {
    contactSubmissionId: v.optional(v.id("contactSubmissions")),
    recipientEmail: v.string(),
    recipientName: v.string(),
    subject: v.string(),
    bodyHtml: v.string(),
    bodyText: v.optional(v.string()),
    emailType: v.union(
      v.literal("auto_reply"),
      v.literal("ai_reply"),
      v.literal("manual_reply"),
      v.literal("follow_up")
    ),
    resendId: v.optional(v.string()),
    resendStatus: v.union(
      v.literal("pending"),
      v.literal("sent"),
      v.literal("delivered"),
      v.literal("bounced"),
      v.literal("failed")
    ),
    sentById: v.optional(v.id("adminUsers")),
    sentByName: v.string(),
  },
  handler: async (ctx, args) => {
    const now = Date.now();
    await ctx.db.insert("adminEmailLogs", {
      ...args,
      createdAt: now,
      sentAt: now,
    });
  },
});

export const updateSubmissionStatus = internalMutation({
  args: {
    id: v.id("contactSubmissions"),
    status: v.union(
      v.literal("new"),
      v.literal("read"),
      v.literal("replied"),
      v.literal("archived")
    ),
    respondedBy: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.id, {
      status: args.status,
      respondedAt: Date.now(),
      respondedBy: args.respondedBy,
      updatedAt: Date.now(),
    });
  },
});

export const markAutoReplySent = internalMutation({
  args: { id: v.id("contactSubmissions") },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.id, {
      autoReplySent: true,
      autoReplySentAt: Date.now(),
      updatedAt: Date.now(),
    });
  },
});
