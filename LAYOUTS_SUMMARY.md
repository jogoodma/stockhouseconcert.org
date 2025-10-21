# Alternative Concert Program Layouts - Summary

I've created **3 alternative formal concert program layouts** based on the existing `src/program.njk`. Each layout is designed with classical music performance programs in mind and optimized for desktop, mobile, and print.

## 📋 The Three Layouts

### 1. Traditional Symphony Program (`/program-layout1/`)
**File:** `src/program-layout1.njk`

**Aesthetic:** Classic, elegant symphony hall program reminiscent of traditional printed concert programs.

**Key Features:**
- Serif typography (Palatino, Georgia)
- Centered layout with formal hierarchy
- Two-column performer listings
- Subtle borders and dividers
- Traditional composer/arranger formatting
- Minimal ornamentation for timeless elegance

**Visual Style:**
```
═══════════════════════════════
      CONCERT PROGRAM
    October 21, 2025
        7:30 PM
    Concert Hall Name
═══════════════════════════════

        Symphonic Band
    Scott Schleuter, Director

    Symphony No. 1...
      Johan de Meij
    
    October
      Eric Whitacre
```

**Best For:** Traditional concerts, conservative venues, formal printed programs

---

### 2. Playbill-Style Program (`/program-layout2/`)
**File:** `src/program-layout2.njk`

**Aesthetic:** Bold, modern take inspired by theatrical playbills with strong visual hierarchy.

**Key Features:**
- Black title bars with white text
- Side-by-side "Programme" and "Personnel" columns
- Decorative header with diamond ornaments (◆)
- Strong typography with varied weights
- Double border accents
- Georgian serif fonts for elegance

**Visual Style:**
```
        ◆
  CONCERT PROGRAM
        ◆
   Oct 21, 2025 • 7:30 PM

═══════════════════════════════
█ SYMPHONIC BAND            █
Conducted by Scott Schleuter

Programme          Personnel
---------          ---------
Symphony...        FLUTE
Johan de Meij      Nicole Burroughs
                   Jenny Nance
```

**Best For:** Contemporary concerts, modern venues, bold visual impact, programs that need to stand out

---

### 3. Minimalist Concert Hall Program (`/program-layout3/`)
**File:** `src/program-layout3.njk`

**Aesthetic:** Clean, modern minimalist design with collapsible sections for digital viewing.

**Key Features:**
- Sans-serif typography (Helvetica Neue, Arial)
- Interactive collapsible performer sections
- Left-aligned accent bars
- Subtle color palette (grays and blacks)
- Modern grid layout
- "Programme" spelling for international flair

**Visual Style:**
```
CONCERT HALL

Concert Programme
October 21, 2025 | 7:30 PM

Symphonic Band
Scott Schleuter, conductor
│
│ Symphony No. 1 The Lord of...
│ Johan de Meij
│
│ October
│ Eric Whitacre

▸ View performers
```

**Best For:** Digital viewing, mobile-first audiences, modern aesthetics, interactive programs

---

## ✅ Common Features (All Layouts)

All three layouts share these essential characteristics:

### Responsive Design
- **Desktop:** Optimized spacing and multi-column layouts
- **Tablet:** Adaptive column layouts
- **Mobile:** Single-column with proper touch targets

### Print Optimization
- Clean print styles with proper page breaks
- 8.5" × 11" (Letter) paper optimization
- Black text on white background
- Removed shadows and web-only elements
- Page-break controls to avoid splitting sections

### Formal Concert Program Structure
- Concert metadata (date, time, location)
- Clear ensemble sections with directors
- Proper musical work formatting (title, composer, arranger)
- Comprehensive performer listings
- Intermission markers

### Accessibility
- Semantic HTML structure
- Proper heading hierarchy (h1, h2, h3)
- ARIA attributes where appropriate
- Sufficient color contrast
- Readable font sizes

---

## 🎯 How to Use

