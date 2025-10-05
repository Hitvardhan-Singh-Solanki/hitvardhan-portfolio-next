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
    <div
      key={index}
      className="project-card group relative p-6 border rounded-xl opacity-0 transition-all duration-300 hover:scale-[1.02]"
      style={{
        backgroundColor: "var(--card-bg)",
        borderColor: "var(--card-border)",
      }}
    >
      <Link href={project.link} target="_blank" rel="noopener noreferrer">
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-2xl font-semibold text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors">
              {project.title}
            </h3>
            <ExternalLink className="w-5 h-5 text-[var(--primary)] opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>

          <p className="text-[var(--foreground)] opacity-80 mb-4 flex-grow leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mt-auto">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 text-sm rounded-full font-medium"
                style={{
                  backgroundColor: "var(--card-hover)",
                  color: "var(--primary)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </div>
  );
}
