"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { CategoryInfo } from "@/lib/marketplace/types";
import { ArrowRightIcon } from "@/components/icons";

interface CategoryCardProps {
  category: CategoryInfo;
  index?: number;
}

export function CategoryCard({ category, index = 0 }: CategoryCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.4, 0, 0.2, 1],
      }}
      viewport={{ once: true }}
    >
      <Link href={category.href} className="group block">
        <div className="relative aspect-[3/2] rounded-lg overflow-hidden bg-muted/30 mb-5">
          <Image
            src={category.image}
            alt={category.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

          {/* Category name overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h2 className="text-2xl sm:text-3xl font-light text-white tracking-wide mb-2">
              {category.name}
            </h2>
            <div className="flex items-center gap-2 text-white/80 text-sm font-light group-hover:text-funeral-gold transition-colors duration-300">
              <span>Explore Collection</span>
              <ArrowRightIcon
                size={16}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        <p className="text-muted-foreground font-light leading-relaxed">
          {category.description}
        </p>
      </Link>
    </motion.article>
  );
}
