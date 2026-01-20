import type { Metadata } from "next";
import { UrnsCatalogContent } from "./content";

export const metadata: Metadata = {
  title: "Urns | Madden's Funeral Home Marketplace",
  description:
    "Browse our collection of memorial urns in various styles and materials. View each urn in 3D and customize finishes.",
};

export default function UrnsCatalogPage() {
  return <UrnsCatalogContent />;
}
