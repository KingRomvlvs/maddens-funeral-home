"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Button } from "@/components/ui/button";
import {
  PhoneIcon,
  MailIcon,
  LocationIcon,
  ClockIcon,
  SendIcon,
  CheckIcon,
} from "@/components/icons";
import { LocationMap } from "@/components/map/LocationMap";

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

export function ContactPageContent() {
  const submitContact = useMutation(api.contact.submit);
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      await submitContact({
        name: formData.name,
        email: formData.email,
        phone: formData.phone || undefined,
        subject: formData.subject,
        message: formData.message,
      });

      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      console.error("Failed to submit form:", err);
      setError("Failed to send message. Please try again or call us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    // Reset submitted state if user starts typing again
    if (isSubmitted) setIsSubmitted(false);
    if (error) setError(null);
  };

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
            Contact Us
          </span>
          <h1 className="text-4xl sm:text-5xl font-light tracking-tight mb-6">
            We&apos;re Here to Help
          </h1>
          <p className="text-lg text-muted-foreground font-light leading-relaxed">
            Our caring staff is available 24 hours a day, 7 days a week. Please
            reach out at any time.
          </p>
        </motion.div>
      </section>

      {/* Contact Info & Form */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-20">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h2 className="text-2xl font-light mb-8">Contact Information</h2>

            {/* 24/7 Notice */}
            <div className="flex items-center gap-3 p-4 bg-funeral-gold/10 rounded-md mb-8">
              <ClockIcon size={20} className="text-funeral-gold" />
              <span className="text-sm font-medium">
                Available 24 hours a day, 7 days a week
              </span>
            </div>

            {/* Locations */}
            <div className="space-y-8">
              {locations.map((location) => (
                <div key={location.name} className="space-y-3">
                  <h3 className="font-medium text-lg text-funeral-gold">
                    {location.name}
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-3">
                      <LocationIcon
                        size={16}
                        className="text-muted-foreground mt-0.5 shrink-0"
                      />
                      <span className="text-muted-foreground font-light">
                        {location.address}
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <PhoneIcon
                        size={16}
                        className="text-muted-foreground mt-0.5 shrink-0"
                      />
                      <div>
                        <a
                          href={`tel:${location.phone.replace(/[^0-9+]/g, "")}`}
                          className="text-foreground hover:text-funeral-gold transition-colors block"
                        >
                          {location.phone}
                        </a>
                        {location.phone2 && (
                          <a
                            href={`tel:${location.phone2.replace(
                              /[^0-9+]/g,
                              ""
                            )}`}
                            className="text-muted-foreground hover:text-funeral-gold transition-colors block"
                          >
                            {location.phone2}
                          </a>
                        )}
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
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
                </div>
              ))}
            </div>

            {/* US Contact */}
            <div className="mt-8 pt-8 border-t border-border">
              <h3 className="font-medium mb-3">US Contact</h3>
              <a
                href="tel:+19543249550"
                className="flex items-center gap-3 text-foreground hover:text-funeral-gold transition-colors"
              >
                <PhoneIcon size={16} className="text-muted-foreground" />
                <span>(954) 324-9550</span>
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="bg-muted/30 rounded-lg p-6 lg:p-8">
              <h2 className="text-2xl font-light mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      Name <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-funeral-gold/50 transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Email <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-funeral-gold/50 transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium mb-2"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-funeral-gold/50 transition-all"
                      placeholder="(876) 000-0000"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium mb-2"
                    >
                      Subject <span className="text-destructive">*</span>
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-funeral-gold/50 transition-all"
                    >
                      <option value="">Select a subject</option>
                      <option value="immediate-need">Immediate Need</option>
                      <option value="pre-planning">Pre-Planning Inquiry</option>
                      <option value="services">Services Information</option>
                      <option value="pricing">Pricing Information</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message <span className="text-destructive">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-funeral-gold/50 transition-all resize-none"
                    placeholder="How can we help you?"
                  />
                </div>

                {isSubmitted ? (
                  <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                    <CheckIcon size={20} />
                    <span className="font-medium">
                      Thank you! We&apos;ll be in touch shortly.
                    </span>
                  </div>
                ) : (
                  <Button
                    type="submit"
                    className="w-full sm:w-auto rounded-md uppercase tracking-wider"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <SendIcon size={18} />
                        Send Message
                      </>
                    )}
                  </Button>
                )}
                {error && (
                  <p className="text-sm text-destructive mt-2">{error}</p>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true }}
          className="bg-muted/30 rounded-lg p-8"
        >
          <div className="text-center mb-6">
            <h2 className="text-2xl font-light mb-4">Visit Our Locations</h2>
            <p className="text-muted-foreground font-light">
              Our facilities are open for visitation and viewing services.
            </p>
          </div>
          <LocationMap />
        </motion.div>
      </section>
    </div>
  );
}
