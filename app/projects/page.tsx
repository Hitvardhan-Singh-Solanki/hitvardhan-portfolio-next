"use client";

import { Heading } from "@/components/heading/heading";
import ProjectCard from "@/components/project-card/project-card";
import { projects } from "@/data/projects";
import { useStaggerAnimation } from "@/lib/hooks";
import "./projects.scss";

export default function Projects() {
  useStaggerAnimation(".project-card");

  const totalProjects = projects.length;
  const technologies = Array.from(
    new Set(projects.flatMap((p) => p.tags))
  ).length;

  return (
    <div className="projects-page">
      <div className="container mx-auto px-4 py-20">
        {/* Hero Section */}
        <div className="projects-hero">
          <Heading>Projects</Heading>
          <p className="projects-intro">
            A collection of web applications, tools, and solutions I&apos;ve
            built to solve real-world problems and showcase modern development
            practices.
          </p>
        </div>

        {/* Stats */}
        <div className="projects-stats">
          <div className="projects-stat-card">
            <div className="projects-stat-value">{totalProjects}</div>
            <div className="projects-stat-label">Projects</div>
          </div>
          <div className="projects-stat-card">
            <div className="projects-stat-value">{technologies}</div>
            <div className="projects-stat-label">Technologies</div>
          </div>
          <div className="projects-stat-card">
            <div className="projects-stat-value">100%</div>
            <div className="projects-stat-label">Open Source</div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard project={project} index={index} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
