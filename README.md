# Nova@Gen Technologies

> **"Building Digital Solutions for Tomorrow."**  
> We design and develop modern websites, intelligent applications, and scalable digital solutions that help businesses grow.

---

## 🚀 Overview

**Nova@Gen Technologies** is a modern corporate software and digital solutions portfolio platform engineered with high aesthetic standards, enterprise-grade architecture, and robust full-stack integration.

This repository contains both the client-side single-page application (React, TypeScript, Tailwind CSS) and the server-side REST API (Java 17, Spring Boot 3.3.4, Spring Data MongoDB).

---

## 🎨 Brand & Design System

* **Primary Navy:** `#0B1020` (Main brand dark background)
* **Secondary Navy / Surface:** `#111827` (Card surfaces & headers)
* **Light Canvas:** `#F8FAFC` (Content background)
* **Primary Accent:** `#6366F1` (Indigo — CTAs, active highlights)
* **Secondary Accent:** `#22D3EE` (Cyan — Badges, borders, tech accents)
* **Body Text:** `#475569` (Slate — High-legibility typography)
* **Typography:** Inter & Manrope (Google Fonts)

---

## 🏗️ Architecture & Project Structure

```
Nova@Gen/
├── frontend/                     # React + Vite + TypeScript Frontend
│   ├── src/
│   │   ├── components/           # Reusable UI components (Navbar, Footer, Modal, Cards, Forms)
│   │   ├── layouts/              # Root layout & page wrappers
│   │   ├── pages/                # Route pages (Home, Services, Portfolio, About, Contact, Privacy)
│   │   ├── data/                 # Structured data (Services, Concept Projects, Team profiles)
│   │   ├── services/             # API client & health check callers
│   │   ├── types/                # TypeScript interfaces and DTO definitions
│   │   ├── App.tsx               # Client routing definitions
│   │   ├── main.tsx              # Application mount point
│   │   └── index.css             # Tailwind design tokens & base typography
│   ├── tailwind.config.js        # Design tokens & color system
│   ├── package.json              # Frontend dependencies & scripts
│   └── .env.example              # Frontend environment template
│
├── backend/                      # Java 17 + Spring Boot REST Backend
│   ├── src/main/java/com/novagen/
│   │   ├── NovaGenApplication.java # Spring Boot main entry
│   │   ├── config/               # CORS & security configurations
│   │   ├── controller/           # ContactController & HealthController
│   │   ├── dto/                  # Request/Response validation DTOs
│   │   ├── model/                # MongoDB entity definitions (ContactEnquiry)
│   │   ├── repository/           # Spring Data Mongo repositories
│   │   ├── service/              # Business logic & honeypot spam protection
│   │   └── exception/            # Global Exception Handler & JSON validation errors
│   ├── src/main/resources/       # application.yml configuration
│   ├── src/test/                 # JUnit & MockMvc integration tests
│   ├── pom.xml                   # Maven dependencies and build setup
│   └── .env.example              # Backend environment template
│
├── .gitignore                    # Git ignore rules
└── README.md                     # Documentation & setup guide
```

---

## 💻 Pages & Features

1. **Home Page (`/`)**:
   * Hero section with value proposition, tech interface mockup, and primary CTAs.
   * Core services overview.
   * Featured demonstration project gallery with live modal architecture previews.
   * "Why Choose Nova@Gen Technologies" value breakdown.
   * 4-Stage Development Methodology timeline.
   * Project inquiry call-to-action banner.

2. **Services Page (`/services`)**:
   * Detailed breakdown of all 7 core capabilities:
     1. Website Development
     2. Web Application Development
     3. Custom Software Development
     4. UI/UX Design
     5. API Development & Integration
     6. Database Design & Development
     7. Business Process Automation
   * Specific deliverables, addressed problems, technology stacks, and direct consultation CTAs.

3. **Portfolio / Our Work (`/portfolio`)**:
   * Interactive category filtering (`Business Website`, `E-Commerce`, `Web Application`, `Healthcare System`).
   * Realistic, labeled demonstration projects with full Problem Statements, Proposed Solutions, Key Features, Tech Stack, and Lessons Learned.

4. **About Page (`/about`)**:
   * Company vision, mission, and core values.
   * Leadership profiles: Co-Founders & CEOs (**Vijithakumarasena Sathurjan** & **Januka Karunakaran**).
   * Balanced collaboration matrix outlining responsibilities.

