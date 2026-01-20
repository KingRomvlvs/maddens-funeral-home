"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Product } from "@/lib/marketplace/types";
import { ArrowRightIcon } from "@/components/icons";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const href = `/marketplace/${product.category}/${product.slug}`;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.4, 0, 0.2, 1],
      }}
      viewport={{ once: true }}
    >
      <Link href={href} className="group block">
        <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-muted/30 mb-4">
          <Image
            src={product.fallbackImage}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* View 3D badge */}
          <div className="absolute top-3 right-3 bg-funeral-gold text-funeral-navy text-xs font-medium px-2 py-1 rounded-md">
            View in 3D
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-light tracking-wide group-hover:text-funeral-gold transition-colors duration-300">
              {product.name}
            </h3>
            <ArrowRightIcon
              size={18}
              className="text-muted-foreground group-hover:text-funeral-gold group-hover:translate-x-1 transition-all duration-300"
            />
          </div>
          <p className="text-sm text-muted-foreground font-light line-clamp-2">
            {product.description}
          </p>
          <p className="text-sm text-funeral-gold font-light">
            {product.priceRange}
          </p>
        </div>
      </Link>
    </motion.article>
  );
}
