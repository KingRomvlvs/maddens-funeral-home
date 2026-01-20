"use client";

import { useQuery, useMutation, useAction } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useParams, useRouter } from "next/navigation";
import { useAuth } from "@/components/providers/AuthProvider";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowLeftIcon,
  MailIcon,
  PhoneIcon,
  ClockIcon,
  CheckIcon,
  ArchiveIcon,
  SendIcon,
  DeleteIcon,
  SparklesIcon,
  SummaryIcon,
  HistoryIcon,
  AiEditIcon,
} from "@/components/icons";
import { Id } from "@/convex/_generated/dataModel";
import { cn } from "@/lib/utils";

export default function MessageDetailContent() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as Id<"contactSubmissions">;
  const { user } = useAuth();

  const submission = useQuery(api.admin.inbox.get, { id });
  const conversationHistory = useQuery(
    api.admin.aiEmailDb.getConversationHistory,
    submission ? { email: submission.email } : "skip"
  );
  const archive = useMutation(api.admin.inbox.archive);
  const remove = useMutation(api.admin.inbox.remove);
  const sendEmail = useAction(api.admin.email.sendManualReply);
  const generateSummary = useAction(api.admin.aiEmail.generateSummary);
  const generateDraftReply = useAction(api.admin.aiEmail.generateDraftReply);

  const [showReplyForm, setShowReplyForm] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [replySubject, setReplySubject] = useState("");
  const [replyMessage, setReplyMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [generatingSummary, setGeneratingSummary] = useState(false);
  const [generatingDraft, setGeneratingDraft] = useState(false);
  const [summary, setSummary] = useState<string | null>(null);

  if (!submission) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-funeral-gold border-t-transparent" />
      </div>
    );
  }

  const handleGenerateSummary = async () => {
    if (submission.aiSummary) {
      setSummary(submission.aiSummary);
      return;
    }
    setGeneratingSummary(true);
    try {
      const result = await generateSummary({ contactSubmissionId: id });
      if (result.success && result.summary) {
        setSummary(result.summary);
      } else {
        alert(result.reason || "Failed to generate summary");
      }
    } catch (error) {
      console.error("Failed to generate summary:", error);
      alert("Failed to generate summary. Please try again.");
    } finally {
      setGeneratingSummary(false);
    }
  };

  const handleGenerateDraft = async () => {
    setGeneratingDraft(true);
    try {
      const result = await generateDraftReply({ contactSubmissionId: id });
      if (result.success && result.draft) {
        setReplySubject(`Re: ${submission.subject}`);
        setReplyMessage(result.draft);
        setShowReplyForm(true);
      } else {
        alert(result.reason || "Failed to generate draft");
      }
    } catch (error) {
      console.error("Failed to generate draft:", error);
      alert("Failed to generate draft. Please try again.");
    } finally {
      setGeneratingDraft(false);
    }
  };

  const handleSendReply = async () => {
    if (!replySubject.trim() || !replyMessage.trim()) return;

    setSending(true);
    try {
      const bodyHtml = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #374151; max-width: 600px; margin: 0 auto; padding: 20px;">
          <p>Dear ${submission.name},</p>
          <div style="white-space: pre-wrap;">${replyMessage}</div>
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 32px 0;">
          <p style="font-size: 14px; color: #6b7280;">
            <strong>Madden's Funeral Home & Crematorium</strong><br>
            Serving Jamaican Families for Over 70 Years<br>
            <a href="https://876maddens.com" style="color: #b8860b;">www.876maddens.com</a>
          </p>
        </body>
        </html>
      `;

      await sendEmail({
        contactSubmissionId: id,
        subject: replySubject,
        bodyHtml,
        bodyText: `Dear ${submission.name},\n\n${replyMessage}\n\n---\nMadden's Funeral Home & Crematorium\nServing Jamaican Families for Over 70 Years`,
        senderName: user?.name || "Admin",
      });

      setShowReplyForm(false);
      setReplySubject("");
      setReplyMessage("");
    } catch (error) {
      console.error("Failed to send reply:", error);
      alert("Failed to send reply. Please try again.");
    } finally {
      setSending(false);
    }
  };

  const handleArchive = async () => {
    await archive({ id });
    router.push("/admin/inbox");
  };

  const handleDelete = async () => {
    if (!confirm("Are you sure you want to delete this message?")) return;
    await remove({ id });
    router.push("/admin/inbox");
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={() => router.back()}>
          <ArrowLeftIcon size={20} />
        </Button>
        <div className="flex-1">
          <h1 className="text-xl font-semibold">{submission.subject}</h1>
          <p className="text-sm text-muted-foreground">
            From {submission.name}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowHistory(!showHistory)}
            className={cn(showHistory && "bg-funeral-gold/10")}
          >
            <HistoryIcon size={16} />
            History
            {conversationHistory && conversationHistory.totalInteractions > 1 && (
              <span className="ml-1 rounded-full bg-funeral-gold/20 px-1.5 text-xs">
                {conversationHistory.totalInteractions}
              </span>
            )}
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              setReplySubject(`Re: ${submission.subject}`);
              setShowReplyForm(true);
            }}
          >
            <MailIcon size={16} />
            Reply
          </Button>
          <Button variant="outline" size="sm" onClick={handleArchive}>
            <ArchiveIcon size={16} />
            Archive
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="text-destructive hover:text-destructive"
            onClick={handleDelete}
          >
            <DeleteIcon size={16} />
          </Button>
        </div>
      </div>

      {/* Conversation History Panel */}
      {showHistory && conversationHistory && (
        <div className="rounded-lg border bg-muted/30 p-4">
          <h3 className="font-semibold mb-3 flex items-center gap-2">
            <HistoryIcon size={18} />
            Conversation History with {submission.email}
          </h3>
          <div className="space-y-3 max-h-64 overflow-y-auto">
            {conversationHistory.timeline.length === 0 ? (
              <p className="text-sm text-muted-foreground">No previous interactions</p>
            ) : (
              conversationHistory.timeline.map((item, index) => (
                <div
                  key={index}
                  className={cn(
                    "rounded-md p-3 text-sm",
                    item.type === "submission"
                      ? "bg-background border"
                      : "bg-funeral-gold/10 border border-funeral-gold/20"
                  )}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-medium">
                      {item.type === "submission" ? "Incoming Message" : "Sent Email"}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {formatDateTime(item.timestamp)}
                    </span>
                  </div>
                  <p className="text-muted-foreground truncate">
                    {item.type === "submission"
                      ? item.data.subject
                      : item.data.subject}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>
      )}

      {/* Message Details */}
      <div className="rounded-lg border">
        <div className="border-b px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-funeral-gold/10 text-funeral-gold font-semibold">
                {submission.name.charAt(0).toUpperCase()}
              </div>
              <div>
                <p className="font-medium">{submission.name}</p>
                <p className="text-sm text-muted-foreground">
                  {submission.email}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span
                className={`inline-flex rounded-full px-2 py-0.5 text-xs font-medium ${
                  submission.status === "new"
                    ? "bg-funeral-gold/10 text-funeral-gold"
                    : submission.status === "replied"
                      ? "bg-green-500/10 text-green-600"
                      : "bg-muted"
                }`}
              >
                {submission.status}
              </span>
              {submission.aiReplySent && (
                <span className="inline-flex items-center gap-1 rounded-full bg-purple-500/10 px-2 py-0.5 text-xs font-medium text-purple-600">
                  <SparklesIcon size={12} />
                  AI Replied
                </span>
              )}
              <span className="flex items-center gap-1">
                <ClockIcon size={14} />
                {formatDateTime(submission.createdAt)}
              </span>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-b px-6 py-4 bg-muted/30">
          <div className="flex flex-wrap gap-6 text-sm">
            <div className="flex items-center gap-2">
              <MailIcon size={14} className="text-muted-foreground" />
              <a
                href={`mailto:${submission.email}`}
                className="text-foreground hover:text-funeral-gold"
              >
                {submission.email}
              </a>
            </div>
            {submission.phone && (
              <div className="flex items-center gap-2">
                <PhoneIcon size={14} className="text-muted-foreground" />
                <a
                  href={`tel:${submission.phone}`}
                  className="text-foreground hover:text-funeral-gold"
                >
                  {submission.phone}
                </a>
              </div>
            )}
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">Subject:</span>
              <span className="font-medium">{submission.subject}</span>
            </div>
          </div>
        </div>

        {/* AI Summary Section */}
        <div className="border-b px-6 py-4 bg-purple-50/50 dark:bg-purple-950/20">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <SummaryIcon size={16} className="text-purple-600" />
              <span className="font-medium text-sm">AI Summary</span>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={handleGenerateSummary}
              disabled={generatingSummary}
              className="text-purple-600 border-purple-200 hover:bg-purple-50"
            >
              <SparklesIcon size={14} />
              {generatingSummary ? "Generating..." : submission.aiSummary || summary ? "View" : "Generate"}
            </Button>
          </div>
          {(summary || submission.aiSummary) && (
            <p className="mt-3 text-sm text-muted-foreground">
              {summary || submission.aiSummary}
            </p>
          )}
        </div>

        {/* Message Content */}
        <div className="px-6 py-6">
          <p className="whitespace-pre-wrap">{submission.message}</p>
        </div>

        {/* AI Response (if sent) */}
        {submission.aiReplyContent && (
          <div className="border-t px-6 py-4 bg-purple-50/50 dark:bg-purple-950/20">
            <div className="flex items-center gap-2 mb-3">
              <SparklesIcon size={16} className="text-purple-600" />
              <span className="font-medium text-sm">AI Response Sent</span>
              {submission.aiReplySentAt && (
                <span className="text-xs text-muted-foreground">
                  {formatDateTime(submission.aiReplySentAt)}
                </span>
              )}
            </div>
            <p className="text-sm text-muted-foreground whitespace-pre-wrap">
              {submission.aiReplyContent}
            </p>
          </div>
        )}

        {/* Response Info */}
        {submission.respondedAt && (
          <div className="border-t px-6 py-4 bg-green-50 dark:bg-green-950/20">
            <p className="text-sm text-green-700 dark:text-green-400 flex items-center gap-2">
              <CheckIcon size={14} />
              Replied by {submission.respondedBy} on{" "}
              {formatDateTime(submission.respondedAt)}
            </p>
          </div>
        )}
      </div>

      {/* Reply Form */}
      {showReplyForm && (
        <div className="rounded-lg border">
          <div className="border-b px-6 py-4 flex items-center justify-between">
            <h2 className="font-semibold">Send Reply</h2>
            <Button
              variant="outline"
              size="sm"
              onClick={handleGenerateDraft}
              disabled={generatingDraft}
              className="text-purple-600 border-purple-200 hover:bg-purple-50"
            >
              <AiEditIcon size={14} />
              {generatingDraft ? "Generating..." : "AI Draft"}
            </Button>
          </div>
          <div className="p-6 space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Subject</label>
              <input
                type="text"
                value={replySubject}
                onChange={(e) => setReplySubject(e.target.value)}
                className="w-full px-4 py-2 rounded-md border bg-background"
                placeholder="Email subject"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                value={replyMessage}
                onChange={(e) => setReplyMessage(e.target.value)}
                rows={8}
                className="w-full px-4 py-2 rounded-md border bg-background resize-none"
                placeholder="Type your reply..."
              />
            </div>
            <div className="flex items-center gap-3">
              <Button onClick={handleSendReply} disabled={sending}>
                <SendIcon size={16} />
                {sending ? "Sending..." : "Send Reply"}
              </Button>
              <Button
                variant="outline"
                onClick={() => setShowReplyForm(false)}
                disabled={sending}
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function formatDateTime(timestamp: number): string {
  return new Date(timestamp).toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}
