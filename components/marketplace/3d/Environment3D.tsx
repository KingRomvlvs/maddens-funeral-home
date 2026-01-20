"use client";

import { Stage } from "@react-three/drei";

interface Environment3DProps {
  children: React.ReactNode;
  intensity?: number;
}

export function Environment3D({
  children,
  intensity = 0.5,
}: Environment3DProps) {
  return (
    <Stage
      intensity={intensity}
      environment="city"
      shadows={{
        type: "accumulative",
        color: "#301934",
        opacity: 0.8,
        frames: 200,
      }}
      adjustCamera={false}
    >
      {children}
    </Stage>
  );
}
