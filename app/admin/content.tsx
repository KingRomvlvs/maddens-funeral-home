"use client";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { InboxIcon, MailIcon, CheckIcon } from "@/components/icons";
import Link from "next/link";

export default function AdminDashboard() {
  const stats = useQuery(api.admin.overview.getAdminStats);
  const recentActivity = useQuery(api.admin.overview.getRecentActivity);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome to the Madden&apos;s Funeral Home admin portal.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="New Messages"
          value={stats?.newContacts ?? 0}
          icon={<InboxIcon size={20} />}
          href="/admin/inbox?status=new"
          highlight
        />
        <StatCard
          title="Read"
          value={stats?.readContacts ?? 0}
          icon={<MailIcon size={20} />}
          href="/admin/inbox?status=read"
        />
        <StatCard
          title="Replied"
          value={stats?.repliedContacts ?? 0}
          icon={<CheckIcon size={20} />}
          href="/admin/inbox?status=replied"
        />
        <StatCard
          title="Emails Sent"
          value={stats?.emailsSent ?? 0}
          icon={<MailIcon size={20} />}
        />
      </div>

      {/* Recent Activity */}
      <div className="rounded-lg border">
        <div className="border-b px-6 py-4">
          <h2 className="font-semibold">Recent Activity</h2>
        </div>
        <div className="divide-y">
          {recentActivity?.length === 0 && (
            <div className="px-6 py-8 text-center text-muted-foreground">
              No recent activity
            </div>
          )}
          {recentActivity?.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between px-6 py-4"
            >
              <div>
                <p className="font-medium">{item.title}</p>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <span
                  className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${
                    item.status === "new"
                      ? "bg-funeral-gold/10 text-funeral-gold"
                      : item.status === "replied" || item.status === "sent"
                        ? "bg-green-500/10 text-green-600"
                        : "bg-muted text-muted-foreground"
                  }`}
                >
                  {item.status}
                </span>
                <span className="text-sm text-muted-foreground">
                  {formatRelativeTime(item.createdAt)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function StatCard({
  title,
  value,
  icon,
  href,
  highlight,
}: {
  title: string;
  value: number;
  icon: React.ReactNode;
  href?: string;
  highlight?: boolean;
}) {
  const content = (
    <div
      className={`rounded-lg border p-6 ${
        highlight && value > 0 ? "border-funeral-gold bg-funeral-gold/5" : ""
      } ${href ? "transition-colors hover:bg-muted/50" : ""}`}
    >
      <div className="flex items-center justify-between">
        <span className="text-muted-foreground">{icon}</span>
        <span
          className={`text-3xl font-semibold ${
            highlight && value > 0 ? "text-funeral-gold" : ""
          }`}
        >
          {value}
        </span>
      </div>
      <p className="mt-2 text-sm text-muted-foreground">{title}</p>
    </div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
}

function formatRelativeTime(timestamp: number): string {
  const diff = Date.now() - timestamp;
  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(diff / 3600000);
  const days = Math.floor(diff / 86400000);

  if (minutes < 1) return "just now";
  if (minutes < 60) return `${minutes}m ago`;
  if (hours < 24) return `${hours}h ago`;
  return `${days}d ago`;
}
