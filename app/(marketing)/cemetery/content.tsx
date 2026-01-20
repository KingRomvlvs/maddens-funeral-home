"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  PhoneIcon,
  ArrowRightIcon,
  LocationIcon,
  MailIcon,
  ClockIcon,
} from "@/components/icons";

const locations = [
  {
    name: "Dovecot of St. James Memorial Park",
    location: "Montego Bay",
    description:
      "An 85-acre garden cemetery setting situated in the Orange district, seven miles from downtown Montego Bay. Built on a former sugar estate, it offers a serene environment for eternal rest.",
    features: [
      "Vault interment in the Garden of Serenity",
      "Vault interment in the Garden of Tranquility",
      "Vault interment in the Garden of Faith",
      "Oceanview Crematorium facilities",
      "A pond with floating lilies and goldfish",
      "Japanese bridges",
    ],
    planned: ["Chapel", "Catering gazebos", "Restaurant", "Commissary"],
    contact: {
      phone: "(876) 940-5355",
      fax: "(876) 940-5350",
      email: "info@dovecotofstjames.com",
    },
    image: "/images/cemetery/photo-22.jpg",
  },
  {
    name: "Dovecot Memorial Park - Spanish Town",
    location: "St. Catherine",
    description:
      "Established in 1977, this memorial park accommodates approximately 1,500 burials per year and hosts an annual Blessing of the Graves ceremony in November.",
    features: [
      "Chapel facilities",
      "Organist services available for funeral/memorial services",
      "Annual 'Blessing of the Graves' ceremony in November",
      "Well-maintained grounds",
    ],
    contact: {
      address: "33A Hope Road, Kingston 10, Jamaica W.I.",
      phone: "(876) 755-3331",
    },
    image: "/images/cemetery/dovecot-spanish-town.jpg",
  },
];

const rules = [
  {
    category: "Visiting Hours",
    items: ["7:00 AM - 7:00 PM daily"],
  },
  {
    category: "Dress Code",
    items: [
      "Appropriate attire required",
      "Shorts and brief attire prohibited",
    ],
  },
  {
    category: "General Conduct",
    items: [
      "Quiet and reverence are to be observed",
      "Children under 12 must be accompanied by an adult",
      "Pets must remain in automobiles at all times",
    ],
  },
  {
    category: "Prohibited Activities",
    items: [
      "Roller skating, scooter riding, or motorcycle riding (except quiet operation)",
      "Picnicking or lying on lawns/benches",
      "Radio volume that projects beyond the vehicle",
      "Professional photography without permission",
    ],
  },
  {
    category: "Decorations",
    items: [
      "Artificial flowers not permitted",
      "Decorations must be placed in receptacles only",
      "All decorations must be removed within 3 days",
    ],
  },
];

export function CemeteryContent() {
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
            Memorial Parks
          </span>
          <h1 className="text-4xl sm:text-5xl font-light tracking-tight mb-6">
            Dovecot Cemetery
          </h1>
          <p className="text-lg text-muted-foreground font-light leading-relaxed">
            Our family-owned memorial parks provide beautiful, peaceful settings
            for eternal rest. With locations in Montego Bay and Spanish Town, we
            offer a range of interment options.
          </p>
        </motion.div>
      </section>

      {/* Locations */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-20">
        <div className="space-y-20">
          {locations.map((location, index) => (
            <motion.div
              key={location.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.4, 0, 0.2, 1],
              }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-start ${
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
                  src={location.image}
                  alt={location.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <span className="text-sm text-funeral-gold font-light tracking-wider uppercase">
                  {location.location}
                </span>
                <h2 className="text-2xl sm:text-3xl font-light mt-2 mb-4">
                  {location.name}
                </h2>
                <p className="text-muted-foreground font-light leading-relaxed mb-6">
                  {location.description}
                </p>

                {/* Features */}
                <h3 className="font-medium mb-3">Features & Services</h3>
                <ul className="space-y-2 mb-6">
                  {location.features.map((feature, featureIndex) => (
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

                {/* Planned Amenities */}
                {location.planned && (
                  <>
                    <h3 className="font-medium mb-3">Coming Soon</h3>
                    <ul className="space-y-2 mb-6">
                      {location.planned.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="flex items-start gap-2 text-sm"
                        >
                          <span className="w-1.5 h-1.5 bg-muted-foreground/50 rounded-full mt-2 shrink-0" />
                          <span className="text-muted-foreground font-light">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                {/* Contact */}
                <div className="bg-muted/30 rounded-lg p-4 space-y-2">
                  {location.contact.address && (
                    <div className="flex items-start gap-2 text-sm">
                      <LocationIcon
                        size={16}
                        className="text-funeral-gold mt-0.5 shrink-0"
                      />
                      <span className="text-muted-foreground font-light">
                        {location.contact.address}
                      </span>
                    </div>
                  )}
                  <div className="flex items-center gap-2 text-sm">
                    <PhoneIcon
                      size={16}
                      className="text-funeral-gold shrink-0"
                    />
                    <a
                      href={`tel:${location.contact.phone.replace(
                        /[^0-9+]/g,
                        ""
                      )}`}
                      className="text-foreground hover:text-funeral-gold transition-colors"
                    >
                      {location.contact.phone}
                    </a>
                  </div>
                  {location.contact.email && (
                    <div className="flex items-center gap-2 text-sm">
                      <MailIcon
                        size={16}
                        className="text-funeral-gold shrink-0"
                      />
                      <a
                        href={`mailto:${location.contact.email}`}
                        className="text-foreground hover:text-funeral-gold transition-colors"
                      >
                        {location.contact.email}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Rules & Regulations */}
      <section className="bg-muted/30 py-16 mb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-light mb-4">
              Rules & Regulations
            </h2>
            <p className="text-muted-foreground font-light">
              Dovecot Memorial Park is a sacred place. Quiet and reverence are to
              be observed.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {rules.map((rule, index) => (
              <motion.div
                key={rule.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.4, 0, 0.2, 1],
                }}
                viewport={{ once: true }}
                className="bg-background rounded-lg p-5"
              >
                <h3 className="font-medium text-funeral-gold mb-3">
                  {rule.category}
                </h3>
                <ul className="space-y-2">
                  {rule.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="text-sm text-muted-foreground font-light"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mt-8 text-sm text-muted-foreground"
          >
            <ClockIcon size={16} className="text-funeral-gold" />
            <span>Visiting Hours: 7:00 AM - 7:00 PM Daily</span>
          </motion.div>
        </div>
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
            Plan Your Visit
          </h2>
          <p className="text-white/80 font-light max-w-xl mx-auto mb-8">
            Our staff is available to show you our memorial park facilities and
            discuss interment options. Contact us to schedule a visit.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:+18769405355">
              <Button className="bg-funeral-gold text-funeral-navy hover:bg-funeral-gold/90 rounded-md uppercase tracking-wider">
                <PhoneIcon size={18} />
                (876) 940-5355
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
