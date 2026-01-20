"use node";

import { v } from "convex/values";
import { action } from "../_generated/server";
import { internal } from "../_generated/api";

// =============================================================================
// SYSTEM PROMPT - MADDEN'S FUNERAL HOME AI ASSISTANT
// =============================================================================

const SYSTEM_PROMPT = `You are the AI assistant for Madden's Funeral Home, Jamaica's most trusted family-owned funeral service provider with over 90 years of service. You are warm, compassionate, professional, and helpful.

## WHO WE ARE

**Madden's Funeral Home & Crematorium** has been serving Jamaican families since the 1930s. We are a five-generation family-owned business committed to providing dignified funeral services with compassion and professionalism.

### Leadership
- **CEO:** Leslie Ruel Madden Jr. - Continuing the family legacy of compassionate service
- **Foundation:** Leslie Ruel Madden Foundation - Community giving and support

### Locations

**Montego Bay (Main)**
- Address: 37 Union Street, Montego Bay, St. James, Jamaica, W.I.
- Phone: (876) 952-0212 or (876) 979-1491
- Email: mobay@maddensfuneralhome.com

**Kingston**
- Address: 42a Constant Spring Road, Kingston 10, Jamaica, W.I.
- Phone: (876) 926-2079 or (876) 926-8223
- Email: info@maddensfuneralhome.com

**US Contact**
- Phone: (954) 324-9550

**Cemetery: Dovecot Memorial Park**
- Location: Montego Bay
- Features: Modern crematorium, columbarium niches, urn gardens, family plots, lawn crypts

### Services We Offer
1. **Traditional Funeral Services** - Full viewing, service, and burial
2. **Cremation Services** - Before, after, or direct cremation options
3. **Graveside Services** - Outdoor cemetery services
4. **Repatriation Services** - International arrangements for overseas deaths
5. **Pre-Planning** - Advance funeral arrangements with locked-in pricing
6. **Cemetery Services** - Full interment support at Dovecot Memorial Park

### Community Programs
- **Christmas Treat** - Annual distribution of food packages to 500+ elderly and disabled community members
- **Leslie Ruel Madden Foundation** - Scholarships, community support, and charitable giving

## RESPONSE RULES

### Length Guidelines
- **Greetings:** MAX 1 sentence. Be warm but brief.
- **Off-topic questions:** MAX 2 sentences. Politely redirect.
- **Simple questions:** 2-4 sentences. Direct and helpful.
- **Service inquiries:** 1 short paragraph with key details.
- **Complex questions:** Up to 300 words max with bullet points if needed.

### Tone & Style
- Compassionate and warm, never clinical or cold
- Professional but not corporate-sounding
- Reassuring and supportive
- Use "we" and "our" language
- Acknowledge the difficulty of their situation when appropriate

### What You CAN Help With
- Information about our services, locations, and contact details
- Guidance on what to do when someone dies
- Pre-planning information and benefits
- Cremation vs burial options
- Cemetery and memorial options
- Pricing inquiries (provide general guidance, suggest calling for specifics)
- Repatriation process for international cases
- Community programs (Christmas Treat, Foundation)
- General funeral planning questions
- Basic calculations (costs, etc.)
- General condolences and support

### What You MUST Decline
- Medical advice or diagnosis
- Legal advice
- Religious or spiritual counseling (you can acknowledge their beliefs respectfully)
- Specific pricing quotes (suggest calling for accurate quotes)
- Topics completely unrelated to funeral services, death care, or our business
- Political opinions
- Gossip or speculation
- Anything unethical or harmful

### Off-Topic Handling
When users ask about topics unrelated to funeral services, death care, grief support, or Madden's Funeral Home:
1. Acknowledge their question politely
2. Explain you're specialized in funeral service information
3. Redirect to how you can help them
4. Do NOT engage in extended off-topic conversation

Example: "I appreciate your question, but I'm specifically here to help with funeral services and death care information. Is there anything I can help you with regarding our services or planning arrangements?"

## IMPORTANT NOTES
- We are available 24/7 for emergencies
- Always encourage calling for immediate needs
- Be sensitive - users may be grieving
- Never rush or pressure anyone
- Emphasize our 90+ years of trusted service
- Our tagline: "Let Us Lend a Helping Hand"

## FORMATTING
- Use plain text, no markdown headers
- Use bullet points sparingly for lists
- Keep paragraphs short
- Include relevant phone numbers when appropriate`;

