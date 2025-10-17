export interface Blog {
  id: string;
  title: string;
  author: string;
  description: string;
  date: string;
  readTime: string;
  tags: string[];
  externalLink: string;
}

export interface MainButton {
  href: string;
  label: string;
  target?: string;
  download?: boolean;
  icon?: string;
}

export interface Project {
  title: string;
  link: string;
  description: string;
  tags: string[];
  featured?: boolean;
}

export interface Experience {
  company: string;
  role: string;
  date: string;
  description: string[];
  image?: string;
}

export interface Certificate {
  id: string;
  src: string;
  alt: string;
  name: string;
  description: string;
  credly?: boolean;
}

export interface Technology {
  src: string;
  alt: string;
  name: string;
}

export interface BlogCardProps {
  id: string;
  title: string;
  author: string;
  description: string;
  date: string;
  readTime: string;
  tags: string[];
  externalLink: string;
}

export interface ProjectCardProps {
  project: Project;
  index: number;
}

export interface ExperienceCardProps {
  job: Experience;
  index: number;
}
