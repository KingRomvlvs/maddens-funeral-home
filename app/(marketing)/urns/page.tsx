import { Metadata } from "next";
import { UrnsContent } from "./content";

export const metadata: Metadata = {
  title: "Urns",
  description:
    "Browse our selection of wooden and ceramic cremation urns. Madden's Funeral Home offers dignified memorial options for your loved one.",
};

export default function UrnsPage() {
  return <UrnsContent />;
}
