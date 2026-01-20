"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface FallbackViewProps {
  imageSrc: string;
  alt: string;
  showMessage?: boolean;
}

export function FallbackView({
  imageSrc,
  alt,
  showMessage = true,
}: FallbackViewProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="relative w-full h-full flex flex-col items-center justify-center bg-muted/30"
    >
      <div className="relative w-full h-full">
        <Image
          src={imageSrc}
          alt={alt}
          fill
          className="object-contain p-8"
          priority
        />
      </div>
      {showMessage && (
        <div className="absolute bottom-4 left-4 right-4 text-center">
          <p className="text-sm text-muted-foreground bg-background/80 backdrop-blur-sm px-4 py-2 rounded-md">
            3D view is not available on this device. Showing product image.
          </p>
        </div>
      )}
    </motion.div>
  );
}
