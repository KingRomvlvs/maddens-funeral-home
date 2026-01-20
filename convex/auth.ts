import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

// Simple hash function using Web Crypto API (available in Convex)
async function hashPassword(password: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}

// Generate a random session token
function generateToken(): string {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return Array.from(array)
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

// Session duration: 7 days
const SESSION_DURATION = 7 * 24 * 60 * 60 * 1000;

/**
 * Login with username and password.
 * Returns a session token on success.
 */
export const login = mutation({
  args: {
    username: v.string(),
    password: v.string(),
  },
  handler: async (ctx, args): Promise<{ success: boolean; token?: string; error?: string }> => {
    // Find user by username
    const user = await ctx.db
      .query("adminUsers")
      .withIndex("by_username", (q) => q.eq("username", args.username))
      .first();

    if (!user) {
      return { success: false, error: "Invalid username or password" };
    }

    // Verify password
    const passwordHash = await hashPassword(args.password);
    if (passwordHash !== user.passwordHash) {
      return { success: false, error: "Invalid username or password" };
    }

    // Create session
    const token = generateToken();
    const now = Date.now();

    await ctx.db.insert("adminSessions", {
      userId: user._id,
      token,
      expiresAt: now + SESSION_DURATION,
      createdAt: now,
    });

    return { success: true, token };
  },
});

/**
 * Logout - invalidate the session.
 */
export const logout = mutation({
  args: {
    token: v.string(),
  },
  handler: async (ctx, args) => {
    const session = await ctx.db
      .query("adminSessions")
      .withIndex("by_token", (q) => q.eq("token", args.token))
      .first();

    if (session) {
      await ctx.db.delete(session._id);
    }

    return { success: true };
  },
});

/**
 * Validate a session token and return the user.
 */
export const validateSession = query({
  args: {
    token: v.string(),
  },
  handler: async (ctx, args) => {
    if (!args.token) return null;

    const session = await ctx.db
      .query("adminSessions")
      .withIndex("by_token", (q) => q.eq("token", args.token))
      .first();

    if (!session) return null;

    // Check if expired
    if (session.expiresAt < Date.now()) {
      return null;
    }

    // Get user
    const user = await ctx.db.get(session.userId);
    if (!user) return null;

    return {
      id: user._id,
      username: user.username,
      name: user.name,
    };
  },
});

/**
 * Setup the first admin user.
 * Only works if no admin users exist yet.
 */
export const setupAdmin = mutation({
  args: {
    username: v.string(),
    password: v.string(),
    name: v.string(),
  },
  handler: async (ctx, args): Promise<{ success: boolean; error?: string }> => {
    // Check if any admin users exist
    const existingAdmin = await ctx.db.query("adminUsers").first();
    if (existingAdmin) {
      return { success: false, error: "Admin user already exists" };
    }

    // Create the admin user
    const passwordHash = await hashPassword(args.password);
    const now = Date.now();

    await ctx.db.insert("adminUsers", {
      username: args.username,
      passwordHash,
      name: args.name,
      createdAt: now,
      updatedAt: now,
    });

    return { success: true };
  },
});

/**
 * Check if any admin users exist (for setup flow).
 */
export const hasAdminUser = query({
  args: {},
  handler: async (ctx) => {
    const admin = await ctx.db.query("adminUsers").first();
    return !!admin;
  },
});

/**
 * Refresh a session (extend expiry).
 */
export const refreshSession = mutation({
  args: {
    token: v.string(),
  },
  handler: async (ctx, args) => {
    const session = await ctx.db
      .query("adminSessions")
      .withIndex("by_token", (q) => q.eq("token", args.token))
      .first();

    if (!session || session.expiresAt < Date.now()) {
      return { success: false };
    }

    // Extend session
    await ctx.db.patch(session._id, {
      expiresAt: Date.now() + SESSION_DURATION,
    });

    return { success: true };
  },
});
