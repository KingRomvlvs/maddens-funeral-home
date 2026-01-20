import { v } from "convex/values";
import { internalMutation, internalQuery } from "../_generated/server";

// =============================================================================
// FETCH BY IDS - Helper query
// =============================================================================

export const fetchByIds = internalQuery({
  args: {
    ids: v.array(v.id("businessInfo")),
  },
  handler: async (ctx, args) => {
    return await Promise.all(args.ids.map((id) => ctx.db.get(id)));
  },
});

// =============================================================================
// STORE INFO - Mutation to save to database
// =============================================================================

export const storeInfo = internalMutation({
  args: {
    content: v.string(),
    category: v.string(),
    title: v.optional(v.string()),
    embedding: v.array(v.float64()),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("businessInfo", {
      content: args.content,
      category: args.category,
      title: args.title,
      embedding: args.embedding,
      createdAt: Date.now(),
    });
  },
});

// =============================================================================
// LIST ALL - For admin/debugging
// =============================================================================

export const listAll = internalQuery({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("businessInfo").collect();
  },
});

// =============================================================================
// DELETE BY ID - For admin
// =============================================================================

export const deleteById = internalMutation({
  args: {
    id: v.id("businessInfo"),
  },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
  },
});
