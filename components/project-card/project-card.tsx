"use client";

import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { useHoverAnimation } from "@/lib/hooks/animations";
import { useEffect, useState } from "react";

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
  const [isLoaded, setIsLoaded] = useState(false);

  const cardAnimation = useHoverAnimation({
    scale: 1.02,
    y: -4,
    duration: 0.3,
    ease: "power2.out",
  });
  const iconAnimation = useHoverAnimation({
    scale: 1.1,
    rotation: 5,
    duration: 0.3,
    ease: "power2.out",
  });

  useEffect(() => {
    // Ensure component is loaded after a small delay
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, index * 50); // Stagger the loading state

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <Link
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      ref={cardAnimation.elementRef}
      onMouseEnter={() => {
        if (isLoaded) {
          cardAnimation.handleMouseEnter();
          iconAnimation.handleMouseEnter();
        }
      }}
      onMouseLeave={() => {
        if (isLoaded) {
          cardAnimation.handleMouseLeave();
          iconAnimation.handleMouseLeave();
        }
      }}
      className={`project-card ${isLoaded ? "loaded" : "loading"}`}
      key={index}
    >
      <div className="project-header">
        <h3 className="project-title">{project.title}</h3>
        <ExternalLink
          ref={iconAnimation.elementRef}
          className="project-external-icon"
          size={20}
        />
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
