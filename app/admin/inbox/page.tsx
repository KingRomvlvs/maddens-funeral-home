import { Suspense } from "react";
import InboxContent from "./content";

export const dynamic = "force-dynamic";

function InboxFallback() {
  return (
    <div className="flex items-center justify-center py-12">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-funeral-gold border-t-transparent" />
    </div>
  );
}

export default function InboxPage() {
  return (
    <Suspense fallback={<InboxFallback />}>
      <InboxContent />
    </Suspense>
  );
}
