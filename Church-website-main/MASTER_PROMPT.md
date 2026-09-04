# Master Prompt: Church Ministry Website Creation

## Project Overview
Create a complete, responsive church ministry website for "God Cares Ministries" promoting a faith-based audio/visual album project. The website should follow modern web design standards with a **1024px max content width** and compact, professional layout.

## Technical Stack
- **Framework**: React + Vite
- **Routing**: React Router DOM
- **Styling**: Tailwind CSS + Inline styles
- **Build Tool**: Vite
- **Package Manager**: npm
- **Fonts**: Custom fonts (Anastasia, Century Gothic, Poiret One)

## Project Structure
```
church-website/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── fonts/
│   ├── Anastasia Regular.ttf
│   ├── centurygothic.ttf
│   └── Poiret One (via Google Fonts)
├── src/
│   ├── assets/
│   │   └── [all images - hero banners, profile photos, icons, etc.]
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Backdrop.jsx
│   │   ├── Card.jsx
│   │   ├── DescriptiveCard.jsx
│   │   ├── LetterCard.jsx
│   │   ├── TestimonyCard.jsx
│   │   ├── Decision.jsx
│   │   ├── Power.jsx
│   │   ├── Image.jsx
│   │   ├── SectionImage.jsx
│   │   ├── SectionList.jsx
│   │   ├── UrlList.jsx
│   │   └── UrlReward.jsx
│   ├── pages/
│   │   ├── ProducerAlbum.jsx (Home)
│   │   ├── PresentCondition.jsx
│   │   ├── Highlights.jsx
│   │   ├── WhyNeeded.jsx
│   │   ├── WhoParticipate.jsx
│   │   ├── ParticipantRegistration.jsx
│   │   ├── BecomeSponsor.jsx
│   │   ├── SupportMatters.jsx
│   │   ├── Credits.jsx
│   │   └── Testimonies.jsx
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   └── App.css
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Design Specifications

### Global Layout Standards
- **Max Content Width**: 1024px (centered with `margin: 0 auto`)
- **Hero Banner Height**: 400px (desktop), 350px (tablet), 280px (mobile)
- **Main Container Padding**: 30px vertical, 20px horizontal
- **Background**: White (#ffffff) for content, Black for certain pages
- **Primary Gold Color**: #e6b800, #ca8a04, #b45309 (various shades)
- **Yellow Accent**: #fef3c7 (backgrounds), #fde68a (borders)

### Typography Scale
- **Large Headings**: 26px (Anastasia font)
- **Section Headings**: 20-24px
- **Subheadings**: 15-16px
- **Body Text**: 11-12px
- **Line Height**: 1.5 (body), 1.3 (headings)
- **Letter Spacing**: 0.5-1.5px for headings

### Spacing System
- **Section Margins**: 25-40px between major sections
- **Card Padding**: 20-25px
- **Element Gaps**: 8-20px depending on context
- **Border Radius**: 10-12px for cards/images

## Component Specifications

### 1. Navbar Component
**Structure:**
- Sticky header at top (z-index: 50)
- Two-tier layout:
  - **Top Section**: Logo (70×50px) + Ministry name + tagline
  - **Bottom Section**: Horizontal navigation menu

**Styling:**
- Background: White with shadow
- Navigation bar: Gold (#e6b800)
- Menu items: White text, 11px, centered alignment
- Spacing: `gap: 4px`, `padding: 6px 12px` per link
- Hover effect: White underline border

**Navigation Links:**
1. THE PRODUCER'S 1ST ALBUM (/)
2. THE PRESENT CONDITION OF THE WORLD (/present-condition)
3. HIGHLIGHTS OF ALBUM (/highlights)
4. WHY THE ALBUM IS NEEDED? (/why-needed)
5. WHO CAN PARTICIPATE? (/who-participate)
6. PARTICIPANT REGISTRATION (/participant-registration)
7. BECOME A SPONSOR (/become-sponsor)
8. YOUR SUPPORT MATTERS (/support-matters)
9. CREDITS & SINCERE THANKS (/credits)
10. LISTENER TESTIMONIES (/testimonies)

### 2. Footer Component
**Structure:**
- Full-width gold background
- Centered content (1024px max-width)
- Social media links
- Copyright notice
- Contact information

**Styling:**
- Background: #e6b800
- Text: White, 11-12px
- Padding: 20-30px vertical
- Responsive grid layout

### 3. Backdrop Component
**Purpose:** Hero section for internal pages
**Styling:**
- Background image with overlay
- Height: 400px (responsive)
- Centered title text
- White text with shadow

### 4. Card Components
Multiple reusable card types:

**Card.jsx** - List card with yellow background
- Background: #fef3c7
- Border: #fde68a
- Padding: 20-25px
- Border radius: 12px

**TestimonyCard.jsx** - Testimonial display
- Profile image section
- Name, title, date
- Quote/content area

**DescriptiveCard.jsx** - Detailed content card
- Image + text layout
- Flexible content sections

### 5. Page-Specific Components
- **Decision.jsx**: Decision/action sections
- **Power.jsx**: Power/impact sections
- **SectionList.jsx**: Indexed topic lists
- **UrlList.jsx**: Link collection displays
- **UrlReward.jsx**: Sponsorship reward displays

## Page Layouts

### Home Page (ProducerAlbum.jsx)

**Section Order:**
1. **Hero Banner** (400px height)
   - Full-width background image
   - No text overlay (clean visual)

2. **Main Introduction**
   - Centered text (18px): "CLICK ALL THE LINKS PROVIDED ABOVE..."
   - Max-width: 1024px

3. **Producer Profile Section**
   - Two-column layout:
     - Left: Profile image (200×280px)
     - Right: Name, description, bullet points (11px text)
   - Gold heading (26px): "THE FIRST PRODUCTION OF THE PRODUCER"
   - Compact spacing (gap: 20px)

4. **Purpose and Mission Section**
   - Full-width yellow background (#fef3c7)
   - Ultra-compact styling:
     - Heading: 24px
     - Text: 11px
     - Line height: 1.5
     - Padding: 4px top, 6px bottom
     - Paragraph margins: 8px
   - 4 paragraphs explaining mission

5. **The Holy Sabbath Section**
   - Two-column: Image (400px) + Text content
   - Quote box with yellow background
   - Scripture references

6. **10 Topics Covered Grid**
   - 5×2 grid layout (responsive)
   - Numbered topic cards
   - Gold accent colors

7. **Composer Section**
   - Profile layout with biography
   - Achievement highlights

8. **14 Singers Grid**
   - 7×2 grid of singer cards
   - Profile photo + name
   - Consistent sizing

9. **Visual Album Preview**
   - Promotional imagery
   - Description text

10. **Additional Content Sections**
    - Album highlights
    - Participation information
    - Study materials
    - Links and resources

### Internal Pages Structure

**PresentCondition.jsx**
- Backdrop hero
- Theme cards explaining world conditions
- Scriptural references
- Call to action

**Highlights.jsx**
- Album feature showcase
- Statistics and numbers
- Multilingual information
- Participation details

**WhyNeeded.jsx**
- Image gallery (32 images in grid)
- Explanatory content
- Visual storytelling

**WhoParticipate.jsx**
- Eligibility criteria cards
- Role descriptions (singers, actors, crew)
- Registration information

**ParticipantRegistration.jsx**
- Registration form/information
- Step-by-step process
- Contact details

**BecomeSponsor.jsx**
- Sponsorship tiers
- Benefits information
- Payment links

**SupportMatters.jsx**
- Impact statements
- Ways to contribute
- Vision explanation

**Credits.jsx**
- Acknowledgement cards
- Team member lists
- Special thanks sections

**Testimonies.jsx**
- Testimony card grid
- User feedback
- Impact stories

## Responsive Design Breakpoints

```css
/* Desktop (default) */
max-width: 1024px
hero: 400px height
padding: 30px 20px