// =============================================================================
// CONSTANTS
// =============================================================================

const ANONYMOUS_PROMPT_LIMIT = 10;

// =============================================================================
// TOPIC DETECTION - CONSERVE TOKENS
// =============================================================================

function isOffTopic(question: string): boolean {
  const q = question.toLowerCase();

  // Funeral/death care related terms - these are ON topic
  const onTopicTerms = [
    "funeral", "cremation", "burial", "casket", "urn", "cemetery",
    "death", "died", "dying", "passed", "passing", "deceased",
    "service", "viewing", "wake", "memorial", "tribute",
    "madden", "dovecot", "repatriation", "pre-plan", "pre-plan",
    "grief", "loss", "bereaved", "mourning", "condolence",
    "embalm", "mortuary", "hearse", "pallbearer", "obituary",
    "grave", "tomb", "vault", "crypt", "columbarium", "mausoleum",
    "flower", "floral", "arrangement", "sympathy",
    "price", "cost", "pay", "afford", "insurance", "expense",
    "plan", "arrange", "prepare", "help", "assist", "need",
    "location", "address", "phone", "contact", "hour", "open",
    "jamaica", "kingston", "montego", "mobay",
    "christmas", "treat", "foundation", "community",
    "family", "relative", "mother", "father", "parent", "child",
    "husband", "wife", "spouse", "brother", "sister",
    "what do", "how do", "when", "where", "who",
    "hello", "hi", "hey", "good morning", "good afternoon", "good evening",
    "thank", "thanks", "appreciate",
  ];

  // Check if any on-topic term is present
  if (onTopicTerms.some(term => q.includes(term))) {
    return false; // ON topic
  }

  // Clearly off-topic patterns
  const offTopicPatterns = [
    /\b(recipe|cook|food|restaurant)\b/i,
    /\b(movie|film|music|song|artist|actor)\b/i,
    /\b(sport|football|soccer|basketball|cricket)\b/i,
    /\b(politic|election|vote|government)\b/i,
    /\b(joke|funny|laugh|humor)\b/i,
    /\b(date|dating|relationship|boyfriend|girlfriend)\b/i,
    /\b(game|gaming|play|video game)\b/i,
    /\b(travel|vacation|hotel|flight)\b/i,
    /\b(stock|invest|crypto|bitcoin)\b/i,
    /\b(weather|forecast|temperature)\b/i,
    /\b(code|program|software|app)\b/i,
    /\b(homework|essay|assignment|school)\b/i,
  ];

  if (offTopicPatterns.some(pattern => pattern.test(q))) {
    return true; // OFF topic
  }

  // Default: allow it (benefit of the doubt)
  return false;
}

function isGreeting(question: string): boolean {
  const q = question.toLowerCase().trim();
  const greetings = [
    "hi", "hello", "hey", "good morning", "good afternoon", "good evening",
    "howdy", "greetings", "sup", "what's up", "whats up", "yo",
  ];

  // Check if the entire message is just a greeting
  return greetings.some(g => q === g || q === g + "!" || q === g + ".");
}

// =============================================================================
// MAIN CHAT ACTION
// =============================================================================

export interface ChatResponse {
  response: string;
  conversationId: string;
  remaining?: number;
  error?: string;
}

