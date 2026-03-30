# MazeQube — SEO Fix Project

## Project Overview
- **Site:** https://mazeqube.com
- **Stack:** Plain HTML, CSS, JavaScript (static site)
- **Goal:** Full SEO overhaul targeting UK and European customers
- **Primary Markets:** United Kingdom, Western Europe (Germany, Netherlands, France, Ireland), Canada, USA
- **Target Customers:** B2B decision-makers, CTOs, Operations Directors, Digital Transformation leads in UK/Europe
- **Design:** Keep UI CSS same we are using bootstrap 5 framework
- **Videos:** Keep videos links i have deleted videos save bandwidth the folder name is video
- **Images:** Keep images links i have deleted images save bandwidth the folder name is img
- **Page links style:** Modify page links from /blog.html to /blog
---

## Geographic Targeting Strategy

### Primary Target: United Kingdom
- Use British English spelling throughout all content (e.g. "optimise" not "optimize", "customise", "licence", "colour", "digitalisation")
- Reference UK-specific context where relevant (GDPR compliance, FCA for fintech, NHS/CQC for public sector, CITB for construction)
- Target London, Manchester, Birmingham as implicit location signals in content where natural

### Secondary Targets: Europe
- Germany, Netherlands, France, Nordics, Ireland — English content (no translations needed yet)
- Emphasise GDPR compliance, EU AI Act awareness, data sovereignty
- Reference European frameworks: ISO 27001, SOC 2, PSD2 (for fintech), NIS2 directive

### hreflang Tags
Add to every page `<head>` to signal UK/Europe targeting to Google:
```html
<link rel="alternate" hreflang="en-gb" href="https://mazeqube.com/PAGE-URL.html" />
<link rel="alternate" hreflang="en" href="https://mazeqube.com/PAGE-URL.html" />
```

### Google Search Console
- Set geographic target to "United Kingdom" in GSC settings after going live
- Submit sitemap after all fixes are deployed

---

## Directory Structure (expected)
```
/
├── index.html
├── about-us.html
├── partner-with-us.html
├── contact.html
├── event.html
├── blog-grid.html
├── ai-more.html
├── industries-first.html         # B2B and Retail
├── industries-second.html        # Public Sector & Government
├── industries-third.html         # Supply Chain & Logistics
├── industries-four.html          # BROKEN — currently shared by Fintech, Maritime, Construction
├── industries-fintech.html       # TO CREATE
├── industries-maritime.html      # TO CREATE
├── industries-construction.html  # TO CREATE
├── services/
│   ├── custom-software-development.html   # TO CREATE
│   ├── business-process-automation.html   # TO CREATE
│   ├── ai-solutions.html                  # TO CREATE
│   ├── platform-engineering.html          # TO CREATE
│   ├── it-consulting.html                 # TO CREATE
│   └── ai-agents.html                     # TO CREATE
├── privacy-policy.html           # TO CREATE (required for UK/EU GDPR)
├── sitemap.xml                   # TO CREATE
├── robots.txt                    # TO CREATE/UPDATE
├── css/
├── js/
└── img/
```

---

## SEO Issues to Fix (Priority Order)

### 1. CRITICAL — Broken Industry Pages
`industries-four.html` is shared by 3 industries. Create separate files:
- `industries-fintech.html` → Fintech & Financial Services
- `industries-maritime.html` → Maritime & Marine Operations
- `industries-construction.html` → Construction & Heavy Operations

Update all nav links and internal links to the correct new URLs.
Content must reference UK/European industry context (FCA-regulated fintech, North Sea / UK ports maritime, UK construction sector).

### 2. CRITICAL — Missing Service Landing Pages
Create one dedicated page per service:
- `services/custom-software-development.html`
- `services/business-process-automation.html`
- `services/ai-solutions.html`
- `services/platform-engineering.html`
- `services/it-consulting.html`
- `services/ai-agents.html`

Each page must have:
- Unique `<title>` and `<meta name="description">` in British English
- One clear `<h1>` containing the primary keyword
- 600–900 words of body copy referencing UK/European business context
- Natural mention of GDPR compliance where relevant
- Internal links to related industry pages and back to homepage
- CTA section linking to contact.html and the Book Meeting URL

### 3. HIGH — Fix Meta Titles and Descriptions on All Pages

Use British English. Include "UK" in key page titles to reinforce geo-relevance.

