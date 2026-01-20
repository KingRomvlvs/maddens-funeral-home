"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { PhoneIcon, ArrowRightIcon, GiftIcon, HeartIcon } from "@/components/icons";

export function ChristmasTreatContent() {
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
            Community Service
          </span>
          <h1 className="text-4xl sm:text-5xl font-light tracking-tight mb-6">
            Christmas Treat
          </h1>
          <p className="text-lg text-muted-foreground font-light leading-relaxed">
            The Christmas season is a time for giving, and at Madden&apos;s we
            remember this. Every December, bags with several food items are
            prepared and given to those in need.
          </p>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-md bg-funeral-gold/10 flex items-center justify-center">
                <GiftIcon size={24} className="text-funeral-gold" />
              </div>
              <span className="text-lg font-medium">Spreading Christmas Joy</span>
            </div>

            <p className="text-muted-foreground font-light leading-relaxed mb-6">
              Every December, Madden&apos;s Funeral Home organizes our annual
              Christmas Treat program, distributing food packages to the
              economically disadvantaged elderly and disabled members of our
              community.
            </p>

            <p className="text-muted-foreground font-light leading-relaxed mb-6">
              What started with 250 recipients in its initial year has grown to
              serve over 1,000 people by 2016. The event includes carol singing,
              prayers led by a Bishop, and a celebration of community spirit.
            </p>

            <div className="bg-muted/30 rounded-lg p-6">
              <h3 className="font-medium mb-3">Program Highlights</h3>
              <ul className="space-y-2">
                {[
                  "Annual event held every December",
                  "Food packages distributed to those in need",
                  "Serves elderly and disabled community members",
                  "Grown from 250 to over 1,000 recipients",
                  "Features carol singing and prayers",
                  "Led by a Bishop with community participation",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <span className="w-1.5 h-1.5 bg-funeral-gold rounded-full mt-2 shrink-0" />
                    <span className="text-muted-foreground font-light">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 space-y-6"
          >
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="/images/community/DSC_8026.jpg"
                alt="Christmas Treat community event"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
              <Image
                src="/images/community/DSC_1354.jpg"
                alt="Staff preparing Christmas gift bags"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="bg-muted/30 py-16 mb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-light mb-4">Our Impact</h2>
            <p className="text-muted-foreground font-light max-w-2xl mx-auto">
              The Christmas Treat program reflects our commitment to giving back
              to the community that has supported us for over 70 years.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              {
                number: "1,000+",
                label: "Recipients Served",
                description: "Growing each year",
              },
              {
                number: "70+",
                label: "Years of Service",
                description: "To the community",
              },
              {
                number: "Every",
                label: "December",
                description: "Annual tradition",
              },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
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
                <div className="text-3xl font-light text-funeral-gold mb-2">
                  {stat.number}
                </div>
                <div className="font-medium mb-1">{stat.label}</div>
                <div className="text-sm text-muted-foreground font-light">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-funeral-gold/10 flex items-center justify-center">
              <HeartIcon size={32} className="text-funeral-gold" />
            </div>
          </div>
          <h2 className="text-2xl sm:text-3xl font-light mb-4">
            Caring for Our Community
          </h2>
          <p className="text-muted-foreground font-light leading-relaxed">
            At Madden&apos;s Funeral Home, we believe that caring for the
            community extends beyond our professional services. The Christmas
            Treat program is just one way we give back to the people of Jamaica
            who have trusted us with their loved ones for generations.
          </p>
        </motion.div>
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
            Learn More About Our Community Programs
          </h2>
          <p className="text-white/80 font-light max-w-xl mx-auto mb-8">
            Contact us to learn more about the Christmas Treat program and our
            other community initiatives.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:+18769520212">
              <Button className="bg-funeral-gold text-funeral-navy hover:bg-funeral-gold/90 rounded-md uppercase tracking-wider">
                <PhoneIcon size={18} />
                (876) 952-0212
              </Button>
            </a>
            <Link href="/foundation">
              <Button
                variant="outline"
                className="border-white/30 bg-transparent text-white hover:bg-white/10 rounded-md uppercase tracking-wider"
              >
                Educational Foundation
                <ArrowRightIcon size={18} />
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
