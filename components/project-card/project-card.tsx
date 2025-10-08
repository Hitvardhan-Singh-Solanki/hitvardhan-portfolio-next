"use client";

import Link from "next/link";
import { ExternalLink } from "lucide-react";

export type ProjectCardProps = {
  project: {
    title: string;
    link: string;
    description: string;
    tags: string[];
    featured?: boolean;
  };
  index: number;
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <Link
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card"
      key={index}
    >
      <div className="project-header">
        <h3 className="project-title">{project.title}</h3>
        <ExternalLink className="project-external-icon" size={20} />
      </div>

      <p className="project-description">{project.description}</p>

      <div className="project-tags">
        {project.tags.map((tag, i) => (
          <span key={i} className="project-tag">
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}