/* Tablet (max-width: 1024px) */
hero: 350px height
padding: 25px 20px
grid: 4 columns

/* Mobile (max-width: 768px) */
hero: 280px height
padding: 20px 15px
grid: 2 columns
font-size: reduced 15-20%

/* Small Mobile (max-width: 480px) */
hero: 220px height
padding: 15px 10px
grid: 1 column
font-size: reduced 25-30%
```

## Global CSS (index.css)

```css
body {
    overflow-x: hidden;
    max-width: 100vw;
}

* {
    box-sizing: border-box;
}

.page-container,
main > div {
    max-width: 1024px;
    margin-left: auto;
    margin-right: auto;
}

.hero {
    width: 100%;
    max-width: 100%;
    height: 400px;
    padding: 30px 20px;
    box-sizing: border-box;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

/* Responsive hero adjustments */
@media (max-width: 1024px) {
    .hero { height: 350px; padding: 25px 20px; }
}

@media (max-width: 768px) {
    .hero { height: 280px; padding: 20px 15px; }
}

@media (max-width: 480px) {
    .hero { height: 220px; padding: 15px 10px; }
}
```

## Color Palette

### Primary Colors
- **Gold/Yellow**: 
  - #e6b800 (navbar, buttons)
  - #ca8a04 (headings, accents)
  - #b45309 (darker gold for emphasis)
  - #fef3c7 (light yellow backgrounds)
  - #fde68a (yellow borders)
  - #fffbeb (lightest yellow)

- **Neutrals**:
  - #ffffff (white backgrounds)
  - #000000 (black text, some backgrounds)
  - #374151 (gray text)
  - #1f2937 (dark gray)
  - #6b7280 (medium gray)
  - #d1d5db (light gray borders)

- **Accents**:
  - #2563eb (blue for links)
  - #bfdbfe (light blue backgrounds)
  - #92400e (brown for quotes)

## Font Implementation

### Custom Fonts
```css
@font-face {
    font-family: 'Anastasia';
    src: url('/fonts/Anastasia Regular.ttf') format('truetype');
}

@font-face {
    font-family: 'Century Gothic';
    src: url('/fonts/centurygothic.ttf') format('truetype');
}

@import url('https://fonts.googleapis.com/css2?family=Poiret+One&display=swap');
```

### Font Usage
- **Anastasia**: Major headings, decorative titles
- **Century Gothic**: Body text, descriptions
- **Poiret One**: Special announcements, featured text
- **Sans-serif**: Fallback for all text

## Key Features to Implement

### Navigation
- Smooth scroll behavior
- Active link highlighting
- Sticky navbar
- Mobile responsive menu

### Interactions
- Hover effects on links (white underline)
- Image hover effects
- Button hover states
- Smooth transitions (0.2s ease-in-out)

### Performance
- Lazy load images
- Optimize image sizes
- Compress assets
- Minify CSS/JS

### Accessibility
- Alt text for all images
- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- Sufficient color contrast

## Content Guidelines

### Image Requirements
- **Hero banners**: 1920×400px (full-width backgrounds)
- **Profile photos**: 200×280px (portraits)
- **Singer photos**: 150×150px (square headshots)
- **Topic images**: 300×200px (landscape)
- **Icons**: 50×50px (SVG preferred)
- **Format**: WebP or optimized JPEG/PNG
- **Max file size**: 200KB per image

### Text Content Structure
- **Headings**: ALL CAPS for major titles
- **Body**: Sentence case, clear paragraphs
- **Lists**: Checkmark bullets (✓) with gold color
- **Quotes**: Italic, indented, with citation
- **Links**: Blue color (#2563eb), underlined on hover

## Package.json Dependencies

```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.20.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.2.0",
    "autoprefixer": "^10.4.16",
    "eslint": "^8.55.0",
    "postcss": "^8.4.32",
    "tailwindcss": "^3.3.6",
    "vite": "^5.0.8"
  }
}
```

## Build Configuration

### vite.config.js
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000
  }
})
```

