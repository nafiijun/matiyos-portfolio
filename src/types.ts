export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: 'mobile' | 'web' | 'is' | 'database' | 'api';
  categoryLabel: string;
  tags: string[];
  featured: boolean;
  githubUrl: string;
  liveUrl?: string;
  imageUrl?: string;
  highlights: string[];
  architecture?: string[];
  metrics?: { label: string; value: string }[];
  accentColor: string;
  stars?: number;
  forks?: number;
  commitsCount?: number;
  primaryLanguage?: string;
  languageBreakdown?: { language: string; percentage: number; color: string }[];
  recentCommits?: { hash: string; message: string; date: string; author: string }[];
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  description: string;
  skills: {
    name: string;
    level: 'Expert' | 'Advanced' | 'Intermediate';
    iconName?: string;
    experience: string;
    details?: string;
    isPrimary?: boolean;
  }[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  field: string;
  location: string;
  period: string;
  status: string;
  gpaOrHonors?: string;
  description: string;
  keyCourses: string[];
  capstoneProject: {
    title: string;
    description: string;
    technologies: string[];
  };
}

export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  default_branch: string;
  topics?: string[];
}

export interface GitHubUserProfile {
  login: string;
  name: string;
  avatar_url: string;
  bio: string;
  html_url: string;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
  email: string | null;
}
