---
name: Academic Precision
colors:
  surface: '#101415'
  surface-dim: '#101415'
  surface-bright: '#363a3b'
  surface-container-lowest: '#0b0f10'
  surface-container-low: '#191c1e'
  surface-container: '#1d2022'
  surface-container-high: '#272a2c'
  surface-container-highest: '#323537'
  on-surface: '#e0e3e5'
  on-surface-variant: '#c2c6d6'
  inverse-surface: '#e0e3e5'
  inverse-on-surface: '#2d3133'
  outline: '#8c909f'
  outline-variant: '#424754'
  surface-tint: '#adc6ff'
  primary: '#adc6ff'
  on-primary: '#002e6a'
  primary-container: '#4d8eff'
  on-primary-container: '#00285d'
  inverse-primary: '#005ac2'
  secondary: '#4cd7f6'
  on-secondary: '#003640'
  secondary-container: '#03b5d3'
  on-secondary-container: '#00424e'
  tertiary: '#bec6e0'
  on-tertiary: '#283044'
  tertiary-container: '#8990a8'
  on-tertiary-container: '#22293d'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#adc6ff'
  on-primary-fixed: '#001a42'
  on-primary-fixed-variant: '#004395'
  secondary-fixed: '#acedff'
  secondary-fixed-dim: '#4cd7f6'
  on-secondary-fixed: '#001f26'
  on-secondary-fixed-variant: '#004e5c'
  tertiary-fixed: '#dae2fd'
  tertiary-fixed-dim: '#bec6e0'
  on-tertiary-fixed: '#131b2e'
  on-tertiary-fixed-variant: '#3f465c'
  background: '#101415'
  on-background: '#e0e3e5'
  surface-variant: '#323537'
typography:
  display-lg:
    fontFamily: Outfit
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Outfit
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Outfit
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-sm:
    fontFamily: Outfit
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  stack-sm: 12px
  stack-md: 24px
  stack-lg: 48px
---

## Brand & Style
The design system is engineered for high-level academic and technological environments where credibility and clarity are paramount. It targets researchers, engineers, and institutional leaders, evoking an emotional response of trust, intellectual rigor, and modern sophistication.

The aesthetic blends **Modern Corporate** reliability with subtle **Glassmorphism** for a layered, futuristic feel. The interface prioritizes high information density without sacrificing legibility. Every element is intentional, avoiding decorative flourish in favor of functional elegance. The layout is expansive, utilizing significant whitespace to frame complex data and narrative structures.

## Colors
This design system utilizes a deep, nocturnal palette to reduce eye strain and establish an authoritative tone. The primary navy and charcoal backgrounds create a stable foundation, while the electric blue and cyan accents act as precision tools for interactive elements and data visualization.

- **Primary & Secondary:** Used for action states, progress indicators, and active navigational links.
- **Backgrounds:** The interface uses `#0f172a` for the core canvas and `#1e293b` for elevated containers or cards.
- **Typography:** Contrast is strictly maintained for accessibility, using high-value grays and pure whites to ensure readability against dark backgrounds.

## Typography
The typography system pairs the geometric clarity of **Outfit** for headers with the systematic utility of **Inter** for body text. 

- **Headers:** Utilize tight letter-spacing for large display sizes to maintain a "prestige" editorial feel. 
- **Body:** Set with generous line-heights to ensure that long-form academic papers or technical documentation remain highly readable.
- **Labels:** Monospace or high-weight sans-serif labels are used for metadata, citations, and technical specifications.

## Layout & Spacing
The design system employs a **12-column fluid grid** for desktop, transitioning to a **4-column grid** for mobile. 

- **Horizontal Rhythm:** Content is housed in a centered container with a maximum width of 1280px to prevent excessive line lengths. 
- **Vertical Rhythm:** A strict 8px baseline grid is used. Sections are separated by large "Stack-LG" gaps to provide breathing room between distinct academic topics or project modules.
- **Alignment:** All content follows a strong left-alignment axis to reinforce a sense of order and logical progression.

## Elevation & Depth
Hierarchy is established through **Tonal Layers** and **Subtle Glassmorphism** rather than heavy shadows.

- **Surface Levels:** The base level is the darkest navy. The secondary level (cards/modals) uses a slightly lighter charcoal with a 1px border of `rgba(255, 255, 255, 0.1)`.
- **Glassmorphism:** Navigation bars and floating sidebars utilize a backdrop-blur (12px to 20px) with a 60% opacity fill of the background color. This creates a sense of depth and context without distracting the user.
- **Shadows:** Only used for floating elements (modals, dropdowns). Shadows are ultra-diffused, using a deep navy tint rather than pure black to maintain color harmony.

## Shapes
The shape language is **Rounded**, striking a balance between the clinical sharpness of traditional academia and the approachability of modern tech.

- **Standard Elements:** Buttons, input fields, and small cards use a 0.5rem (8px) radius.
- **Large Containers:** Content blocks and hero sections use a 1rem (16px) radius to soften the high-contrast aesthetic.
- **Timeline Nodes:** Experience and education markers use circles to represent continuity and precision.

## Components
- **Buttons:** Primary buttons are solid Electric Blue with white text. Secondary buttons are outlined with a 1px border. Interactions include a subtle scale-down effect (98%) on click to provide tactile feedback.
- **Academic Cards:** Featuring a 1px internal stroke, these cards house citations, research snippets, or project titles. The header of the card uses the secondary accent color for category labels.
- **Timeline Structure:** A vertical 2px track in Charcoal with Electric Blue nodes. Active or current positions are highlighted with a cyan outer glow.
- **Input Fields:** Minimalist design with a background darker than the surface level. Focus states are indicated by a 1px Electric Blue border and a subtle inner glow.
- **Chips:** Small, low-profile capsules for tagging technology stacks or research fields. Used with `label-sm` typography and neutral-gray backgrounds.
- **Navigation:** Top-fixed bar with a heavy backdrop-blur. Links use a simple underline animation on hover to maintain professional restraint.