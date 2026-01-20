"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
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
    title: "Humility",
    description:
      "Serving families with grace and understanding, just as our founder did beneath a guinep tree.",
  },
  {
    icon: ShieldIcon,
    title: "Unquestionable Integrity",
    description:
      "Honest and transparent dealings in all our services, maintaining the trust built over generations.",
  },
  {
    icon: UsersIcon,
    title: "Caring for Community",
    description:
      "Going beyond business to support Jamaican families in their time of need.",
  },
  {
    icon: StarIcon,
    title: "Dignified Service",
    description:
      "Ensuring every person receives dignity in death, regardless of financial circumstances.",
  },
];

const generations = [
  {
    generation: "Founder",
    name: "Leslie Ferdinand Madden",
    description:
      "Started the business by crafting coffins beneath a guinep tree on North Street in Kingston. Gained fame as \"the master of the profession\" using herbs, spices and coolers to preserve bodies when modern embalming techniques were not available. Ensured dignified burials regardless of financial circumstances.",
  },
  {
    generation: "Second Generation",
    name: "Ferdinand Leslie Madden",
    description:
      "Graduated from St. George's College in Jamaica and trained at the American Academy McAllister Institute of Funeral Service in New York. Willingly walked in his father's footsteps.",
  },
  {
    generation: "Second Generation",
    name: "Ruel Leslie Madden",
    description:
      "Also trained at McAllister Institute in New York. Assigned to establish and operate the Montego Bay branch. Continued his father's tradition of exceptional client care.",
  },
  {
    generation: "Current Leadership",
    name: "Leslie Ruel Madden Jr.",
    description:
      "Serves as CEO and Director of the Lucea and Montego Bay locations, carrying forward the family's legacy into the modern era.",
  },
  {
    generation: "Fifth Generation",
    name: "Anieka Madden",
    description:
      "Recently completed her funeral services degree and joined the family enterprise, representing the fifth generation of Madden funeral directors.",
  },
];

const currentTeam = [
  { name: "Fabian Madden", role: "Manager of Coffin Supplies Limited" },
  {
    name: "Christine Madden Williams",
    role: "Constant Spring Branch and Cremation Services",
  },
  {
    name: "Paul Madden",
    role: "Operations Manager, North Street Headquarters (Kingston)",
  },
  { name: "Isiaa Madden", role: "Manager of Dovecot Operations, Montego Bay" },
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
    phone: "(876) 926-2079",
    phone2: "(876) 926-8223",
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
            Our History
          </span>
          <h1 className="text-4xl sm:text-5xl font-light tracking-tight mb-6">
            Five Generations of Service
          </h1>
          <p className="text-lg text-muted-foreground font-light leading-relaxed">
            For over 70 years, the Madden family has been helping Jamaican
            families honor their loved ones with dignity and care.
          </p>
        </motion.div>
      </section>

      {/* Origin Story */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-light mb-6">Where It All Began</h2>
            <div className="space-y-4 text-muted-foreground font-light leading-relaxed">
              <p>
                Leslie Ferdinand Madden founded Madden&apos;s Funeral Home with
                humble beginnings - crafting coffins beneath a guinep tree on
                North Street in Kingston, Jamaica. He quickly gained fame as
                &quot;the master of the profession.&quot;
              </p>
              <p>
                In an era when modern embalming techniques were not available,
                Leslie used herbs, spices, and coolers to preserve bodies. His
                commitment to ensuring dignified burials regardless of a
                family&apos;s financial circumstances set the foundation for our
                values today.
              </p>
              <p>
                He accepted installment payments when families could not afford
                full payment upfront, believing that every person deserved
                dignity in death.
              </p>
              <p className="text-foreground italic border-l-2 border-funeral-gold pl-4">
                &ldquo;The Madden family has maintained humility, unquestionable
                integrity, and caring for the community across all
                generations.&rdquo;
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            viewport={{ once: true }}
            className="relative aspect-[4/3] rounded-lg overflow-hidden"
          >
            <Image
              src="/images/welcome-hero-mdhi2.jpg"
              alt="Madden's Funeral Home Montego Bay"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Generations */}
      <section className="bg-muted/30 py-20 mb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-light mb-4">A Family Legacy</h2>
            <p className="text-muted-foreground font-light max-w-2xl mx-auto">
              Five generations of the Madden family have carried forward the
              tradition of compassionate service.
            </p>
          </motion.div>

          <div className="space-y-6 max-w-3xl mx-auto">
            {generations.map((person, index) => (
              <motion.div
                key={`${person.name}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.4, 0, 0.2, 1],
                }}
                viewport={{ once: true }}
                className="bg-background rounded-lg p-6 border border-border"
              >
                <span className="text-xs text-funeral-gold font-medium tracking-wider uppercase">
                  {person.generation}
                </span>
                <h3 className="text-lg font-medium mt-1 mb-2">{person.name}</h3>
                <p className="text-sm text-muted-foreground font-light">
                  {person.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Team */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-light mb-4">Today&apos;s Team</h2>
          <p className="text-muted-foreground font-light max-w-2xl mx-auto">
            The Madden family continues to serve with dedicated team members
            across all locations.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentTeam.map((member, index) => (
            <motion.div
              key={member.name}
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
              <div className="w-16 h-16 rounded-full bg-funeral-gold/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-funeral-gold font-medium text-lg">
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              </div>
              <h3 className="font-medium mb-1">{member.name}</h3>
              <p className="text-sm text-muted-foreground font-light">
                {member.role}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="bg-funeral-navy py-20 mb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-light mb-4 text-white">Our Values</h2>
            <p className="text-white/70 font-light max-w-2xl mx-auto">
              These principles have guided the Madden family across five
              generations.
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
                  className="bg-white/5 rounded-lg p-6 text-center"
                >
                  <div className="w-12 h-12 rounded-md bg-funeral-gold/20 flex items-center justify-center mx-auto mb-4">
                    <Icon size={24} className="text-funeral-gold" />
                  </div>
                  <h3 className="font-medium mb-2 text-white">{value.title}</h3>
                  <p className="text-sm text-white/70 font-light">
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
            Serving families across Jamaica with dedicated facilities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
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
                  <p className="text-muted-foreground font-light">
                    {location.address}
                  </p>
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

      {/* Community CTA */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true }}
          className="bg-muted/30 rounded-lg p-8 lg:p-12"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-light mb-4">
                Community Involvement
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                Beyond our funeral services, we are committed to giving back to
                the communities we serve through various initiatives.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-muted-foreground font-light">
                  <span className="w-1.5 h-1.5 bg-funeral-gold rounded-full" />
                  Leslie Ruel Madden Foundation - Educational grants
                </li>
                <li className="flex items-center gap-2 text-muted-foreground font-light">
                  <span className="w-1.5 h-1.5 bg-funeral-gold rounded-full" />
                  Annual Christmas Treat - Feeding the community
                </li>
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
              <Link href="/foundation">
                <Button
                  variant="outline"
                  className="rounded-md uppercase tracking-wider"
                >
                  Foundation
                  <ArrowRightIcon size={18} />
                </Button>
              </Link>
              <Link href="/christmas-treat">
                <Button className="rounded-md uppercase tracking-wider">
                  Christmas Treat
                  <ArrowRightIcon size={18} />
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