| Page | Title (max 60 chars) | Description (max 155 chars) |
|------|----------------------|-----------------------------|
| index.html | Custom Software Development Company UK \| MazeQube | MazeQube builds custom software, AI solutions and business automation for UK and European companies. GDPR-compliant. 10 years experience. |
| industries-first.html | B2B & Retail Software Solutions UK \| MazeQube | Tailored software platforms for UK B2B and retail businesses — streamline operations, automate workflows and scale with confidence. |
| industries-second.html | Public Sector & Government Software UK \| MazeQube | Software for UK and European government organisations — improve service delivery, stakeholder engagement and regional development. |
| industries-third.html | Supply Chain & Logistics Software UK \| MazeQube | Optimise warehouse operations, inventory accuracy and end-to-end fulfilment with MazeQube's logistics software solutions. |
| industries-fintech.html | Fintech Software Development Company UK \| MazeQube | Secure, FCA-aware and GDPR-compliant fintech software for UK and European financial services businesses. |
| industries-maritime.html | Maritime & Port Management Software UK \| MazeQube | Software for UK port workflows, marina management, vessel administration and marine customer services. |
| industries-construction.html | Construction & Heavy Equipment Software UK \| MazeQube | Field-ready digital tools for UK construction planning, operational efficiency and heavy equipment management. |
| about-us.html | About MazeQube — UK Software Company Since 2016 | MazeQube has been transforming UK and European businesses with custom software since 2016. Meet our global team. |
| contact.html | Contact MazeQube UK — Book a Free Consultation | Get in touch with MazeQube to discuss your project. Book a free 30-minute consultation with our team today. |

### 4. HIGH — Add Schema Markup (JSON-LD)

Add to `index.html` inside `<head>`. Include areaServed for UK/Europe.

**Organization schema:**
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "MazeQube",
  "url": "https://mazeqube.com",
  "logo": "https://mazeqube.com/img/MazeQube_Logo_Icon_Color_45mm.png",
  "foundingDate": "2016",
  "description": "Custom software development, AI solutions and business process automation for UK and European B2B, fintech, logistics and public sector clients.",
  "areaServed": ["GB", "DE", "NL", "FR", "IE", "SE", "NO", "DK", "BE"],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "sales",
    "url": "https://mazeqube.com/contact.html",
    "areaServed": "GB",
    "availableLanguage": "English"
  },
  "sameAs": []
}
</script>
```

**Service schema — add one block per service page, e.g.:**
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Custom Software Development",
  "provider": {
    "@type": "Organization",
    "name": "MazeQube",
    "url": "https://mazeqube.com"
  },
  "areaServed": ["GB", "DE", "NL", "FR", "IE"],
  "description": "Tailor-made web, mobile and enterprise software platforms for UK and European businesses. GDPR-compliant development aligned to your workflows.",
  "url": "https://mazeqube.com/services/custom-software-development.html"
}
</script>
```

### 5. MEDIUM — Fix Homepage H1
Current: Split heading "Transforming / Supporting Businesses 24/7" — not a real H1.
Fix: Add one keyword-rich `<h1>` at the top of the main content area:
```html
<h1>Custom Software Development &amp; Business Automation for UK and European Companies</h1>
```
The existing decorative headline can remain as a styled `<p>` or `<h2>`.

### 6. MEDIUM — GDPR & Trust Signals (required for UK/EU)
- Add a cookie consent banner if not already present (UK PECR + EU ePrivacy requirement)
- Create `privacy-policy.html` if it does not exist
- Add to homepage and contact page: "GDPR-compliant development. Your data stays secure."
- Link privacy policy in the footer of every page

### 7. MEDIUM — Add Canonical Tags
Add to every page `<head>`:
```html
<link rel="canonical" href="https://mazeqube.com/PAGE-URL.html" />
```

### 8. MEDIUM — Create XML Sitemap (`sitemap.xml`)
List all pages with `<lastmod>` and `<priority>`:
- index.html → priority 1.0
- service pages → priority 0.9
- industry pages → priority 0.8
- about, contact, partner → priority 0.6

### 9. MEDIUM — Create `robots.txt`
```
User-agent: *
Allow: /
Sitemap: https://mazeqube.com/sitemap.xml
```

