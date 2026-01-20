import { Metadata } from "next";
import { CasketsContent } from "./content";

export const metadata: Metadata = {
  title: "Caskets",
  description:
    "Browse our selection of wooden, metal, stainless steel, and rental caskets. Madden's Funeral Home offers dignified options for every family.",
};

export default function CasketsPage() {
  return <CasketsContent />;
}
