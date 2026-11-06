export interface TeamMember {
  id: string;
  name: string;
  designation: string;
  role: string;
  focusAreas: string[];
  bio: string;
  githubUrl: string;
  linkedinUrl: string;
  avatarPlaceholder: string;
  avatarUrl?: string;
  keyResponsibilities: string[];
}

export const teamData: TeamMember[] = [
  {
    id: 'sathurjan',
    name: 'Vijithakumarasena Sathurjan',
    designation: 'Co-Founder & CEO',
    role: 'Full-Stack Software Engineer & UI Specialist',
    focusAreas: [
      'Frontend Architecture',
      'Spring Boot APIs',
      'JWT Token Security',
      'Google OAuth & Auth',
      'UI/UX Design'
    ],
    bio: 'Co-Founder & CEO of Nova@Gen Technologies. Specializing in intuitive user interfaces, secure Spring Boot REST APIs, JWT token security, and Google OAuth authentication. Passionate about engineering high-performance web applications with airtight security and clean architecture.',
    githubUrl: 'https://github.com/Sathurjanv23',
    linkedinUrl: 'https://www.linkedin.com/in/vijithakumarasena-sathurjan/',
    avatarPlaceholder: 'S',
    avatarUrl: '/sathurjan-avatar.jpg',
    keyResponsibilities: [
      'JWT token generation, refresh token rotation, and Spring Security filters',
      'Google OAuth2 authentication, SSO integration, and role-based access control (RBAC)',
      'Frontend component architecture & Tailwind styling systems',
      'Spring Boot REST API endpoint implementation & database mapping',
      'End-to-end integration and security vulnerability testing'
    ]
  },
  {
    id: 'januka',
    name: 'Januka Karunakaran',
    designation: 'Co-Founder & CEO',
    role: 'Full-Stack Software Engineer & Systems Architect',
    focusAreas: ['Backend Engineering', 'MongoDB Integration', 'React State Management', 'API Security'],
    bio: 'Co-Founder & CEO of Nova@Gen Technologies. Focused on scalable backend engineering, Spring Data MongoDB persistence layers, secure API design, and modern React development. Dedicated to building reliable, maintainable software architectures.',
    githubUrl: 'https://github.com/januka-karunakaran',
    linkedinUrl: 'https://www.linkedin.com/in/januka-karunakaran-114088301/',
    avatarPlaceholder: 'J',
    avatarUrl: '/januka-avatar.jpg',
    keyResponsibilities: [
      'MongoDB Atlas integration, query optimization, and data modeling',
      'Backend exception handling, security validation, and CORS policies',
      'Interactive client-side state handling and form validation',
      'Performance benchmarking, documentation, and deployment workflows'
    ]
  }
];

export const collaborationBreakdown = [
  {
    phase: 'Phase 1: Architecture & Design System',
    sathurjanTasks: 'Establish UI design tokens, color palette, responsive navigation, and core layout components.',
    janukaTasks: 'Define project structure, routing architecture, API contract specifications, and TypeScript types.'
  },
  {
    phase: 'Phase 2: Page Development & UI Polish',
    sathurjanTasks: 'Develop Homepage hero, interactive services directory, and About page story.',
    janukaTasks: 'Build Portfolio gallery with category filtering, modal detail views, and Privacy Policy page.'
  },
  {
    phase: 'Phase 3: Backend & Database Engine',
    sathurjanTasks: 'Implement Spring Boot Contact Controller, JWT security filters, Google OAuth, and REST endpoints.',
    janukaTasks: 'Configure MongoDB repository, entity models, database error handling, and environment config.'
  },
  {
    phase: 'Phase 4: API Integration & Validation',
    sathurjanTasks: 'Wire up ContactForm state, validation handlers, error alerts, and response feedback.',
    janukaTasks: 'Build resilient client-side service layer with offline fallback mocking and latency handling.'
  }
];
