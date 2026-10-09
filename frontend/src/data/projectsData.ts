import type { Project } from '../types/project';

export const projectsData: Project[] = [
  {
    id: 'proj-business-website',
    slug: 'corporate-business-platform',
    title: 'Aura Capital — Corporate Business Platform',
    category: 'Business Website',
    shortDescription: 'A high-performance corporate platform featuring interactive service calculators, multi-language localization, and dynamic contact routing.',
    overview: 'This demonstration project showcases a full-scale corporate web platform designed for an advisory firm. It emphasizes brand authority, high-speed page loads, clear call-to-action paths, and accessible semantic structuring.',
    problemStatement: 'Many modern corporate websites suffer from slow load times, cluttered navigation architectures, and poor mobile readability, leading to elevated bounce rates and low lead conversion.',
    proposedSolution: 'Engineered a modular, component-driven web application using React, Vite, and Tailwind CSS. Implemented clean visual hierarchy, responsive touch-first navigation, and client-side form validation with accessible error states.',
    keyFeatures: [
      'Sub-second first contentful paint (FCP) through Vite bundle optimization',
      'Interactive financial service estimation calculator',
      'Dynamic inquiry form with field-level validation and spam honeypot',
      'Fully responsive fluid typography and WCAG AA contrast compliant styling',
      'Modular CMS-ready component architecture'
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Lucide Icons'],
    isDemonstration: true,
    lessonsLearned: [
      'Balancing dark and light UI elements requires strict CSS variable scoping to maintain consistent contrast ratios.',
      'Lazy-loading non-critical vector illustrations significantly enhances mobile responsiveness on 4G networks.'
    ],
    previewGradient: 'from-blue-600/30 to-indigo-900/40',
    iconName: 'Building2',
    metricsLabel: '98/100 Lighthouse Performance'
  },
  {
    id: 'proj-ecommerce-platform',
    slug: 'nexus-commerce-engine',
    title: 'NexusStore — Modern E-Commerce Platform',
    category: 'E-Commerce',
    shortDescription: 'A full-featured digital storefront concept with instant client-side filtering, interactive product variants, and streamlined checkout UI.',
    overview: 'A concept e-commerce application demonstrating modern product exploration UX, robust shopping cart state management, and real-time order summary calculation.',
    problemStatement: 'Traditional storefronts frequently lose potential customers during category navigation and multi-step checkout processes due to clunky reloads and confusing form layouts.',
    proposedSolution: 'Developed an SPA storefront with instantaneous reactive category filters, optimistic cart updates, persistent session storage, and an intuitive single-page checkout flow.',
    keyFeatures: [
      'Multi-parameter product filtering (category, price range, stock availability)',
      'Interactive photo gallery with zoom and variant selection',
      'Persistent cart state synchronized across browser sessions',
      'Structured order summary with automatic tax and shipping calculation',
      'Mock Stripe payment step with comprehensive field validations'
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'React Router', 'Spring Boot REST'],
    isDemonstration: true,
    lessonsLearned: [
      'Decoupling cart calculations into pure utility functions makes unit testing tax logic straightforward.',
      'Keyboard-accessible modals are critical for accessible checkout experiences.'
    ],
    previewGradient: 'from-cyan-600/30 to-blue-900/40',
    iconName: 'ShoppingCart',
    metricsLabel: 'Instant Filter & Reactive Cart'
  },
  {
    id: 'proj-task-management',
    slug: 'pulse-task-manager',
    title: 'PulseFlow — Task & Workflow Management Suite',
    category: 'Web Application',
    shortDescription: 'A collaborative productivity workspace featuring drag-and-drop Kanban boards, priority tagging, and sprint velocity tracking.',
    overview: 'A demonstration task management web application designed for agile development teams. Features interactive task boards, status swimlanes, milestone tracking, and task detail sidebars.',
    problemStatement: 'Engineering teams often struggle with overly complex project management tools that have steep learning curves and slow UI feedback.',
    proposedSolution: 'Engineered a clean, focused task board interface with instant visual feedback, customizable columns, quick inline editing, and priority indicators.',
    keyFeatures: [
      'Visual Kanban workflow with To-Do, In Progress, Review, and Completed stages',
      'Inline task creation, assignee tags, and deadline notifications',
      'Priority badge classification (Low, Medium, High, Urgent)',
      'Search and filter by assignee, keyword, and due date',
      'Detailed task dialog with sub-task checklist and activity logs'
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Spring Boot', 'MongoDB'],
    isDemonstration: true,
    lessonsLearned: [
      'Optimistic state updates provide a much snappier user experience when reordering tasks across swimlanes.',
      'Clear color-coded priority badges prevent visual noise while keeping team status obvious at a glance.'
    ],
    previewGradient: 'from-indigo-600/30 to-purple-900/40',
    iconName: 'KanbanSquare',
    metricsLabel: 'Agile Kanban & Sprint Hub'
  },
  {
    id: 'proj-healthcare-system',
    slug: 'medicare-portal',
    title: 'CareSync — Healthcare Management System',
    category: 'Healthcare System',
    shortDescription: 'A secure clinical portal concept for patient appointments, doctor availability calendars, and organized medical records.',
    overview: 'A demonstration healthcare portal conceptualized to streamline clinic operations, patient intake, appointment scheduling, and consultation history management.',
    problemStatement: 'Medical clinics frequently manage appointments through disjointed phone calls and paper records, causing double-bookings and administrative overhead.',
    proposedSolution: 'Built a role-oriented web application prototype connecting patient self-scheduling with physician roster availability and structured consultation history logs.',
    keyFeatures: [
      'Interactive doctor availability calendar with time-slot selection',
      'Patient intake form with medical history checklist and emergency contacts',
      'Structured consultation notes with prescription summary view',
      'Appointment confirmation alerts and calendar sync reminders',
      'Role-based privacy-conscious data organization layout'
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Spring Boot', 'MongoDB Atlas'],
    isDemonstration: true,
    lessonsLearned: [
      'Healthcare UIs require high readability, calm color palettes, and strict input format validation for medical identifiers.',
      'Clear confirmation dialogs before booking submission prevent accidental duplicate requests.'
    ],
    previewGradient: 'from-emerald-600/30 to-teal-900/40',
    iconName: 'Activity',
    metricsLabel: 'Secure Clinic & Patient Portal'
  }
];
