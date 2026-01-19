# Product Requirements Document - Madden's Funeral Home Website

> **Version:** 1.0
> **Last Updated:** January 2026
> **Status:** Phase 1 Complete

---

## 1. Executive Summary

### 1.1 Product Vision
A modern, dignified website for Madden's Funeral Home & Crematorium that honors their 70+ year legacy of serving Jamaican families while providing a compassionate digital experience for those seeking funeral services.

### 1.2 Business Goals
- Establish a premium digital presence befitting Jamaica's leading funeral home
- Provide 24/7 access to service information and contact details
- Enable families to explore pre-planning options
- Offer grief support resources
- Showcase all three locations (Montego Bay, Kingston, Lucea)

### 1.3 Target Audience
- **Primary:** Jamaicans seeking immediate funeral services
- **Secondary:** Families considering pre-planning
- **Tertiary:** Jamaican diaspora arranging services from abroad (US, UK, Canada)

---

## 2. Feature Tracker

### 2.1 Phase 1: Core Website (MVP) - COMPLETE

| Feature | Status | Notes |
|---------|--------|-------|
| Homepage | [x] Complete | Hero, services preview, testimonials, CTA |
| Services Page | [x] Complete | 6 service categories with descriptions |
| About Page | [x] Complete | History, values, locations, community |
| Contact Page | [x] Complete | Form, all location info, map placeholder |
| Pre-Planning Page | [x] Complete | Benefits, FAQ, consultation CTA |
| Resources Page | [x] Complete | Grief support, eulogy tips, planning guides |
| Responsive Design | [x] Complete | Mobile-first, tested on all breakpoints |
| Dark Mode | [x] Complete | Warm charcoal, not pure black |
| Navigation | [x] Complete | Fixed navbar with top contact bar |
| Footer | [x] Complete | All locations, social links |

### 2.2 Phase 2: Enhanced Features - PENDING

| Feature | Status | Priority | Notes |
|---------|--------|----------|-------|
| Contact Form Backend | [ ] Pending | High | Email notifications to staff |
| Google Maps Integration | [ ] Pending | Medium | Interactive maps for both locations |
| Image Gallery | [ ] Pending | Medium | Facility photos, chapel images |
| Testimonials CMS | [ ] Pending | Low | Admin-managed testimonials |
| Blog/News Section | [ ] Pending | Low | Community updates, grief articles |
| Live Chat Widget | [ ] Pending | Low | 24/7 support integration |

### 2.3 Phase 3: Advanced Features - FUTURE

| Feature | Status | Priority | Notes |
|---------|--------|----------|-------|
| Online Pre-Planning Portal | [ ] Future | Medium | Digital forms, document upload |
| Service Catalog with Pricing | [ ] Future | Medium | Caskets, urns, packages |
| Obituary Publishing | [ ] Future | High | Family-submitted obituaries |
| Memorial Pages | [ ] Future | Medium | Digital tributes |
| Payment Integration | [ ] Future | Low | Pre-planning deposits |
| Multi-language Support | [ ] Future | Low | Spanish, Patois options |

---

## 3. Technical Requirements

### 3.1 Completed

| Requirement | Implementation |
|-------------|----------------|
| Framework | Next.js 16 (App Router) |
| Styling | Tailwind CSS v4 with @theme inline |
| Typography | Roboto (weights 300-500) |
| Icons | HugeIcons (wrapped in icons.tsx) |
| Animation | Framer Motion (0.6-0.8s dignified) |
| Theme | next-themes (light/dark toggle) |
| Build System | Bun |
| Dev Port | 3005 |

### 3.2 Pending

| Requirement | Planned Implementation |
|-------------|----------------------|
| Contact Form | Server action or external service |
| Analytics | Vercel Analytics or Google Analytics |
| SEO | Dynamic meta tags, sitemap |
| Performance | Image optimization, lazy loading |
| Deployment | Vercel |

---

## 4. Design Requirements

### 4.1 Completed

