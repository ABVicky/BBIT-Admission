# BBIT Admission Guidance — Next.js Website

A production-ready admission guidance website for **Budge Budge Institute of Technology (BBIT)**, Kolkata.

## 🚀 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Vanilla CSS with CSS Modules
- **Deployment:** Netlify (static export)

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with SEO metadata
│   ├── page.tsx            # HOME page
│   ├── courses/            # Courses page
│   ├── placements/         # Placements page
│   ├── campus-life/        # Campus Life page
│   ├── scholarships/       # Scholarships page
│   ├── training/           # Training & Career Support page
│   ├── apply/              # Apply for Guidance (conversion page)
│   ├── sitemap.ts          # Auto-generated XML sitemap
│   └── robots.ts           # Robots.txt configuration
│
└── components/
    ├── Navbar.tsx           # Sticky responsive navbar
    ├── Footer.tsx           # Footer with links and disclaimer
    ├── WhatsAppFloat.tsx    # Floating WhatsApp CTA button
    ├── CTASection.tsx       # Reusable CTA section
    ├── CourseCard.tsx       # Course card component
    ├── PlacementCard.tsx    # Placement info card
    ├── TestimonialCard.tsx  # Student testimonial card
    └── FAQItem.tsx          # Accordion FAQ component
```

## 🛠️ Setup & Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npx serve out
```

## 🚢 Deployment (Netlify)

1. Push this repo to GitHub
2. Connect to Netlify
3. Build command: `npm run build`
4. Publish directory: `out`
5. Done!

## ✏️ Content Updates

### Update Phone Number
Find and replace `919999999999` with your actual WhatsApp number in:
- `src/components/WhatsAppFloat.tsx`
- `src/components/Navbar.tsx`
- `src/components/Footer.tsx`
- `src/components/CTASection.tsx`
- `src/app/apply/ApplyPage.tsx`

### Update Contact Email
Replace `guidance@bbitadmission.in` in `Footer.tsx` and `ApplyPage.tsx`

### Add Google Form
In `src/app/apply/ApplyPage.tsx`, replace the form placeholder with your actual Google Form embed code.

### Add Campus Photos
Replace `img-placeholder` divs in `campus-life/page.tsx` with actual `<Image>` components.

### Update Domain
Replace `https://bbitadmission.in` in:
- `src/app/layout.tsx` (metadataBase)
- `src/app/sitemap.ts`
- `src/app/robots.ts`

## 📊 SEO Features

- ✅ Next.js metadata API with page-level SEO
- ✅ OpenGraph tags
- ✅ Twitter Card tags
- ✅ XML Sitemap (`/sitemap.xml`)
- ✅ Robots.txt (`/robots.txt`)
- ✅ JSON-LD Schema markup (Home page)
- ✅ Semantic HTML5 structure
- ✅ Mobile-first responsive design

## 🎨 Design System

Colors and design tokens are defined in `src/app/globals.css` as CSS custom properties:
- `--primary`: Main blue (#1a56db)
- `--accent`: Amber/yellow (#f59e0b)
- `--secondary`: Green (#10b981)
- etc.

## 📌 Important Notes

- This is **not the official BBIT website**
- Always display the disclaimer: "Independent guidance platform — not affiliated with BBIT"
- Replace all placeholder content with real data before going live
