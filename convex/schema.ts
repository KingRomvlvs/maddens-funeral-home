import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  // ============================================================
  // ADMIN USERS - Simple username/password auth
  // ============================================================
  adminUsers: defineTable({
    username: v.string(),
    passwordHash: v.string(),
    name: v.string(),
    createdAt: v.number(),
    updatedAt: v.number(),
  }).index("by_username", ["username"]),

  // ============================================================
  // ADMIN SESSIONS - Session tokens for logged-in admins
  // ============================================================
  adminSessions: defineTable({
    userId: v.id("adminUsers"),
    token: v.string(),
    expiresAt: v.number(),
    createdAt: v.number(),
  })
    .index("by_token", ["token"])
    .index("by_user", ["userId"]),

  // ============================================================
  // CONTACT FORM SUBMISSIONS
  // ============================================================
  contactSubmissions: defineTable({
    name: v.string(),
    email: v.string(),
    phone: v.optional(v.string()),
    subject: v.string(),
    message: v.string(),
    status: v.union(
      v.literal("new"),
      v.literal("read"),
      v.literal("replied"),
      v.literal("archived")
    ),
    // Response tracking
    respondedAt: v.optional(v.number()),
    respondedBy: v.optional(v.string()),
    // Automated response (simple template)
    autoReplySent: v.optional(v.boolean()),
    autoReplySentAt: v.optional(v.number()),
    // AI-powered response
    aiReplySent: v.optional(v.boolean()),
    aiReplySentAt: v.optional(v.number()),
    aiReplyContent: v.optional(v.string()), // The AI-generated response
    // AI summary (generated on demand by admin)
    aiSummary: v.optional(v.string()),
    aiSummaryGeneratedAt: v.optional(v.number()),
    createdAt: v.number(),
    updatedAt: v.optional(v.number()),
  })
    .index("by_status", ["status"])
    .index("by_created_at", ["createdAt"])
    .index("by_email", ["email"]),

  // ============================================================
  // ADMIN EMAIL LOGS
  // ============================================================
  adminEmailLogs: defineTable({
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
    // AI assistance tracking
    aiAssisted: v.optional(v.boolean()), // Was AI used to draft this reply?
    aiDraftContent: v.optional(v.string()), // Original AI draft before editing
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
    createdAt: v.number(),
    sentAt: v.optional(v.number()),
  })
    .index("by_contact", ["contactSubmissionId"])
    .index("by_recipient", ["recipientEmail"])
    .index("by_status", ["resendStatus"])
    .index("by_created", ["createdAt"]),

  // ============================================================
  // AI CHAT SYSTEM
  // ============================================================
  agentConversations: defineTable({
    sessionId: v.string(),
    createdAt: v.number(),
    updatedAt: v.number(),
  }).index("by_session", ["sessionId"]),

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

  // Business information for RAG - stores funeral home knowledge
  businessInfo: defineTable({
    content: v.string(),
    category: v.string(), // service, location, faq, policy, pricing, general
    title: v.optional(v.string()),
    embedding: v.array(v.float64()),
    createdAt: v.number(),
  })
    .index("by_category", ["category"])
    .vectorIndex("by_embedding", {
      vectorField: "embedding",
      dimensions: 1536,
      filterFields: ["category"],
    }),
});
