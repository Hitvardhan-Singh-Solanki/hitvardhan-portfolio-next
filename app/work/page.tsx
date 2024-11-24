"use client";
import "./work.scss";
import { experience } from "@/data/experience";
import ExperienceCard from "@/components/experience-card/experience-card";
import { Heading } from "@/components/heading/heading";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

gsap.registerPlugin(useGSAP);

export default function Work() {
  const workExperience = experience;

  useGSAP(() => {
    const tl = gsap.timeline({
      duration: 0.75,
      ease: "power2.inOut",
    });

    tl.to(".work-experience .job-entry", {
      y: -10,
      opacity: 1,
      stagger: 0.2,
    });
  });

  return (
    <div className="work-container container mx-auto h-auto pt-20 px-4 lg:px-0">
      <Heading>My Work Experience</Heading>
      <div className="work-experience flex flex-col gap-8">
        {workExperience.map((job, index) => (
          <ExperienceCard job={job} index={index} key={index} />
        ))}
      </div>
      <div className="h-10"></div>
    </div>
  );
}