export const ask = action({
  args: {
    question: v.string(),
    conversationId: v.optional(v.id("agentConversations")),
    sessionId: v.string(),
  },
  handler: async (ctx, args): Promise<ChatResponse> => {
    // Check rate limit
    const rateLimitResult = await ctx.runMutation(internal.agent.db.checkRateLimit, {
      sessionId: args.sessionId,
    });

    if (!rateLimitResult.allowed) {
      return {
        response: `You've reached the message limit (${ANONYMOUS_PROMPT_LIMIT} per hour). Please wait ${rateLimitResult.minutesUntilReset} minutes, or call us directly at (876) 952-0212 for immediate assistance.`,
        conversationId: args.conversationId || "",
        remaining: 0,
        error: "rate_limit",
      };
    }

    // Handle greetings without AI call - saves tokens
    if (isGreeting(args.question)) {
      const greetingResponse = "Hello! Welcome to Madden's Funeral Home. I'm here to help you with any questions about our services, locations, or funeral planning. How may I assist you today?";

      const conversationId = await ctx.runMutation(
        internal.agent.db.getOrCreateConversation,
        { sessionId: args.sessionId, conversationId: args.conversationId }
      );

      await ctx.runMutation(internal.agent.db.saveMessage, {
        conversationId,
        role: "user",
        content: args.question,
      });

      await ctx.runMutation(internal.agent.db.saveMessage, {
        conversationId,
        role: "assistant",
        content: greetingResponse,
      });

      return {
        response: greetingResponse,
        conversationId,
        remaining: rateLimitResult.remaining,
      };
    }

    // Handle off-topic questions without AI call - saves tokens
    if (isOffTopic(args.question)) {
      const offTopicResponse = "I appreciate your question, but I'm specifically here to help with funeral services and death care information. Is there anything I can help you with regarding our services, pre-planning, or making arrangements? You can also call us at (876) 952-0212.";

      const conversationId = await ctx.runMutation(
        internal.agent.db.getOrCreateConversation,
        { sessionId: args.sessionId, conversationId: args.conversationId }
      );

      await ctx.runMutation(internal.agent.db.saveMessage, {
        conversationId,
        role: "user",
        content: args.question,
      });

      await ctx.runMutation(internal.agent.db.saveMessage, {
        conversationId,
        role: "assistant",
        content: offTopicResponse,
      });

      return {
        response: offTopicResponse,
        conversationId,
        remaining: rateLimitResult.remaining,
      };
    }

    // Get or create conversation
    const conversationId = await ctx.runMutation(
      internal.agent.db.getOrCreateConversation,
      { sessionId: args.sessionId, conversationId: args.conversationId }
    );

    // Save user message
    await ctx.runMutation(internal.agent.db.saveMessage, {
      conversationId,
      role: "user",
      content: args.question,
    });

    // Get conversation history for context
    const history = await ctx.runQuery(internal.agent.db.getConversationHistory, {
      conversationId,
    });

    // Build messages array for AI
    const messages: Array<{ role: "user" | "assistant" | "system"; content: string }> = [
      { role: "system", content: SYSTEM_PROMPT },
    ];

    // Add conversation history (excluding the current message we just saved)
    for (const msg of history.slice(0, -1)) {
      messages.push({
        role: msg.role,
        content: msg.content,
      });
    }

    // Add current question
    messages.push({
      role: "user",
      content: args.question,
    });

    // Search RAG for relevant business context
    let ragContext = "";
    try {
      const ragResults = await ctx.runAction(internal.agent.rag.search, {
        query: args.question,
        limit: 3,
        minScore: 0.65,
      });

      if (ragResults.length > 0) {
        ragContext = ragResults.map((r) => r.text).join("\n\n");
      }
    } catch (error) {
      console.error("RAG search error:", error);
      // Continue without RAG context if search fails
    }

    // If we have RAG context, add it to the system message
    if (ragContext) {
      messages[0] = {
        role: "system",
        content: `${SYSTEM_PROMPT}\n\n=== ADDITIONAL BUSINESS INFORMATION ===\n${ragContext}`,
      };
    }

    // Call OpenRouter API
    const apiKey = process.env.OPENROUTER_API_KEY;
    if (!apiKey) {
      return {
        response: "I apologize, but I'm temporarily unavailable. Please call us directly at (876) 952-0212 for assistance.",
        conversationId,
        error: "config_error",
      };
    }

    try {
      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${apiKey}`,
          "Content-Type": "application/json",
          "HTTP-Referer": process.env.SITE_URL || "https://maddensfuneralhome.com",
          "X-Title": "Madden's Funeral Home Assistant",
        },
        body: JSON.stringify({
          model: process.env.OPENROUTER_CHAT_MODEL || "openai/gpt-4o-mini",
          messages,
          temperature: 0.4,
          max_tokens: 500, // Keep responses concise
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("OpenRouter error:", errorText);
        throw new Error(`OpenRouter API error: ${response.status}`);
      }

      const data = await response.json();
      const assistantMessage = data.choices?.[0]?.message?.content ||
        "I apologize, but I couldn't process your request. Please call us at (876) 952-0212 for assistance.";

      // Save assistant response
      await ctx.runMutation(internal.agent.db.saveMessage, {
        conversationId,
        role: "assistant",
        content: assistantMessage,
      });

      return {
        response: assistantMessage,
        conversationId,
        remaining: rateLimitResult.remaining,
      };

    } catch (error) {
      console.error("Chat error:", error);
      return {
        response: "I apologize, but I'm having trouble right now. Please call us directly at (876) 952-0212 for immediate assistance.",
        conversationId,
        error: "api_error",
      };
    }
  },
});
