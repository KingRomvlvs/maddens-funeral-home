"use node";

import { v } from "convex/values";
import { action } from "../_generated/server";
import { internal } from "../_generated/api";
import { Doc } from "../_generated/dataModel";

// =============================================================================
// AI CHAT COMPLETION VIA OPENROUTER
// =============================================================================

interface ChatMessage {
  role: "system" | "user" | "assistant";
  content: string;
}

async function generateAIResponse(
  messages: ChatMessage[],
  maxTokens: number = 500
): Promise<string | null> {
  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    console.error("OPENROUTER_API_KEY not set");
    return null;
  }

  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "HTTP-Referer": process.env.SITE_URL || "https://876maddens.com",
        "X-Title": "Madden's Funeral Home",
      },
      body: JSON.stringify({
        model: process.env.OPENROUTER_CHAT_MODEL || "openai/gpt-4o-mini",
        messages,
        max_tokens: maxTokens,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("OpenRouter chat error:", errorText);
      return null;
    }

    const data = await response.json();
    return data.choices?.[0]?.message?.content || null;
  } catch (error) {
    console.error("Failed to generate AI response:", error);
    return null;
  }
}

// =============================================================================
// SEND AI AUTO-REPLY - Uses RAG to answer user's question
// =============================================================================

export const sendAIAutoReply = action({
  args: {
    contactSubmissionId: v.id("contactSubmissions"),
  },
  handler: async (ctx, args): Promise<{ success: boolean; reason?: string }> => {
    // Get the submission
    const submission: Doc<"contactSubmissions"> | null = await ctx.runQuery(
      internal.admin.emailDb.getSubmissionForEmail,
      { id: args.contactSubmissionId }
    );

    if (!submission) {
      return { success: false, reason: "Submission not found" };
    }

    if (submission.aiReplySent) {
      return { success: false, reason: "AI reply already sent" };
    }

    const resendKey = process.env.RESEND_API_KEY;
    if (!resendKey) {
      console.log("Resend API key not configured, skipping AI reply");
      return { success: false, reason: "Email service not configured" };
    }

    // Search RAG for relevant business information
    const ragResults = await ctx.runAction(internal.agent.rag.search, {
      query: `${submission.subject} ${submission.message}`,
      limit: 5,
      minScore: 0.5,
    });

    // Build context from RAG results
    const ragContext =
      ragResults.length > 0
        ? ragResults.map((r) => `[${r.category}]: ${r.text}`).join("\n\n")
        : "No specific information found. Provide general guidance about funeral services.";

    // Generate AI response
    const systemPrompt = `You are a compassionate customer service representative for Madden's Funeral Home & Crematorium, Jamaica's trusted funeral service provider for over 70 years.

Your role is to respond to customer inquiries with warmth, empathy, and professionalism. Use the business information provided to give accurate, helpful responses.

BUSINESS INFORMATION:
${ragContext}

GUIDELINES:
- Be compassionate and understanding - families are often going through difficult times
- Provide specific information when available
- If you don't have specific information, acknowledge this and offer to have someone follow up
- Keep responses concise but thorough (2-3 paragraphs max)
- Always mention that a team member will follow up if they need additional assistance
- Include contact numbers: Montego Bay (876) 952-0212, Kingston (876) 926-2079, US (954) 324-9550
- Sign off warmly as "The Madden's Funeral Home Team"

DO NOT:
- Include a greeting like "Dear [name]" - the email template already adds this
- Make up prices or specific details not in the business information
- Use overly formal or cold language
- Ignore the emotional context of funeral planning

IMPORTANT: Start your response directly with the content. Do NOT include "Dear [name]" or any greeting - it will be added automatically.`;

    const userPrompt = `A customer named ${submission.name} has submitted the following inquiry:

Subject: ${submission.subject}

Message:
${submission.message}

Please write a thoughtful, helpful response that addresses their inquiry using the business information provided.`;

    const aiResponse = await generateAIResponse([
      { role: "system", content: systemPrompt },
      { role: "user", content: userPrompt },
    ]);

    if (!aiResponse) {
      return { success: false, reason: "Failed to generate AI response" };
    }

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://876maddens.com";

    const bodyHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.8; color: #374151; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="text-align: center; margin-bottom: 32px;">
          <img src="${siteUrl}/images/mfh-logo.png" alt="Madden's Funeral Home" style="height: 60px;">
        </div>

        <p style="margin-bottom: 16px;">Dear ${submission.name},</p>

        <div style="white-space: pre-wrap; margin-bottom: 24px;">${aiResponse}</div>

        <div style="background: #f9fafb; border-radius: 8px; padding: 16px; margin: 24px 0;">
          <p style="margin: 0 0 8px 0; font-weight: 600;">Your original message:</p>
          <p style="white-space: pre-wrap; margin: 0; font-style: italic; color: #6b7280;">${submission.message}</p>
        </div>

        <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 32px 0;">

        <p style="font-size: 14px; color: #6b7280;">
          <strong>Madden's Funeral Home & Crematorium</strong><br>
          Serving Jamaican Families for Over 70 Years<br>
          <a href="${siteUrl}" style="color: #b8860b;">www.876maddens.com</a>
        </p>
      </body>
      </html>
    `;

    const bodyText = `Dear ${submission.name},

${aiResponse}

---
Your original message:
${submission.message}

---
Madden's Funeral Home & Crematorium
Serving Jamaican Families for Over 70 Years
${siteUrl}`;

    try {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Madden's Funeral Home <noreply@876maddens.com>",
          to: [submission.email],
          subject: `Re: ${submission.subject}`,
          html: bodyHtml,
          text: bodyText,
          reply_to: "info@876maddens.com",
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Resend API error:", errorText);
        return { success: false, reason: `Email API error: ${errorText}` };
      }

      const data: { id: string } = await response.json();

      // Log the email
      await ctx.runMutation(internal.admin.emailDb.logEmail, {
        contactSubmissionId: args.contactSubmissionId,
        recipientEmail: submission.email,
        recipientName: submission.name,
        subject: `Re: ${submission.subject}`,
        bodyHtml,
        bodyText,
        emailType: "ai_reply",
        resendId: data.id,
        resendStatus: "sent",
        sentByName: "Madden's Funeral Home (AI Assistant)",
      });

      // Mark AI reply as sent
      await ctx.runMutation(internal.admin.aiEmailDb.markAIReplySent, {
        id: args.contactSubmissionId,
        aiReplyContent: aiResponse,
      });

      return { success: true };
    } catch (error) {
      console.error("Error sending AI reply:", error);
      return { success: false, reason: String(error) };
    }
  },
});

// =============================================================================
// GENERATE SUMMARY - Summarize a customer's message for admin review
// =============================================================================

export const generateSummary = action({
  args: {
    contactSubmissionId: v.id("contactSubmissions"),
  },
  handler: async (ctx, args): Promise<{ success: boolean; summary?: string; reason?: string }> => {
    const submission: Doc<"contactSubmissions"> | null = await ctx.runQuery(
      internal.admin.emailDb.getSubmissionForEmail,
      { id: args.contactSubmissionId }
    );

    if (!submission) {
      return { success: false, reason: "Submission not found" };
    }

    // If already has a summary, return it
    if (submission.aiSummary) {
      return { success: true, summary: submission.aiSummary };
    }

    const systemPrompt = `You are a helpful assistant that summarizes customer inquiries for funeral home staff.

Create a brief, clear summary (2-3 sentences max) that captures:
1. What the customer is asking about or needs
2. Any specific details mentioned (dates, services, urgency)
3. The emotional tone/context if relevant

Be concise and professional. This summary helps staff quickly understand the inquiry.`;

    const userPrompt = `Summarize this customer inquiry:

From: ${submission.name}
Email: ${submission.email}
Subject: ${submission.subject}

Message:
${submission.message}`;

    const summary = await generateAIResponse(
      [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt },
      ],
      150
    );

    if (!summary) {
      return { success: false, reason: "Failed to generate summary" };
    }

    // Save the summary
    await ctx.runMutation(internal.admin.aiEmailDb.saveSummary, {
      id: args.contactSubmissionId,
      summary,
    });

    return { success: true, summary };
  },
});

// =============================================================================
// GENERATE DRAFT REPLY - AI-assisted reply drafting for admins
// =============================================================================

export const generateDraftReply = action({
  args: {
    contactSubmissionId: v.id("contactSubmissions"),
    additionalContext: v.optional(v.string()), // Admin can provide extra context
  },
  handler: async (ctx, args): Promise<{ success: boolean; draft?: string; reason?: string }> => {
    const submission: Doc<"contactSubmissions"> | null = await ctx.runQuery(
      internal.admin.emailDb.getSubmissionForEmail,
      { id: args.contactSubmissionId }
    );

    if (!submission) {
      return { success: false, reason: "Submission not found" };
    }

    // Search RAG for relevant business information
    const ragResults = await ctx.runAction(internal.agent.rag.search, {
      query: `${submission.subject} ${submission.message}`,
      limit: 5,
      minScore: 0.5,
    });

    const ragContext =
      ragResults.length > 0
        ? ragResults.map((r) => `[${r.category}]: ${r.text}`).join("\n\n")
        : "No specific business information available.";

    const systemPrompt = `You are a compassionate staff member at Madden's Funeral Home & Crematorium, Jamaica's trusted funeral service provider for over 70 years.

Draft a professional, warm email response to this customer inquiry. The response will be reviewed and edited by a human staff member before sending.

BUSINESS INFORMATION:
${ragContext}

GUIDELINES:
- Be compassionate and understanding
- Provide specific, helpful information based on available business data
- Keep the tone warm but professional
- Include relevant contact information when appropriate
- Format for easy editing by staff (they may want to add personal touches)
- Keep response to 2-4 paragraphs
- Include a warm sign-off (e.g., "Warm regards," or "With sympathy,")

IMPORTANT: Do NOT include a greeting like "Dear [name]" - the email system adds this automatically. Start directly with the response content.`;

    let userPrompt = `Draft a response to this customer inquiry:

From: ${submission.name}
Subject: ${submission.subject}

Message:
${submission.message}`;

    if (args.additionalContext) {
      userPrompt += `\n\nAdditional context from staff: ${args.additionalContext}`;
    }

    const draft = await generateAIResponse(
      [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt },
      ],
      600
    );

    if (!draft) {
      return { success: false, reason: "Failed to generate draft" };
    }

    return { success: true, draft };
  },
});
