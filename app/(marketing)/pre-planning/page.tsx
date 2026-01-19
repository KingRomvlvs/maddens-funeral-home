import { Metadata } from "next";
import { PrePlanningPageContent } from "./content";

export const metadata: Metadata = {
  title: "Pre-Planning",
  description:
    "Plan ahead for peace of mind. Madden's Funeral Home offers pre-planning services to document your wishes and ease the burden on your family.",
};

export default function PrePlanningPage() {
  return <PrePlanningPageContent />;
}
