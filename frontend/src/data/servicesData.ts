import type { ServiceItem } from '../types/service';

export const servicesData: ServiceItem[] = [
  {
    id: 'website-development',
    title: 'Website Development',
    shortDescription: 'Modern, performant, and search-optimized web platforms built with contemporary front-end frameworks and responsive styling.',
    problemSolved: 'Helps businesses establish a credible digital presence that renders fast across all devices, communicates core value propositions clearly, and converts visitors.',
    keyDeliverables: [
      'Responsive multi-page corporate & landing websites',
      'Modern Single Page Applications (SPA) with React & TypeScript',
      'Semantic HTML5 structure & SEO-friendly architecture',
      'Content management integration & high-speed static assets'
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Next.js', 'HTML5/CSS3'],
    icon: 'Globe',
    badge: 'Core Offering'
  },
  {
    id: 'web-application-development',
    title: 'Web Application Development',
    shortDescription: 'Interactive, secure, and data-driven web applications engineered for seamless user workflows and high operational reliability.',
    problemSolved: 'Eliminates fragmented legacy tools by delivering cohesive, role-based dashboards, customer portals, and collaborative online systems.',
    keyDeliverables: [
      'Full-stack cloud-ready web applications',
      'Role-based access control (RBAC) and user authentication',
      'Interactive dashboards with data visualization',
      'Real-time communication and state synchronization'
    ],
    technologies: ['React', 'TypeScript', 'Spring Boot', 'Node.js', 'REST APIs', 'WebSockets'],
    icon: 'LayoutGrid',
    badge: 'Popular'
  },
  {
    id: 'custom-software-development',
    title: 'Custom Software Development',
    shortDescription: 'Tailored backend systems and enterprise software architecture aligned with your unique business rules and operational workflows.',
    problemSolved: 'Overcomes off-the-shelf software limitations with custom-tailored logic, bespoke data models, and scalable architectures.',
    keyDeliverables: [
      'Modular microservices and robust monolithic architectures',
      'High-throughput business logic processing',
      'Clean domain-driven design and maintainable codebases',
      'Comprehensive unit and integration test suites'
    ],
    technologies: ['Java 17+', 'Spring Boot', 'Spring Data', 'Maven', 'Docker', 'JUnit'],
    icon: 'Code2'
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    shortDescription: 'Human-centered user experience research, wireframing, interactive prototyping, and polished design systems.',
    problemSolved: 'Prevents user drop-off and friction by crafting intuitive, accessible, and visually compelling product interfaces.',
    keyDeliverables: [
      'Wireframing, user journey maps, and information architecture',
      'High-fidelity interactive prototypes & component design systems',
      'Responsive desktop, tablet, and mobile interface design',
      'WCAG 2.1 accessible color contrasts and typographic hierarchy'
    ],
    technologies: ['Figma', 'Design Systems', 'Responsive Design', 'Design Tokens', 'Prototyping'],
    icon: 'Palette'
  },
  {
    id: 'api-development-integration',
    title: 'API Development & Integration',
    shortDescription: 'Secure, documented RESTful APIs and third-party service integrations connecting disparate business tools.',
    problemSolved: 'Enables smooth interoperability between internal software, external partner APIs, payment gateways, and communication services.',
    keyDeliverables: [
      'REST API design with OpenAPI/Swagger documentation',
      'Third-party API connectors (Payment, Email, Cloud Storage)',
      'Token authentication, rate-limiting, and payload validation',
      'Consistent error handling and API versioning strategies'
    ],
    technologies: ['Spring Boot REST', 'JSON/HTTP', 'Postman', 'OAuth2/JWT', 'Bean Validation'],
    icon: 'Network'
  },
  {
    id: 'database-design-development',
    title: 'Database Design & Development',
    shortDescription: 'Optimized schema design, document modeling, and secure persistence layers for relational and NoSQL databases.',
    problemSolved: 'Resolves data bottlenecks, unoptimized queries, and disorganized schemas to ensure dependable data integrity and quick retrieval.',
    keyDeliverables: [
      'Relational and document database schema architecture',
      'MongoDB Atlas cluster configuration and indexing',
      'Data modeling, migration scripts, and entity relationship mapping',
      'Secure connection management and credential encapsulation'
    ],
    technologies: ['MongoDB Atlas', 'Spring Data MongoDB', 'PostgreSQL', 'Mongoose', 'Indexing Strategies'],
    icon: 'Database'
  },
  {
    id: 'business-process-automation',
    title: 'Business Process Automation',
    shortDescription: 'Automated digital pipelines that streamline repetitive administrative tasks, reduce manual errors, and accelerate throughput.',
    problemSolved: 'Cuts down hours spent on manual data entry, notifications, and scheduled status reporting.',
    keyDeliverables: [
      'Automated notification triggers and webhook listeners',
      'Scheduled background workers and batch data synchronizers',
      'Custom form handling and CRM/database syncing',
      'Error logging and automated delivery receipts'
    ],
    technologies: ['Spring Scheduling', 'Cron Jobs', 'Webhooks', 'Async Tasks', 'Email Pipelines'],
    icon: 'Cpu'
  }
];
