"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ProductGrid } from "@/components/marketplace";
import { PhoneIcon, ArrowLeftIcon } from "@/components/icons";
import { urnProducts } from "@/lib/marketplace";

export function UrnsCatalogContent() {
  return (
    <div className="py-12 lg:py-20">
      {/* Breadcrumb */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-8">
        <Link
          href="/marketplace"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeftIcon size={16} />
          <span>Back to Marketplace</span>
        </Link>
      </section>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="max-w-3xl"
        >
          <span className="text-sm font-light tracking-[0.2em] uppercase text-funeral-gold mb-4 block">
            Our Collection
          </span>
          <h1 className="text-4xl sm:text-5xl font-light tracking-tight mb-6">
            Urns
          </h1>
          <p className="text-lg text-muted-foreground font-light leading-relaxed">
            Our collection of memorial urns offers a variety of styles and
            materials to create a lasting tribute. View each urn in 3D and
            customize finishes to find the perfect memorial.
          </p>
        </motion.div>
      </section>

      {/* Product Grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-20">
        <ProductGrid products={urnProducts} />
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true }}
          className="bg-funeral-navy rounded-lg p-8 lg:p-12 text-center text-white"
        >
          <h2 className="text-2xl sm:text-3xl font-light mb-4">
            Need Assistance?
          </h2>
          <p className="text-white/80 font-light max-w-xl mx-auto mb-8">
            Our caring staff is here to help you find the perfect urn for your
            loved one. Contact us to discuss your options.
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
                className="border-white/30 bg-transparent text-white hover:bg-white/10 rounded-md uppercase tracking-wider"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
