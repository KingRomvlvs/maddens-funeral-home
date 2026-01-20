"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ShieldIcon,
  HeartIcon,
  FileIcon,
  CheckIcon,
  ArrowRightIcon,
  PhoneIcon,
} from "@/components/icons";

const benefits = [
  {
    icon: ShieldIcon,
    title: "Peace of Mind",
    description:
      "Know that your wishes will be honored and your family won't have to make difficult decisions during an emotional time.",
  },
  {
    icon: HeartIcon,
    title: "Protect Your Family",
    description:
      "Relieve your loved ones of the financial and emotional burden of making arrangements.",
  },
  {
    icon: FileIcon,
    title: "Document Your Wishes",
    description:
      "Record your preferences for services, music, readings, and other personal touches.",
  },
];

const includedItems = [
  "Personal consultation with a caring professional",
  "Documentation of all service preferences",
  "Selection of casket, urn, or other merchandise",
  "Arrangement of specific requests",
  "Flexible payment options available",
  "Locked-in pricing protection",
  "Confidential record keeping",
  "Updates can be made at any time",
];

export function PrePlanningPageContent() {
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
            Pre-Planning
          </span>
          <h1 className="text-4xl sm:text-5xl font-light tracking-tight mb-6">
            Why Should I Plan Ahead?
          </h1>
          <p className="text-lg text-muted-foreground font-light leading-relaxed">
            Pre-planning allows you to make thoughtful, informed decisions about
            your final arrangements while relieving your family of this burden
            during a difficult time.
          </p>
        </motion.div>
      </section>

      {/* Benefits */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-20">
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.4, 0, 0.2, 1],
                }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-md bg-funeral-gold/10 flex items-center justify-center mx-auto mb-6">
                  <Icon size={32} className="text-funeral-gold" />
                </div>
                <h3 className="text-xl font-medium mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground font-light">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* What's Included */}
      <section className="bg-muted/30 py-20 mb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-light mb-6">
                What&apos;s Included in Pre-Planning
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-8">
                Our pre-planning process is designed to be comfortable and
                thorough. We&apos;ll guide you through every decision with
                compassion and professionalism.
              </p>
              <ul className="space-y-3">
                {includedItems.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.05,
                      ease: [0.4, 0, 0.2, 1],
                    }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <CheckIcon
                      size={18}
                      className="text-funeral-gold mt-0.5 shrink-0"
                    />
                    <span className="text-muted-foreground font-light">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
              viewport={{ once: true }}
              className="bg-funeral-navy rounded-lg p-8 text-white"
            >
              <h3 className="text-2xl font-light mb-6 text-funeral-gold">
                Start Your Pre-Planning Today
              </h3>
              <p className="text-white/80 font-light leading-relaxed mb-8">
                There&apos;s no obligation and no pressure. Simply call us or
                fill out our contact form to schedule a consultation with one of
                our caring professionals.
              </p>
              <div className="space-y-4">
                <a href="tel:+18769520212" className="block">
                  <Button className="w-full bg-funeral-gold text-funeral-navy hover:bg-funeral-gold/90 rounded-md uppercase tracking-wider">
                    <PhoneIcon size={18} />
                    (876) 952-0212
                  </Button>
                </a>
                <Link href="/contact" className="block">
                  <Button
                    variant="outline"
                    className="w-full border-white/30 bg-transparent text-white hover:bg-white/10 rounded-md uppercase tracking-wider"
                  >
                    Request Consultation
                    <ArrowRightIcon size={18} />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-light mb-4">Common Questions</h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-6">
          {[
            {
              q: "Is pre-planning the same as pre-paying?",
              a: "No, pre-planning and pre-paying are two different things. Pre-planning simply documents your wishes. Pre-paying is optional and allows you to lock in today's prices for future services.",
            },
            {
              q: "Can I change my pre-plan later?",
              a: "Absolutely. Your pre-plan can be updated at any time to reflect changes in your wishes. We keep your records secure and accessible.",
            },
            {
              q: "How long does the pre-planning process take?",
              a: "A typical consultation takes about an hour. We work at your pace and can meet multiple times if needed to ensure every detail is addressed.",
            },
            {
              q: "Does pre-planning cost anything?",
              a: "There is no cost or obligation to pre-plan with us. We're simply documenting your wishes for when the time comes.",
            },
          ].map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
                ease: [0.4, 0, 0.2, 1],
              }}
              viewport={{ once: true }}
              className="bg-background rounded-lg p-6 border border-border"
            >
              <h3 className="font-medium mb-2">{faq.q}</h3>
              <p className="text-muted-foreground font-light text-sm">
                {faq.a}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
