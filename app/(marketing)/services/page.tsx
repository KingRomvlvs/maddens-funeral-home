import { Metadata } from "next";
import { ServicesPageContent } from "./content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Comprehensive funeral services including traditional funerals, cremation, graveside services, repatriation, and pre-planning in Jamaica.",
};

export default function ServicesPage() {
  return <ServicesPageContent />;
}
