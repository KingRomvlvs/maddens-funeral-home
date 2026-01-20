import { Metadata } from "next";
import { ChristmasTreatContent } from "./content";

export const metadata: Metadata = {
  title: "Christmas Treat",
  description:
    "Madden's Funeral Home annual Christmas Treat program - distributing food and joy to the elderly and disabled in our community every December.",
};

export default function ChristmasTreatPage() {
  return <ChristmasTreatContent />;
}
