"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { PhoneIcon, ArrowRightIcon } from "@/components/icons";

const caskets = [
  {
    id: "wooden",
    title: "Wooden Caskets",
    image: "/images/caskets/wooden-casket.jpg",
    description:
      "Handcrafted like fine furniture, each wooden casket has its own unique graining pattern. The natural warmth and beauty of wood is available in a variety of types and species.",
    features: [
      "Interior materials: velvet or crepe",
      "Construction: Sides made from solid wood or veneering process",
      "Unique graining patterns in each piece",
      "Available in various wood types and finishes",
    ],
  },
  {
    id: "metal",
    title: "Metal Caskets",
    image: "/images/caskets/metal-casket.jpg",
    description:
      "The majority of metal caskets are \"protective\" caskets with a one-piece rubber gasket and locking mechanism. The gasket forms a protective seal against air and gravesite elements.",
    features: [
      "Protective seal with rubber gasket",
      "Locking mechanism for security",
      "Quality options include magnesium rust inhibitor process",
      "Available gauges: 20, 18, and 16 gauge metals",
      "Interior materials: crepe to velvet",
    ],
  },
  {
    id: "stainless-steel",
    title: "Stainless Steel Caskets",
    image: "/images/caskets/stainless-steel-casket.jpg",
    description:
      "Stainless steel caskets feature a rust-resistant alloy derived from chromium, discovered in Russia in the late 1700s. These premium caskets offer lasting protection and elegant appearance.",
    features: [
      "Rust-resistant alloy construction",
      "High-quality velvet interiors",
      "Available with painted or brushed finishes",
      "Premium quality option",
    ],
  },
  {
    id: "rental",
    title: "Rental Caskets",
    image: "/images/caskets/rental-casket.jpg",
    description:
      "Rental caskets feature a specially crafted unit with a removable inner container. The outer shell acts as a \"shelf\" for public viewing; the inner container transports the body for final disposition.",
    features: [
      "Reusable outer shell for viewing",
      "Removable inner container for transport",
      "Environmentally conscious/sustainable option",
      "Appeals to families seeking eco-friendly choices",
    ],
  },
];

export function CasketsContent() {
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
            Caskets
          </h1>
          <p className="text-lg text-muted-foreground font-light leading-relaxed">
            We offer a wide selection of caskets to suit every family&apos;s
            needs and preferences. Our caring staff will help you choose the
            right option for your loved one.
          </p>
        </motion.div>
      </section>

      {/* Caskets Grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="space-y-16">
          {caskets.map((casket, index) => (
            <motion.div
              key={casket.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.4, 0, 0.2, 1],
              }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div
                className={`relative aspect-[4/3] rounded-lg overflow-hidden bg-muted ${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <Image
                  src={casket.image}
                  alt={casket.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <h2 className="text-2xl sm:text-3xl font-light mb-4">
                  {casket.title}
                </h2>
                <p className="text-muted-foreground font-light leading-relaxed mb-6">
                  {casket.description}
                </p>
                <ul className="space-y-2">
                  {casket.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start gap-2 text-sm"
                    >
                      <span className="w-1.5 h-1.5 bg-funeral-gold rounded-full mt-2 shrink-0" />
                      <span className="text-muted-foreground font-light">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true }}
          className="bg-funeral-navy rounded-lg p-8 lg:p-12 text-center text-white"
        >
          <h2 className="text-2xl sm:text-3xl font-light mb-4">
            Need Help Choosing?
          </h2>
          <p className="text-white/80 font-light max-w-xl mx-auto mb-8">
            Our caring staff is here to help you select the perfect casket for
            your loved one. Contact us to schedule a consultation.
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
                <ArrowRightIcon size={18} />
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
