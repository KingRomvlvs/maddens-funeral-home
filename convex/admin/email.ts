"use node";

import { v } from "convex/values";
import { action } from "../_generated/server";
import { internal } from "../_generated/api";
import { Doc } from "../_generated/dataModel";

/**
 * Send a manual email reply.
 */
export const sendManualReply = action({
  args: {
    contactSubmissionId: v.id("contactSubmissions"),
    subject: v.string(),
    bodyHtml: v.string(),
    bodyText: v.optional(v.string()),
    senderName: v.string(), // Admin name who is sending
  },
  handler: async (ctx, args): Promise<{ success: boolean; resendId?: string }> => {
    // Get the submission
    const submission: Doc<"contactSubmissions"> | null = await ctx.runQuery(
      internal.admin.emailDb.getSubmissionForEmail,
      { id: args.contactSubmissionId }
    );

    if (!submission) {
      throw new Error("Contact submission not found");
    }

    // Send via Resend
    const resendKey = process.env.RESEND_API_KEY;
    if (!resendKey) {
      throw new Error("Resend API key not configured");
    }

    try {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Madden's Funeral Home <noreply@maddensfuneralhome.com>",
          to: [submission.email],
          subject: args.subject,
          html: args.bodyHtml,
          text: args.bodyText,
          reply_to: "info@maddensfuneralhome.com",
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Resend API error:", errorText);
        throw new Error(`Failed to send email: ${errorText}`);
      }

      const data: { id: string } = await response.json();

      // Log the email
      await ctx.runMutation(internal.admin.emailDb.logEmail, {
        contactSubmissionId: args.contactSubmissionId,
        recipientEmail: submission.email,
        recipientName: submission.name,
        subject: args.subject,
        bodyHtml: args.bodyHtml,
        bodyText: args.bodyText,
        emailType: "manual_reply",
        resendId: data.id,
        resendStatus: "sent",
        sentByName: args.senderName,
      });

      // Update submission status
      await ctx.runMutation(internal.admin.emailDb.updateSubmissionStatus, {
        id: args.contactSubmissionId,
        status: "replied",
        respondedBy: args.senderName,
      });

      return { success: true, resendId: data.id };
    } catch (error) {
      console.error("Error sending email:", error);
      throw error;
    }
  },
});

/**
 * Send auto-reply on form submission.
 */
export const sendAutoReply = action({
  args: {
    contactSubmissionId: v.id("contactSubmissions"),
  },
  handler: async (ctx, args): Promise<{ success: boolean; reason?: string }> => {
    const submission: Doc<"contactSubmissions"> | null = await ctx.runQuery(
      internal.admin.emailDb.getSubmissionForEmail,
      { id: args.contactSubmissionId }
    );

    if (!submission) {
      return { success: false, reason: "Submission not found" };
    }

    if (submission.autoReplySent) {
      return { success: false, reason: "Auto-reply already sent" };
    }

    const resendKey = process.env.RESEND_API_KEY;
    if (!resendKey) {
      console.log("Resend API key not configured, skipping auto-reply");
      return { success: false, reason: "Email service not configured" };
    }

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://maddensfuneralhome.com";

    const bodyHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #374151; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="text-align: center; margin-bottom: 32px;">
          <img src="${siteUrl}/images/mfh-logo.png" alt="Madden's Funeral Home" style="height: 60px;">
        </div>

        <h2 style="color: #1f2937;">Thank you for reaching out, ${submission.name}</h2>

        <p>We have received your message and a member of our team will respond to you as soon as possible.</p>

        <div style="background: #f3f4f6; border-radius: 8px; padding: 16px; margin: 20px 0;">
          <strong>Your message:</strong>
          <p style="white-space: pre-wrap; margin-top: 8px;">${submission.message}</p>
        </div>

        <p>If you need immediate assistance, please don't hesitate to call us:</p>
        <ul style="list-style: none; padding: 0;">
          <li style="margin-bottom: 8px;"><strong>Montego Bay:</strong> (876) 952-0212</li>
          <li style="margin-bottom: 8px;"><strong>Kingston:</strong> (876) 926-2079</li>
          <li><strong>US:</strong> (954) 324-9550</li>
        </ul>

        <p style="margin-top: 24px; font-size: 14px; color: #6b7280;">
          We are available 24 hours a day, 7 days a week.
        </p>

        <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 32px 0;">

        <p style="font-size: 14px; color: #6b7280;">
          <strong>Madden's Funeral Home & Crematorium</strong><br>
          Serving Jamaican Families for Over 70 Years<br>
          <a href="${siteUrl}" style="color: #b8860b;">www.maddensfuneralhome.com</a>
        </p>
      </body>
      </html>
    `;

    const bodyText = `
Thank you for reaching out, ${submission.name}

We have received your message and a member of our team will respond to you as soon as possible.

Your message:
${submission.message}

If you need immediate assistance, please call us:
- Montego Bay: (876) 952-0212
- Kingston: (876) 926-2079
- US: (954) 324-9550

We are available 24 hours a day, 7 days a week.

---
Madden's Funeral Home & Crematorium
Serving Jamaican Families for Over 70 Years
${siteUrl}
    `;

    try {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Madden's Funeral Home <noreply@maddensfuneralhome.com>",
          to: [submission.email],
          subject: `Thank you for contacting Madden's Funeral Home`,
          html: bodyHtml,
          text: bodyText,
          reply_to: "info@maddensfuneralhome.com",
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
        subject: "Thank you for contacting Madden's Funeral Home",
        bodyHtml,
        bodyText,
        emailType: "auto_reply",
        resendId: data.id,
        resendStatus: "sent",
        sentByName: "Madden's Funeral Home (Automated)",
      });

      // Mark auto-reply as sent
      await ctx.runMutation(internal.admin.emailDb.markAutoReplySent, {
        id: args.contactSubmissionId,
      });

      return { success: true };
    } catch (error) {
      console.error("Error sending auto-reply:", error);
      return { success: false, reason: String(error) };
    }
  },
});
