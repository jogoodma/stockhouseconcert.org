# Alternative Program Page Layouts

This directory contains three alternative formal concert program layouts for the program page.

## Layouts Overview

### Layout 1: Traditional Symphony Program (`/program-layout1/`)
**File:** `src/program-layout1.njk`

**Style:** Elegant, classic symphony hall program
- Centered layout with serif typography (Palatino/Georgia)
- Two-column performer listings
- Traditional formatting with composer and arranger credits
- Clean borders and dividers
- Year abbreviations (e.g., '99 instead of 1999)

**Best for:** Classical concert settings, traditional printed programs

---

### Layout 2: Playbill-Style Program (`/program-layout2/`)
**File:** `src/program-layout2.njk`

**Style:** Bold, modern playbill aesthetic
- Black title bars for ensemble sections
- Side-by-side "Programme" and "Personnel" columns
- Ornamental header with diamond symbols
- Strong typography hierarchy
- Double border accents

**Best for:** Contemporary concerts, modern venues, bold visual impact

---

### Layout 3: Minimalist Concert Hall Program (`/program-layout3/`)
**File:** `src/program-layout3.njk`

**Style:** Clean, minimalist design
- Sans-serif typography (Helvetica Neue/Arial)
- Collapsible performer sections (interactive)
- Left-aligned accent bars
- Subtle color palette
- Modern grid layout for performers

**Best for:** Digital viewing, mobile-friendly, modern aesthetics

---

## Common Features

All three layouts include:
- ✅ **Desktop optimization** - Proper spacing and typography for large screens
- ✅ **Mobile responsive** - Adapts to smaller screens with single-column layouts
- ✅ **Print-friendly** - Clean print styles with proper page breaks
- ✅ **Formal concert program structure** - Traditional program order and formatting
- ✅ **Accessibility** - Semantic HTML and proper heading hierarchy
- ✅ **Consistent data structure** - All use the same program.11tydata.json format

## Print Optimizations

Each layout includes specific print media queries:
- Removes shadows and backgrounds
- Adjusts padding for paper
- Prevents awkward page breaks
- Optimizes for 8.5" × 11" paper
- Ensures black text on white background

## Usage

To view each layout, build the site and navigate to:
- `/program-layout1/` - Traditional Symphony Program
- `/program-layout2/` - Playbill-Style Program  
- `/program-layout3/` - Minimalist Concert Hall Program

## Testing

Test each layout by:
1. Viewing on desktop browser
2. Resizing to mobile width
3. Using browser's print preview (Cmd/Ctrl + P)
4. Checking on actual mobile device if possible

## Customization

Each layout is self-contained with inline styles. To customize:
- Edit the `<style>` section in each `.njk` file
- Modify colors, fonts, spacing as needed
- Adjust print styles in `@media print` queries
