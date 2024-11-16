"use client";
import "./work.scss";
import { useState, useEffect } from "react";
import { experience } from "@/data/experience";
import ExperienceCard from "@/components/experience-card/experience-card";
import { Heading } from "@/components/heading/heading";

export default function Work() {
  const workExperience = experience;

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="work-container container mx-auto h-auto pt-20 px-4 lg:px-0">
      <Heading>My Work Experience</Heading>
      <div className="work-experience flex flex-col gap-8">
        {workExperience.map((job, index) => (
          <ExperienceCard
            job={job}
            index={index}
            isVisible={isVisible}
            key={index}
          />
        ))}
      </div>
      <div className="h-10"></div>
    </div>
  );
}
