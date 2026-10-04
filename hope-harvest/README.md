# Hope Harvest Community Kitchen – Website Project

**Student Information**  
- Full Name: [Your Full Name]  
- Student Number: [Your Student Number]  
- Group / Class: [Your Group]  
- Subject: [Subject Name & Code]  

---

## Project Overview

This repository contains the website developed for **Hope Harvest Community Kitchen**, a fictional but realistic non-profit organisation based in Johannesburg, South Africa. The organisation provides free nutritious meals, monthly food parcels and life-skills workshops to vulnerable families and individuals.

The project is completed as a Portfolio of Evidence (PoE) in three parts:

- **Part 1** – Project initiation, planning, content research, HTML structure and basic content  
- **Part 2** – Visual design, CSS styling and responsive layout *(Current)*  
- **Part 3** – JavaScript functionality, forms validation, SEO and external integrations  

---

## Website Goals and Objectives

- Provide clear, accessible information about the organisation’s services  
- Encourage volunteering and donations  
- Allow community members to enquire about food support and workshops  
- Present a professional, trustworthy online presence  
- Be fully responsive and usable on mobile devices  

**Key Performance Indicators (KPIs)**  
- Number of enquiry / volunteer form submissions  
- Time spent on key pages  
- Mobile usability score  
- Accessibility compliance  

---

## Key Features and Functionality

### Part 1 (Completed)
- Five fully linked HTML pages with consistent navigation  
- Semantic HTML5 structure (`header`, `nav`, `main`, `section`, `footer`)  
- Content covering organisation history, mission, services and contact details  
- Basic enquiry / volunteer form  
- Multiple physical locations listed  
- Clean file and folder structure  

### Part 2 (Completed)
- External CSS stylesheet (`css/styles.css`) linked to all pages  
- CSS custom properties (variables) for colours, typography and spacing  
- CSS reset for cross-browser consistency  
- Typography scale (font-family, font-size, font-weight, line-height, letter-spacing)  
- Desktop layout using **CSS Grid** and **Flexbox**  
- Visual styles: colour scheme, borders, box-shadows, gradients  
- Interactive states (`:hover`, `:focus`, `:active`)  
- Responsive design with media queries and breakpoints  
- Relative units (`rem`, `%`, `clamp()`) for scalable typography and spacing  
- Mobile-first refinements and tablet/desktop enhancements  

---

## Colour Scheme (from Project Proposal)

| Role            | Hex       | Usage                          |
|-----------------|-----------|--------------------------------|
| Primary Green   | `#2C5F2D` | Header, headings, trust        |
| Primary Dark    | `#1e4220` | Footer, gradients              |
| Accent Terracotta | `#C45C26` | Buttons, active links, highlights |
| Cream           | `#F8F1E9` | Page background, cards         |
| White           | `#ffffff` | Content cards                  |
| Text            | `#2d2d2d` | Body text                      |

---

## Sitemap

```
Home (index.html)
├── About Us (about.html)
├── Services (services.html)
│   ├── Daily Meals
│   ├── Food Parcels
│   └── Skills Workshops
├── Volunteer / Enquire (enquiry.html)
└── Contact (contact.html)
    ├── Brixton Hub
    ├── Yeoville Centre
    └── Alexandra Outreach Point
```

---

## File and Folder Structure

```
hope-harvest/
├── index.html
├── about.html
├── services.html
├── enquiry.html
├── contact.html
├── css/
│   └── styles.css      ← Full Part 2 stylesheet
├── images/             (placeholder – add images + update README)
├── js/                 (placeholder – JavaScript in Part 3)
└── README.md
```

---

## Timeline and Milestones

| Phase   | Focus                              | Status      |
|---------|------------------------------------|-------------|
| Part 1  | Planning, content, HTML structure  | Completed   |
| Part 2  | CSS, responsive design, UX         | Completed   |
| Part 3  | JavaScript, forms, SEO, embeds     | Upcoming    |

---

## Changelog

