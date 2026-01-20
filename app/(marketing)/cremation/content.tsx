"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { PhoneIcon, ArrowRightIcon, CheckIcon } from "@/components/icons";

const serviceOptions = [
  {
    title: "Service Before Cremation",
    description:
      "A traditional funeral service held before the cremation takes place.",
    includes: [
      "Casket rental for viewing",
      "Death announcements",
      "Programs",
      "Floral arrangements",
      "Full funeral service",
    ],
  },
  {
    title: "Memorial Service After Cremation",
    description:
      "A celebration of life held after cremation has taken place.",
    includes: [
      "Announcements",
      "Floral arrangements",
      "Programs",
      "Portrait boards",
      "Urn display",
    ],
  },
  {
    title: "Direct Cremation",
    description:
      "A simple cremation without a formal service, for families who prefer privacy or plan a memorial at a later time.",
    includes: [
      "Basic cremation services",
      "Return of cremated remains",
      "Flexible timing",
      "Private family arrangements",
    ],
  },
];

const afterCremationOptions = [
  "Columbarium placement at Dovecot Memorial Park",
  "Urn garden interment",
  "Sea scattering arrangements",
  "Repatriation services for remains",
  "Memorial keepsakes (miniature urns or jewelry)",
];

export function CremationContent() {
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
            Services
          </span>
          <h1 className="text-4xl sm:text-5xl font-light tracking-tight mb-6">
            Cremation
          </h1>
          <p className="text-lg text-muted-foreground font-light leading-relaxed">
            Cremation is a mode of disposition that is quickly gaining
            popularity. When a family is considering cremation, it is important
            to remember that it is an irreversible process.
          </p>
        </motion.div>
      </section>

      {/* Service Options */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl font-light text-center mb-12"
        >
          Service Options
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {serviceOptions.map((option, index) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.4, 0, 0.2, 1],
              }}
              viewport={{ once: true }}
              className="bg-muted/30 rounded-lg p-6"
            >
              <h3 className="text-lg font-medium mb-3">{option.title}</h3>
              <p className="text-muted-foreground font-light text-sm mb-4">
                {option.description}
              </p>
              <ul className="space-y-2">
                {option.includes.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="flex items-start gap-2 text-sm"
                  >
                    <CheckIcon
                      size={16}
                      className="text-funeral-gold mt-0.5 shrink-0"
                    />
                    <span className="text-muted-foreground font-light">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Dovecot Section */}
      <section className="bg-muted/30 py-20 mb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl font-light mb-6">
                Oceanview Crematorium at Dovecot
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-6">
                Our company offers the option to be present while the deceased is
                being cremated. At Dovecot, our family-owned memorial park, there
                is a viewing room attached to the crematorium where a family can
                observe whilst the process takes place.
              </p>
              <Link href="/cemetery">
                <Button
                  variant="outline"
                  className="rounded-md uppercase tracking-wider"
                >
                  Learn About Dovecot
                  <ArrowRightIcon size={18} />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
              viewport={{ once: true }}
              className="relative aspect-[4/3] rounded-lg overflow-hidden"
            >
              <Image
                src="/images/garden-floral-arrangement.jpg"
                alt="Dovecot Memorial Park"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* After Cremation Options */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-2xl sm:text-3xl font-light text-center mb-6">
            After Cremation Options
          </h2>
          <p className="text-muted-foreground font-light text-center mb-8">
            After cremation, a family might not be sure what they want to do with
            the remains. Dovecot has options available to honor your loved
            one&apos;s memory.
          </p>
          <div className="bg-muted/30 rounded-lg p-8">
            <ul className="space-y-3">
              {afterCremationOptions.map((option, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckIcon
                    size={18}
                    className="text-funeral-gold mt-0.5 shrink-0"
                  />
                  <span className="text-muted-foreground font-light">
                    {option}
                  </span>
                </li>
              ))}
            </ul>
          </div>
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
            Discuss Your Options
          </h2>
          <p className="text-white/80 font-light max-w-xl mx-auto mb-8">
            Our caring staff is here to guide you through all cremation options
            and help you make the best choice for your family.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:+18769520212">
              <Button className="bg-funeral-gold text-funeral-navy hover:bg-funeral-gold/90 rounded-md uppercase tracking-wider">
                <PhoneIcon size={18} />
                (876) 952-0212
              </Button>
            </a>
            <Link href="/urns">
              <Button
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 rounded-md uppercase tracking-wider"
              >
                View Urns
                <ArrowRightIcon size={18} />
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
