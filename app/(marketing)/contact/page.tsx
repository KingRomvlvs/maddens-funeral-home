import { Metadata } from "next";
import { ContactPageContent } from "./content";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Madden's Funeral Home. Available 24/7 in Kingston, Montego Bay, and Lucea, Jamaica. Call (876) 952-0212.",
};

export default function ContactPage() {
  return <ContactPageContent />;
}
