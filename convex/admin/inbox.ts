import { v } from "convex/values";
import { query, mutation } from "../_generated/server";

/**
 * List all contact submissions with optional status filter.
 */
export const list = query({
  args: {
    status: v.optional(
      v.union(
        v.literal("new"),
        v.literal("read"),
        v.literal("replied"),
        v.literal("archived")
      )
    ),
  },
  handler: async (ctx, args) => {
    if (args.status) {
      return await ctx.db
        .query("contactSubmissions")
        .withIndex("by_status", (q) => q.eq("status", args.status!))
        .order("desc")
        .collect();
    }

    return await ctx.db
      .query("contactSubmissions")
      .withIndex("by_created_at")
      .order("desc")
      .collect();
  },
});

/**
 * Get a single contact submission by ID.
 */
export const get = query({
  args: {
    id: v.id("contactSubmissions"),
  },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.id);
  },
});

/**
 * Mark a submission as read.
 */
export const markAsRead = mutation({
  args: {
    id: v.id("contactSubmissions"),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.id, {
      status: "read",
      updatedAt: Date.now(),
    });
  },
});

/**
 * Mark a submission as replied.
 */
export const markAsReplied = mutation({
  args: {
    id: v.id("contactSubmissions"),
    respondedBy: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.id, {
      status: "replied",
      respondedAt: Date.now(),
      respondedBy: args.respondedBy,
      updatedAt: Date.now(),
    });
  },
});

/**
 * Archive a submission.
 */
export const archive = mutation({
  args: {
    id: v.id("contactSubmissions"),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.id, {
      status: "archived",
      updatedAt: Date.now(),
    });
  },
});

/**
 * Delete a submission.
 */
export const remove = mutation({
  args: {
    id: v.id("contactSubmissions"),
  },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
  },
});

/**
 * Get counts by status.
 */
export const getCounts = query({
  args: {},
  handler: async (ctx) => {
    const all = await ctx.db.query("contactSubmissions").collect();

    const counts = {
      new: 0,
      read: 0,
      replied: 0,
      archived: 0,
      total: all.length,
    };

    for (const submission of all) {
      counts[submission.status]++;
    }

    return counts;
  },
});
