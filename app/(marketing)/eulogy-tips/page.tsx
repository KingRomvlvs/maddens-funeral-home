import { Metadata } from "next";
import { EulogyTipsContent } from "./content";

export const metadata: Metadata = {
  title: "Eulogy Tips",
  description:
    "Guidance for writing and delivering a meaningful eulogy. Tips from Madden's Funeral Home to help you honor your loved one's memory.",
};

export default function EulogyTipsPage() {
  return <EulogyTipsContent />;
}
