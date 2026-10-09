export interface TeamMember {
  id: string;
  name: string;
  role: string;
  focusAreas: string[];
  bio: string;
  githubUrl: string;
  linkedinUrl: string;
  avatarPlaceholder: string;
  keyResponsibilities: string[];
}

export const teamData: TeamMember[] = [
  {
    id: 'sathu',
    name: 'Sathu',
    role: 'Full-Stack Software Engineer & UI Specialist',
    focusAreas: ['Frontend Architecture', 'Spring Boot APIs', 'UI/UX Design', 'Integration Testing'],
    bio: 'Specializing in intuitive user interfaces, responsive design systems, and robust Java Spring Boot REST services. Passionate about building clean, high-performance web applications that deliver real business impact.',
    githubUrl: 'https://github.com',
    linkedinUrl: 'https://linkedin.com',
    avatarPlaceholder: 'S',
    keyResponsibilities: [
      'Frontend component architecture & Tailwind styling systems',
      'Spring Boot REST API endpoint implementation & validation',
      'Database repository design and schema mapping',
      'End-to-end integration and user journey testing'
    ]
  },
  {
    id: 'janu',
    name: 'Janu',
    role: 'Full-Stack Software Engineer & Systems Architect',
    focusAreas: ['Backend Engineering', 'MongoDB Integration', 'React State Management', 'API Security'],
    bio: 'Focused on scalable backend engineering, Spring Data MongoDB persistence layers, secure API design, and modern React development. Dedicated to building reliable, maintainable software architectures.',
    githubUrl: 'https://github.com',
    linkedinUrl: 'https://linkedin.com',
    avatarPlaceholder: 'J',
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
    sathuTasks: 'Establish UI design tokens, color palette, responsive navigation, and core layout components.',
    januTasks: 'Define project structure, routing architecture, API contract specifications, and TypeScript types.'
  },
  {
    phase: 'Phase 2: Page Development & UI Polish',
    sathuTasks: 'Develop Homepage hero, interactive services directory, and About page story.',
    januTasks: 'Build Portfolio gallery with category filtering, modal detail views, and Privacy Policy page.'
  },
  {
    phase: 'Phase 3: Backend & Database Engine',
    sathuTasks: 'Implement Spring Boot Contact Controller, Bean Validation DTOs, and REST endpoints.',
    januTasks: 'Configure MongoDB repository, entity models, database error handling, and environment config.'
  },
  {
    phase: 'Phase 4: API Integration & Validation',
    sathuTasks: 'Connect frontend Contact Form to backend API, handle asynchronous loading & success states.',
    januTasks: 'Implement honeypot spam protection, client-side input validation regex, and error fallbacks.'
  },
  {
    phase: 'Phase 5: Testing, Documentation & Review',
    sathuTasks: 'Perform cross-browser responsive testing, accessibility audits, and write component documentation.',
    januTasks: 'Execute Spring Boot integration tests, formulate README guide, and configure Git workflows.'
  }
];