| Element | Specification | Status |
|---------|--------------|--------|
| Dark Mode Color | Warm Charcoal (oklch 0.15 0.01 60) | [x] Complete |
| Primary Color | Deep Navy (oklch 0.28 0.06 250) | [x] Complete |
| Accent Color | Muted Gold (oklch 0.78 0.14 80) | [x] Complete |
| Font Size | 17-18px base (older audience) | [x] Complete |
| Animations | 0.6-0.8s dignified transitions | [x] Complete |
| Corners | Sharper (rounded-md, not rounded-2xl) | [x] Complete |
| Glassmorphism | Subtle backdrop blur effects | [x] Complete |

### 4.2 Content Tone

| Guideline | Status |
|-----------|--------|
| Compassionate, warm language | [x] Implemented |
| Professional but not cold | [x] Implemented |
| 70+ years heritage emphasized | [x] Implemented |
| 24/7 availability highlighted | [x] Implemented |
| No aggressive sales language | [x] Verified |

---

## 5. Page Specifications

### 5.1 Homepage (/)

**Sections Implemented:**
1. Hero - Tagline, trust badges, CTAs
2. Services Preview - 6 service cards
3. About Preview - Company story teaser
4. Testimonials - 3 family testimonials
5. CTA - Contact call-to-action

**Key Metrics:**
- Trust indicators: 70+ years, 3 locations, 24/7
- Primary CTA: Contact Us
- Secondary CTA: Call now

### 5.2 Services (/services)

**Service Categories:**
1. Traditional Funeral Services
2. Cremation Services
3. Graveside Services
4. Repatriation Services
5. Pre-Planning Services
6. Cemetery Services

Each service includes: description, key features, CTA

### 5.3 About (/about)

**Content Sections:**
1. Hero with company intro
2. Our Story (70+ year history)
3. Values (4 core values)
4. Locations (Montego Bay, Kingston)
5. Community involvement

### 5.4 Contact (/contact)

**Features:**
1. Contact form (Name, Email, Phone, Subject, Message)
2. Montego Bay location info
3. Kingston location info
4. US contact number
5. 24/7 availability badge
6. Map placeholder (future: Google Maps)

### 5.5 Pre-Planning (/pre-planning)

**Content:**
1. Why pre-plan benefits
2. What's included list
3. FAQ section (4 questions)
4. Consultation CTA

### 5.6 Resources (/resources)

**Content Categories:**
1. When Someone Dies - First steps guide
2. Eulogy Tips - Writing guidance
3. Grief & Healing - Support articles
4. Planning Resources - Checklists

---

## 6. Deployment Checklist

### Pre-Launch

- [ ] Verify all pages build without errors
- [ ] Test responsive design on all devices
- [ ] Verify dark mode consistency
- [ ] Check all links work correctly
- [ ] Test contact form (when backend ready)
- [ ] Add Google Analytics (when ready)
- [ ] Create sitemap.xml
- [ ] Add robots.txt
- [ ] Set up custom domain
- [ ] Configure SSL certificate

### Post-Launch

- [ ] Monitor Vercel analytics
- [ ] Gather user feedback
- [ ] Iterate on content based on family needs
- [ ] Plan Phase 2 features based on usage data

---

## 7. Success Metrics

### Key Performance Indicators

| Metric | Target | Measurement |
|--------|--------|-------------|
| Page Load Time | < 3s | Lighthouse |
| Mobile Score | > 90 | Lighthouse |
| Contact Form Submissions | Track | Analytics |
| Phone Call Clicks | Track | Analytics |
| Average Session Duration | > 2min | Analytics |
| Bounce Rate | < 50% | Analytics |

---

## 8. Changelog

### v1.0.0 (January 2026)
- Initial release with all Phase 1 features
- Homepage, Services, About, Contact, Pre-Planning, Resources pages
- Responsive design with dark mode
- Framer Motion animations
- HugeIcons integration

---

*Document maintained by development team. Update after each feature implementation.*
