import { query } from "../_generated/server";

/**
 * Get current user's admin access (for layout protection).
 * Returns truthy if admin exists, null otherwise.
 * This is used by the layout to show the admin UI.
 */
export const getAdminAccessQuery = query({
  args: {},
  handler: async (ctx) => {
    // Check if any admin user exists
    const admin = await ctx.db.query("adminUsers").first();
    if (!admin) return null;
    return { hasAdmin: true };
  },
});

/**
 * Get admin dashboard statistics.
 */
export const getAdminStats = query({
  args: {},
  handler: async (ctx) => {
    const newContacts = await ctx.db
      .query("contactSubmissions")
      .withIndex("by_status", (q) => q.eq("status", "new"))
      .collect();

    const readContacts = await ctx.db
      .query("contactSubmissions")
      .withIndex("by_status", (q) => q.eq("status", "read"))
      .collect();

    const repliedContacts = await ctx.db
      .query("contactSubmissions")
      .withIndex("by_status", (q) => q.eq("status", "replied"))
      .collect();

    const recentEmails = await ctx.db
      .query("adminEmailLogs")
      .withIndex("by_created")
      .order("desc")
      .take(100);

    return {
      newContacts: newContacts.length,
      readContacts: readContacts.length,
      repliedContacts: repliedContacts.length,
      totalContacts:
        newContacts.length + readContacts.length + repliedContacts.length,
      emailsSent: recentEmails.length,
    };
  },
});

/**
 * Get recent activity.
 */
export const getRecentActivity = query({
  args: {},
  handler: async (ctx) => {
    const recentContacts = await ctx.db
      .query("contactSubmissions")
      .withIndex("by_created_at")
      .order("desc")
      .take(10);

    const recentEmails = await ctx.db
      .query("adminEmailLogs")
      .withIndex("by_created")
      .order("desc")
      .take(10);

    type ActivityItem = {
      type: "contact" | "email";
      id: string;
      title: string;
      description: string;
      status?: string;
      createdAt: number;
    };

    const activities: ActivityItem[] = [
      ...recentContacts.map((c) => ({
        type: "contact" as const,
        id: c._id,
        title: `Message from ${c.name}`,
        description: c.subject,
        status: c.status,
        createdAt: c.createdAt,
      })),
      ...recentEmails.map((e) => ({
        type: "email" as const,
        id: e._id,
        title: `Email to ${e.recipientName}`,
        description: e.subject,
        status: e.resendStatus,
        createdAt: e.createdAt,
      })),
    ];

    activities.sort((a, b) => b.createdAt - a.createdAt);
    return activities.slice(0, 20);
  },
});