### 10. LOW — Add Open Graph + Twitter Card Tags
Add to every page `<head>`:
```html
<meta property="og:title" content="PAGE TITLE" />
<meta property="og:description" content="PAGE DESCRIPTION" />
<meta property="og:url" content="https://mazeqube.com/PAGE-URL.html" />
<meta property="og:type" content="website" />
<meta property="og:image" content="https://mazeqube.com/img/MazeQube_Logo_Icon_Color_45mm.png" />
<meta property="og:locale" content="en_GB" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="PAGE TITLE" />
<meta name="twitter:description" content="PAGE DESCRIPTION" />
```

---

## Content & Copy Rules

- **British English always:** optimise, customise, digitalise, licence (noun), color → colour, organization → organisation, recognize → recognise
- **Tone:** Professional, direct, credible — standard UK B2B. Avoid hollow Americanisms ("leverage synergies", "bleeding-edge", "world-class")
- **GDPR:** Mention naturally on fintech, public sector, AI/data pages — do not overdo it
- **UK industry references to use naturally in copy:**
  - Fintech: FCA, Open Banking, PSD2, FCA sandbox
  - Public Sector: NHS, local councils, Cabinet Office, GDS (Government Digital Service)
  - Logistics: UKWA (UK Warehousing Association), last-mile delivery, 3PL
  - Maritime: ABP (Associated British Ports), Port of Felixstowe, UKHO
  - Construction: CITB, JCT contracts, BIM (Building Information Modelling)
- **Specificity over vagueness:** Replace "cutting-edge solutions" with "software built for your workflows". UK B2B buyers respond to evidence and specifics, not adjectives.

---

## Coding Conventions
- All HTML files use UTF-8 charset
- Keep all existing CSS/JS file references intact — do not change asset paths
- New pages must reuse the existing nav, header, and footer from `index.html`
- Pure HTML/CSS/JS only — do not introduce frameworks or build tools
- Indent with 2 spaces
- All new pages must be mobile-responsive using existing CSS classes

---

## Internal Linking Rules
- Every industry page links to at least 2 relevant service pages
- Every service page links to at least 2 relevant industry pages
- Every page links to `contact.html`
- New pages must appear in the site nav and be linked from `index.html`
- Footer on all pages must link to `privacy-policy.html`

---

## Files NOT to Touch
- `img/` — do not rename or move any images
- `css/` and `js/` — do not rename files
- `partner-with-us.html` — leave unless explicitly asked
- `event.html` — leave unless explicitly asked

---

## How to Work on This Project

When a file is shared:
1. Read this CLAUDE.md first for full context
2. Apply all relevant fixes from the priority list above
3. Use British English for all copy
4. Return the full updated file (not just a diff) unless the file exceeds ~500 lines
5. Flag any additional SEO or GDPR issues spotted in the file
6. After each file, summarise what was changed and what still needs doing

---

## Target Keywords by Page (UK-focused)

| Page | Primary Keyword | Secondary Keywords |
|------|-----------------|--------------------|
| index.html | custom software development company UK | bespoke software development UK, software agency UK |
| services/custom-software-development.html | custom software development services UK | bespoke software UK, web app development UK |
| services/business-process-automation.html | business process automation services UK | workflow automation UK, RPA company UK |
| services/ai-solutions.html | AI integration services UK | AI solutions for business UK, intelligent automation UK |
| services/ai-agents.html | AI agents for business UK | autonomous AI agents UK, AI workflow automation |
| services/platform-engineering.html | platform engineering company UK | enterprise platform development UK |
| services/it-consulting.html | IT consulting services UK | digital transformation consultancy UK |
| industries-fintech.html | fintech software development UK | FCA-compliant fintech software, financial services technology UK |
| industries-maritime.html | maritime software UK | port management software UK, marina management system UK |
| industries-construction.html | construction management software UK | heavy equipment software UK, field operations software UK |
| industries-third.html | supply chain software UK | warehouse management system UK, logistics software UK |
| industries-second.html | public sector software UK | government digital services UK, local authority software UK |
| industries-first.html | B2B software solutions UK | retail management software UK, wholesale platform UK |

---

## UK Competitor Reference
These agencies rank well for target keywords in the UK — use their page depth and structure as a benchmark:
- Softwire — softwire.com
- Torchbox — torchbox.com
- Etch — etch.co
- AND Digital — and.digital
- Zuhlke — zuehlke.com/en/gb
