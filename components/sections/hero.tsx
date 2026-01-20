"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, PhoneIcon } from "@/components/icons";

export function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background - Elegant gradient with warm tones */}
      <div className="absolute inset-0 bg-gradient-to-br from-funeral-cream via-background to-funeral-cream/50 dark:from-background dark:via-background dark:to-funeral-navy/20" />

      {/* Subtle decorative elements - Elegant curves instead of grid */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full bg-funeral-gold/5 dark:bg-funeral-gold/10 blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] rounded-full bg-funeral-navy/5 dark:bg-funeral-navy/20 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-funeral-gold/10 border border-funeral-gold/20 mb-8"
            >
              <span className="text-sm font-light tracking-wider text-funeral-gold dark:text-funeral-gold">
                Serving Jamaica for Over 90 Years
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
                  <p className="text-2xl font-light text-foreground">90+</p>
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

          {/* Right - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="order-1 lg:order-2"
          >
            <div className="relative">
              {/* Main image container */}
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/images/welcome-hero-mdhi2.jpg"
                  alt="Madden's Funeral Home - Serving Jamaica with dignity"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Subtle overlay for text legibility in case of light images */}
                <div className="absolute inset-0 bg-gradient-to-t from-funeral-navy/20 to-transparent" />
              </div>

              {/* Decorative accent */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-funeral-gold/20 rounded-lg -z-10" />
              <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-funeral-gold/30 rounded-lg -z-10" />

              {/* Small info card overlay */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8, ease: [0.4, 0, 0.2, 1] }}
                className="absolute -bottom-6 left-6 right-6 md:left-auto md:right-6 md:w-64 bg-white dark:bg-funeral-navy rounded-lg p-4 shadow-lg border border-border"
              >
                <p className="text-xs uppercase tracking-wider text-funeral-gold mb-1">
                  Family Owned Since 1930s
                </p>
                <p className="text-sm font-light text-muted-foreground dark:text-white/80">
                  Five generations of compassionate service to Jamaican families
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
