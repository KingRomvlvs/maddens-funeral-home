"use client";

import * as React from "react";
import { motion } from "framer-motion";
import type { MaterialPreset, InteriorPreset } from "@/lib/marketplace/types";
import { cn } from "@/lib/utils";

interface ProductControlsProps {
  materials: MaterialPreset[];
  interiors?: InteriorPreset[];
  selectedMaterial: MaterialPreset;
  selectedInterior?: InteriorPreset;
  onMaterialChange: (material: MaterialPreset) => void;
  onInteriorChange?: (interior: InteriorPreset) => void;
  className?: string;
}

export function ProductControls({
  materials,
  interiors,
  selectedMaterial,
  selectedInterior,
  onMaterialChange,
  onInteriorChange,
  className = "",
}: ProductControlsProps) {
  return (
    <div className={cn("space-y-6", className)}>
      {/* Material Selection */}
      <div>
        <h3 className="text-sm font-medium tracking-wide uppercase text-muted-foreground mb-3">
          Finish
        </h3>
        <div className="flex flex-wrap gap-3">
          {materials.map((material) => (
            <MaterialSwatch
              key={material.id}
              material={material}
              isSelected={selectedMaterial.id === material.id}
              onClick={() => onMaterialChange(material)}
            />
          ))}
        </div>
      </div>

      {/* Interior Selection (for caskets) */}
      {interiors && interiors.length > 0 && onInteriorChange && (
        <div>
          <h3 className="text-sm font-medium tracking-wide uppercase text-muted-foreground mb-3">
            Interior
          </h3>
          <div className="flex flex-wrap gap-3">
            {interiors.map((interior) => (
              <InteriorSwatch
                key={interior.id}
                interior={interior}
                isSelected={selectedInterior?.id === interior.id}
                onClick={() => onInteriorChange(interior)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

interface MaterialSwatchProps {
  material: MaterialPreset;
  isSelected: boolean;
  onClick: () => void;
}

function MaterialSwatch({ material, isSelected, onClick }: MaterialSwatchProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={cn(
        "relative flex flex-col items-center gap-1.5 p-2 rounded-md transition-all duration-300",
        isSelected
          ? "bg-funeral-navy/10 ring-2 ring-funeral-gold"
          : "hover:bg-muted/50"
      )}
      aria-label={`Select ${material.name} finish`}
      aria-pressed={isSelected}
    >
      <div
        className={cn(
          "w-10 h-10 rounded-full border-2 shadow-inner",
          isSelected ? "border-funeral-gold" : "border-border"
        )}
        style={{
          backgroundColor: material.color,
          backgroundImage:
            material.metalness > 0.5
              ? `linear-gradient(135deg, ${material.color} 0%, rgba(255,255,255,0.3) 50%, ${material.color} 100%)`
              : undefined,
        }}
      />
      <span className="text-xs font-light text-center leading-tight">
        {material.name}
      </span>
    </motion.button>
  );
}

interface InteriorSwatchProps {
  interior: InteriorPreset;
  isSelected: boolean;
  onClick: () => void;
}

function InteriorSwatch({ interior, isSelected, onClick }: InteriorSwatchProps) {
  const fabricPattern = React.useMemo(() => {
    switch (interior.fabricType) {
      case "velvet":
        return "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.1) 0%, transparent 50%)";
      case "satin":
        return "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, transparent 50%, rgba(255,255,255,0.1) 100%)";
      case "crepe":
        return "repeating-linear-gradient(90deg, transparent 0px, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)";
      default:
        return undefined;
    }
  }, [interior.fabricType]);

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={cn(
        "relative flex flex-col items-center gap-1.5 p-2 rounded-md transition-all duration-300",
        isSelected
          ? "bg-funeral-navy/10 ring-2 ring-funeral-gold"
          : "hover:bg-muted/50"
      )}
      aria-label={`Select ${interior.name} interior`}
      aria-pressed={isSelected}
    >
      <div
        className={cn(
          "w-10 h-10 rounded-full border-2 shadow-inner",
          isSelected ? "border-funeral-gold" : "border-border"
        )}
        style={{
          backgroundColor: interior.color,
          backgroundImage: fabricPattern,
        }}
      />
      <span className="text-xs font-light text-center leading-tight">
        {interior.name}
      </span>
    </motion.button>
  );
}
