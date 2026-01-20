import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { ConvexProvider } from "@/components/providers/ConvexProvider";
import { AuthProvider } from "@/components/providers/AuthProvider";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: "Madden's Funeral Home & Crematorium",
    template: "%s | Madden's Funeral Home",
  },
  description:
    "Over 70 years of compassionate funeral services in Jamaica. Serving Kingston, Montego Bay, and Lucea with dignity, care, and affordable service.",
  keywords: [
    "funeral home Jamaica",
    "Madden's Funeral Home",
    "cremation Jamaica",
    "funeral services Montego Bay",
    "funeral services Kingston",
    "pre-planning funeral",
    "burial services Jamaica",
  ],
  authors: [{ name: "Madden's Funeral Home" }],
  openGraph: {
    title: "Madden's Funeral Home & Crematorium",
    description:
      "Over 70 years of compassionate funeral services in Jamaica. Dignity, care, and affordable service.",
    type: "website",
    locale: "en_JM",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${roboto.variable} font-sans`}>
        <ConvexProvider>
          <AuthProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="light"
              enableSystem
              disableTransitionOnChange
            >
              {children}
            </ThemeProvider>
          </AuthProvider>
        </ConvexProvider>
      </body>
    </html>
  );
}
