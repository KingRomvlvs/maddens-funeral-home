"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, PhoneIcon } from "@/components/icons";

export function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background - Dignified gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/30" />

      {/* Subtle decorative pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(var(--foreground) 1px, transparent 1px),
            linear-gradient(to right, var(--foreground) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-20 w-full">
        <div className="max-w-3xl mx-auto text-center lg:text-left lg:mx-0">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-funeral-gold/10 border border-funeral-gold/20 mb-8"
          >
            <span className="text-sm font-light tracking-wider text-funeral-gold dark:text-funeral-gold">
              Serving Jamaica for Over 70 Years
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight mb-6 leading-tight"
          >
            <span className="block">Let Us Lend a</span>
            <span className="block text-gradient">Helping Hand</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="text-lg sm:text-xl text-muted-foreground font-light leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0"
          >
            Helping families and friends honor their loved ones with dignity,
            compassion, and personalized service. Every life is unique and
            deserves to be honored.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <Link href="/contact">
              <Button
                size="lg"
                className="rounded-md uppercase tracking-wider px-8 h-12 text-sm"
              >
                Contact Us
                <ArrowRightIcon size={18} />
              </Button>
            </Link>
            <a href="tel:+18769520212">
              <Button
                variant="outline"
                size="lg"
                className="rounded-md uppercase tracking-wider px-8 h-12 text-sm"
              >
                <PhoneIcon size={18} />
                (876) 952-0212
              </Button>
            </a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-12 pt-8 border-t border-border/50"
          >
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8">
              <div className="text-center lg:text-left">
                <p className="text-2xl font-light text-foreground">70+</p>
                <p className="text-sm text-muted-foreground">Years of Service</p>
              </div>
              <div className="w-[1px] h-10 bg-border hidden sm:block" />
              <div className="text-center lg:text-left">
                <p className="text-2xl font-light text-foreground">3</p>
                <p className="text-sm text-muted-foreground">Locations</p>
              </div>
              <div className="w-[1px] h-10 bg-border hidden sm:block" />
              <div className="text-center lg:text-left">
                <p className="text-2xl font-light text-foreground">24/7</p>
                <p className="text-sm text-muted-foreground">Support</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
