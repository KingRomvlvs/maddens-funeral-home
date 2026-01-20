"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
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
  ChevronDownIcon,
} from "@/components/icons";

// Dignified easing - slower and more graceful
const dignifiedEase: [number, number, number, number] = [0.4, 0, 0.2, 1];

// Navigation structure with dropdowns
const navItems = [
  { href: "/", label: "Home" },
  {
    label: "Information",
    dropdown: [
      { href: "/when-someone-dies", label: "When Someone Dies" },
      { href: "/caskets", label: "Caskets" },
      { href: "/urns", label: "Urns" },
      { href: "/cremation", label: "Cremation" },
      { href: "/eulogy-tips", label: "Eulogy Tips" },
    ],
  },
  {
    label: "Marketplace",
    dropdown: [
      { href: "/marketplace", label: "Browse All Products" },
      { href: "/marketplace/caskets", label: "Caskets Collection" },
      { href: "/marketplace/urns", label: "Urns Collection" },
    ],
  },
  { href: "/cemetery", label: "Cemetery" },
  {
    label: "Community",
    dropdown: [
      { href: "/foundation", label: "Leslie Ruel Madden Foundation" },
      { href: "/christmas-treat", label: "Christmas Treat" },
    ],
  },
  { href: "/about", label: "About Us" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [openDropdown, setOpenDropdown] = React.useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = React.useState<string | null>(null);
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
    setOpenDropdown(null);
    setMobileDropdown(null);
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
            <Image
              src="/images/mfh-logo.png"
              alt="Madden's Funeral Home"
              width={180}
              height={60}
              className="h-12 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) =>
              item.dropdown ? (
                <DropdownNav
                  key={item.label}
                  label={item.label}
                  items={item.dropdown}
                  isOpen={openDropdown === item.label}
                  onOpen={() => setOpenDropdown(item.label)}
                  onClose={() => setOpenDropdown(null)}
                  pathname={pathname}
                />
              ) : (
                <NavLink
                  key={item.href}
                  href={item.href!}
                  isActive={pathname === item.href}
                >
                  {item.label}
                </NavLink>
              )
            )}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            {/* Phone Number - Desktop */}
            <a
              href="tel:+18769520212"
              className="hidden lg:flex items-center gap-2 text-sm text-muted-foreground hover:text-funeral-gold transition-colors"
            >
              <PhoneIcon size={16} />
              <span>(876) 952-0212</span>
            </a>

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
              className="relative h-full flex flex-col pt-28 pb-8 px-8 overflow-y-auto"
            >
              <div className="flex flex-col gap-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: index * 0.08,
                      duration: 0.5,
                      ease: dignifiedEase,
                    }}
                  >
                    {item.dropdown ? (
                      <MobileDropdown
                        label={item.label}
                        items={item.dropdown}
                        isOpen={mobileDropdown === item.label}
                        onToggle={() =>
                          setMobileDropdown(
                            mobileDropdown === item.label ? null : item.label
                          )
                        }
                        pathname={pathname}
                      />
                    ) : (
                      <Link
                        href={item.href!}
                        className={cn(
                          "block text-lg font-normal tracking-wide transition-colors py-3 border-b border-border/50",
                          pathname === item.href
                            ? "text-foreground"
                            : "text-muted-foreground hover:text-foreground"
                        )}
                      >
                        {item.label}
                      </Link>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Mobile Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: navItems.length * 0.08,
                  duration: 0.5,
                  ease: dignifiedEase,
                }}
                className="mt-8 pt-8 border-t border-border"
              >
                <a
                  href="tel:+18769520212"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-4"
                >
                  <PhoneIcon size={16} />
                  <span>(876) 952-0212</span>
                </a>
                <p className="text-sm text-muted-foreground mb-4">
                  37 Union Street, Montego Bay, Jamaica
                </p>
                <Link href="/contact">
                  <Button className="w-full rounded-md uppercase tracking-wider">
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

// Desktop Dropdown Navigation
interface DropdownNavProps {
  label: string;
  items: { href: string; label: string }[];
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  pathname: string;
}

function DropdownNav({
  label,
  items,
  isOpen,
  onOpen,
  onClose,
  pathname,
}: DropdownNavProps) {
  const isActive = items.some((item) => pathname === item.href);
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    onOpen();
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(onClose, 150);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className={cn(
          "flex items-center gap-1 text-sm font-medium tracking-wide transition-colors",
          isActive
            ? "text-foreground"
            : "text-muted-foreground hover:text-foreground"
        )}
      >
        {label}
        <ChevronDownIcon
          size={14}
          className={cn(
            "transition-transform duration-300",
            isOpen && "rotate-180"
          )}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2, ease: dignifiedEase }}
            className="absolute top-full left-0 mt-2 py-2 min-w-[220px] bg-background/95 backdrop-blur-xl border border-border rounded-md shadow-lg"
          >
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "block px-4 py-2 text-sm transition-colors",
                  pathname === item.href
                    ? "text-funeral-gold bg-funeral-gold/5"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                )}
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Mobile Dropdown
interface MobileDropdownProps {
  label: string;
  items: { href: string; label: string }[];
  isOpen: boolean;
  onToggle: () => void;
  pathname: string;
}

function MobileDropdown({
  label,
  items,
  isOpen,
  onToggle,
  pathname,
}: MobileDropdownProps) {
  const isActive = items.some((item) => pathname === item.href);

  return (
    <div className="border-b border-border/50">
      <button
        onClick={onToggle}
        className={cn(
          "w-full flex items-center justify-between text-lg font-normal tracking-wide transition-colors py-3",
          isActive
            ? "text-foreground"
            : "text-muted-foreground hover:text-foreground"
        )}
      >
        {label}
        <ChevronDownIcon
          size={18}
          className={cn(
            "transition-transform duration-300",
            isOpen && "rotate-180"
          )}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: dignifiedEase }}
            className="overflow-hidden"
          >
            <div className="pl-4 pb-3 space-y-1">
              {items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "block py-2 text-base transition-colors",
                    pathname === item.href
                      ? "text-funeral-gold"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Simple Nav Link
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
