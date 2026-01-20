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
  UsersIcon,
  BookIcon,
  CheckIcon,
  ArrowRightIcon,
  PhoneIcon,
} from "@/components/icons";

const services = [
  {
    id: "funeral",
    icon: HomeIcon,
    title: "Traditional Funeral Services",
    description:
      "A traditional funeral service provides an opportunity for family and friends to gather, share memories, and pay tribute to the life of your loved one.",
    features: [
      "Professional coordination of all services",
      "Embalming and preparation",
      "Use of facilities for viewing",
      "Arrangement of church or chapel service",
      "Hearse and family transportation",
      "Coordination with cemetery",
      "Printed materials (programs, bookmarks, thank you cards)",
    ],
  },
  {
    id: "cremation",
    icon: HeartIcon,
    title: "Cremation Services",
    description:
      "We offer various cremation options to suit your family's needs, from simple cremation to full services before cremation.",
    features: [
      "Service before cremation with casket rental available",
      "Memorial service after cremation",
      "Direct cremation",
      "Witnessed cremation at our facility",
      "Selection of urns and keepsakes",
      "Scattering services at sea",
      "Columbarium placement",
    ],
  },
  {
    id: "graveside",
    icon: UsersIcon,
    title: "Graveside Services",
    description:
      "A graveside service is held at the cemetery and can be a meaningful way to say goodbye in a more intimate setting.",
    features: [
      "Professional graveside ceremony",
      "Coordination with cemetery",
      "Setup of graveside equipment",
      "Hearse and transportation",
      "Floral arrangements",
      "Printed programs",
    ],
  },
  {
    id: "repatriation",
    icon: FileIcon,
    title: "Repatriation Services",
    description:
      "For families who have lost a loved one abroad or need to transport remains internationally, we provide complete repatriation services.",
    features: [
      "Coordination with international funeral homes",
      "All necessary documentation",
      "Customs and immigration assistance",
      "Transportation to and from airports",
      "Communication with airlines",
      "Preparation of remains for transport",
    ],
  },
  {
    id: "pre-planning",
    icon: ShieldIcon,
    title: "Pre-Planning Services",
    description:
      "Planning ahead allows you to make thoughtful decisions about your funeral arrangements and relieves your family of this burden during a difficult time.",
    features: [
      "Personal consultation to discuss your wishes",
      "Documented service preferences",
      "Flexible payment options",
      "Price protection from future increases",
      "Peace of mind for you and your family",
      "Confidential record keeping",
    ],
    link: "/pre-planning",
  },
  {
    id: "cemetery",
    icon: BookIcon,
    title: "Cemetery Services",
    description:
      "Dovecot Memorial Park offers beautiful garden settings for interment, cremation memorials, and scattering services.",
    features: [
      "85-acre garden memorial park",
      "Vault interment options",
      "Ocean-view crematorium",
      "Columbarium placement",
      "Urn garden interment",
      "Well-maintained grounds",
    ],
  },
];

export function ServicesPageContent() {
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
            Our Services
          </span>
          <h1 className="text-4xl sm:text-5xl font-light tracking-tight mb-6">
            Comprehensive Funeral Services
          </h1>
          <p className="text-lg text-muted-foreground font-light leading-relaxed">
            We offer a complete range of services to help you honor your loved
            one in a meaningful way. Every service is customized to reflect the
            unique life being celebrated.
          </p>
        </motion.div>
      </section>

      {/* Services */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="space-y-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  ease: [0.4, 0, 0.2, 1],
                }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  isEven ? "" : "lg:grid-flow-dense"
                }`}
              >
                {/* Content */}
                <div className={isEven ? "" : "lg:col-start-2"}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-md bg-funeral-gold/10 flex items-center justify-center">
                      <Icon size={24} className="text-funeral-gold" />
                    </div>
                    <h2 className="text-2xl font-light">{service.title}</h2>
                  </div>
                  <p className="text-muted-foreground font-light leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start gap-2 text-sm"
                      >
                        <CheckIcon
                          size={16}
                          className="text-funeral-gold mt-0.5 shrink-0"
                        />
                        <span className="text-muted-foreground font-light">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Link href={service.link || "/contact"}>
                    <Button
                      variant="outline"
                      className="rounded-md uppercase tracking-wider"
                    >
                      {service.link ? "Learn More" : "Inquire Now"}
                      <ArrowRightIcon size={16} />
                    </Button>
                  </Link>
                </div>

                {/* Visual Card */}
                <div
                  className={`bg-muted/30 rounded-lg p-8 ${
                    isEven ? "" : "lg:col-start-1"
                  }`}
                >
                  <div className="aspect-[4/3] rounded-md bg-funeral-navy/5 dark:bg-funeral-navy/20 flex items-center justify-center">
                    <Icon
                      size={64}
                      className="text-funeral-navy/20 dark:text-funeral-gold/30"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
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
            Need Help Planning a Service?
          </h2>
          <p className="text-white/80 font-light max-w-xl mx-auto mb-8">
            Our caring staff is available 24/7 to help you through this
            difficult time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
