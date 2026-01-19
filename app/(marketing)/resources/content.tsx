"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  BookIcon,
  HeartIcon,
  PrayerIcon,
  FileIcon,
  ArrowRightIcon,
} from "@/components/icons";

const resources = [
  {
    icon: HeartIcon,
    title: "When Someone Dies",
    description:
      "A guide to the first steps you should take when a loved one passes away.",
    content: [
      "Contact a funeral home - we're available 24/7",
      "Gather important documents (ID, insurance policies)",
      "Notify immediate family and close friends",
      "Begin making funeral arrangements",
      "Consider pre-planning for yourself",
    ],
  },
  {
    icon: BookIcon,
    title: "Eulogy Tips",
    description:
      "Guidance for writing and delivering a meaningful eulogy for your loved one.",
    content: [
      "Gather stories and memories from family and friends",
      "Focus on what made your loved one unique",
      "Include specific anecdotes and examples",
      "Keep it personal and authentic",
      "Practice reading it aloud beforehand",
      "It's okay to show emotion",
    ],
  },
  {
    icon: PrayerIcon,
    title: "Grief & Healing",
    description:
      "Resources and articles to help you navigate the grieving process.",
    articles: [
      {
        title: "Helping a Friend in Grief",
        excerpt:
          "A friend has experienced the death of someone loved. You want to help, but you are not sure how to go about it...",
      },
      {
        title: "Love and Grief",
        excerpt:
          "Love is a sacred partnership of communion with another human being. You take each other in, and even when you are apart, you are together...",
      },
      {
        title: "Understanding the Grieving Process",
        excerpt:
          "Grief is a natural response to loss. Understanding its stages can help you navigate this difficult journey...",
      },
    ],
  },
  {
    icon: FileIcon,
    title: "Planning Resources",
    description:
      "Helpful documents and checklists for funeral planning.",
    content: [
      "Funeral planning checklist",
      "Questions to ask when arranging a funeral",
      "Understanding your options (burial vs. cremation)",
      "What to bring to the arrangement conference",
      "How to write an obituary",
    ],
  },
];

export function ResourcesPageContent() {
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
            Resources
          </span>
          <h1 className="text-4xl sm:text-5xl font-light tracking-tight mb-6">
            Helpful Information & Support
          </h1>
          <p className="text-lg text-muted-foreground font-light leading-relaxed">
            We&apos;ve compiled resources to help you during this difficult
            time. Whether you&apos;re planning a service or coping with loss,
            we&apos;re here to help.
          </p>
        </motion.div>
      </section>

      {/* Resources Grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="space-y-12">
          {resources.map((resource, index) => {
            const Icon = resource.icon;
            return (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.4, 0, 0.2, 1],
                }}
                viewport={{ once: true }}
                className="bg-muted/30 rounded-lg p-6 lg:p-8"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-md bg-funeral-gold/10 flex items-center justify-center shrink-0">
                    <Icon size={24} className="text-funeral-gold" />
                  </div>
                  <div>
                    <h2 className="text-xl font-medium mb-2">
                      {resource.title}
                    </h2>
                    <p className="text-muted-foreground font-light">
                      {resource.description}
                    </p>
                  </div>
                </div>

                {resource.content && (
                  <ul className="space-y-2 ml-16">
                    {resource.content.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-start gap-2 text-sm"
                      >
                        <span className="w-1.5 h-1.5 bg-funeral-gold rounded-full mt-2 shrink-0" />
                        <span className="text-muted-foreground font-light">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}

                {resource.articles && (
                  <div className="ml-16 space-y-4">
                    {resource.articles.map((article, articleIndex) => (
                      <div
                        key={articleIndex}
                        className="bg-background rounded-md p-4 border border-border"
                      >
                        <h3 className="font-medium mb-2">{article.title}</h3>
                        <p className="text-sm text-muted-foreground font-light">
                          {article.excerpt}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
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
            Need Personal Assistance?
          </h2>
          <p className="text-white/80 font-light max-w-xl mx-auto mb-8">
            Our caring staff is available 24/7 to answer your questions and
            provide support during this difficult time.
          </p>
          <Link href="/contact">
            <Button className="bg-funeral-gold text-funeral-navy hover:bg-funeral-gold/90 rounded-md uppercase tracking-wider">
              Contact Us
              <ArrowRightIcon size={18} />
            </Button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
