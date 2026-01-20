"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { PhoneIcon, ArrowRightIcon } from "@/components/icons";

const urns = [
  {
    id: "wooden",
    title: "Wooden Urns",
    image: "/images/urns/wooden-urn-boston-ii-walnut.jpg",
    description:
      "Wood urns are unique in just about every imaginable way, and that's what makes them perfect for memorializing any unique personality. Wood cremation urns are available in a wide variety of designs made from many different types of woods, and they are available for a huge number of memorial purposes, ranging from indoor displays to burial in an environmentally-friendly grave intended to be biodegradable.",
    additionalInfo:
      "The manufacturing processes used to create wood urns are also the most varied of any type of urn, and that is what makes wood urns, perhaps, the most unique of all cremation urns. Wood cremation urns are often made by hand, for example, but beautiful pieces are also carved by machine and then hand finished.",
  },
  {
    id: "ceramic",
    title: "Ceramic Urns",
    image: "/images/urns/ceramic-urn-cut105.jpg",
    description:
      "Ceramic urns are made according to ancient techniques that, in many ways, have changed very little over the years. Their method of production is just one way in which ceramic urns represent eternal unity. The other is their overall style. Many modern artists who design and make ceramic urns follow the traditions and styles used by cultures of yesteryear.",
    additionalInfo:
      "While ceramic pottery, in general, has a huge variety of uses, it is ceramic urns - with their practical connection to death by playing host to human ashes - that, perhaps, best unite ceramic art to the rest of humanity - past and present. People whose ashes are stored in ceramic pottery are participating in an age-old human tradition (ceramic urns have been, for centuries, one of the most common products of ceramic art), but, because ceramic urns are still among the most sturdy urns available, the people who they memorialize will be remembered for centuries.",
  },
];

export function UrnsContent() {
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
            Memorial Options
          </span>
          <h1 className="text-4xl sm:text-5xl font-light tracking-tight mb-6">
            Urns
          </h1>
          <p className="text-lg text-muted-foreground font-light leading-relaxed">
            We offer a selection of beautiful urns to honor your loved one&apos;s
            memory. Each urn is crafted with care and attention to detail.
          </p>
        </motion.div>
      </section>

      {/* Urns Grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="space-y-20">
          {urns.map((urn, index) => (
            <motion.div
              key={urn.id}
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
                className={`relative aspect-square max-w-md mx-auto lg:mx-0 rounded-lg overflow-hidden bg-muted ${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <Image
                  src={urn.image}
                  alt={urn.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <h2 className="text-2xl sm:text-3xl font-light mb-4">
                  {urn.title}
                </h2>
                <p className="text-muted-foreground font-light leading-relaxed mb-4">
                  {urn.description}
                </p>
                <p className="text-muted-foreground font-light leading-relaxed">
                  {urn.additionalInfo}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Keepsakes Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true }}
          className="bg-muted/30 rounded-lg p-8 lg:p-10 text-center max-w-3xl mx-auto"
        >
          <h2 className="text-2xl font-light mb-4">Memorial Keepsakes</h2>
          <p className="text-muted-foreground font-light leading-relaxed">
            A family can also purchase keepsakes. Keepsakes are miniature urns or
            pieces of jewellery that can accommodate a small amount of ash
            remains. These provide a way for multiple family members to keep a
            part of their loved one close.
          </p>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mt-16">
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
            Our caring staff is here to help you select the perfect memorial for
            your loved one. Contact us to discuss your options.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:+18769520212">
              <Button className="bg-funeral-gold text-funeral-navy hover:bg-funeral-gold/90 rounded-md uppercase tracking-wider">
                <PhoneIcon size={18} />
                (876) 952-0212
              </Button>
            </a>
            <Link href="/cremation">
              <Button
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 rounded-md uppercase tracking-wider"
              >
                Learn About Cremation
                <ArrowRightIcon size={18} />
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
