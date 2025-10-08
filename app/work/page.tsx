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

  const totalYearsExperience = new Date().getFullYear() - 2016;
  const totalCompanies = experience.length;

  return (
    <div className="work-page">
      <div className="container mx-auto px-4 py-20">
        {/* Hero Section */}
        <div className="work-hero">
          <Heading>Work Experience</Heading>
          <p className="work-intro">
            A journey through {totalYearsExperience}+ years of building
            innovative solutions across {totalCompanies} companies, from
            startups to Fortune 500 enterprises.
          </p>
        </div>

        {/* Stats */}
        <div className="work-stats">
          <div className="work-stat-card">
            <div className="work-stat-value">{totalYearsExperience}+</div>
            <div className="work-stat-label">Years of Experience</div>
          </div>
          <div className="work-stat-card">
            <div className="work-stat-value">{totalCompanies}</div>
            <div className="work-stat-label">Companies</div>
          </div>
          <div className="work-stat-card">
            <div className="work-stat-value">20+</div>
            <div className="work-stat-label">Projects Delivered</div>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="work-experience">
          {workExperience.map((job, index) => (
            <ExperienceCard job={job} index={index} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
