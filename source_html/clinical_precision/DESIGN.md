---
name: Clinical Precision
colors:
  surface: '#f7fafc'
  surface-dim: '#d7dadc'
  surface-bright: '#f7fafc'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f1f4f6'
  surface-container: '#ebeef0'
  surface-container-high: '#e5e9eb'
  surface-container-highest: '#e0e3e5'
  on-surface: '#181c1e'
  on-surface-variant: '#43474e'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eef1f3'
  outline: '#74777f'
  outline-variant: '#c4c6cf'
  surface-tint: '#455f88'
  primary: '#002045'
  on-primary: '#ffffff'
  primary-container: '#1a365d'
  on-primary-container: '#86a0cd'
  inverse-primary: '#adc7f7'
  secondary: '#6b46c1'
  on-secondary: '#ffffff'
  secondary-container: '#a480fe'
  on-secondary-container: '#39008c'
  tertiary: '#002625'
  on-tertiary: '#ffffff'
  tertiary-container: '#003d3c'
  on-tertiary-container: '#4cadab'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d6e3ff'
  primary-fixed-dim: '#adc7f7'
  on-primary-fixed: '#001b3c'
  on-primary-fixed-variant: '#2d476f'
  secondary-fixed: '#e9ddff'
  secondary-fixed-dim: '#d0bcff'
  on-secondary-fixed: '#23005c'
  on-secondary-fixed-variant: '#522aa7'
  tertiary-fixed: '#94f2f0'
  tertiary-fixed-dim: '#77d6d3'
  on-tertiary-fixed: '#00201f'
  on-tertiary-fixed-variant: '#00504e'
  background: '#f7fafc'
  on-background: '#181c1e'
  surface-variant: '#e0e3e5'
  deep-blue-primary: '#1A365D'
  clinical-purple: '#6B46C1'
  healthcare-teal: '#319795'
  soft-blue-accent: '#EBF8FF'
  error-red: '#C53030'
  success-green: '#2F855A'
typography:
  headline-xl:
    fontFamily: Montserrat
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-lg-mobile:
    fontFamily: Montserrat
    fontSize: 26px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-md:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  caption:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: '1.4'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  max-width: 1280px
---

## Brand & Style
The brand personality is authoritative yet approachable, focusing on clinical excellence and patient-centric care. The design system utilizes a **Modern Corporate** style with a strong emphasis on **Minimalism** to reduce cognitive load—essential for healthcare environments where clarity is paramount.

The UI evokes a sense of "Clinical Calm" through generous whitespace, high-contrast typography, and a structured layout that implies stability and expertise. Every interaction is designed to feel deliberate, reliable, and accessible, catering to a diverse patient demographic that may be experiencing physical discomfort or stress.

## Colors
The palette is rooted in a **Deep Blue** primary, traditionally associated with trust and professional stability. **Clinical Purple** serves as the secondary color, used for secondary actions and branding accents to differentiate the clinic from more generic medical providers.

**Healthcare Teal** provides a vibrant, sterile, yet energetic accent for call-to-actions and health-related status indicators. The background is kept a **Clean White** (#FFFFFF) with **Neutral Gray** surfaces to ensure maximum readability and a "sanitary" digital feel. High contrast ratios (meeting WCAG AA standards) are maintained for all text-on-background combinations to support patients with visual impairments.

## Typography
The system uses a pairing of **Montserrat** for headlines and **Inter** for body copy. Montserrat provides a geometric, modern structure that feels architectural and firm, suitable for a chiropractic clinic focusing on spinal alignment and structural health.

**Inter** is utilized for its exceptional legibility at small sizes and its neutral, utilitarian character, ensuring that medical information is easy to consume. Letter spacing is slightly tightened for large headlines for a more premium look, while body text maintains a generous line height (1.5 - 1.6) to aid readability for users who may be scanning for specific treatment information.

## Layout & Spacing
The layout follows a **Fixed Grid** model on desktop to maintain a professional, organized structure that feels contained and safe. A 12-column grid is used with a 24px gutter to ensure distinct separation between content blocks.

On mobile, the layout shifts to a single column with 16px side margins. Spacing follows a strict 8px linear scale, ensuring all elements—from padding inside cards to the vertical rhythm between sections—are mathematically consistent. This regularity reinforces the perception of precision and attention to detail.

## Elevation & Depth
Depth is conveyed using **Tonal Layers** and **Low-Contrast Outlines**. Surfaces are primarily flat, with subtle light-gray borders (#E2E8F0) used to define areas of information. 

For interactive elements like cards and appointment pickers, a "Medical Grade" shadow is applied: an extremely diffused, low-opacity shadow with a slight Deep Blue tint to keep it from looking "dirty." This creates a soft lift that suggests the UI is physically layered without breaking the clean, clinical aesthetic. High-priority modals utilize a backdrop blur to maintain focus while keeping the patient oriented within the app.

## Shapes
The shape language is defined as **Soft (0.25rem/4px)**. While medical systems often use sharp corners to denote precision, a small radius is used here to make the interface feel more approachable and less intimidating for patients. 

Standard components like buttons and input fields use the 4px radius. Larger containers like treatment cards or informational blocks use a slightly larger `rounded-lg` (8px) to soften the overall visual footprint. Circular shapes are reserved exclusively for avatars and status indicators.

## Components
- **Buttons**: Primary buttons use the Deep Blue background with White text. Hover states shift to the Teal accent. Secondary buttons use a Purple outline.
- **Input Fields**: Use a subtle 1px border (#CBD5E0) and Inter typography. Focus states use a 2px Deep Blue border and a very light Blue glow.
- **Cards**: Background is always White with a 1px border. On hover, cards gain a soft ambient shadow to indicate interactivity.
- **Chips**: Used for selecting symptoms or treatment types. These utilize a Soft Blue (#EBF8FF) background with Deep Blue text for high legibility.
- **Medical Lists**: Patient records or appointment history lists use a "Zebra Stripe" approach with the Neutral color (#F7FAFC) to help the eye track across rows in data-heavy views.
- **Appointment Calendar**: The primary interaction point. It must use the Healthcare Teal for available slots to provide a positive, "healthy" visual cue.