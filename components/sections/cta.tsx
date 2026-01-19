"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { PhoneIcon, ArrowRightIcon } from "@/components/icons";

export function CTASection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true }}
          className="bg-funeral-navy rounded-lg p-8 lg:p-16 text-center text-white"
        >
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight mb-4">
            We&apos;re Here When You Need Us
          </h2>
          <p className="text-white/80 font-light max-w-2xl mx-auto mb-8">
            Our caring staff is available 24 hours a day, 7 days a week to
            assist you. Please don&apos;t hesitate to reach out.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+18769520212">
              <Button
                size="lg"
                className="bg-funeral-gold text-funeral-navy hover:bg-funeral-gold/90 rounded-md uppercase tracking-wider"
              >
                <PhoneIcon size={18} />
                Call Now: (876) 952-0212
              </Button>
            </a>
            <Link href="/contact">
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 rounded-md uppercase tracking-wider"
              >
                Contact Us Online
                <ArrowRightIcon size={18} />
              </Button>
            </Link>
          </div>

          {/* Locations */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-sm text-white/60 mb-4">Serving all of Jamaica</p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-white/80">
              <span>Kingston</span>
              <span className="text-white/40">|</span>
              <span>Montego Bay</span>
              <span className="text-white/40">|</span>
              <span>Lucea</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