### 2026-10-04 – Part 2: CSS Styling & Responsive Design
- Created comprehensive external stylesheet (`css/styles.css`)
- Implemented CSS custom properties for maintainable design tokens
- Applied CSS reset for consistent cross-browser rendering
- Built typography scale using relative units (`rem`, `clamp()`)
- Structured desktop layout with CSS Grid and Flexbox
- Styled cards, buttons, forms, stats, and navigation
- Added visual polish: gradients, box-shadows, hover/focus states
- Implemented responsive breakpoints:
  - Mobile: max-width 639px
  - Tablet: min-width 640px
  - Desktop: min-width 900px
  - Large desktop: min-width 1200px
- Ensured multi-column layouts collapse to single column on small screens
- Updated all HTML pages to reference the completed stylesheet
- Expanded README with Part 2 documentation, colour table and responsive notes

### 2026-09-01 – Part 1 Initial Commit
- Created project structure  
- Built five HTML pages with full navigation  
- Added organisation content (history, mission, services, contact)  
- Created basic enquiry form  
- Added placeholder CSS using planned colour palette  
- Wrote initial README  

---

## Responsive Design Notes

**Breakpoints used**
- **Mobile** (< 640px): Single-column layout, stacked navigation, full-width buttons, 2-column stats
- **Tablet** (≥ 640px): Two-column mission/vision, larger headings
- **Desktop** (≥ 900px): Four-column stats, three-column cards, refined spacing
- **Large desktop** (≥ 1200px): Full max-width content area

**Relative units**
- Font sizes and spacing primarily use `rem` and `clamp()` for fluid scaling
- Widths and gaps use `%` and `fr` units inside Grid/Flex containers

**Testing recommendation**
Use browser developer tools (Chrome DevTools / Firefox Responsive Design Mode) to verify:
- 320px – 480px (mobile phones)
- 768px (tablets)
- 1024px+ (desktops)

**Screenshot evidence**  
*(Add screenshots of desktop, tablet and mobile views here or in a `/screenshots` folder and link them for submission.)*

---

## References

All sources are cited using the **Harvard Anglia style adapted for The Independent Institute of Education (IIE)**.

**Reference List**

Statistics South Africa. 2023. *Poverty trends in South Africa: An examination of absolute poverty between 2006 and 2023*. Pretoria: Statistics South Africa.

World Health Organization. 2022. *Food security and nutrition in southern Africa*. [Online]. Available at: https://www.who.int/ [Accessed 1 September 2026].

The Independent Institute of Education. 2025. *Harvard – Anglia Style Reference Guide – Adapted for The IIE*. [Online]. Available at: https://www.iie.ac.za/ [Accessed 1 September 2026].

Siewierski, C. 2015. *An introduction to scholarship: Building academic skills for tertiary study*. Cape Town: Oxford University Press Southern Africa.

W3C. 2023. *Web Content Accessibility Guidelines (WCAG) 2.2*. [Online]. Available at: https://www.w3.org/TR/WCAG22/ [Accessed 1 September 2026].

Mozilla Developer Network. 2024. *CSS Grid Layout* and *Flexbox*. [Online]. Available at: https://developer.mozilla.org/ [Accessed 4 October 2026].

Unsplash. [s.a.]. *Free high-resolution photos*. [Online]. Available at: https://unsplash.com/ [Accessed 1 September 2026].

**Note:**  
- In-text citations follow the format (Author, Year) or Author (Year).  
- Where no date is available, `[s.a.]` (sine anno) is used.  
- Online sources include `[Online]`, the full URL, and the accessed date.  
- Additional references for Part 3 (JavaScript, SEO, maps) will be added later.

---

## How to View the Site Locally

1. Clone or download this repository.  
2. Open `index.html` in any modern browser (Chrome, Firefox, Edge, Safari).  
3. Resize the browser window or use DevTools device mode to test responsiveness.  
4. All internal links and the external stylesheet work without a local server.

---

## Submission Notes (Part 2)

- Updated HTML files and complete external CSS pushed to the private GitHub repository.  
- README.md updated with Part 2 details, Changelog entries and References.  
- GitHub repository link submitted via the Learning Management System.  
- Screenshot evidence of responsive views should be added to this README or a dedicated folder before final submission.