### View the Layouts
After building (`pnpm run build`), access each at:
- **Layout 1:** `/program-layout1/`
- **Layout 2:** `/program-layout2/`
- **Layout 3:** `/program-layout3/`

### Test Checklist
- [ ] View on desktop browser (Chrome, Firefox, Safari)
- [ ] Resize window to mobile width (< 600px)
- [ ] Test print preview (Cmd/Ctrl + P)
- [ ] Check on actual mobile device
- [ ] Verify all performers display correctly
- [ ] Test with different data (add/remove songs)

### Choose a Layout
Consider these factors:
1. **Venue aesthetic** - Traditional vs. modern
2. **Audience expectations** - Conservative vs. contemporary
3. **Primary use case** - Print vs. digital
4. **Brand alignment** - Does it match your organization's style?

---

## 🎨 Customization Guide

Each layout uses inline `<style>` blocks for easy customization:

### Colors
Look for color values like:
- `#000` - Black (titles, borders)
- `#666` - Medium gray (meta information)
- `#ccc` - Light gray (dividers)

### Fonts
Each layout specifies font families:
- **Layout 1:** Palatino, Georgia (serif)
- **Layout 2:** Georgia, Times New Roman (serif)
- **Layout 3:** Helvetica Neue, Arial (sans-serif)

### Spacing
Adjust margins and padding in the `<style>` section:
- `.program-main { padding: ... }`
- `.ensemble-section { margin-bottom: ... }`

### Print Settings
Modify `@media print` rules for print-specific adjustments.

---

## 📁 Files Created

```
src/
├── program-layout1.njk           # Traditional Symphony layout
├── program-layout1.11tydata.json # Data for layout 1
├── program-layout2.njk           # Playbill-style layout
├── program-layout2.11tydata.json # Data for layout 2
├── program-layout3.njk           # Minimalist layout
├── program-layout3.11tydata.json # Data for layout 3
└── program.njk                   # Original (unchanged)

PROGRAM_LAYOUTS.md                # This documentation
```

---

## 🔍 Technical Details

### Data Structure
All layouts use the same data structure from `program.11tydata.json`:
- `symphonic` - Symphonic Band ensemble
- `jazz1` - Hampton Ensemble Jazz Band
- `jazz2` - Loyola Ensemble Jazz Band
- `jazz3` - Tutti Encore

### Template Engine
- Nunjucks (.njk files)
- Macros for repeated ensemble sections
- Filters for data transformation

### Build Process
- Eleventy static site generator (v3.1.2)
- No external CSS frameworks
- Self-contained styles in each template

---

## 💡 Design Decisions

### Why Three Different Styles?

1. **Layout 1 (Traditional):** Honors classical concert program tradition with serif fonts and centered layouts
2. **Layout 2 (Playbill):** Bridges traditional and modern with bold visual elements
3. **Layout 3 (Minimalist):** Embraces digital-first design with interactive elements

### Typography Choices

- **Serif fonts (Layouts 1 & 2):** Traditional, formal, associated with classical music
- **Sans-serif (Layout 3):** Modern, clean, excellent screen readability

### Interactive Elements

Only Layout 3 includes interactive elements (`<details>`):
- Collapsible performer sections reduce initial information density
- Auto-expands for printing
- Improves mobile experience

---

## 🚀 Next Steps

1. **Review** all three layouts in your browser
2. **Test** print preview for each
3. **Choose** the layout that best fits your needs
4. **Customize** colors/fonts if desired
5. **Replace** the original `program.njk` OR keep as alternatives

---

## 📝 Notes

- All layouts use the existing data structure - no data changes needed
- The original `program.njk` remains unchanged
- Each layout is completely independent and self-contained
- Performer year formatting uses full year (e.g., "2019") for clarity
- Print styles are optimized but may need minor tweaks for specific printers

---

**Created:** October 2025
**Format:** Nunjucks templates with inline CSS
**Framework:** Eleventy 3.1.2
