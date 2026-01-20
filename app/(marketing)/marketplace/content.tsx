"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CategoryCard } from "@/components/marketplace";
import { PhoneIcon, ArrowRightIcon } from "@/components/icons";
import { categories } from "@/lib/marketplace";

export function MarketplaceContent() {
  return (
    <div className="py-12 lg:py-20">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="text-sm font-light tracking-[0.2em] uppercase text-funeral-gold mb-4 block">
            Our Selection
          </span>
          <h1 className="text-4xl sm:text-5xl font-light tracking-tight mb-6">
            Product Marketplace
          </h1>
          <p className="text-lg text-muted-foreground font-light leading-relaxed">
            Explore our collection of caskets and urns. View products in
            interactive 3D, customize finishes, and find the perfect tribute for
            your loved one.
          </p>
        </motion.div>
      </section>

      {/* 3D Feature Highlight */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-funeral-navy to-funeral-charcoal rounded-lg p-8 lg:p-12 text-white"
        >
          <div className="max-w-2xl">
            <span className="text-funeral-gold text-sm font-light tracking-[0.2em] uppercase mb-3 block">
              New Feature
            </span>
            <h2 className="text-2xl sm:text-3xl font-light mb-4">
              View Products in 3D
            </h2>
            <p className="text-white/80 font-light leading-relaxed mb-6">
              Our interactive 3D viewer allows you to examine each product from
              every angle. Rotate, zoom, and customize materials to see exactly
              how your selection will look.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-white/70">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-funeral-gold rounded-full" />
                <span>360° View</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-funeral-gold rounded-full" />
                <span>Material Customization</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-funeral-gold rounded-full" />
                <span>Interior Options</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2 className="text-2xl sm:text-3xl font-light tracking-tight mb-3">
            Browse by Category
          </h2>
          <p className="text-muted-foreground font-light">
            Select a category to view our full collection.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {categories.map((category, index) => (
            <CategoryCard key={category.id} category={category} index={index} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true }}
          className="bg-muted/30 rounded-lg p-8 lg:p-12 text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-light mb-4">
            Need Assistance?
          </h2>
          <p className="text-muted-foreground font-light max-w-xl mx-auto mb-8">
            Our caring staff is here to help you make the right choice. Contact
            us for personalized guidance and support.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:+18769520212">
              <Button className="bg-funeral-gold text-funeral-navy hover:bg-funeral-gold/90 rounded-md uppercase tracking-wider">
                <PhoneIcon size={18} />
                (876) 952-0212
              </Button>
            </a>
            <Link href="/contact">
              <Button
                variant="outline"
                className="rounded-md uppercase tracking-wider"
              >
                Contact Us
                <ArrowRightIcon size={18} />
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
