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

### 2.2 Phase 2: Enhanced Features - IN PROGRESS

| Feature | Status | Priority | Notes |
|---------|--------|----------|-------|
| Interactive Map | [x] Complete | Medium | Leaflet maps showing both locations |
| AI Chat Widget | [x] Complete | High | Convex-powered AI assistant with topic filtering |
| Logo Integration | [x] Complete | High | Brand logo in navbar and footer |
| CEO Tribute | [x] Complete | Medium | Leslie Ruel Madden Jr. tribute section |
| Awards Section | [x] Complete | Medium | Recognition & awards on About page |
| 3D Product Marketplace | [x] Complete | High | Interactive 3D caskets/urns with material customization |
| Contact Form Backend | [ ] Pending | High | Email notifications to staff |
| Image Gallery | [ ] Pending | Medium | Facility photos, chapel images |
| Testimonials CMS | [ ] Pending | Low | Admin-managed testimonials |
| Blog/News Section | [ ] Pending | Low | Community updates, grief articles |

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

### 3.2 Recently Implemented

| Requirement | Implementation |
|-------------|----------------|
| Interactive Maps | Leaflet + react-leaflet |
| AI Chat | Convex + OpenRouter API (gpt-4o-mini) |
| Backend | Convex (schema, actions, rate limiting) |
| RAG/Vector Database | Convex vector search + OpenRouter embeddings |
| 3D Product Viewer | React Three Fiber + Drei |
| 3D Models | GLTF/GLB with placeholder geometry fallback |

### 3.3 Pending

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

### 5.7 Marketplace (/marketplace)

**Pages:**
1. Marketplace Landing - Category selection (caskets, urns)
2. Caskets Catalog - Grid of casket products
3. Urns Catalog - Grid of urn products
4. Product Detail - 3D viewer with customization

**3D Viewer Features:**
- Orbit controls (rotate, zoom)
- Material swatches (wood, metal finishes)
- Interior fabric options (caskets only)
- WebGL fallback to static images
- Touch gesture support on mobile

**Products:**
- Caskets: Classic Mahogany, Heritage Oak, Presidential Bronze, Stainless Elegance
- Urns: Serenity Bronze, Heritage Mahogany, Classic Silver

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

### v1.3.0 (January 2026)
- Added 3D Product Marketplace with interactive viewer
  - React Three Fiber + Drei for 3D rendering
  - Interactive casket and urn 3D models with orbit controls
  - Material customization (wood, metal, stainless steel finishes)
  - Interior fabric options for caskets (velvet, satin, crepe)
  - WebGL detection with static image fallback
  - Responsive design with touch gesture support
  - Product catalog with category pages
  - Routes: /marketplace, /marketplace/caskets, /marketplace/urns
  - 4 casket products + 3 urn products with 3D views

### v1.2.0 (January 2026)
- Added RAG/Vector Database system for AI knowledge base
  - `businessInfo` table with vector embeddings (1536 dimensions)
  - Categories: service, location, faq, policy, pricing, general
  - OpenRouter text-embedding-3-small for embeddings
  - Vector similarity search with configurable minimum score
  - Bulk ingest action for seeding business data
- AI chat now searches RAG for relevant context before responding
- Split Convex functions: `rag.ts` (actions) and `ragDb.ts` (mutations/queries)

### v1.1.0 (January 2026)
- Added AI Chat Widget with Convex integration
  - Topic filtering to conserve tokens (only responds to funeral-related queries)
  - Rate limiting (10 messages per hour for anonymous users)
  - Conversation persistence in database
  - Fallback to simulated responses when Convex not configured
  - Full-screen mobile experience
- Added Interactive Map (Leaflet)
  - Shows Montego Bay and Kingston locations
  - Custom markers with brand colors
  - Location toggle buttons
- Added brand logo to navbar and footer
- Added CEO tribute section for Leslie Ruel Madden Jr.
- Added Awards & Recognition section (Howard University IMPACT Award)
- Updated hero section with new image layout
- Added additional pages: Caskets, Urns, Cremation, Cemetery, Eulogy Tips, Christmas Treat, Foundation

### v1.0.0 (January 2026)
- Initial release with all Phase 1 features
- Homepage, Services, About, Contact, Pre-Planning, Resources pages
- Responsive design with dark mode
- Framer Motion animations
- HugeIcons integration

---

*Document maintained by development team. Update after each feature implementation.*
