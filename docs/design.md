---
name: UFCG Institutional Framework
colors:
  background: '#F8FAFC'
  surface: '#F8FAFC'
  surface-dim: '#d9dadb'
  surface-bright: '#F8FAFC'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f5'
  surface-container: '#edeeef'
  surface-container-high: '#e7e8e9'
  surface-container-highest: '#e1e3e4'
  surface-white: '#FFFFFF'
  border-gray: '#E6E6E6'
  outline: '#747684'
  outline-variant: '#c4c5d5'
  text: '#1E293B'
  text-main: '#1E293B'
  on-surface: '#1E293B'
  on-surface-variant: '#444653'
  primary: '#002D72'
  primary-dark: '#001B4D'
  primary-reflex: '#001489'
  primary-fixed: '#E6F7FD'
  on-primary: '#ffffff'
  on-primary-fixed: '#001B4D'
  accent: '#00AFEB'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
typography:
  display-lg:
    fontFamily: IBM Plex Serif
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 56px
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
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  utility-height: 26px
  header-height: 64px
  margin-mobile: 16px
  margin-tablet: 32px
  margin-desktop: 48px
  gutter: 24px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
  max-width: 1280px
  header-max-width: 1180px
---

## Brand & Style

This design system is tailored for the Universidade Federal de Campina Grande (UFCG). The visual direction is institutional, academic, accessible, and modern, with a palette closer to the official shield: a deep federal blue, a darker blue for structural areas, and a bright cyan accent derived from the shield's light blue field.

The site should feel public, reliable, and organized rather than promotional. Interfaces must prioritize hierarchy, scanning, and clarity for students, candidates, staff, researchers, and the broader community.

## Colors

The palette is anchored by **Institutional Blue** (`#002D72`), used for main navigation text, important links, icon color, card hover states, outlines, and primary actions.

**Primary Dark** (`#001B4D`) is reserved for deep structural surfaces: the top utility bar, footer, dark statistic bands, dark hero overlays, and primary button hover states. Text placed on this color must remain white.

**Reflex Blue Support** (`#001489`) is a stronger supporting blue used sparingly for active/hover emphasis when a deeper saturated blue is useful. It should not dominate large surfaces.

**Cyan Accent** (`#00AFEB`) is the highlight accent. It is used for visual details: active navigation underline, section rules, footer top border, status borders, subtle badges, small highlights, and decorative accents. Avoid using it as small body text on white backgrounds; prefer `#002D72` for readable text and use cyan for lines, borders, icons, or filled details.

The background is **Slate White** (`#F8FAFC`) and the main text color is **Slate Text** (`#1E293B`). Cards and content containers use white with `#E6E6E6` borders.

Current Tailwind tokens in `src/index.css`:

```css
--color-primary: #002D72;
--color-primary-dark: #001B4D;
--color-primary-reflex: #001489;
--color-accent: #00AFEB;
--color-background: #F8FAFC;
--color-text: #1E293B;
--color-text-main: #1E293B;
```

## Typography

The typography strategy remains a high-contrast academic pairing.

**IBM Plex Serif** is used for major headings, section titles, and brand-adjacent text. It gives the site a more academic and institutional voice.

**IBM Plex Sans** is used for body copy, utility links, navigation, cards, tables, buttons, and labels. Navigation labels may use compact uppercase-style tracking, but letter spacing must stay readable and should not force wrapping.

## Layout & Spacing

The system uses a centered responsive container:

- **Global content:** max width of 1280px.
- **Header content:** max width of 1180px to match the compact official-page feel.
- **Desktop:** 12-column rhythm / 24px gutters / 48px outer margins.
- **Tablet:** 8-column rhythm / 20px gutters / 32px outer margins.
- **Mobile:** 4-column rhythm / 16px gutters / 16px outer margins.

The header has two layers:

- **Utility bar:** 26px tall, `#002D72` background, white utility links, cyan hover/detail link for "Sistemas UFCG".
- **Main header:** 64px tall, white background, UFCG logo/brand on the left, compact navigation centered, search and mobile menu controls on the right.

Vertical rhythm follows an 8px base unit. Section padding should remain generous, especially on homepage bands.

## Elevation & Depth

The system uses tonal layers and restrained shadows. Cards should not float aggressively.

- **Level 0 (Background):** `#F8FAFC`.
- **Level 1 (Cards/Content):** `#FFFFFF` with `1px` border `#E6E6E6`.
- **Level 2 (Interaction):** subtle shadow such as `0px 4px 12px rgba(0, 45, 114, 0.08)`.
- **Deep Areas:** `#001B4D` for footer, statistic band, and dark overlays.
- **Dividers:** `#E6E6E6`.

## Shapes

The shape language is conservative and slightly softened. Cards, buttons, and controls generally use `rounded-lg` or smaller. The top utility bar and footer remain visually structural and can use sharp edges.

Cards should keep an 8px radius or less unless a local component requires otherwise.

## Components

### Utility Top Bar

Use `#002D72` background with white text. Utility links include "UFCG", "Acesso à Informação", "Transparência", "Ouvidoria", "SEI", "Sistemas", "Contato", and a highlighted "Sistemas UFCG" action. Cyan (`#00AFEB`) is allowed for the highlighted utility action and hover states.

### Main Header

Use a white background with the UFCG shield/logo at a proportional size. If the logo image already contains the institution name, do not duplicate the name. If the selected logo is shield-only, show "Universidade Federal de Campina Grande" once beside it.

Desktop navigation is compact and centered. Active navigation uses primary text with a cyan underline. Mobile navigation may collapse into a simple menu.

### Cards

Cards use white backgrounds, `#E6E6E6` borders, and primary-blue iconography. Hover states may use `border-primary` and a subtle `rgba(0, 45, 114, 0.08)` shadow.

### Buttons

- **Primary:** `#002D72` background, white text, hover `#001B4D`.
- **Secondary:** white background, `#002D72` border and text.
- **Accent details:** `#00AFEB` for underline, small badges, section rules, and borders. Avoid cyan-filled buttons for primary actions unless text contrast is explicitly checked.

### Footer

Use `#001B4D` background with white text and a `#00AFEB` top border. Footer column headings use cyan. Body links remain white or white with opacity for readability.

### Tables & Notices

Tables keep white or light surfaces with structured borders. Category/status pills may use `primary-fixed` or subtle cyan tints such as `bg-accent/10`, `border-accent/30`, and primary text for contrast.

### Breadcrumbs

Use `label-sm`. Links use primary blue (`#002D72`) and the current page uses `#1E293B`.
