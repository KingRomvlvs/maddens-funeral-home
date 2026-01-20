"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import {
  Menu01Icon as Menu01IconData,
  Cancel01Icon as Cancel01IconData,
  Moon02Icon as Moon02IconData,
  Sun03Icon as Sun03IconData,
  ArrowRight02Icon as ArrowRight02IconData,
  ArrowLeft02Icon as ArrowLeft02IconData,
  ArrowDown01Icon as ArrowDown01IconData,
  ArrowUp01Icon as ArrowUp01IconData,
  Call02Icon as Call02IconData,
  Mail01Icon as Mail01IconData,
  Location01Icon as Location01IconData,
  Clock01Icon as Clock01IconData,
  Facebook01Icon as Facebook01IconData,
  InstagramIcon as InstagramIconData,
  // Funeral service icons
  Home01Icon as Home01IconData,
  HeartAddIcon as HeartIconData,
  Shield01Icon as Shield01IconData,
  UserGroupIcon as UserGroupIconData,
  FileEditIcon as FileEditIconData,
  StarIcon as StarIconData,
  CheckmarkCircle02Icon as CheckmarkCircle02IconData,
  QuoteUpIcon as QuoteIconData,
  Book02Icon as Book02IconData,
  HandPrayerIcon as HandPrayerIconData,
  // Contact form icons
  SentIcon as SentIconData,
  // Informational icons
  InformationCircleIcon as InformationCircleIconData,
  // Dropdown icons
  ArrowDown01Icon as ChevronDownIconData,
  // Additional service icons
  FireIcon as FireIconData,
  FlowerIcon as FlowerIconData,
  TreeIcon as TreeIconData,
  MoreHorizontalCircle01Icon as MoreIconData,
  GiftIcon as GiftIconData,
  SchoolIcon as SchoolIconData,
  Delete02Icon as Delete02IconData,
  Logout03Icon as Logout03IconData,
  InboxIcon as InboxIconData,
  User02Icon as User02IconData,
  AccountSetting02Icon as AccountSetting02IconData,
  ViewIcon as ViewIconData,
  Mail02Icon as Mail02IconData,
  ArchiveIcon as ArchiveIconData,
} from "@hugeicons/core-free-icons";

interface IconProps {
  size?: number;
  className?: string;
}

// Navigation icons
export function MenuIcon({ size = 24, className }: IconProps) {
  return <HugeiconsIcon icon={Menu01IconData} size={size} className={className} />;
}

export function CloseIcon({ size = 24, className }: IconProps) {
  return <HugeiconsIcon icon={Cancel01IconData} size={size} className={className} />;
}

export function MoonIcon({ size = 20, className }: IconProps) {
  return <HugeiconsIcon icon={Moon02IconData} size={size} className={className} />;
}

export function SunIcon({ size = 20, className }: IconProps) {
  return <HugeiconsIcon icon={Sun03IconData} size={size} className={className} />;
}

// Arrow icons
export function ArrowRightIcon({ size = 18, className }: IconProps) {
  return <HugeiconsIcon icon={ArrowRight02IconData} size={size} className={className} />;
}

export function ArrowLeftIcon({ size = 18, className }: IconProps) {
  return <HugeiconsIcon icon={ArrowLeft02IconData} size={size} className={className} />;
}

export function ArrowDownIcon({ size = 18, className }: IconProps) {
  return <HugeiconsIcon icon={ArrowDown01IconData} size={size} className={className} />;
}

export function ArrowUpIcon({ size = 18, className }: IconProps) {
  return <HugeiconsIcon icon={ArrowUp01IconData} size={size} className={className} />;
}

// Contact icons
export function PhoneIcon({ size = 18, className }: IconProps) {
  return <HugeiconsIcon icon={Call02IconData} size={size} className={className} />;
}

export function MailIcon({ size = 18, className }: IconProps) {
  return <HugeiconsIcon icon={Mail01IconData} size={size} className={className} />;
}

export function LocationIcon({ size = 18, className }: IconProps) {
  return <HugeiconsIcon icon={Location01IconData} size={size} className={className} />;
}

export function ClockIcon({ size = 18, className }: IconProps) {
  return <HugeiconsIcon icon={Clock01IconData} size={size} className={className} />;
}

// Social icons
export function FacebookIcon({ size = 18, className }: IconProps) {
  return <HugeiconsIcon icon={Facebook01IconData} size={size} className={className} />;
}

