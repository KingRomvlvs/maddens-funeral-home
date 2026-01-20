"use client";

import { Html } from "@react-three/drei";

interface LoadingSpinnerProps {
  text?: string;
}

export function LoadingSpinner({ text = "Loading 3D model..." }: LoadingSpinnerProps) {
  return (
    <Html center>
      <div className="flex flex-col items-center gap-3">
        <div className="w-10 h-10 border-3 border-funeral-gold border-t-transparent rounded-full animate-spin" />
        <p className="text-sm text-muted-foreground font-light">{text}</p>
      </div>
    </Html>
  );
}
