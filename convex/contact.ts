import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { api } from "./_generated/api";

/**
 * Submit a contact form message.
 */
export const submit = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    phone: v.optional(v.string()),
    subject: v.string(),
    message: v.string(),
  },
  handler: async (ctx, args) => {
    const submissionId = await ctx.db.insert("contactSubmissions", {
      ...args,
      status: "new",
      createdAt: Date.now(),
    });

    // Trigger auto-reply (fire and forget - don't block the submission)
    // Note: This will be handled by the action scheduler
    ctx.scheduler.runAfter(0, api.admin.email.sendAutoReply, {
      contactSubmissionId: submissionId,
    });

    return submissionId;
  },
});
