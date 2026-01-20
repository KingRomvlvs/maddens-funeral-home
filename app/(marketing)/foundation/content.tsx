"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { PhoneIcon, ArrowRightIcon, SchoolIcon } from "@/components/icons";

export function FoundationContent() {
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
            Community Service
          </span>
          <h1 className="text-4xl sm:text-5xl font-light tracking-tight mb-6">
            Leslie Ruel Madden Foundation
          </h1>
          <p className="text-lg text-muted-foreground font-light leading-relaxed">
            Empowering Jamaica&apos;s youth through education.
          </p>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-md bg-funeral-gold/10 flex items-center justify-center">
                <SchoolIcon size={24} className="text-funeral-gold" />
              </div>
              <span className="text-lg font-medium">Positive on Life</span>
            </div>

            <p className="text-muted-foreground font-light leading-relaxed mb-6">
              This is an annual event that is done by the Madden&apos;s Montego
              Bay branch in memory of the late Leslie Madden Senior. Every
              September, an educational grant is given to children in need who
              excel despite their circumstances.
            </p>

            <p className="text-muted-foreground font-light leading-relaxed mb-6">
              The Leslie Ruel Madden Foundation was established to continue the
              legacy of caring for the community that has been a hallmark of the
              Madden family for over 70 years. We believe that every child
              deserves the opportunity to pursue their educational dreams,
              regardless of their financial circumstances.
            </p>

            <div className="bg-muted/30 rounded-lg p-6">
              <h3 className="font-medium mb-3">Program Highlights</h3>
              <ul className="space-y-2">
                {[
                  "Annual educational grants for deserving students",
                  "Support for children who excel academically despite hardship",
                  "Ceremony held every September",
                  "Operated by the Montego Bay branch",
                  "In loving memory of Leslie Madden Senior",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <span className="w-1.5 h-1.5 bg-funeral-gold rounded-full mt-2 shrink-0" />
                    <span className="text-muted-foreground font-light">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="/images/community/DSC_8069.jpg"
                alt="Educational grant presentation"
                fill
                className="object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src="/images/community/DSC_8112.jpg"
                  alt="Grant recipient"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src="/images/community/DSC_8056.jpg"
                  alt="Foundation ceremony"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Legacy Section */}
      <section className="bg-muted/30 py-16 mb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-2xl sm:text-3xl font-light mb-6">
              In Memory of Leslie Madden Senior
            </h2>
            <p className="text-muted-foreground font-light leading-relaxed mb-6">
              Leslie Ferdinand Madden founded Madden&apos;s Funeral Home with a
              simple belief: that every person deserves dignity in death,
              regardless of their financial circumstances. This same spirit of
              compassion and community service lives on through the Foundation
              that bears his name.
            </p>
            <p className="text-muted-foreground font-light leading-relaxed">
              By supporting the education of Jamaica&apos;s youth, we honor his
              memory and continue his legacy of service to the community.
            </p>
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
            Learn More About Our Programs
          </h2>
          <p className="text-white/80 font-light max-w-xl mx-auto mb-8">
            Contact us to learn more about the Leslie Ruel Madden Foundation and
            how we support Jamaica&apos;s youth.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:+18769520212">
              <Button className="bg-funeral-gold text-funeral-navy hover:bg-funeral-gold/90 rounded-md uppercase tracking-wider">
                <PhoneIcon size={18} />
                (876) 952-0212
              </Button>
            </a>
            <Link href="/christmas-treat">
              <Button
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 rounded-md uppercase tracking-wider"
              >
                Christmas Treat Program
                <ArrowRightIcon size={18} />
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
