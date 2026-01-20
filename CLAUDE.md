# CLAUDE.md - Madden's Funeral Home

> **Source of Truth for AI Agents**
> **Scope:** Madden's Funeral Home Website
> **Mission:** Dignified funeral services for Jamaican families for over 70 years

---

## MANDATORY WORKFLOW (No Exceptions)

### Before ANY Implementation Task:
1. **ALWAYS read `docs/PRD.md` first** - Check what's completed vs pending. Do NOT skip this step.
2. **ALWAYS use `Explore` sub-agent** before modifying code you haven't read in THIS conversation session. No assumptions about what the code does.
3. **ALWAYS use `TodoWrite`** for any task with more than 2 steps. Track progress visibly.

### After Completing Work:
4. **ALWAYS update `docs/PRD.md`** - Check off completed features. Add new features if discussed. This is NOT optional.
5. **ALWAYS update `CLAUDE.md`** if you establish new patterns, add integrations, or change conventions.
6. **ALWAYS run `bun run build`** to verify no errors before considering work complete.

### Sub-Agent Rules:
| Rule | Agent | When |
|------|-------|------|
| **REQUIRED** | `Explore` | Before modifying ANY unfamiliar code or answering architecture questions |
| **REQUIRED** | `TodoWrite` | Any task with 3+ steps |
| **PREFERRED** | `quick-fix` | Simple changes (typos, colors, text, icons, <20 lines) |
| **PREFERRED** | `feature-dev:code-architect` | Planning features that touch 3+ files |
| **PREFERRED** | `feature-dev:code-explorer` | Deep analysis of how existing features work |
| **USE WHEN RELEVANT** | `security-auditor` | Any contact form, user data, or payment changes |
| **ALWAYS CONSIDER** | Parallel execution | When you have 2+ independent tasks |

---

## 1. Project Identity

| Attribute | Value |
|-----------|-------|
| **Name** | Madden's Funeral Home & Crematorium |
| **Tagline** | Let Us Lend a Helping Hand |
| **Heritage** | Serving Jamaica for Over 70 Years |
| **Dev Port** | 3005 |
| **Dark Mode** | Warm Charcoal `oklch(0.15 0.01 60)` |
| **Primary Font** | Roboto (weights: 300, 400, 500) |

---

## 2. Technology Stack

| Layer | Technology |
|-------|------------|
| **Framework** | Next.js 16+ (App Router) |
| **Language** | TypeScript (Strict Mode) |
| **Package Manager** | Bun |
| **Styling** | Tailwind CSS v4 with @theme inline |
| **Icons** | HugeIcons (@hugeicons/react + @hugeicons/core-free-icons) |
| **Animation** | Framer Motion (0.6-0.8s dignified transitions) |
| **Theme Management** | next-themes |
| **Hosting** | Vercel |

---

## 3. Project Structure

```
maddens-funeral-home/
├── app/
│   ├── (marketing)/           # Public marketing pages
│   │   ├── layout.tsx         # Navbar + Footer wrapper
│   │   ├── page.tsx           # Homepage
│   │   ├── services/          # Services overview
│   │   ├── about/             # Company history & values
│   │   ├── contact/           # Contact form & locations
│   │   ├── pre-planning/      # Pre-planning information
│   │   ├── resources/         # Grief support & guides
│   │   └── marketplace/       # 3D product marketplace
│   │       ├── caskets/       # Casket catalog + [slug]
│   │       └── urns/          # Urn catalog + [slug]
│   ├── layout.tsx             # Root layout (Theme provider)
│   └── globals.css            # Tailwind v4 theme & utilities
├── components/
│   ├── ui/                    # UI components (Button, etc.)
│   ├── layout/                # Navbar, Footer
│   ├── sections/              # Homepage sections
│   ├── marketplace/           # 3D marketplace components
│   │   └── 3d/                # R3F 3D components
│   ├── icons.tsx              # HugeIcons wrapper components
│   └── theme-provider.tsx     # next-themes provider
├── lib/
│   ├── utils.ts               # Utility functions (cn, etc.)
│   └── marketplace/           # Product data, materials, types
└── public/
    ├── models/                # GLB 3D models
    ├── textures/              # Material textures
    └── images/                # Product images
```

