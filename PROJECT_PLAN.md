# Cawiye - Project Implementation Plan

## Phase 1: Frontend Architecture & Design (React + TypeScript)
- [x] **Project Initialization**
  - [x] Setup React with TypeScript and Vite.
  - [x] Configure Tailwind CSS for styling.
  - [x] Configure Lucide React for icons.
  - [x] Setup React Router for navigation.

- [x] **Core Components**
  - [x] `Navbar`: Responsive, sticky, mobile menu logic.
  - [x] `Footer`: Links, social icons, newsletter layout.
  - [x] `TopBanner`: Promotional banner with dismiss functionality.
  - [x] `ErrorBoundary`: Global error handling.
  - [x] `PageLoader`: Loading state for code-splitting.

- [x] **Pages Implementation**
  - [x] `Home`: Hero, Social Proof, Timeline, Mini Services.
  - [x] `Product`: Portfolio grid, Bento grid features, Tech stack.
  - [x] `Pricing`: Pricing cards, FAQ section.
  - [x] `About`: Company stats, mission statement, team visual.
  - [x] `Contact`: Contact form, location details.
  - [x] `RequestQuote`: Complex multi-step form logic with validation.
  - [x] `Legal`: Terms and Privacy policy structure.

- [x] **UI/UX Refinements**
  - [x] Scroll animations (ScrollReveal component).
  - [x] Lazy loading for routes (Code splitting).
  - [x] Internationalization (i18n) setup (English/Somali).
  - [x] Mobile responsiveness adjustments.

## Phase 2: Content Management System (Netlify CMS / Decap CMS)
*Goal: Allow non-technical updates to the Portfolio/Projects section without editing code.*

- [ ] **CMS Configuration**
  - [ ] Create `public/admin/index.html` entry point.
  - [ ] Configure `public/admin/config.yml`.
  - [ ] Define content collections:
    - [ ] `projects`: Title, Category, Image, Tags.
    - [ ] `testimonials`: Author, Role, Quote, Image.
  - [ ] Setup Netlify Identity for authentication.

- [ ] **Content Integration**
  - [ ] Create logic to read CMS-generated JSON/Markdown files.
  - [ ] Refactor `ProjectShowcase.tsx` to fetch data dynamically instead of using hardcoded arrays.
  - [ ] Update `Testimonials.tsx` to display dynamic content.

## Phase 3: Backend Services (Node.js + Fastify)
*Goal: Handle form submissions and server-side logic.*

- [ ] **Server Setup**
  - [ ] Initialize Fastify project.
  - [ ] Setup TypeScript for backend.
  - [ ] Configure CORS and environment variables.

- [ ] **API Endpoints**
  - [ ] `POST /api/contact`: Handle generic contact form submissions.
  - [ ] `POST /api/quote`: Handle detailed quote requests.
  - [ ] `GET /api/status`: Health check endpoint.

- [ ] **Email Service**
  - [ ] Integrate Nodemailer or SendGrid/Postmark.
  - [ ] Create HTML email templates for admin notifications.
  - [ ] Create auto-reply templates for clients.

## Phase 4: Database (PostgreSQL + Supabase)
*Goal: Persist data for long-term storage, CRM, and analytics.*

- [ ] **Database Setup**
  - [ ] Initialize Supabase project.
  - [ ] Configure connection strings in `.env`.

- [ ] **Schema Design**
  - [ ] Table: `leads`
    - `id` (uuid)
    - `full_name` (text)
    - `email` (text)
    - `message` (text)
    - `status` (enum: new, contacted, closed)
    - `created_at` (timestamp)
  - [ ] Table: `quotes`
    - `id` (uuid)
    - `services` (jsonb/array)
    - `budget` (text)
    - `timeline` (text)
    - `details` (text)
    - `created_at` (timestamp)
  - [ ] Table: `subscribers` (email list)

- [ ] **Backend Integration**
  - [ ] Install Postgres client or ORM (Prisma/Drizzle).
  - [ ] Connect Fastify routes to database insert operations.

## Phase 5: Deployment & Optimization
- [ ] **Frontend Deployment**
  - [ ] Run production build (`npm run build`).
  - [ ] Deploy to Netlify.
  - [ ] Enable Netlify Identity widget.

- [ ] **Backend Deployment**
  - [ ] Deploy Node.js server (Railway/Render) or migrate API to Netlify Functions.
  - [ ] Set environment secrets (DB URL, API Keys) in production.

- [ ] **Final Polish**
  - [ ] SEO Meta tags (Helmet) for all pages.
  - [ ] Accessibility audit (Ensure ARIA labels on all inputs/buttons).
  - [ ] Performance testing (Lighthouse score > 90).
