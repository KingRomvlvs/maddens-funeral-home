"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  HomeIcon,
  HeartIcon,
  ShieldIcon,
  FileIcon,
  ArrowRightIcon,
} from "@/components/icons";

const services = [
  {
    icon: HomeIcon,
    title: "Traditional Funeral",
    description:
      "Complete funeral services including viewing, church services, and burial with dignified care.",
    href: "/services#funeral",
  },
  {
    icon: HeartIcon,
    title: "Cremation Services",
    description:
      "Various cremation options with compassionate handling and memorialization services.",
    href: "/services#cremation",
  },
  {
    icon: ShieldIcon,
    title: "Pre-Planning",
    description:
      "Plan ahead to ensure your wishes are honored and reduce burden on your family.",
    href: "/pre-planning",
  },
  {
    icon: FileIcon,
    title: "Repatriation",
    description:
      "Professional assistance with international transport of remains for families abroad.",
    href: "/services#repatriation",
  },
];

export function ServicesSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-light tracking-[0.2em] uppercase text-funeral-gold mb-4 block">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight mb-4">
            Compassionate Care When You Need It Most
          </h2>
          <p className="text-muted-foreground font-light max-w-2xl mx-auto">
            We offer a complete range of funeral services tailored to honor your
            loved one&apos;s life in a meaningful way.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.4, 0, 0.2, 1],
                }}
                viewport={{ once: true }}
              >
                <Link
                  href={service.href}
                  className="block h-full p-6 bg-background rounded-lg border border-border hover:border-funeral-gold/50 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-md bg-funeral-gold/10 flex items-center justify-center mb-4 group-hover:bg-funeral-gold/20 transition-colors">
                    <Icon size={24} className="text-funeral-gold" />
                  </div>
                  <h3 className="text-lg font-medium mb-2 group-hover:text-funeral-gold transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">
                    {service.description}
                  </p>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/services">
            <Button variant="outline" className="rounded-md uppercase tracking-wider">
              View All Services
              <ArrowRightIcon size={18} />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
