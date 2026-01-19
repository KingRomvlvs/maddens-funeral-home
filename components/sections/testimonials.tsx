"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { QuoteIcon } from "@/components/icons";

const testimonials = [
  {
    quote:
      "Just want to say a big thank you and to the team for the hard work that was put into my grandfather's funeral.",
    author: "Nadine Earle",
    location: "Montego Bay",
  },
  {
    quote:
      "During my time of grief, I would like to appreciate your patience and I would love to take the time out to say Thank You so much for your time, patience and cooperation.",
    author: "Dotlin Thompson & Family",
    location: "of the late Rupert Thompson",
  },
  {
    quote:
      "I want to thank the Montego Bay branch for the excellent job done at my grandparents funeral.",
    author: "Rupert D. Randall",
    location: "Montego Bay",
  },
  {
    quote:
      "I can't find the words to express our sincere gratitude in accommodating us!! Excellent service all around, great team!!",
    author: "Marlene Morse",
    location: "Kingston",
  },
];

export function TestimonialsSection() {
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
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight mb-4">
            Words from Families We&apos;ve Served
          </h2>
          <p className="text-muted-foreground font-light max-w-2xl mx-auto">
            We are honored to have helped so many families during their time of
            need.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.4, 0, 0.2, 1],
              }}
              viewport={{ once: true }}
              className="bg-background rounded-lg p-6 lg:p-8 border border-border"
            >
              <QuoteIcon
                size={32}
                className="text-funeral-gold/30 mb-4"
              />
              <blockquote className="text-muted-foreground font-light leading-relaxed mb-6 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-funeral-gold/10 flex items-center justify-center">
                  <span className="text-funeral-gold font-medium text-sm">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-sm">{testimonial.author}</p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
