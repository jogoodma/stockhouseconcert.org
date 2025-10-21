# Quick Comparison Guide

## Layout Comparison at a Glance

| Feature | Layout 1 (Traditional) | Layout 2 (Playbill) | Layout 3 (Minimalist) |
|---------|----------------------|-------------------|---------------------|
| **Typography** | Palatino/Georgia (serif) | Georgia/Times (serif) | Helvetica/Arial (sans-serif) |
| **Visual Style** | Classic, centered | Bold, modern | Clean, minimal |
| **Header** | Simple border | Ornamental (◆) | Venue emphasis |
| **Section Titles** | Centered text | Black bars | Clean headings |
| **Performers** | Always visible, 2-column | Side-by-side with program | Collapsible |
| **Best For** | Print programs | Visual impact | Digital/mobile |
| **Formality** | Very formal | Moderately formal | Modern formal |
| **Print Size** | 28KB | 26KB | 35KB |
| **Interactivity** | None | None | Collapsible sections |

## Mobile Experience

### Layout 1 (Traditional)
- Performers stack to 1 column
- Maintains centered alignment
- Reduces padding
- **Mobile Score: 8/10**

### Layout 2 (Playbill)
- Programme/Personnel stack vertically
- Maintains visual hierarchy
- Black bars remain impactful
- **Mobile Score: 9/10**

### Layout 3 (Minimalist)
- Designed mobile-first
- Collapsible sections save space
- Grid adapts naturally
- **Mobile Score: 10/10**

## Print Experience

### Layout 1 (Traditional)
- Removes shadows
- Clean serif printing
- Traditional program feel
- **Print Score: 10/10**

### Layout 2 (Playbill)
- Black bars may use more ink
- Bold and distinctive
- Professional appearance
- **Print Score: 8/10** (more ink)

### Layout 3 (Minimalist)
- Auto-expands collapsible sections
- Clean sans-serif
- Minimizes ink usage
- **Print Score: 9/10**

## Usage Scenarios

### Choose Layout 1 if:
- ✅ You want a traditional concert program
- ✅ Your audience expects classical formatting
- ✅ Printing is the primary use case
- ✅ You prefer centered, symmetrical design
- ✅ Your venue has a conservative aesthetic

### Choose Layout 2 if:
- ✅ You want to stand out visually
- ✅ You're targeting a contemporary audience
- ✅ You like theatrical program styles
- ✅ You want side-by-side program/personnel
- ✅ Visual hierarchy is important

### Choose Layout 3 if:
- ✅ Digital viewing is your priority
- ✅ Mobile users are significant
- ✅ You prefer modern, clean design
- ✅ Interactive features appeal to you
- ✅ You want minimal visual clutter

## URLs

Once built, view at:
- `/program-layout1/` - Traditional Symphony Program
- `/program-layout2/` - Playbill-Style Program
- `/program-layout3/` - Minimalist Concert Hall Program

## Quick Start

```bash
# Build all layouts
pnpm run build

# Serve locally to preview
pnpm run serve

# Then visit:
# http://localhost:8080/program-layout1/
# http://localhost:8080/program-layout2/
# http://localhost:8080/program-layout3/
```

## Customization Priority

If you only have time for minor tweaks:

**Layout 1:** Change fonts in line 98 (`.program-layout1`)
**Layout 2:** Change black bar color in line 148 (`.section-title-bar`)
**Layout 3:** Change accent color in line 231 (`.repertoire` border-left)