### tailwind.config.js
```javascript
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'anastasia': ['Anastasia', 'cursive'],
        'century': ['Century Gothic', 'sans-serif'],
        'poiret': ['Poiret One', 'cursive']
      },
      colors: {
        'church-gold': '#e6b800',
        'church-gold-dark': '#ca8a04',
        'church-gold-darker': '#b45309',
        'church-yellow-light': '#fef3c7',
        'church-yellow-border': '#fde68a'
      }
    }
  },
  plugins: []
}
```

## Implementation Steps

1. **Setup Project**
   ```bash
   npm create vite@latest church-website -- --template react
   cd church-website
   npm install
   npm install react-router-dom
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```

2. **Create Folder Structure**
   - Create all folders as specified
   - Add fonts to `/fonts` directory
   - Prepare all images in `/src/assets`

3. **Build Components**
   - Start with Navbar and Footer (global)
   - Create reusable card components
   - Build page-specific components

4. **Create Pages**
   - Home page first (most complex)
   - Then internal pages using components
   - Ensure consistent styling

5. **Setup Routing**
   - Configure React Router in App.jsx
   - Test all navigation links
   - Add 404 handling

6. **Responsive Testing**
   - Test on desktop (1920px, 1440px, 1024px)
   - Test on tablet (768px)
   - Test on mobile (480px, 375px)
   - Adjust media queries as needed