---

## 4. Route Groups

### (marketing) - Public Pages
- **Layout:** TopBar + Navbar + Footer
- **Pages:** /, /services, /about, /contact, /pre-planning, /resources, /marketplace, /marketplace/caskets, /marketplace/urns

---

## 5. Theme Configuration

### Color System (OKLCH)

```css
:root {
  /* Light Mode - Warm, Dignified */
  --background: oklch(0.98 0.005 80);      /* Warm off-white */
  --foreground: oklch(0.15 0.02 250);      /* Deep charcoal */
  --primary: oklch(0.45 0.15 250);         /* Button primary */

  /* Funeral Home Brand Colors */
  --funeral-navy: oklch(0.28 0.06 250);    /* Deep Navy */
  --funeral-gold: oklch(0.78 0.14 80);     /* Muted Gold */
  --funeral-cream: oklch(0.95 0.02 80);    /* Warm Cream */
  --funeral-charcoal: oklch(0.25 0.02 250); /* Charcoal */
}

.dark {
  --background: oklch(0.15 0.01 60);       /* Warm Charcoal (NOT pure black) */
  --foreground: oklch(0.95 0.01 80);       /* Warm white */
}
```

### Key Utility Classes
- `.glass` - Glassmorphism effect with backdrop blur
- `.text-funeral-gold` - Brand gold color
- `.bg-funeral-navy` - Deep navy background
- `rounded-md` - Sharper corners (more dignified than rounded-2xl)

---

## 6. Icon System

Icons are wrapped in `components/icons.tsx` for consistent usage:

```tsx
// Import from local icons file
import { ArrowRightIcon, PhoneIcon, HeartIcon } from "@/components/icons";

// Usage
<PhoneIcon size={18} className="text-funeral-gold" />
```

### Available Icons
Navigation: MenuIcon, CloseIcon, MoonIcon, SunIcon
Actions: ArrowRightIcon, SendIcon, CheckIcon
Services: HeartIcon, StarIcon, FlowerIcon, FireIcon
Contact: MailIcon, LocationIcon, PhoneIcon, ClockIcon
Social: FacebookIcon, InstagramIcon

---

## 7. Design Standards (Funeral Home Specific)

### Typography
- Primary font: Roboto (weight 300 - Light)
- Base font size: 17-18px (larger for older audience)
- Line height: Generous (1.8 for body text)

### Animations
- Duration: 0.6-0.8s (slower, more dignified)
- Ease: [0.4, 0, 0.2, 1] (gentle easing)
- No flashy effects - subtle, respectful transitions

### Buttons
- `rounded-md` (sharper corners)
- Uppercase with `tracking-wider`
- Primary: Solid background
- Secondary: Outline variant

### Cards
- Sharper corners (rounded-lg or rounded-md)
- Subtle borders, no harsh shadows
- Muted glassmorphism

### Navbar
- Fixed position with top contact bar (desktop)
- Phone numbers prominently displayed
- 24/7 availability badge

### Footer
- Deep navy background
- Gold accents
- All location contact info visible

---

## 8. Development Commands

```bash
# Install dependencies
bun install

# Development server (port 3005)
bun run dev

# Production build
bun run build

# Start production server
bun run start

# Lint code
bun run lint
```

---

## 9. Content Guidelines

### Tone of Voice
- Compassionate and warm
- Professional but not cold
- Reassuring and supportive
- Respectful of grief

### Do's
- Emphasize 70+ years of service
- Highlight 24/7 availability
- Mention family-owned heritage
- Use "we" and "our" language

### Don'ts
- No aggressive sales language
- No flashy or distracting animations
- No trendy/casual terminology
- No dark humor

---

## 10. Locations

### Montego Bay (Primary)
- 37 Union Street, Montego Bay, St. James
- Phone: (876) 952-0212, (876) 979-1491
- Email: mobay@maddensfuneralhome.com

### Kingston
- 42a Constant Spring Road, Kingston 10
- Phone: (876) 926-2079, (876) 926-8223
- Email: info@maddensfuneralhome.com

### US Contact
- Phone: (954) 324-9550

---

## 11. Services Offered

