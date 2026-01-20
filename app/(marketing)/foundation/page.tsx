import { Metadata } from "next";
import { FoundationContent } from "./content";

export const metadata: Metadata = {
  title: "Leslie Ruel Madden Foundation",
  description:
    "The Leslie Ruel Madden Foundation provides annual educational grants to Jamaican children in need who excel academically. Learn about our community programs.",
};

export default function FoundationPage() {
  return <FoundationContent />;
}
