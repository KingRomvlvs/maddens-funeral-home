"use client";

import * as React from "react";
import { Canvas } from "@react-three/fiber";
import { Preload } from "@react-three/drei";
import { getOptimalDPR } from "@/lib/marketplace/utils";

interface Canvas3DProps {
  children: React.ReactNode;
  className?: string;
  cameraPosition?: [number, number, number];
  fov?: number;
}

export function Canvas3D({
  children,
  className,
  cameraPosition = [0, 0.5, 2.5],
  fov = 45,
}: Canvas3DProps) {
  const dpr = getOptimalDPR();

  return (
    <Canvas
      className={className}
      camera={{
        position: cameraPosition,
        fov,
        near: 0.1,
        far: 100,
      }}
      dpr={dpr}
      gl={{
        antialias: true,
        powerPreference: "high-performance",
        alpha: true,
        preserveDrawingBuffer: true,
      }}
      shadows
      style={{ touchAction: "none" }}
    >
      {children}
      <Preload all />
    </Canvas>
  );
}