export function InstagramIcon({ size = 18, className }: IconProps) {
  return <HugeiconsIcon icon={InstagramIconData} size={size} className={className} />;
}

// Service icons
export function HomeIcon({ size = 24, className }: IconProps) {
  return <HugeiconsIcon icon={Home01IconData} size={size} className={className} />;
}

export function HeartIcon({ size = 24, className }: IconProps) {
  return <HugeiconsIcon icon={HeartIconData} size={size} className={className} />;
}

export function ShieldIcon({ size = 24, className }: IconProps) {
  return <HugeiconsIcon icon={Shield01IconData} size={size} className={className} />;
}

export function UsersIcon({ size = 24, className }: IconProps) {
  return <HugeiconsIcon icon={UserGroupIconData} size={size} className={className} />;
}

export function FileIcon({ size = 24, className }: IconProps) {
  return <HugeiconsIcon icon={FileEditIconData} size={size} className={className} />;
}

export function StarIcon({ size = 18, className }: IconProps) {
  return <HugeiconsIcon icon={StarIconData} size={size} className={className} />;
}

export function CheckIcon({ size = 18, className }: IconProps) {
  return <HugeiconsIcon icon={CheckmarkCircle02IconData} size={size} className={className} />;
}

export function QuoteIcon({ size = 32, className }: IconProps) {
  return <HugeiconsIcon icon={QuoteIconData} size={size} className={className} />;
}

export function BookIcon({ size = 24, className }: IconProps) {
  return <HugeiconsIcon icon={Book02IconData} size={size} className={className} />;
}

export function PrayerIcon({ size = 24, className }: IconProps) {
  return <HugeiconsIcon icon={HandPrayerIconData} size={size} className={className} />;
}

// Form icons
export function SendIcon({ size = 18, className }: IconProps) {
  return <HugeiconsIcon icon={SentIconData} size={size} className={className} />;
}

export function InfoIcon({ size = 18, className }: IconProps) {
  return <HugeiconsIcon icon={InformationCircleIconData} size={size} className={className} />;
}

// Dropdown icons
export function ChevronDownIcon({ size = 16, className }: IconProps) {
  return <HugeiconsIcon icon={ChevronDownIconData} size={size} className={className} />;
}

// Additional service icons
export function FireIcon({ size = 24, className }: IconProps) {
  return <HugeiconsIcon icon={FireIconData} size={size} className={className} />;
}

export function FlowerIcon({ size = 24, className }: IconProps) {
  return <HugeiconsIcon icon={FlowerIconData} size={size} className={className} />;
}

export function TreeIcon({ size = 24, className }: IconProps) {
  return <HugeiconsIcon icon={TreeIconData} size={size} className={className} />;
}

export function MoreIcon({ size = 24, className }: IconProps) {
  return <HugeiconsIcon icon={MoreIconData} size={size} className={className} />;
}

export function GiftIcon({ size = 24, className }: IconProps) {
  return <HugeiconsIcon icon={GiftIconData} size={size} className={className} />;
}

export function SchoolIcon({ size = 24, className }: IconProps) {
  return <HugeiconsIcon icon={SchoolIconData} size={size} className={className} />;
}

export function DeleteIcon({ size = 18, className }: IconProps) {
  return <HugeiconsIcon icon={Delete02IconData} size={size} className={className} />;
}

// Admin icons
export function LogoutIcon({ size = 18, className }: IconProps) {
  return <HugeiconsIcon icon={Logout03IconData} size={size} className={className} />;
}

export function InboxIcon({ size = 18, className }: IconProps) {
  return <HugeiconsIcon icon={InboxIconData} size={size} className={className} />;
}

export function UserIcon({ size = 18, className }: IconProps) {
  return <HugeiconsIcon icon={User02IconData} size={size} className={className} />;
}

export function SettingsIcon({ size = 18, className }: IconProps) {
  return <HugeiconsIcon icon={AccountSetting02IconData} size={size} className={className} />;
}

export function ViewIcon({ size = 18, className }: IconProps) {
  return <HugeiconsIcon icon={ViewIconData} size={size} className={className} />;
}

export function ReplyIcon({ size = 18, className }: IconProps) {
  return <HugeiconsIcon icon={Mail02IconData} size={size} className={className} />;
}

export function ArchiveIcon({ size = 18, className }: IconProps) {
  return <HugeiconsIcon icon={ArchiveIconData} size={size} className={className} />;
}
