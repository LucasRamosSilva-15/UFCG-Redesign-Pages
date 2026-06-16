---
name: Academic Excellence Framework
colors:
  surface: '#f8f9fa'
  surface-dim: '#d9dadb'
  surface-bright: '#f8f9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f5'
  surface-container: '#edeeef'
  surface-container-high: '#e7e8e9'
  surface-container-highest: '#e1e3e4'
  on-surface: '#191c1d'
  on-surface-variant: '#444653'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f2'
  outline: '#747684'
  outline-variant: '#c4c5d5'
  surface-tint: '#3557bc'
  primary: '#002068'
  on-primary: '#ffffff'
  primary-container: '#003399'
  on-primary-container: '#8aa4ff'
  inverse-primary: '#b5c4ff'
  secondary: '#705d00'
  on-secondary: '#ffffff'
  secondary-container: '#fcd400'
  on-secondary-container: '#6e5c00'
  tertiary: '#072459'
  on-tertiary: '#ffffff'
  tertiary-container: '#233b70'
  on-tertiary-container: '#90a7e3'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dce1ff'
  primary-fixed-dim: '#b5c4ff'
  on-primary-fixed: '#00164e'
  on-primary-fixed-variant: '#153ea3'
  secondary-fixed: '#ffe16d'
  secondary-fixed-dim: '#e9c400'
  on-secondary-fixed: '#221b00'
  on-secondary-fixed-variant: '#544600'
  tertiary-fixed: '#dae2ff'
  tertiary-fixed-dim: '#b1c5ff'
  on-tertiary-fixed: '#001946'
  on-tertiary-fixed-variant: '#2e457b'
  background: '#f8f9fa'
  on-background: '#191c1d'
  surface-variant: '#e1e3e4'
  institutional-blue: '#003399'
  accent-gold: '#FFD700'
  deep-navy: '#001F54'
  surface-white: '#FFFFFF'
  border-gray: '#E6E6E6'
  text-main: '#333333'
typography:
  display-lg:
    fontFamily: IBM Plex Serif
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: IBM Plex Serif
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: IBM Plex Serif
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  headline-md:
    fontFamily: IBM Plex Serif
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
  body-lg:
    fontFamily: IBM Plex Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: IBM Plex Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: IBM Plex Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: IBM Plex Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.03em
  utility-bar:
    fontFamily: IBM Plex Sans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  utility-height: 40px
  margin-mobile: 16px
  margin-desktop: 48px
  gutter: 24px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
  max-width: 1280px
---

## Brand & Style

This design system is engineered for a Brazilian Federal University, prioritizing institutional authority, academic rigor, and democratic accessibility. The aesthetic direction is **Corporate / Modern**, leaning heavily into structured layouts and clear information hierarchies that reflect the stability of a public institution. 

The design avoids "SaaS-like" playfulness in favor of a sophisticated, timeless look. It balances the traditional weight of a historical institution with the clean, functional requirements of a modern digital infrastructure. The visual language conveys trust, transparency, and the high standards of federal higher education.

## Colors

The palette is anchored by **Institutional Blue**, a color associated with stability and the Brazilian federal identity. **Deep Navy** is utilized for high-contrast text and deep structural backgrounds, ensuring maximum legibility and a sense of "academic weight."

**Gold** is a prestigious accent color used exclusively for highlights, such as active states in navigation or specific call-to-action iconography, and should never dominate the layout. The background strategy relies on **Pure White** for content areas and **Light Gray** for sectional grounding, providing a clean, high-contrast environment suitable for long-form reading and data-heavy interfaces.

## Typography

The typography strategy employs a "High-Contrast Pairing." **IBM Plex Serif** is the voice of the institution—authoritative and literary—used for all major headings and editorial titles. It provides the "Academic" feel required for a university setting.

**IBM Plex Sans** is used for all body text, UI labels, and data inputs. Its technical, systematic nature ensures clarity across complex forms and informational pages. For mobile devices, headline sizes scale down to maintain readability without excessive wrapping. All labels use a slight increase in letter spacing to enhance legibility at smaller scales.

## Layout & Spacing

The system uses a **Fixed Grid** model for desktop, centered within a 1280px container to ensure content remains readable on wide monitors. A 12-column grid provides the flexibility needed for complex academic portals.

- **Desktop:** 12 columns / 24px gutters / 48px outer margins.
- **Tablet:** 8 columns / 20px gutters / 32px outer margins.
- **Mobile:** 4 columns / 16px gutters / 16px outer margins.

The **Utility Top Bar** is a fixed 40px element at the very top of the viewport, housing mandatory federal links (Acesso à Informação, Transparência). Vertical rhythm is maintained through a strict 8px base unit, ensuring consistent spacing between headings, paragraphs, and components.

## Elevation & Depth

To maintain a "Professional" rather than "App" look, this design system uses **Tonal Layers** supplemented by **Low-Contrast Outlines**. Surfaces do not "float" aggressively; instead, they are distinguished by subtle value shifts.

- **Level 0 (Background):** Light Gray (#F8F9FA) for the main canvas.
- **Level 1 (Cards/Content):** Pure White (#FFFFFF) with a 1px border of #E6E6E6.
- **Level 2 (Interaction):** When hovered or active, components receive a subtle, diffused shadow (0px 4px 12px rgba(0, 31, 84, 0.08)) to indicate depth without breaking the formal aesthetic.
- **Dividers:** Used frequently in lists and cards to create "clear hierarchical divisions" using #E6E6E6.

## Shapes

The shape language is **Soft (0.25rem)**. This slight rounding provides a modern touch while remaining conservative and serious. Sharp corners (0px) are reserved for the Utility Top Bar and Global Footer to "frame" the interface within a rigid, institutional structure. Elements like primary buttons and informational cards use the `rounded-md` (0.25rem) or `rounded-lg` (0.5rem) settings to feel approachable but grounded.

## Components

### Utility Top Bar
A high-contrast bar at the top of the page using **Deep Navy** (#001F54) background and White text. It contains text-based links for "Acesso à Informação" and "Brasil" institutional logos.

### Cards
Cards are the primary container for content modules. They must have a #E6E6E6 border and a Pure White background. Headers within cards should be separated by a subtle 1px horizontal rule.

### Buttons
- **Primary:** Institutional Blue (#003399) background, White text. Squared with 0.25rem radius.
- **Secondary:** White background, Institutional Blue border and text.
- **Accent:** Gold (#FFD700) is used only for high-priority alerts or specific icons within a button, never as the primary button background to avoid a commercial "sale" look.

### Input Fields
Fields use a 1px #E6E6E6 border that transitions to Institutional Blue on focus. Use IBM Plex Sans for input text. Label text must be `label-md` in Deep Navy.

### Lists & Tables
Academic data must be presented in structured tables with #F8F9FA zebra-striping on rows. Header rows use Deep Navy background with White IBM Plex Sans Bold text.

### Breadcrumbs
Essential for navigation in deep academic hierarchies; use `label-sm` in Institutional Blue for links and Text-Main for the current page.