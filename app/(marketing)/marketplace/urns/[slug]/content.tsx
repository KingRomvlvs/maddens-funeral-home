"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ProductViewer3D, ProductControls } from "@/components/marketplace";
import { PhoneIcon, ArrowLeftIcon, ArrowRightIcon } from "@/components/icons";
import type { Product, MaterialPreset } from "@/lib/marketplace/types";
import { getMaterialById } from "@/lib/marketplace";

interface UrnDetailContentProps {
  product: Product;
}

export function UrnDetailContent({ product }: UrnDetailContentProps) {
  const [selectedMaterial, setSelectedMaterial] = React.useState<MaterialPreset>(
    getMaterialById(product.defaultMaterialId) || product.materials[0]
  );

  return (
    <div className="py-12 lg:py-20">
      {/* Breadcrumb */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-8">
        <Link
          href="/marketplace/urns"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeftIcon size={16} />
          <span>Back to Urns</span>
        </Link>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* 3D Viewer */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            <ProductViewer3D
              product={product}
              selectedMaterial={selectedMaterial}
            />
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
            className="space-y-6"
          >
            <div>
              <span className="text-sm font-light tracking-[0.2em] uppercase text-funeral-gold mb-2 block">
                {product.subcategory} Urn
              </span>
              <h1 className="text-3xl sm:text-4xl font-light tracking-tight mb-4">
                {product.name}
              </h1>
              <p className="text-muted-foreground font-light leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Price */}
            <div className="py-4 border-y border-border">
              <p className="text-lg text-funeral-gold font-light">
                {product.priceRange}
              </p>
            </div>

            {/* Material Controls */}
            <ProductControls
              materials={product.materials}
              selectedMaterial={selectedMaterial}
              onMaterialChange={setSelectedMaterial}
            />

            {/* Features */}
            <div>
              <h3 className="text-sm font-medium tracking-wide uppercase text-muted-foreground mb-3">
                Features
              </h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <span className="w-1.5 h-1.5 bg-funeral-gold rounded-full mt-2 shrink-0" />
                    <span className="text-muted-foreground font-light">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Dimensions */}
            {product.dimensions && (
              <div>
                <h3 className="text-sm font-medium tracking-wide uppercase text-muted-foreground mb-3">
                  Dimensions
                </h3>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground font-light">Diameter</p>
                    <p className="font-light">{product.dimensions.width}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground font-light">Height</p>
                    <p className="font-light">{product.dimensions.height}</p>
                  </div>
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="pt-4 space-y-3">
              <a href="tel:+18769520212" className="block">
                <Button className="w-full bg-funeral-gold text-funeral-navy hover:bg-funeral-gold/90 rounded-md uppercase tracking-wider">
                  <PhoneIcon size={18} />
                  Call to Inquire
                </Button>
              </a>
              <Link href="/contact" className="block">
                <Button
                  variant="outline"
                  className="w-full rounded-md uppercase tracking-wider"
                >
                  Contact Us
                  <ArrowRightIcon size={18} />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
