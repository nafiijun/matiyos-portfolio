import { Project, SkillCategory, EducationItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Matiyos Bizuneh',
  shortName: 'Matiyos',
  role: 'Software Developer & Information Systems Specialist',
  title: 'B.Sc. in Information Systems | Flutter & Full-Stack Developer',
  email: 'officialnafii671@gmail.com',
  githubUsername: 'nafiijun',
  githubUrl: 'https://github.com/nafiijun',
  location: 'Ethiopia (Open to Global & Remote Roles)',
  avatarUrl: 'https://avatars.githubusercontent.com/u/214370727?v=4',
  university: 'Haramaya University',
  degree: 'Bachelor of Science in Information Systems',
  availabilityStatus: 'Open for Opportunities',
  bio: 'Dynamic Information Systems graduate from Haramaya University with deep expertise in full-stack web and cross-platform mobile development (Flutter & Dart). Passionate about architecting scalable data systems, streamlining business processes, and building intuitive user experiences that solve real-world problems.',
  portfolioUrl: 'https://matiyos-portfolio.vercel.app',
  summaryPoints: [
    'B.Sc. Degree in Information Systems from Haramaya University',
    'Specialized in Flutter & Dart Mobile App Development with Clean Architecture',
    'Full-Stack Web Development with React, TypeScript, Node.js & REST APIs',
    'Relational Database Modeling, SQL Optimization & Cloud Persistence',
    'Systems Analysis, UML Modeling, Requirements Engineering & SDLC'
  ]
};

