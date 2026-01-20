"use client";

import { OrbitControls } from "@react-three/drei";
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib";

interface CameraControlsProps {
  autoRotate?: boolean;
  autoRotateSpeed?: number;
  enableZoom?: boolean;
  enablePan?: boolean;
  minDistance?: number;
  maxDistance?: number;
  controlsRef?: React.RefObject<OrbitControlsImpl | null>;
}

export function CameraControls({
  autoRotate = false,
  autoRotateSpeed = 1,
  enableZoom = true,
  enablePan = false,
  minDistance = 1.5,
  maxDistance = 5,
  controlsRef,
}: CameraControlsProps) {
  return (
    <OrbitControls
      ref={controlsRef}
      enableDamping
      dampingFactor={0.05}
      minDistance={minDistance}
      maxDistance={maxDistance}
      minPolarAngle={Math.PI / 6}
      maxPolarAngle={Math.PI / 2 + 0.2}
      enablePan={enablePan}
      enableZoom={enableZoom}
      rotateSpeed={0.5}
      zoomSpeed={0.8}
      autoRotate={autoRotate}
      autoRotateSpeed={autoRotateSpeed}
      makeDefault
    />
  );
}
