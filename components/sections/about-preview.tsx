"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, CheckIcon } from "@/components/icons";

const values = [
  "Over 70 years of dedicated service to Jamaican families",
  "Experienced, caring professionals available 24/7",
  "Personalized services to honor every unique life",
  "Affordable options without compromising dignity",
  "Three convenient locations across Jamaica",
];

export function AboutPreviewSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-light tracking-[0.2em] uppercase text-funeral-gold mb-4 block">
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-light tracking-tight mb-6">
              A Legacy of Compassion and Care
            </h2>
            <p className="text-muted-foreground font-light leading-relaxed mb-6">
              Madden&apos;s Funeral Home exists to help you through the death of
              a loved one. We believe that every life, whether lived quietly or
              bigger than life itself, is unique and deserves to be honored.
            </p>
            <p className="text-muted-foreground font-light leading-relaxed mb-8">
              Our staff of funeral directors are experienced professionals who
              are devoted to helping you honor the memory of your loved ones.
              Your family deserves a funeral home whose staff is caring and
              compassionate.
            </p>

            {/* Values list */}
            <ul className="space-y-3 mb-8">
              {values.map((value, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.1,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <CheckIcon
                    size={18}
                    className="text-funeral-gold mt-0.5 shrink-0"
                  />
                  <span className="text-sm text-muted-foreground font-light">
                    {value}
                  </span>
                </motion.li>
              ))}
            </ul>

            <Link href="/about">
              <Button className="rounded-md uppercase tracking-wider">
                Learn More About Us
                <ArrowRightIcon size={18} />
              </Button>
            </Link>
          </motion.div>

          {/* Image/Stats Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-funeral-navy rounded-lg p-8 lg:p-12 text-white">
              <h3 className="text-2xl font-light mb-8 text-funeral-gold">
                Our Commitment
              </h3>
              <blockquote className="text-lg font-light leading-relaxed mb-8 text-white/90 italic">
                &ldquo;Our commitment for over seventy years has been to assist
                those who have been touched by such a loss with dignified,
                personal service at a reasonable, affordable cost.&rdquo;
              </blockquote>
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
                <div className="text-center">
                  <p className="text-3xl font-light text-funeral-gold">70+</p>
                  <p className="text-xs text-white/70 mt-1">Years</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-light text-funeral-gold">3</p>
                  <p className="text-xs text-white/70 mt-1">Locations</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-light text-funeral-gold">24/7</p>
                  <p className="text-xs text-white/70 mt-1">Support</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
