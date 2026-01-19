"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  MenuIcon,
  CloseIcon,
  MoonIcon,
  SunIcon,
  PhoneIcon,
} from "@/components/icons";

// Dignified easing - slower and more graceful
const dignifiedEase: [number, number, number, number] = [0.4, 0, 0.2, 1];

const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About Us" },
  { href: "/pre-planning", label: "Pre-Planning" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  React.useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  React.useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Top Contact Bar */}
      <div className="hidden md:block bg-funeral-navy text-white py-2">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between text-sm">
          <div className="flex items-center gap-6">
            <a
              href="tel:+18769520212"
              className="flex items-center gap-2 hover:text-funeral-gold transition-colors"
            >
              <PhoneIcon size={14} />
              <span>(876) 952-0212</span>
            </a>
            <span className="text-white/60">
              37 Union Street, Montego Bay, Jamaica
            </span>
          </div>
          <span className="text-white/80 font-light">
            Serving Jamaica for Over 70 Years
          </span>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={cn(
          "sticky top-0 left-0 right-0 h-20 transition-all duration-500",
          isMobileMenuOpen ? "z-[70]" : "z-50",
          isScrolled || isMobileMenuOpen
            ? "bg-background/95 backdrop-blur-[20px] border-b border-border shadow-sm"
            : "bg-background/80 backdrop-blur-sm"
        )}
      >
        <nav className="h-full max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-normal tracking-wide">
                Madden&apos;s
              </span>
              <span className="text-xs tracking-[0.15em] uppercase text-muted-foreground">
                Funeral Home & Crematorium
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                isActive={pathname === item.href}
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="rounded-md"
              >
                {theme === "dark" ? (
                  <SunIcon size={20} />
                ) : (
                  <MoonIcon size={20} />
                )}
                <span className="sr-only">Toggle theme</span>
              </Button>
            )}

            {/* Contact CTA - Desktop */}
            <Link href="/contact" className="hidden lg:block">
              <Button className="rounded-md uppercase tracking-wider text-xs">
                Contact Us
              </Button>
            </Link>

            {/* Mobile Menu Toggle */}
            <Button
              variant={isMobileMenuOpen ? "outline" : "ghost"}
              size="icon"
              className="lg:hidden rounded-md"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <AnimatePresence mode="wait" initial={false}>
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.3, ease: dignifiedEase }}
                  >
                    <CloseIcon size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.3, ease: dignifiedEase }}
                  >
                    <MenuIcon size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: dignifiedEase }}
            className="fixed inset-0 z-[60] lg:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: dignifiedEase }}
              className="absolute inset-0 bg-background/98 backdrop-blur-xl"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Content */}
            <motion.nav
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: dignifiedEase }}
              className="relative h-full flex flex-col items-center pt-28 pb-8 px-8 overflow-y-auto"
            >
              <div className="flex flex-col items-center gap-6">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: index * 0.1,
                      duration: 0.5,
                      ease: dignifiedEase,
                    }}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "text-xl font-normal tracking-wide transition-colors py-2",
                        pathname === item.href
                          ? "text-foreground"
                          : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Mobile Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: navItems.length * 0.1,
                  duration: 0.5,
                  ease: dignifiedEase,
                }}
                className="mt-12 text-center"
              >
                <a
                  href="tel:+18769520212"
                  className="flex items-center justify-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-4"
                >
                  <PhoneIcon size={16} />
                  <span>(876) 952-0212</span>
                </a>
                <Link href="/contact">
                  <Button className="rounded-md uppercase tracking-wider">
                    Contact Us
                  </Button>
                </Link>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

interface NavLinkProps {
  href: string;
  isActive: boolean;
  children: React.ReactNode;
}

function NavLink({ href, isActive, children }: NavLinkProps) {
  return (
    <Link href={href} className="relative group">
      <span
        className={cn(
          "text-sm font-medium tracking-wide transition-colors",
          isActive
            ? "text-foreground"
            : "text-muted-foreground hover:text-foreground"
        )}
      >
        {children}
      </span>
      {/* Subtle underline */}
      <motion.span
        className="absolute -bottom-1 left-0 h-[1px] bg-funeral-gold"
        initial={{ width: isActive ? "100%" : "0%" }}
        animate={{ width: isActive ? "100%" : "0%" }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.3, ease: dignifiedEase }}
      />
    </Link>
  );
}
