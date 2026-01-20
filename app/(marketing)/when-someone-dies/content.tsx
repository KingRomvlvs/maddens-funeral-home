"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { PhoneIcon, ArrowRightIcon, ClockIcon } from "@/components/icons";

const branches = [
  {
    name: "Kingston",
    phone: "(876) 922-1955-6",
    address: "42a Constant Spring Road, Kingston 10",
  },
  {
    name: "Montego Bay",
    phone: "(876) 952-0211-2",
    address: "37 Union Street, Montego Bay, St. James",
  },
  {
    name: "US Contact",
    phone: "(954) 324-9550",
    address: "For families abroad",
  },
];

export function WhenSomeoneDiesContent() {
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
            Guidance & Support
          </span>
          <h1 className="text-4xl sm:text-5xl font-light tracking-tight mb-6">
            When Someone Dies
          </h1>
          <p className="text-lg text-muted-foreground font-light leading-relaxed">
            In the event of death, contact any of our branches. Our staff is
            available 24 hours a day, 7 days a week to assist you.
          </p>
        </motion.div>
      </section>

      {/* Contact Cards */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-16">
        <div className="grid md:grid-cols-3 gap-6">
          {branches.map((branch, index) => (
            <motion.div
              key={branch.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.4, 0, 0.2, 1],
              }}
              viewport={{ once: true }}
              className="bg-funeral-navy rounded-lg p-6 text-white text-center"
            >
              <h3 className="text-funeral-gold font-medium text-lg mb-2">
                {branch.name}
              </h3>
              <a
                href={`tel:${branch.phone.replace(/[^0-9+]/g, "")}`}
                className="text-2xl font-light hover:text-funeral-gold transition-colors block mb-2"
              >
                {branch.phone}
              </a>
              <p className="text-white/70 text-sm font-light">{branch.address}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            viewport={{ once: true }}
            className="bg-muted/30 rounded-lg p-8 lg:p-10"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-md bg-funeral-gold/10 flex items-center justify-center">
                <ClockIcon size={20} className="text-funeral-gold" />
              </div>
              <span className="text-sm font-medium">
                Available 24 hours a day, 7 days a week
              </span>
            </div>

            <div className="space-y-6 text-muted-foreground font-light leading-relaxed">
              <p>
                Death might be experienced in a hospital, at home, or may be
                accidental. If the person was ill and regularly being seen by
                his/her doctor, there will likely be no need for a post-mortem
                (except in police cases, i.e., murder, etc.)
              </p>

              <p>
                In the event of sudden death, an autopsy will be scheduled.
                Between the time of death and the time of autopsy, the government
                will be responsible for your loved one. After the autopsy, a
                burial order will be issued and your loved one&apos;s remains will
                be handed over for funeral rites.
              </p>

              <p>
                Our staff is well informed and capable of walking you through any
                steps you may need to take. We are always ready and willing to
                advise family members.
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-border">
              <h3 className="font-medium mb-4">Immediate Steps to Take:</h3>
              <ul className="space-y-3">
                {[
                  "Contact Madden's Funeral Home immediately - we're available 24/7",
                  "Gather important documents (ID, insurance policies, burial plans)",
                  "Notify immediate family members and close friends",
                  "If death occurred at home, do not move the body",
                  "We will guide you through all necessary paperwork and arrangements",
                ].map((step, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-funeral-gold/10 text-funeral-gold text-sm flex items-center justify-center shrink-0 mt-0.5">
                      {index + 1}
                    </span>
                    <span className="text-muted-foreground font-light">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-muted-foreground font-light mb-6">
            Let us lend a helping hand during this difficult time.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:+18769520212">
              <Button
                size="lg"
                className="rounded-md uppercase tracking-wider"
              >
                <PhoneIcon size={18} />
                Call Us Now
              </Button>
            </a>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="rounded-md uppercase tracking-wider"
              >
                Contact Us Online
                <ArrowRightIcon size={18} />
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
