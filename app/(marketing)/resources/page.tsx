import { Metadata } from "next";
import { ResourcesPageContent } from "./content";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Grief support resources, funeral planning guides, and helpful information from Madden's Funeral Home Jamaica.",
};

export default function ResourcesPage() {
  return <ResourcesPageContent />;
}
