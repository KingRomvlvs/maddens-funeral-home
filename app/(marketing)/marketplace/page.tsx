import type { Metadata } from "next";
import { MarketplaceContent } from "./content";

export const metadata: Metadata = {
  title: "Marketplace | Madden's Funeral Home",
  description:
    "Explore our selection of caskets and urns. View products in 3D and customize finishes to find the perfect tribute for your loved one.",
};

export default function MarketplacePage() {
  return <MarketplaceContent />;
}
