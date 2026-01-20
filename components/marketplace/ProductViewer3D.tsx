"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Canvas3D,
  Environment3D,
  CameraControls,
  ProductModel,
  FallbackView,
  LoadingSpinner,
} from "./3d";
import { Button } from "@/components/ui/button";
import type { MaterialPreset, InteriorPreset, Product } from "@/lib/marketplace/types";
import { detectWebGLSupport, getModelScale, getCameraPosition } from "@/lib/marketplace/utils";

interface ProductViewer3DProps {
  product: Product;
  selectedMaterial: MaterialPreset;
  selectedInterior?: InteriorPreset;
  className?: string;
}

export function ProductViewer3D({
  product,
  selectedMaterial,
  selectedInterior,
  className = "",
}: ProductViewer3DProps) {
  const [webglSupported, setWebglSupported] = React.useState<boolean | null>(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    setWebglSupported(detectWebGLSupport());
    const timer = setTimeout(() => setIsLoading(false), 100);
    return () => clearTimeout(timer);
  }, []);

  const scale = getModelScale(product.category);
  const cameraPosition = getCameraPosition(product.category);

  if (isLoading || webglSupported === null) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={`relative w-full aspect-square bg-muted/20 rounded-lg overflow-hidden flex items-center justify-center ${className}`}
      >
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 border-3 border-funeral-gold border-t-transparent rounded-full animate-spin" />
          <p className="text-sm text-muted-foreground font-light">Loading...</p>
        </div>
      </motion.div>
    );
  }

  if (!webglSupported) {
    return (
      <div className={`relative w-full aspect-square rounded-lg overflow-hidden ${className}`}>
        <FallbackView imageSrc={product.fallbackImage} alt={product.name} />
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`relative w-full aspect-square bg-gradient-to-b from-muted/10 to-muted/30 rounded-lg overflow-hidden ${className}`}
    >
      <Canvas3D cameraPosition={cameraPosition}>
        <React.Suspense fallback={<LoadingSpinner />}>
          <Environment3D intensity={0.6}>
            <ProductModel
              modelPath={product.modelPath}
              material={selectedMaterial}
              interior={selectedInterior}
              scale={scale}
              category={product.category}
              isOpen={isOpen}
            />
          </Environment3D>
          <CameraControls
            autoRotate={!isOpen}
            autoRotateSpeed={0.5}
            minDistance={product.category === "caskets" ? 2 : 1.2}
            maxDistance={product.category === "caskets" ? 5 : 3}
          />
        </React.Suspense>
      </Canvas3D>

      {/* Open/Close button for caskets */}
      {product.category === "caskets" && (
        <div className="absolute top-4 right-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsOpen(!isOpen)}
            className="bg-background/80 backdrop-blur-sm hover:bg-background/90 rounded-md text-xs uppercase tracking-wider"
          >
            {isOpen ? "Close Lid" : "Open Lid"}
          </Button>
        </div>
      )}

      {/* Controls hint */}
      <div className="absolute bottom-4 left-4 right-4 flex justify-center pointer-events-none">
        <div className="bg-background/80 backdrop-blur-sm px-4 py-2 rounded-md">
          <p className="text-xs text-muted-foreground text-center">
            Drag to rotate &bull; Scroll to zoom
          </p>
        </div>
      </div>
    </motion.div>
  );
}
