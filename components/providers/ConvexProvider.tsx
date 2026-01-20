"use client";

import { ConvexProvider as ConvexReactProvider, ConvexReactClient } from "convex/react";
import { ReactNode, useMemo } from "react";

export function ConvexProvider({ children }: { children: ReactNode }) {
  const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL;

  const client = useMemo(() => {
    if (!convexUrl) return null;
    return new ConvexReactClient(convexUrl);
  }, [convexUrl]);

  // If no Convex URL, just render children without Convex
  if (!client) {
    return <>{children}</>;
  }

  return <ConvexReactProvider client={client}>{children}</ConvexReactProvider>;
}
