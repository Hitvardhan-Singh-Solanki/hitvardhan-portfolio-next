"use client";
import "./work.scss";
import { experience } from "@/data/experience";
import ExperienceCard from "@/components/experience-card/experience-card";
import { Heading } from "@/components/heading/heading";
import { useStaggerAnimation } from "@/lib/hooks";
import { StatsCard } from "@/components/ui/stats-card";

export default function Work() {
  const workExperience = experience;

  useStaggerAnimation(".work-experience .job-entry");

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
          <StatsCard
            value={`${totalYearsExperience}+`}
            label="Years of Experience"
          />
          <StatsCard value={totalCompanies.toString()} label="Companies" />
          <StatsCard value="20+" label="Projects Delivered" />
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