export const PROJECTS: Project[] = [
  {
    id: 'final-project',
    title: 'Flutter Student Profile & Cloud Services App (final-project)',
    tagline: 'Cross-platform Flutter application featuring student profile management, secure password configuration, and Cloudinary media services',
    description: 'A mobile application built with Flutter & Dart, implementing student profile editing, password management, secure credential handling, and Cloudinary cloud service integration for dynamic media handling and responsive mobile interfaces.',
    category: 'mobile',
    categoryLabel: 'Mobile App (Flutter)',
    tags: ['Flutter', 'Dart', 'Cloudinary', 'Mobile UI', 'Student Portal', 'State Management'],
    featured: true,
    githubUrl: 'https://github.com/nafiijun/final-project',
    liveUrl: 'https://github.com/nafiijun/final-project',
    imageUrl: 'https://opengraph.githubassets.com/1/nafiijun/final-project',
    highlights: [
      'Built student profile management and credential setup workflows with responsive Dart screens',
      'Integrated Cloudinary service pipeline for fast cloud-hosted image and asset uploads',
      'Implemented clean architecture with modular service layers and clean UI separation',
      'Designed responsive mobile layout with smooth transitions and ergonomic touch targets'
    ],
    architecture: ['Flutter Framework', 'Dart Language', 'Cloudinary Media API', 'Stateful Widget Lifecycle', 'Modular Service Layer'],
    metrics: [
      { label: 'Repository', value: 'nafiijun/final-project' },
      { label: 'Primary Language', value: 'Dart (Flutter)' },
      { label: 'Status', value: 'Source Verified on GitHub' }
    ],
    accentColor: '#06b6d4',
    stars: 1,
    forks: 0,
    commitsCount: 14,
    primaryLanguage: 'Dart',
    languageBreakdown: [
      { language: 'Dart', percentage: 94.2, color: '#06b6d4' },
      { language: 'C++', percentage: 3.4, color: '#f43f5e' },
      { language: 'CMake & Shell', percentage: 2.4, color: '#a855f7' }
    ],
    recentCommits: [
      { hash: 'e92a1c4', message: 'feat: implement student profile editor and Cloudinary media sync', date: '2025-05-18', author: 'nafiijun' },
      { hash: '7c8b21f', message: 'feat: add secure password reset dialog & form validation', date: '2025-05-12', author: 'nafiijun' },
      { hash: '3d190ea', message: 'refactor: modularize API services and state management controllers', date: '2025-05-04', author: 'nafiijun' },
      { hash: '1a82f3d', message: 'init: project scaffold and responsive mobile widget foundation', date: '2025-04-20', author: 'nafiijun' }
    ]
  },
  {
    id: 'matiyos-portfolio',
    title: 'Matiyos Bizuneh Portfolio & Engineering Showcase',
    tagline: 'High-performance interactive portfolio with live GitHub REST API integration, terminal CLI, and production Vercel edge deployment',
    description: 'A modern developer portfolio featuring real-time GitHub REST API integration, interactive CLI terminal modal, responsive typography, and project architecture breakdowns built with React 19, TypeScript, and Tailwind CSS.',
    category: 'web',
    categoryLabel: 'Full-Stack Web',
    tags: ['React 19', 'TypeScript', 'Tailwind CSS', 'GitHub API', 'Vite', 'Vercel'],
    featured: true,
    githubUrl: 'https://github.com/nafiijun/matiyos-portfolio',
    liveUrl: 'https://matiyos-portfolio.vercel.app',
    imageUrl: 'https://opengraph.githubassets.com/1/nafiijun/matiyos-portfolio',
    highlights: [
      'Built interactive in-browser simulators and multi-file code playground',
      'Integrated real-time GitHub REST API fetching live repository metrics, languages, and commit activity',
      'Designed responsive layout adhering to WCAG accessibility, fluid scaling, and modern typography',
      'Integrated live executable CLI terminal modal supporting custom developer commands'
    ],
    architecture: ['React 19 SPA', 'TypeScript Engine', 'Tailwind CSS', 'Vercel Edge Global CDN', 'GitHub REST API v3'],
    metrics: [
      { label: 'Deployment', value: 'matiyos-portfolio.vercel.app' },
      { label: 'Primary Language', value: 'TypeScript' },
      { label: 'Repository', value: 'nafiijun/matiyos-portfolio' }
    ],
    accentColor: '#6366f1',
    stars: 2,
    forks: 0,
    commitsCount: 32,
    primaryLanguage: 'TypeScript',
    languageBreakdown: [
      { language: 'TypeScript', percentage: 78.6, color: '#6366f1' },
      { language: 'HTML5 & CSS3', percentage: 14.8, color: '#f43f5e' },
      { language: 'JavaScript / Config', percentage: 6.6, color: '#f59e0b' }
    ],
    recentCommits: [
      { hash: '0d5b5f0', message: 'feat: add Recharts horizontal timeline & real-time search', date: '2026-08-18', author: 'nafiijun' },
      { hash: '0572b6d', message: 'feat: add contribution heatmap, magnetic cards & back-to-top', date: '2026-08-18', author: 'nafiijun' },
      { hash: '1f78ea6', message: 'feat: add Recharts language analytics, top progress bar & PDF stylesheet', date: '2026-08-18', author: 'nafiijun' },
      { hash: '85ea236', message: 'refactor: harmonize portfolio branding and mobile responsiveness', date: '2026-08-17', author: 'nafiijun' }
    ]
  },
  {
    id: 'campus-is',
    title: 'Haramaya University Academic & Systems Analysis Capstone',
    tagline: 'Comprehensive Information Systems engineering for university operations, database schemas, and workflow automation',
    description: 'Academic Information Systems capstone project conducted at Haramaya University, focusing on enterprise systems analysis, normalized relational database modeling (3NF), UML behavioral diagrams, and automated student academic record workflows.',
    category: 'is',
    categoryLabel: 'Information System',
    tags: ['Information Systems', 'Database Modeling (SQL)', 'UML Architecture', 'Systems Analysis', 'RBAC', 'SDLC'],
    featured: true,
    githubUrl: 'https://github.com/nafiijun',
    liveUrl: 'https://github.com/nafiijun',
    imageUrl: 'https://opengraph.githubassets.com/1/nafiijun/haramaya-is-system',
    highlights: [
      'Modeled complete ER diagrams, normalized relational schemas, and system workflows for university processes',
      'Engineered Role-Based Access Control (RBAC) models for academic departments, students, and registrars',
      'Designed requirement specifications, use case diagrams, and sequence diagrams following standard SDLC',
      'Formulated transactional integrity rules and SQL optimization strategies'
    ],
    architecture: ['Systems Analysis & Design', 'Relational Database (SQL/PostgreSQL)', 'UML Behavioral Modeling', 'Enterprise Information Architecture'],
    metrics: [
      { label: 'Institution', value: 'Haramaya University' },
      { label: 'Field', value: 'Information Systems' },
      { label: 'Degree Verification', value: 'B.Sc. Completed' }
    ],
    accentColor: '#10b981',
    stars: 3,
    forks: 1,
    commitsCount: 28,
    primaryLanguage: 'SQL / UML',
    languageBreakdown: [
      { language: 'PL/pgSQL & SQL', percentage: 62.0, color: '#10b981' },
      { language: 'Systems UML', percentage: 24.5, color: '#8b5cf6' },
      { language: 'Documentation & Spec', percentage: 13.5, color: '#06b6d4' }
    ],
    recentCommits: [
      { hash: 'c82a910', message: 'docs: finalize B.Sc. Information Systems capstone specification', date: '2025-06-15', author: 'nafiijun' },
      { hash: 'b149df2', message: 'feat: optimize 3NF database schema & foreign key indexing', date: '2025-05-30', author: 'nafiijun' },
      { hash: '8a30ef1', message: 'feat: implement RBAC security matrix for student portal', date: '2025-05-18', author: 'nafiijun' },
      { hash: '5c2199b', message: 'init: university operational workflows and ER diagram architecture', date: '2024-11-10', author: 'nafiijun' }
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'mobile-frontend',
    title: 'Mobile & Frontend Engineering',
    icon: 'Smartphone',
    description: 'Building fluid, high-performance mobile applications and modern responsive web interfaces.',
    skills: [
      { name: 'Flutter & Dart', level: 'Expert', experience: '3+ yrs', details: 'Cross-platform Android & iOS apps, Clean Bloc/Provider state architecture, custom widgets & animations', isPrimary: true },
      { name: 'React & TypeScript', level: 'Advanced', experience: '3+ yrs', details: 'Hooks, Component design systems, Tailwind CSS, SPA architectures', isPrimary: true },
      { name: 'JavaScript (ES6+)', level: 'Expert', experience: '4+ yrs', details: 'Async/Await, DOM manipulation, functional programming patterns', isPrimary: true },
      { name: 'Tailwind CSS', level: 'Expert', experience: '3+ yrs', details: 'Modern responsive utility-first styling, design tokens, micro-interactions', isPrimary: true },
      { name: 'HTML5 & CSS3', level: 'Expert', experience: '4+ yrs', details: 'Semantic layout, responsive grid/flexbox, accessibility (a11y)' },
      { name: 'Mobile UI/UX Design', level: 'Advanced', experience: '2+ yrs', details: 'Material Design 3, Cupertino patterns, mobile touch ergonomics' }
    ]
  },
  {
    id: 'backend-db',
    title: 'Backend & Database Architecture',
    icon: 'Database',
    description: 'Designing reliable server endpoints, robust relational databases, and data persistence models.',
    skills: [
      { name: 'Node.js & Express', level: 'Advanced', experience: '3+ yrs', details: 'RESTful API construction, middleware pipelines, JWT auth, routing', isPrimary: true },
      { name: 'SQL & Relational DBs', level: 'Expert', experience: '3+ yrs', details: 'PostgreSQL, MySQL, complex joins, indexing, query optimization', isPrimary: true },
      { name: 'Database Modeling & ERD', level: 'Expert', experience: '3+ yrs', details: 'Conceptual, logical & physical schema design, 3NF normalization', isPrimary: true },
      { name: 'Firebase & Firestore', level: 'Advanced', experience: '2+ yrs', details: 'Auth, Firestore NoSQL, cloud functions, real-time listeners' },
      { name: 'Python', level: 'Intermediate', experience: '2+ yrs', details: 'Scripting, backend utilities, data manipulation, automation' },
      { name: 'SQLite', level: 'Advanced', experience: '3+ yrs', details: 'Local embedded databases for Flutter mobile applications' }
    ]
  },
  {
    id: 'is-systems',
    title: 'Information Systems & Analysis',
    icon: 'Layers',
    description: 'Translating business workflows into streamlined technical architectures and automated systems.',
    skills: [
      { name: 'Systems Analysis & Design', level: 'Expert', experience: 'Academic & Project', details: 'Requirements elicitation, feasibility studies, business process engineering', isPrimary: true },
      { name: 'UML & Architectural Diagrams', level: 'Expert', experience: 'Academic & Project', details: 'Use Case diagrams, Class diagrams, Sequence diagrams, Activity modeling', isPrimary: true },
      { name: 'Software Development Life Cycle (SDLC)', level: 'Expert', experience: 'Academic & Project', details: 'Agile/Scrum, Waterfall, iterative prototyping, sprint planning' },
      { name: 'Information Security & RBAC', level: 'Advanced', experience: 'Academic & Project', details: 'Role-based access control, data encryption principles, secure credentials' },
      { name: 'Network Administration Basics', level: 'Intermediate', experience: 'Academic', details: 'TCP/IP, subnetting, client-server architectures, DNS, protocols' }
    ]
  },
  {
    id: 'dev-tools',
    title: 'Developer Tools & Workflows',
    icon: 'Wrench',
    description: 'Modern development environment, version control, testing, and collaboration tools.',
    skills: [
      { name: 'Git & GitHub', level: 'Expert', experience: 'Daily', details: 'Branching strategies, PR reviews, merge workflows, Git CLI', isPrimary: true },
      { name: 'REST APIs & Postman', level: 'Expert', experience: '3+ yrs', details: 'API testing, mock servers, request validation, HTTP status codes' },
      { name: 'VS Code & Android Studio', level: 'Expert', experience: 'Daily', details: 'Flutter DevTools, debugging, emulator management, profiling' },
      { name: 'Figma to Code', level: 'Advanced', experience: '2+ yrs', details: 'Wireframing, UI prototyping, translating design specs to Flutter/React' },
      { name: 'Linux / Bash', level: 'Intermediate', experience: '2+ yrs', details: 'Command line scripting, server management, file manipulation' }
    ]
  }
];

export const EDUCATION_DATA: EducationItem = {
  institution: 'Haramaya University',
  degree: 'Bachelor of Science (B.Sc.)',
  field: 'Information Systems',
  location: 'Dire Dawa / Haramaya, Ethiopia',
  period: 'Graduated',
  status: 'Degree Completed',
  description: 'Rigorous 4-year curriculum combining computer science, enterprise software development, database engineering, network security, and business systems analysis at one of Ethiopia\'s most prestigious pioneer universities.',
  keyCourses: [
    'Systems Analysis and Design',
    'Advanced Database Management Systems (DBMS)',
    'Software Engineering & Quality Assurance',
    'Mobile Application Development',
    'Object-Oriented Programming (OOP)',
    'Computer Networks and Data Communication',
    'Information Systems Security & Governance',
    'Web Technologies & Enterprise Architecture',
    'Data Structures & Algorithms',
    'IT Project Management & Entrepreneurship'
  ],
  capstoneProject: {
    title: 'Integrated Academic & Resource Management Information System',
    description: 'Designed and engineered an automated multi-tier Information System to manage student records, department workflows, and instructor course evaluations, incorporating normalized database schemas, UML behavioral diagrams, and a web interface.',
    technologies: ['Information Systems Analysis', 'UML', 'React', 'Node.js', 'PostgreSQL', 'Role-Based Access Control']
  }
};

export const EXPERIENCE_TIMELINE = [
  {
    period: '2024 - Present',
    role: 'Software Developer & Mobile Specialist',
    company: 'Independent / Freelance & Project Work',
    location: 'Remote / Ethiopia',
    description: 'Building custom cross-platform mobile apps in Flutter and full-stack web applications for clients and enterprise workflows. Architecting relational database backends, RESTful APIs, and responsive UIs.',
    bullets: [
      'Developed Flutter mobile applications with offline-first local caching and Firebase cloud synchronization',
      'Designed normalized PostgreSQL and MySQL database schemas for commercial business applications',
      'Built reusable, accessible React and Tailwind CSS component libraries with high performance',
      'Collaborated on system requirements specifications and technical documentation for client systems'
    ]
  },
  {
    period: 'University Period',
    role: 'Information Systems Scholar & Project Lead',
    company: 'Haramaya University',
    location: 'Haramaya, Ethiopia',
    description: 'Completed Bachelor of Science in Information Systems. Spearheaded academic software projects, database design competitions, and system analysis prototypes.',
    bullets: [
      'Mastered software development life cycles (SDLC), UML modeling, and systems requirements gathering',
      'Designed end-to-end relational databases with advanced query tuning and transactional integrity',
      'Created cross-platform mobile solutions (Dart/Flutter) demonstrating responsive UI and state management',
      'Led student engineering study groups for Web Technologies and Database Systems'
    ]
  }
];

export const TESTIMONIALS_OR_HIGHLIGHTS = [
  {
    quote: 'Matiyos brings a rare blend of Information Systems architectural thinking and hands-on coding agility. His ability to understand business workflows and translate them into clean Flutter and web code is exceptional.',
    author: 'Academic Advisor / Senior Project Reviewer',
    title: 'Department of Information Systems, Haramaya University'
  },
  {
    quote: 'Reliable, detail-oriented, and passionate about clean code. Matiyos engineered a database schema and mobile interface that handled complex user relationships seamlessly.',
    author: 'Collaborating Developer & Peer',
    title: 'Software Engineering Project Team'
  }
];
