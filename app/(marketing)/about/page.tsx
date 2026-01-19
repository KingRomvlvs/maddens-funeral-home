import { Metadata } from "next";
import { AboutPageContent } from "./content";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Madden's Funeral Home - over 70 years of compassionate funeral services in Jamaica. Our history, mission, and commitment to families.",
};

export default function AboutPage() {
  return <AboutPageContent />;
}