5. **Contact Page (`/contact`)**:
   * Contact form with validation (Full Name, Email, Company, Project Type, Estimated Budget, Description, Preferred Method).
   * Honeypot bot protection.
   * Live Spring Boot API health status monitor.
   * Reference ID confirmation and SLA turnaround commitments.

6. **Privacy Policy (`/privacy-policy`)**:
   * Clear, transparent data handling policy covering information usage, storage, security, and user rights.

---

## 🛠️ Quickstart Guide

### Prerequisites
* **Node.js** v18+ (v24 recommended)
* **Java JDK** 17+
* **Apache Maven** 3.8+ (or bundled wrapper)
* *(Optional)* **MongoDB Atlas** connection string or local MongoDB instance

---

### 1. Running the Frontend

```bash
# Navigate to the frontend directory
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

* The frontend will be available at: `http://localhost:5173`

---

### 2. Running the Backend

```bash
# Navigate to the backend directory
cd backend

# (Optional) Set environment variables in .env or run with defaults
# Run unit & integration tests
mvn test

# Start the Spring Boot Application
mvn spring-boot:run
```

* The backend REST API will be available at: `http://localhost:8080/api`
* Health Check: `GET http://localhost:8080/api/health`
* Contact Submission: `POST http://localhost:8080/api/contact`

---

## 🗄️ MongoDB Atlas Setup

To persist enquiries to MongoDB Atlas:

1. Create a free cluster on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
2. Create a Database User and obtain your Connection URI.
3. Configure your connection string in your environment:
   ```bash
   export MONGODB_URI="mongodb+srv://<username>:<password>@cluster0.mongodb.net/novagen_db?retryWrites=true&w=majority"
   ```
   Or create a `backend/.env` file with `MONGODB_URI`.
4. If MongoDB is not configured or offline during local exploration, the backend and frontend gracefully handle submissions with full logging and safe fallbacks.

---

## 👥 Team Collaboration (Sathurjan & Januka)

| Engineering Phase | Sathurjan's Scope | Januka's Scope |
| :--- | :--- | :--- |
| **Phase 1: Architecture & UI Tokens** | Design tokens, color palette, responsive navbar & layout components | Project structure, route design, API contracts & TypeScript types |
| **Phase 2: Page Development** | Homepage hero, interactive services directory, About page | Portfolio gallery, category filtering, project detail modals, Privacy page |
| **Phase 3: Backend & Database Engine** | Spring Boot Contact Controller, Bean Validation DTOs, REST endpoints | MongoDB repository, entity models, database error handling, environment configs |
| **Phase 4: API Integration & Validation** | Frontend API client, loading/success state handling, form hooks | Honeypot spam protection, client-side regex validation, fallback mechanisms |
| **Phase 5: Testing & QA** | Responsive cross-browser audits, accessibility (WCAG AA), styling polish | JUnit slice tests, MockMvc integration testing, README & deployment docs |

### Git Branch Workflow
* `feature/homepage` — Sathurjan
* `feature/portfolio` — Januka
* `feature/services` — Sathurjan
* `feature/contact-api` — Sathurjan & Januka
* `feature/contact-form` — Sathurjan & Januka
* `test/integration` — Sathurjan & Januka

---

## 🛡️ API Endpoints

### `POST /api/contact`
Receives and validates project enquiries.

**Sample Request Body:**
```json
{
  "fullName": "Jane Doe",
  "email": "jane.doe@example.com",
  "companyName": "Acme Innovations",
  "projectType": "Web Application Development",
  "estimatedBudget": "$7,500 - $15,000",
  "projectDescription": "We require a customer analytics dashboard with role-based access.",
  "preferredContactMethod": "Email"
}
```

**Success Response (201 Created):**
```json
{
  "success": true,
  "message": "Thank you for reaching out! We have received your project enquiry and our team will get back to you within 24-48 business hours.",
  "data": {
    "referenceId": "651a9f34...",
    "receivedAt": "2026-10-09T18:00:00Z",
    "status": "RECEIVED"
  },
  "timestamp": "2026-10-09T18:00:00Z"
}
```

---

## 📜 License & Ownership
Copyright © 2026 **Nova@Gen Technologies**. All rights reserved.
