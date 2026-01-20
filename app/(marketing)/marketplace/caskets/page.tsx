import type { Metadata } from "next";
import { CasketsCatalogContent } from "./content";

export const metadata: Metadata = {
  title: "Caskets | Madden's Funeral Home Marketplace",
  description:
    "Browse our selection of handcrafted caskets in wood, metal, and stainless steel finishes. View each casket in 3D and customize materials.",
};

export default function CasketsCatalogPage() {
  return <CasketsCatalogContent />;
}
