"use node";

import { v } from "convex/values";
import { internalAction } from "../_generated/server";
import { internal } from "../_generated/api";

// =============================================================================
// OPENROUTER EMBEDDING GENERATION
// =============================================================================

async function generateEmbedding(text: string): Promise<number[] | null> {
  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    console.error("OPENROUTER_API_KEY not set");
    return null;
  }

  try {
    const response = await fetch("https://openrouter.ai/api/v1/embeddings", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "HTTP-Referer": process.env.SITE_URL || "https://maddensfuneralhome.com",
        "X-Title": "Madden's Funeral Home",
      },
      body: JSON.stringify({
        model: process.env.OPENROUTER_EMBEDDING_MODEL || "openai/text-embedding-3-small",
        input: text,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("OpenRouter embedding error:", errorText);
      return null;
    }

    const data = await response.json();
    return data.data[0]?.embedding || null;
  } catch (error) {
    console.error("Failed to generate embedding:", error);
    return null;
  }
}

// =============================================================================
// SEARCH FUNCTION - Vector similarity search
// =============================================================================

export const search = internalAction({
  args: {
    query: v.string(),
    limit: v.optional(v.number()),
    minScore: v.optional(v.number()),
    category: v.optional(v.string()),
  },
  handler: async (ctx, args): Promise<Array<{ text: string; score: number; category: string }>> => {
    // Generate embedding for the query
    const queryEmbedding = await generateEmbedding(args.query);
    if (!queryEmbedding) {
      console.error("Failed to generate query embedding");
      return [];
    }

    // Build filter if category specified
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let filterFn: ((q: any) => any) | undefined;
    if (args.category) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      filterFn = (q: any) => q.eq("category", args.category);
    }

    // Search the businessInfo table
    const searchResults = await ctx.vectorSearch("businessInfo", "by_embedding", {
      vector: queryEmbedding,
      limit: args.limit || 5,
      filter: filterFn,
    });

    // Filter by minimum score
    const minScore = args.minScore || 0.65;
    const filteredResults = searchResults.filter((r) => r._score >= minScore);

    // Fetch the actual documents
    const docs = await ctx.runQuery(internal.agent.ragDb.fetchByIds, {
      ids: filteredResults.map((r) => r._id),
    });

    // Build results
    const results = filteredResults
      .map((r, i) => {
        const doc = docs[i];
        if (!doc) return null;
        return {
          text: doc.content,
          score: r._score,
          category: doc.category,
        };
      })
      .filter((r): r is NonNullable<typeof r> => r !== null);

    console.log(`[RAG Search] Query: "${args.query.substring(0, 50)}..." Found ${results.length} results`);

    return results;
  },
});

// =============================================================================
// INGEST - Add business information
// =============================================================================

export const ingest = internalAction({
  args: {
    content: v.string(),
    category: v.union(
      v.literal("service"),
      v.literal("location"),
      v.literal("faq"),
      v.literal("policy"),
      v.literal("pricing"),
      v.literal("general")
    ),
    title: v.optional(v.string()),
  },
  handler: async (ctx, args): Promise<{ success: boolean; error?: string }> => {
    // Generate embedding
    const embedding = await generateEmbedding(args.content);
    if (!embedding) {
      return { success: false, error: "Failed to generate embedding" };
    }

    // Store in database
    try {
      await ctx.runMutation(internal.agent.ragDb.storeInfo, {
        content: args.content,
        category: args.category,
        title: args.title,
        embedding,
      });
      return { success: true };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      };
    }
  },
});

// =============================================================================
// BULK INGEST - For seeding initial business data
// =============================================================================

export const bulkIngest = internalAction({
  args: {
    items: v.array(
      v.object({
        content: v.string(),
        category: v.union(
          v.literal("service"),
          v.literal("location"),
          v.literal("faq"),
          v.literal("policy"),
          v.literal("pricing"),
          v.literal("general")
        ),
        title: v.optional(v.string()),
      })
    ),
  },
  handler: async (ctx, args): Promise<{ success: boolean; count: number; errors: string[] }> => {
    const errors: string[] = [];
    let count = 0;

    for (const item of args.items) {
      const result = await ctx.runAction(internal.agent.rag.ingest, {
        content: item.content,
        category: item.category,
        title: item.title,
      });

      if (result.success) {
        count++;
      } else {
        errors.push(`Failed: "${item.title || item.content.substring(0, 30)}..." - ${result.error}`);
      }
    }

    return { success: errors.length === 0, count, errors };
  },
});