1. **Traditional Funeral** - Full viewing & service
2. **Cremation** - Direct & memorial options
3. **Graveside** - Outdoor services
4. **Repatriation** - International arrangements
5. **Pre-Planning** - Advance arrangements
6. **Cemetery Services** - Full interment support

---

## 12. Backend Integration (Convex)

### Overview
The site uses Convex as a serverless backend for the AI chat system and vector database.

### Convex Tables

| Table | Purpose |
|-------|---------|
| `agentConversations` | Chat conversation sessions |
| `agentMessages` | Individual chat messages |
| `anonymousRateLimits` | Rate limiting (10 msgs/hour per session) |
| `businessInfo` | RAG knowledge base with vector embeddings |

### Convex Files

| File | Purpose | Runtime |
|------|---------|---------|
| `convex/agent/chat.ts` | Main AI chat action | Node.js |
| `convex/agent/db.ts` | Conversation mutations/queries | V8 |
| `convex/agent/rag.ts` | RAG search and ingest actions | Node.js |
| `convex/agent/ragDb.ts` | RAG database mutations/queries | V8 |
| `convex/schema.ts` | Database schema definition | - |

### Key Pattern: Node.js vs V8 Runtime
Convex has two runtimes:
- **V8 (default)**: For mutations and queries - no `"use node"` directive
- **Node.js**: For actions that need external APIs - requires `"use node"` directive

Files are split to keep mutations/queries in V8 and actions in Node.js.

---

## 12.5 AI Systems Architecture

### AI Chat (`convex/agent/chat.ts`)

The AI assistant uses OpenRouter (gpt-4o-mini) with:

1. **Token Conservation**: Greetings and off-topic questions handled without AI calls
2. **Topic Filtering**: Only responds to funeral-related queries
3. **Rate Limiting**: 10 messages per hour for anonymous users
4. **RAG Context**: Searches business info before responding

### RAG System (`convex/agent/rag.ts`)

Vector database for storing business knowledge:

| Category | Content Type |
|----------|--------------|
| `service` | Service descriptions, packages, features |
| `location` | Address, hours, directions, parking |
| `faq` | Common questions and answers |
| `policy` | Business policies, procedures |
| `pricing` | Price ranges, package costs |
| `general` | Company history, values, staff |

### Adding Business Information

```typescript
// Single item
await ctx.runAction(internal.agent.rag.ingest, {
  content: "Description of the service or information...",
  category: "service",
  title: "Service Name"
});

// Bulk ingest
await ctx.runAction(internal.agent.rag.bulkIngest, {
  items: [
    { content: "...", category: "service", title: "..." },
    { content: "...", category: "faq", title: "..." },
  ]
});
```

### AI Models (via OpenRouter)

| Model | Purpose | Env Variable |
|-------|---------|--------------|
| `openai/gpt-4o-mini` | Chat responses | `OPENROUTER_CHAT_MODEL` |
| `openai/text-embedding-3-small` | Vector embeddings (1536d) | `OPENROUTER_EMBEDDING_MODEL` |

---

## 12.6 3D Product Marketplace

### Overview
Interactive 3D marketplace for viewing caskets and urns with material customization.

### Technology Stack

| Package | Purpose |
|---------|---------|
| `three` | 3D rendering engine |
| `@react-three/fiber` | React wrapper for Three.js |
| `@react-three/drei` | R3F helpers (Stage, OrbitControls, etc.) |

### File Structure

```
lib/marketplace/
├── types.ts              # Product, Material, Interior types
├── materials.ts          # Material presets (wood, metal)
├── products.ts           # Product catalog data
├── utils.ts              # WebGL detection, helpers
└── index.ts              # Export all

components/marketplace/
├── ProductViewer3D.tsx   # Main 3D viewer component
├── ProductControls.tsx   # Material/interior swatches
├── ProductCard.tsx       # Product catalog card
├── ProductGrid.tsx       # Grid layout for products
├── CategoryCard.tsx      # Category selection card
└── 3d/
    ├── Canvas3D.tsx      # R3F Canvas wrapper
    ├── Environment3D.tsx # Stage lighting setup
    ├── CameraControls.tsx # OrbitControls wrapper
    ├── ProductModel.tsx  # GLTF loader + placeholder
    ├── FallbackView.tsx  # Static image fallback
    └── LoadingSpinner.tsx # Loading state
```

