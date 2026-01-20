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
  { name: "Isiaa Madden", role: "Managing Director, Dovecot Cemetery of St. James" },
  { name: "Aneika Madden", role: "Fifth Generation Funeral Director" },
  { name: "Zidan Madden", role: "Fifth Generation, Community Outreach" },
];

const awards = [
  {
    recipient: "Isiaa Madden",
    award: "Howard University IMPACT Award",
    description:
      "Recognized for professional excellence and community leadership, honoring her contributions to both the funeral industry and Jamaican society.",
    year: "2024",
  },
  {
    recipient: "Madden's Funeral Home",
    award: "Industry Leadership",
    description:
      "Recognized as one of the first and still the leader in professional final care services in Jamaica, with over 90 years of continuous service.",
    year: "Ongoing",
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
            For over 90 years, the Madden family has been helping Jamaican
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

      {/* CEO Tribute Section - Leslie Ruel Madden Jr. */}
      <section className="bg-gradient-to-br from-funeral-navy via-funeral-navy to-funeral-charcoal py-20 mb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <span className="text-sm font-light tracking-[0.2em] uppercase text-funeral-gold mb-4 block">
                Current Leadership
              </span>
              <h2 className="text-3xl sm:text-4xl font-light mb-6 text-white">
                Leslie Ruel Madden Jr.
              </h2>
              <p className="text-xs text-funeral-gold uppercase tracking-wider mb-4">
                Chief Executive Officer
              </p>
              <div className="space-y-4 text-white/80 font-light leading-relaxed">
                <p>
                  As the fourth-generation leader of Madden&apos;s Funeral Home,
                  Leslie Ruel Madden Jr. carries forward the legacy of
                  compassion and dignity that his great-grandfather began under
                  a guinep tree in Kingston.
                </p>
                <p>
                  Serving as CEO and Director of the Lucea and Montego Bay
                  branches, he has modernized operations while preserving the
                  family values that have made Madden&apos;s a trusted name for
                  over 90 years.
                </p>
                <p>
                  Under his leadership, Madden&apos;s has expanded its community
                  outreach programs, including the annual Christmas Treat that
                  feeds over 500 families, and the Leslie Ruel Madden Foundation
                  which provides educational grants to deserving students.
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-white/20">
                <p className="text-white/60 text-sm font-light italic">
                  &ldquo;We believe that every person deserves dignity,
                  regardless of their circumstances. This is what my
                  great-grandfather taught us, and it&apos;s what we continue to
                  practice today.&rdquo;
                </p>
                <p className="text-funeral-gold text-sm mt-2">
                  — Leslie Ruel Madden Jr.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="relative">
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-2xl max-w-md mx-auto">
                  <Image
                    src="/images/leslie-madden-jr.jpg"
                    alt="Leslie Ruel Madden Jr. - CEO of Madden's Funeral Home"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-funeral-navy/60 via-transparent to-transparent" />
                </div>
                {/* Decorative elements */}
                <div className="absolute -bottom-4 -left-4 w-32 h-32 border-2 border-funeral-gold/30 rounded-lg -z-10" />
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-funeral-gold/20 rounded-lg -z-10" />
              </div>
            </motion.div>
          </div>
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
            <h2 className="text-3xl font-light mb-4">The Founding Generations</h2>
            <p className="text-muted-foreground font-light max-w-2xl mx-auto">
              The pioneers who built a legacy of compassionate service.
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

      {/* Awards & Recognition */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sm font-light tracking-[0.2em] uppercase text-funeral-gold mb-4 block">
            Recognition
          </span>
          <h2 className="text-3xl font-light mb-4">Awards & Achievements</h2>
          <p className="text-muted-foreground font-light max-w-2xl mx-auto">
            Our commitment to excellence has been recognized throughout the years.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {awards.map((award, index) => (
            <motion.div
              key={award.award}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.4, 0, 0.2, 1],
              }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-funeral-gold/10 to-funeral-gold/5 rounded-lg p-6 border border-funeral-gold/20"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-funeral-gold/20 flex items-center justify-center">
                  <StarIcon size={24} className="text-funeral-gold" />
                </div>
                <div>
                  <p className="text-xs text-funeral-gold uppercase tracking-wider">
                    {award.year}
                  </p>
                  <p className="font-medium">{award.recipient}</p>
                </div>
              </div>
              <h3 className="text-lg font-medium mb-2">{award.award}</h3>
              <p className="text-sm text-muted-foreground font-light">
                {award.description}
              </p>
            </motion.div>
          ))}
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
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
                  Annual Christmas Treat - Feeding 500+ families
                </li>
                <li className="flex items-center gap-2 text-muted-foreground font-light">
                  <span className="w-1.5 h-1.5 bg-funeral-gold rounded-full" />
                  Partnership with Food For The Poor Jamaica
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
