# Editorial Hero Section & Header Design Specification

## Overview
High-end, modern editorial aesthetic with sophisticated layout, glassmorphism effects, and premium typography while maintaining the existing wine/gold color scheme and dental content.

---

## Header Component

### Layout Structure
```
┌─────────────────────────────────────────────────────────────────────────────┐
│  [LOGO]        [Home · About · Services · Gallery · Blog · Contact]    [Log in] [Book Now] │
│   Left              Center (Perfectly centered)                          Right Buttons    │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Navigation Links (Centered)
- Home
- About
- Services
- Gallery
- Blog
- Contact

**Styling:**
- Font: Light weight, tracking-wide
- Color: `#5C0F22` (wine/burgundy)
- Hover: Gold underline animation (`#E8B923`)
- Dividers: Subtle gold dots between links

### Right Buttons
1. **Log in** (Ghost Button)
   - Pill-shaped (rounded-full)
   - Border: 1px solid `#5C0F22`
   - Background: transparent
   - Text: `#5C0F22`
   - Hover: Background `#5C0F22`/5%

2. **Book Now** (Primary Button)
   - Pill-shaped (rounded-full)
   - Background: `#5C0F22` (wine/burgundy)
   - Text: white
   - Hover: Subtle gold shimmer effect

---

## Hero Section

### Container Layout
```
┌─────────────────────────────────────────────────────────────────────────────────────────┐
│  White Background                                                                       │
│  ┌─────────────────────────────────────────────────────────────────────────────────┐   │
│  │ NO TOP ROUNDED CORNERS                                                            │   │
│  │  ┌──────────────────────────────────────────────────────────────────────────┐  │   │
│  │  │  Rounded Bottom (32-48px radius)                                           │  │   │
│  │  │  Background: Wine gradient                                                 │  │   │
│  │  │  Height: 70vh                                                              │  │   │
│  │  │                                                                             │  │   │
│  │  │     YOUR PERFECT                         ┌─────────┐    │  │   │
│  │  │     DENTAL CLINIC            [Person]     │ Glass   │    │  │   │
│  │  │     IN GHANA                             │ Card 1  │    │  │   │
│  │  │                                          │ Glass   │    │  │   │
│  │  │     ┌──────────┐                        │ Card 2  │    │  │   │
│  │  │     │ Trusted  │                        └─────────┘    │  │   │
│  │  │     │  Users   │                                             │  │   │
│  │  │     └──────────┘                                             │  │   │
│  │  │                                                               │  │   │
│  │  └──────────────────────────────────────────────────────────────┘  │   │
│  │                              ↑ Framed floating effect                │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────────────────────────────┘
```

### Hero Container Specifications
- **Width:** Full viewport width (no side margins)
- **Height:** 70vh
- **Border Radius:** 32px (mobile) to 48px (desktop) - **BOTTOM ONLY**
- **Background:** Wine/burgundy gradient (`from-[#5C0F22] via-[#3d0a17] to-[#5C0F22]`)
- **Shadow:** Large soft shadow for floating effect

### Background Heading
- Text: "ONE OF THE BEST DENTAL CLINICS IN GHANA"
- Position: Behind person image, centered
- Style: Extra bold, very large (8vw), low opacity (6%)
- Color: Golden shine (`#c9a472`)
- Effect: Partially obscured by person cutout

### Left Side Elements

#### 1. Main Content (NO Search Bar)
- Headline: "One of the Best Dental Clinics in Ghana"
- Subtext: "Expert dentists, transparent pricing, and uncompromising comfort."
- Text Color: White

#### 2. Trusted Users Widget
```
┌─────────────────────────────────────┐
│  [👤 👤 👤 👤 +500]  Trusted by 500+ │
│              patients               │
└─────────────────────────────────────┘
```
- Overlapping avatar circles (4-5 users)
- Avatar style: Rounded-full, 32px, border-2 white
- Text: "Trusted by 500+ patients"
- Font: Small, light weight

### Right Side Elements - Glassmorphic Cards

#### Card 1: Profile Stats
```
┌─────────────────┐
│  👤 Profile     │
│  ─────────────  │
│  2.5K Patients  │
│  ★★★★★ 4.9/5   │
└─────────────────┘
```

#### Card 2: Projects/Services
```
┌─────────────────┐
│  📊 Services    │
│  ─────────────  │
│  15+ Specialties│
│  🏆 Award Winning│
└─────────────────┘
```

**Glassmorphism Specs:**
- Background: `rgba(255, 255, 255, 0.08)`
- Backdrop Filter: blur(20px)
- Border: 1px solid `rgba(255, 255, 255, 0.15)`
- Border Radius: 20px
- Shadow: Soft elevation shadow

### Person Image
- Source: `/images/hero/hero-image.jpg`
- Position: Center-right of hero
- Style: Cutout effect (object-contain or object-cover)
- Size: Large, extends beyond container bounds slightly
- Z-index: Above background text, below glass cards

---

## Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Wine/Burgundy | `#5C0F22` | Primary buttons, accents, gradients |
| Golden Shine | `#c9a472` | Highlights, badges, icons, CTAs |
| White | `#FFFFFF` | Text, backgrounds |
| Black | `#000000` | Page background |
| Glass White | `rgba(255,255,255,0.08)` | Glassmorphism |

---

## Typography

| Element | Size | Weight | Tracking |
|---------|------|--------|----------|
| Nav Links | 14px | 300 | 0.02em |
| H1 (Background) | 80-120px | 800 | -0.02em |
| H1 (Main) | 48-72px | 700 | -0.01em |
| Body | 16-18px | 400 | normal |
| Buttons | 13-14px | 500 | 0.05em |
| Cards | 14px | 400-600 | normal |

---

## Animation Specifications

### On Load
1. Container fades in + scales from 0.98 to 1 (0.6s ease-out)
2. Background text slides in from left (0.8s delay)
3. Person image fades in + slides up (0.4s delay)
4. Glass cards stagger in from right (0.2s stagger, 0.6s delay start)
5. Search bar slides in from left (0.5s delay)
6. Trusted users fades in (0.8s delay)

### Hover Effects
- Glass cards: Scale 1.02, border glow gold
- Buttons: Standard lift + shadow
- Nav links: Gold underline slide-in

### Scroll Effects
- Container: Subtle parallax
- Glass cards: Floating animation (gentle bob)
- Background text: Slower parallax rate

---

## Responsive Breakpoints

### Desktop (1280px+)
- Full layout with all elements
- Large heading visible
- Side-by-side cards

### Tablet (768px - 1279px)
- Compressed spacing
- Smaller heading
- Stacked cards

### Mobile (< 768px)
- Single column layout
- Heading below image or hidden
- Simplified cards
- Hamburger navigation

---

## Component Structure

```
app/
├── components/
│   ├── layout/
│   │   └── header.tsx (updated)
│   └── sections/
│       ├── EditorialHero.tsx (new)
│       └── LuxuryHero.tsx (existing - keep)
├── page.tsx (update to use EditorialHero)
└── globals.css (add glassmorphism utilities)
```

---

## Implementation Notes

1. **Preserve existing files** - Create new EditorialHero.tsx instead of modifying LuxuryHero.tsx
2. **Reuse existing image** - `/images/hero/hero-image.jpg`
3. **Keep wine/gold theme** - All existing brand colors
4. **Maintain dental content** - "Your Perfect Smile Awaits" etc.
5. **Framed container** - Use margin + border-radius for floating effect
6. **Glassmorphism** - Use backdrop-filter with fallbacks