### Routes

| Route | Content |
|-------|---------|
| `/marketplace` | Category selection (caskets, urns) |
| `/marketplace/caskets` | Casket product catalog |
| `/marketplace/caskets/[slug]` | Casket detail with 3D viewer |
| `/marketplace/urns` | Urn product catalog |
| `/marketplace/urns/[slug]` | Urn detail with 3D viewer |

### Material Presets

**Wood Materials:** Mahogany, Cherry, Oak, Walnut, Pine
**Metal Materials:** Bronze, Copper, Brushed Silver, Polished Steel, Black Metal
**Interior Fabrics:** White Velvet, Ivory Satin, Blush Velvet, Champagne Crepe

### Adding New Products

```typescript
// lib/marketplace/products.ts
export const casketProducts: Product[] = [
  {
    id: "unique-id",
    slug: "url-slug",
    category: "caskets",
    subcategory: "wooden",
    name: "Product Name",
    description: "Description...",
    features: ["Feature 1", "Feature 2"],
    priceRange: "Contact for pricing",
    modelPath: "/models/caskets/model.glb",  // GLB file path
    fallbackImage: "/images/caskets/image.jpg",
    materials: woodMaterials,
    interiors: interiorPresets,
    defaultMaterialId: "mahogany",
    defaultInteriorId: "white-velvet",
  },
];
```

### WebGL Fallback
The `ProductViewer3D` component automatically detects WebGL support and falls back to a static image when unavailable. Use `detectWebGLSupport()` from `lib/marketplace/utils.ts`.

### 3D Model Notes
- Models should be in GLB format (< 500KB)
- Target < 50,000 triangles per model
- If no GLB file exists, placeholder geometry is rendered
- Placeholder casket: box with handles
- Placeholder urn: cylinder with dome lid

---

## 13. Environment Variables

### Next.js (.env.local)

```bash
# Convex
NEXT_PUBLIC_CONVEX_URL=https://your-deployment.convex.cloud
```

### Convex Dashboard (set via `npx convex env set`)

```bash
# OpenRouter API
OPENROUTER_API_KEY=sk-or-v1-xxx           # Required
OPENROUTER_CHAT_MODEL=openai/gpt-4o-mini  # Optional (default)
OPENROUTER_EMBEDDING_MODEL=openai/text-embedding-3-small  # Optional (default)
SITE_URL=https://maddensfuneralhome.com   # For API headers
```

---

## 14. Important Notes

- **Dark Mode:** Warm Charcoal (oklch(0.15 0.01 60)), NEVER pure black
- **Font Weight:** Prefer 300 (Light) for body text, 400-500 for headings
- **Animations:** Slow and dignified (0.6-0.8s)
- **Icons:** Always use the wrapper from `@/components/icons`
- **Corners:** Use `rounded-md` or `rounded-lg` (sharper than other Stellar sites)
- **Accessibility:** Larger fonts, high contrast for older users

---

## 15. Quick Reference

| Task | Command/Location |
|------|-----------------|
| Add new icon | Edit `components/icons.tsx` |
| Change theme colors | Edit `app/globals.css` |
| Add new page | Create in `app/(marketing)/` |
| Update contact info | Edit `components/layout/footer.tsx` |
| Deploy Convex | `npx convex dev --once` |
| Set Convex env var | `npx convex env set KEY value` |
| View Convex logs | `npx convex logs` |
| Add to AI knowledge | Run `internal.agent.rag.ingest` action |
| Add marketplace product | Edit `lib/marketplace/products.ts` |
| Add material preset | Edit `lib/marketplace/materials.ts` |
| Update 3D components | Edit `components/marketplace/3d/` |

---

## 16. Documentation Index

| Document | Purpose | Location |
|----------|---------|----------|
| **PRD.md** | Product requirements, feature tracker | `docs/PRD.md` |
| **CLAUDE.md** | This file - development guide | `CLAUDE.md` |

---

*Last Updated: January 2026*
*Built with: Next.js 16, Tailwind v4, Framer Motion, HugeIcons, React Three Fiber*
