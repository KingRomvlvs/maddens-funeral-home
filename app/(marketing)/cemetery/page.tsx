import { Metadata } from "next";
import { CemeteryContent } from "./content";

export const metadata: Metadata = {
  title: "Cemetery - Dovecot Memorial Parks",
  description:
    "Dovecot Memorial Parks - family-owned cemetery and crematorium facilities in Montego Bay and Spanish Town. Beautiful garden settings for eternal rest.",
};

export default function CemeteryPage() {
  return <CemeteryContent />;
}
