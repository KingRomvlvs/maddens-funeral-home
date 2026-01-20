import { Metadata } from "next";
import { CremationContent } from "./content";

export const metadata: Metadata = {
  title: "Cremation Services",
  description:
    "Cremation services at Madden's Funeral Home. Options include service before cremation, memorial service after, and direct cremation. View our crematorium at Dovecot Memorial Park.",
};

export default function CremationPage() {
  return <CremationContent />;
}
