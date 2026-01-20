"use client";

import { useQuery, useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  InboxIcon,
  MailIcon,
  CheckIcon,
  ArchiveIcon,
  ViewIcon,
} from "@/components/icons";
import { cn } from "@/lib/utils";
import { Id } from "@/convex/_generated/dataModel";

type StatusFilter = "new" | "read" | "replied" | "archived" | undefined;

export default function InboxContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const statusParam = searchParams.get("status") as StatusFilter;
  const [selectedStatus, setSelectedStatus] = useState<StatusFilter>(statusParam);

  const submissions = useQuery(api.admin.inbox.list, {
    status: selectedStatus,
  });
  const counts = useQuery(api.admin.inbox.getCounts);
  const markAsRead = useMutation(api.admin.inbox.markAsRead);

  const handleStatusChange = (status: StatusFilter) => {
    setSelectedStatus(status);
    if (status) {
      router.push(`/admin/inbox?status=${status}`);
    } else {
      router.push("/admin/inbox");
    }
  };

  const handleViewMessage = async (id: Id<"contactSubmissions">, status: string) => {
    if (status === "new") {
      await markAsRead({ id });
    }
    router.push(`/admin/inbox/${id}`);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold">Inbox</h1>
        <p className="text-muted-foreground">
          View and respond to contact form submissions.
        </p>
      </div>

      {/* Status Tabs */}
      <div className="flex flex-wrap gap-2">
        <StatusTab
          label="All"
          count={counts?.total ?? 0}
          active={!selectedStatus}
          onClick={() => handleStatusChange(undefined)}
        />
        <StatusTab
          label="New"
          count={counts?.new ?? 0}
          active={selectedStatus === "new"}
          onClick={() => handleStatusChange("new")}
          highlight
          icon={<InboxIcon size={14} />}
        />
        <StatusTab
          label="Read"
          count={counts?.read ?? 0}
          active={selectedStatus === "read"}
          onClick={() => handleStatusChange("read")}
          icon={<MailIcon size={14} />}
        />
        <StatusTab
          label="Replied"
          count={counts?.replied ?? 0}
          active={selectedStatus === "replied"}
          onClick={() => handleStatusChange("replied")}
          icon={<CheckIcon size={14} />}
        />
        <StatusTab
          label="Archived"
          count={counts?.archived ?? 0}
          active={selectedStatus === "archived"}
          onClick={() => handleStatusChange("archived")}
          icon={<ArchiveIcon size={14} />}
        />
      </div>

      {/* Messages List */}
      <div className="rounded-lg border">
        {submissions?.length === 0 && (
          <div className="px-6 py-12 text-center text-muted-foreground">
            <InboxIcon size={48} className="mx-auto mb-4 opacity-50" />
            <p>No messages found</p>
          </div>
        )}
        <div className="divide-y">
          {submissions?.map((submission) => (
            <div
              key={submission._id}
              className={cn(
                "flex items-center justify-between px-6 py-4 transition-colors hover:bg-muted/50 cursor-pointer",
                submission.status === "new" && "bg-funeral-gold/5"
              )}
              onClick={() => handleViewMessage(submission._id, submission.status)}
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3">
                  <span
                    className={cn(
                      "font-medium",
                      submission.status === "new" && "text-funeral-gold"
                    )}
                  >
                    {submission.name}
                  </span>
                  <span
                    className={cn(
                      "inline-flex rounded-full px-2 py-0.5 text-xs font-medium",
                      submission.status === "new"
                        ? "bg-funeral-gold/10 text-funeral-gold"
                        : submission.status === "replied"
                          ? "bg-green-500/10 text-green-600"
                          : "bg-muted text-muted-foreground"
                    )}
                  >
                    {submission.status}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mt-0.5">
                  {submission.subject}
                </p>
                <p className="text-sm text-muted-foreground truncate mt-1 max-w-md">
                  {submission.message}
                </p>
              </div>
              <div className="flex items-center gap-4 ml-4">
                <span className="text-sm text-muted-foreground whitespace-nowrap">
                  {formatDate(submission.createdAt)}
                </span>
                <Button variant="ghost" size="icon" className="shrink-0">
                  <ViewIcon size={18} />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function StatusTab({
  label,
  count,
  active,
  onClick,
  highlight,
  icon,
}: {
  label: string;
  count: number;
  active: boolean;
  onClick: () => void;
  highlight?: boolean;
  icon?: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-sm font-medium transition-colors",
        active
          ? "bg-foreground text-background"
          : "bg-muted text-muted-foreground hover:bg-muted/80",
        highlight && !active && count > 0 && "text-funeral-gold"
      )}
    >
      {icon}
      {label}
      <span
        className={cn(
          "rounded-full px-1.5 py-0.5 text-xs",
          active ? "bg-background/20" : "bg-background"
        )}
      >
        {count}
      </span>
    </button>
  );
}

function formatDate(timestamp: number): string {
  const date = new Date(timestamp);
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const days = Math.floor(diff / 86400000);

  if (days === 0) {
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
    });
  }
  if (days === 1) {
    return "Yesterday";
  }
  if (days < 7) {
    return date.toLocaleDateString("en-US", { weekday: "short" });
  }
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}
