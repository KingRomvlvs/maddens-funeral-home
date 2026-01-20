"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  PhoneIcon,
  MailIcon,
  LocationIcon,
  ClockIcon,
  FacebookIcon,
  InstagramIcon,
} from "@/components/icons";

// Dignified easing
const dignifiedEase: [number, number, number, number] = [0.4, 0, 0.2, 1];

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About Us" },
  { href: "/pre-planning", label: "Pre-Planning" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
];

const services = [
  { href: "/services#funeral", label: "Traditional Funeral" },
  { href: "/services#cremation", label: "Cremation Services" },
  { href: "/services#graveside", label: "Graveside Services" },
  { href: "/services#repatriation", label: "Repatriation" },
  { href: "/pre-planning", label: "Pre-Planning" },
];

const locations = [
  {
    name: "Montego Bay",
    address: "37 Union Street, Montego Bay, St. James, Jamaica, W.I.",
    phone: "(876) 952-0212",
    email: "mobay@maddensfuneralhome.com",
  },
  {
    name: "Kingston",
    address: "42a Constant Spring Road, Kingston 10, Jamaica, W.I.",
    phone: "(876) 926-2079",
    email: "info@maddensfuneralhome.com",
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-funeral-navy text-white pt-16 pb-8 overflow-hidden">
      {/* Subtle decorative gradient */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-funeral-gold/10 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: dignifiedEase }}
            viewport={{ once: true }}
          >
            <Link href="/" className="block mb-6">
              <Image
                src="/images/mfh-logo.png"
                alt="Madden's Funeral Home"
                width={200}
                height={70}
                className="h-16 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-white/70 font-light text-sm leading-relaxed mb-4">
              Helping families and friends honor their loved ones with dignity
              and compassion for over 70 years.
            </p>
            <p className="text-funeral-gold text-sm font-light italic">
              &ldquo;Let Us Lend a Helping Hand&rdquo;
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: dignifiedEase }}
            viewport={{ once: true }}
          >
            <h4 className="text-sm font-medium tracking-[0.15em] uppercase mb-6 text-funeral-gold">
              Quick Links
            </h4>
            <nav className="space-y-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-white/70 hover:text-white font-light text-sm transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: dignifiedEase }}
            viewport={{ once: true }}
          >
            <h4 className="text-sm font-medium tracking-[0.15em] uppercase mb-6 text-funeral-gold">
              Our Services
            </h4>
            <nav className="space-y-3">
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="block text-white/70 hover:text-white font-light text-sm transition-colors duration-300"
                >
                  {service.label}
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: dignifiedEase }}
            viewport={{ once: true }}
          >
            <h4 className="text-sm font-medium tracking-[0.15em] uppercase mb-6 text-funeral-gold">
              Contact Us
            </h4>
            <div className="space-y-4">
              {/* Montego Bay */}
              <div className="space-y-2">
                <p className="text-white font-medium text-sm">Montego Bay</p>
                <a
                  href="tel:+18769520212"
                  className="flex items-start gap-2 text-white/70 hover:text-white text-sm transition-colors group"
                >
                  <PhoneIcon
                    size={14}
                    className="mt-0.5 opacity-70 group-hover:opacity-100"
                  />
                  <span>(876) 952-0212</span>
                </a>
                <a
                  href="mailto:mobay@maddensfuneralhome.com"
                  className="flex items-start gap-2 text-white/70 hover:text-white text-sm transition-colors group"
                >
                  <MailIcon
                    size={14}
                    className="mt-0.5 opacity-70 group-hover:opacity-100"
                  />
                  <span>mobay@maddensfuneralhome.com</span>
                </a>
              </div>

              {/* Kingston */}
              <div className="space-y-2 pt-2">
                <p className="text-white font-medium text-sm">Kingston</p>
                <a
                  href="tel:+18769262079"
                  className="flex items-start gap-2 text-white/70 hover:text-white text-sm transition-colors group"
                >
                  <PhoneIcon
                    size={14}
                    className="mt-0.5 opacity-70 group-hover:opacity-100"
                  />
                  <span>(876) 926-2079</span>
                </a>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-2 text-white/70 text-sm pt-2">
                <ClockIcon size={14} className="mt-0.5 opacity-70" />
                <span>24/7 Support Available</span>
              </div>

              {/* Social Links */}
              <div className="flex gap-3 pt-4">
                <a
                  href="https://facebook.com"
                  aria-label="Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-md bg-white/10 hover:bg-funeral-gold flex items-center justify-center text-white transition-all duration-300"
                >
                  <FacebookIcon size={18} />
                </a>
                <a
                  href="https://instagram.com"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-md bg-white/10 hover:bg-funeral-gold flex items-center justify-center text-white transition-all duration-300"
                >
                  <InstagramIcon size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-white/10 mb-8" />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4, ease: dignifiedEase }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-white/60 font-light text-xs tracking-wider">
            &copy; {currentYear} Madden&apos;s Funeral Home Limited. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-white/50 hover:text-white font-light text-xs tracking-wider transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-white/50 hover:text-white font-light text-xs tracking-wider transition-colors duration-300"
            >
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
