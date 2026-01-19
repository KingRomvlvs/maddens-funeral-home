"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  HeartIcon,
  ShieldIcon,
  UsersIcon,
  StarIcon,
  ArrowRightIcon,
  LocationIcon,
  PhoneIcon,
  MailIcon,
} from "@/components/icons";

const values = [
  {
    icon: HeartIcon,
    title: "Compassion",
    description:
      "We understand the pain of losing a loved one and treat every family with genuine care and empathy.",
  },
  {
    icon: ShieldIcon,
    title: "Dignity",
    description:
      "Every life is unique and deserves to be honored with the utmost respect and dignity.",
  },
  {
    icon: UsersIcon,
    title: "Family Focus",
    description:
      "Your family's needs come first. We guide you through each decision with patience and understanding.",
  },
  {
    icon: StarIcon,
    title: "Excellence",
    description:
      "Over 70 years of experience have refined our commitment to providing the highest quality service.",
  },
];

const locations = [
  {
    name: "Montego Bay",
    address: "37 Union Street, Montego Bay, St. James, Jamaica, W.I.",
    phone: "(876) 952-0212",
    phone2: "(876) 979-1491",
    email: "mobay@maddensfuneralhome.com",
  },
  {
    name: "Kingston",
    address: "42a Constant Spring Road, Kingston 10, Jamaica, W.I.",
    address2: "33A Hope Road, Kingston 10, Jamaica, W.I.",
    phone: "(876) 926-2079",
    phone2: "(876) 926-8223",
    email: "info@maddensfuneralhome.com",
  },
  {
    name: "Lucea",
    address: "Lucea, Hanover, Jamaica, W.I.",
    phone: "Contact Main Office",
    email: "info@maddensfuneralhome.com",
  },
];

export function AboutPageContent() {
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
            About Us
          </span>
          <h1 className="text-4xl sm:text-5xl font-light tracking-tight mb-6">
            A Legacy of Compassion
          </h1>
          <p className="text-lg text-muted-foreground font-light leading-relaxed">
            For over 70 years, Madden&apos;s Funeral Home has been helping
            Jamaican families honor their loved ones with dignity and care.
          </p>
        </motion.div>
      </section>

      {/* Our Story */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-light mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground font-light leading-relaxed">
              <p>
                Madden&apos;s Funeral Home exists to help you through the death
                of a loved one. We believe that every life, whether lived
                quietly or bigger than life itself, is unique and deserves to be
                honored.
              </p>
              <p>
                Our staff of funeral directors are experienced professionals who
                are devoted to helping you honor the memory of your loved ones.
                Your family deserves a funeral home whose staff is caring and
                compassionate.
              </p>
              <p>
                Contact us if we can be of assistance to your family with any
                services we offer, such as pre-need planning, traditional
                funeral services, cremation services, graveside services, or any
                other requirement you may have.
              </p>
              <p className="text-foreground italic">
                &ldquo;Our commitment for over seventy years has been to assist
                those who have been touched by such a loss with dignified,
                personal service at a reasonable, affordable cost.&rdquo;
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            viewport={{ once: true }}
            className="bg-funeral-navy rounded-lg p-8 text-white"
          >
            <h3 className="text-2xl font-light mb-6 text-funeral-gold">
              By the Numbers
            </h3>
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <p className="text-4xl font-light text-funeral-gold mb-2">
                  70+
                </p>
                <p className="text-sm text-white/70">Years of Service</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-light text-funeral-gold mb-2">3</p>
                <p className="text-sm text-white/70">Locations</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-light text-funeral-gold mb-2">
                  24/7
                </p>
                <p className="text-sm text-white/70">Availability</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-light text-funeral-gold mb-2">
                  1000s
                </p>
                <p className="text-sm text-white/70">Families Served</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-muted/30 py-20 mb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-light mb-4">Our Values</h2>
            <p className="text-muted-foreground font-light max-w-2xl mx-auto">
              These principles guide everything we do as we serve families in
              their time of need.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                  viewport={{ once: true }}
                  className="bg-background rounded-lg p-6 border border-border text-center"
                >
                  <div className="w-12 h-12 rounded-md bg-funeral-gold/10 flex items-center justify-center mx-auto mb-4">
                    <Icon size={24} className="text-funeral-gold" />
                  </div>
                  <h3 className="font-medium mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground font-light">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-light mb-4">Our Locations</h2>
          <p className="text-muted-foreground font-light max-w-2xl mx-auto">
            Serving families across Jamaica with three convenient locations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {locations.map((location, index) => (
            <motion.div
              key={location.name}
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
              <h3 className="text-xl font-medium mb-4 text-funeral-gold">
                {location.name}
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <LocationIcon
                    size={16}
                    className="text-muted-foreground mt-0.5 shrink-0"
                  />
                  <div>
                    <p className="text-muted-foreground font-light">
                      {location.address}
                    </p>
                    {location.address2 && (
                      <p className="text-muted-foreground font-light">
                        {location.address2}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <PhoneIcon
                    size={16}
                    className="text-muted-foreground mt-0.5 shrink-0"
                  />
                  <div>
                    <a
                      href={`tel:${location.phone.replace(/[^0-9+]/g, "")}`}
                      className="text-foreground hover:text-funeral-gold transition-colors"
                    >
                      {location.phone}
                    </a>
                    {location.phone2 && (
                      <p className="text-muted-foreground font-light">
                        {location.phone2}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <MailIcon
                    size={16}
                    className="text-muted-foreground mt-0.5 shrink-0"
                  />
                  <a
                    href={`mailto:${location.email}`}
                    className="text-foreground hover:text-funeral-gold transition-colors break-all"
                  >
                    {location.email}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Community */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-20">
        <div className="bg-funeral-navy rounded-lg p-8 lg:p-12 text-white">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-light mb-4">
                Community Involvement
              </h2>
              <p className="text-white/80 font-light leading-relaxed mb-4">
                Beyond our funeral services, we are committed to giving back to
                the communities we serve through various initiatives.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-white/80 font-light">
                  <span className="w-1.5 h-1.5 bg-funeral-gold rounded-full" />
                  Leslie Ruel Madden Foundation
                </li>
                <li className="flex items-center gap-2 text-white/80 font-light">
                  <span className="w-1.5 h-1.5 bg-funeral-gold rounded-full" />
                  Annual Christmas Treat
                </li>
                <li className="flex items-center gap-2 text-white/80 font-light">
                  <span className="w-1.5 h-1.5 bg-funeral-gold rounded-full" />
                  Community Support Programs
                </li>
              </ul>
            </div>
            <div className="text-center lg:text-right">
              <Link href="/contact">
                <Button className="bg-funeral-gold text-funeral-navy hover:bg-funeral-gold/90 rounded-md uppercase tracking-wider">
                  Get In Touch
                  <ArrowRightIcon size={18} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
