import { Metadata } from "next";
import { WhenSomeoneDiesContent } from "./content";

export const metadata: Metadata = {
  title: "When Someone Dies",
  description:
    "Guidance on what to do when a loved one passes away. Madden's Funeral Home provides 24/7 support and assistance during this difficult time.",
};

export default function WhenSomeoneDiesPage() {
  return <WhenSomeoneDiesContent />;
}
