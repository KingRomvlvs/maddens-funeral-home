import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  // Agent conversations
  agentConversations: defineTable({
    sessionId: v.string(),
    createdAt: v.number(),
    updatedAt: v.number(),
  }).index("by_session", ["sessionId"]),

  // Agent messages
  agentMessages: defineTable({
    conversationId: v.id("agentConversations"),
    role: v.union(v.literal("user"), v.literal("assistant")),
    content: v.string(),
    createdAt: v.number(),
  }).index("by_conversation", ["conversationId", "createdAt"]),

  // Rate limiting for anonymous users
  anonymousRateLimits: defineTable({
    identifier: v.string(),
    promptCount: v.number(),
    resetAt: v.number(),
  }).index("by_identifier", ["identifier"]),
});
