import { v } from "convex/values";
import { internalMutation, internalQuery } from "../_generated/server";

// =============================================================================
// RATE LIMITING
// =============================================================================

const ANONYMOUS_PROMPT_LIMIT = 10; // prompts per hour
const HOUR_IN_MS = 60 * 60 * 1000;

export const checkRateLimit = internalMutation({
  args: { sessionId: v.string() },
  handler: async (ctx, args) => {
    const now = Date.now();

    const existing = await ctx.db
      .query("anonymousRateLimits")
      .withIndex("by_identifier", (q) => q.eq("identifier", args.sessionId))
      .first();

    if (!existing) {
      await ctx.db.insert("anonymousRateLimits", {
        identifier: args.sessionId,
        promptCount: 1,
        resetAt: now + HOUR_IN_MS,
      });
      return { allowed: true, remaining: ANONYMOUS_PROMPT_LIMIT - 1 };
    }

    // Check if reset time has passed
    if (now >= existing.resetAt) {
      await ctx.db.patch(existing._id, {
        promptCount: 1,
        resetAt: now + HOUR_IN_MS,
      });
      return { allowed: true, remaining: ANONYMOUS_PROMPT_LIMIT - 1 };
    }

    // Check if over limit
    if (existing.promptCount >= ANONYMOUS_PROMPT_LIMIT) {
      const minutesUntilReset = Math.ceil((existing.resetAt - now) / 60000);
      return {
        allowed: false,
        remaining: 0,
        minutesUntilReset,
      };
    }

    // Increment counter
    await ctx.db.patch(existing._id, {
      promptCount: existing.promptCount + 1,
    });

    return {
      allowed: true,
      remaining: ANONYMOUS_PROMPT_LIMIT - existing.promptCount - 1,
    };
  },
});

// =============================================================================
// CONVERSATION MANAGEMENT
// =============================================================================

export const getOrCreateConversation = internalMutation({
  args: {
    sessionId: v.string(),
    conversationId: v.optional(v.id("agentConversations")),
  },
  handler: async (ctx, args) => {
    if (args.conversationId) {
      const existing = await ctx.db.get(args.conversationId);
      if (existing) {
        await ctx.db.patch(args.conversationId, { updatedAt: Date.now() });
        return args.conversationId;
      }
    }

    // Create new conversation
    return await ctx.db.insert("agentConversations", {
      sessionId: args.sessionId,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });
  },
});

export const saveMessage = internalMutation({
  args: {
    conversationId: v.id("agentConversations"),
    role: v.union(v.literal("user"), v.literal("assistant")),
    content: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("agentMessages", {
      conversationId: args.conversationId,
      role: args.role,
      content: args.content,
      createdAt: Date.now(),
    });
  },
});

export const getConversationHistory = internalQuery({
  args: { conversationId: v.id("agentConversations") },
  handler: async (ctx, args) => {
    const messages = await ctx.db
      .query("agentMessages")
      .withIndex("by_conversation", (q) => q.eq("conversationId", args.conversationId))
      .order("asc")
      .take(20); // Limit history to last 20 messages

    return messages;
  },
});
