"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { Heading } from "@/components/heading/heading";
import ProjectCard from "@/components/project-card/project-card";
import { projects } from "@/data/projects";

gsap.registerPlugin(useGSAP);

export default function Projects() {
  useGSAP(() => {
    const tl = gsap.timeline({
      duration: 0.75,
      ease: "power2.inOut",
    });

    tl.to(".project-card", {
      y: -10,
      opacity: 1,
      stagger: 0.2,
    });
  });

  return (
    <div className="projects-container container mx-auto h-auto pt-20 px-4 lg:px-0">
      <Heading>My Projects</Heading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {projects.map((project, index) => (
          <ProjectCard project={project} index={index} key={index} />
        ))}
      </div>
      <div className="h-10"></div>
    </div>
  );
}