7. **Optimization**
   - Compress images
   - Add lazy loading
   - Optimize fonts
   - Test performance

8. **Final QA**
   - Check all links work
   - Verify all images load
   - Test forms/interactions
   - Cross-browser testing

## Quality Checklist

### Visual Design ✓
- [ ] 1024px max content width consistently applied
- [ ] Hero banners are 400px height (desktop)
- [ ] All fonts render correctly
- [ ] Color scheme matches exactly
- [ ] Spacing is compact and professional
- [ ] Images are properly sized and optimized

### Functionality ✓
- [ ] All navigation links work
- [ ] Smooth scrolling enabled
- [ ] Hover effects work on all interactive elements
- [ ] Mobile menu functions properly
- [ ] External links open in new tabs

### Responsive Design ✓
- [ ] Layout adapts smoothly at all breakpoints
- [ ] Text remains readable on mobile
- [ ] Images scale appropriately
- [ ] Navigation is mobile-friendly
- [ ] No horizontal scrolling on any device

### Performance ✓
- [ ] Page load time < 3 seconds
- [ ] Images optimized (< 200KB each)
- [ ] CSS/JS minified for production
- [ ] Fonts load efficiently
- [ ] No console errors

### Accessibility ✓
- [ ] All images have alt text
- [ ] Semantic HTML used throughout
- [ ] Keyboard navigation works
- [ ] Color contrast meets WCAG standards
- [ ] Screen reader friendly

## Additional Notes

### Content Sections to Populate
- Producer biography
- Composer details
- Singer profiles (14 total)
- Testimony content
- Sponsorship tiers
- Registration forms
- Contact information

### External Links to Include
- Google Drive documents
- Payment gateways
- Social media profiles
- Email contacts
- Video previews (if available)

### SEO Considerations
- Meta tags for each page
- Descriptive page titles
- Open Graph tags for social sharing
- Sitemap.xml
- Robots.txt

### Future Enhancements
- Audio player integration
- Video embedding
- Online registration form
- Payment gateway integration
- Admin dashboard
- Blog/news section
- Newsletter signup

---

## Usage Instructions

Use this master prompt with an AI coding assistant or development team by:

1. **Provide the entire prompt** as context
2. **Request specific sections** to be built first (e.g., "Create the Navbar component following the specifications")
3. **Iterate on components** before moving to full pages
4. **Reference specific sections** when asking for modifications (e.g., "Update the typography to match the Design Specifications")
5. **Use the checklist** to ensure all requirements are met

This prompt contains all necessary specifications to recreate the website with identical styling, structure, and functionality.
