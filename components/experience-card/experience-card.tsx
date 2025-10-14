"use client";

import Image from "next/image";
import { IoBriefcase } from "react-icons/io5";
import { useHoverAnimation } from "@/lib/hooks/animations";

export type ExperienceCardProps = {
  job: {
    description: string[];
    company: string;
    image?: string;
    role: string;
    date: string;
  };
  index: number;
};

export default function ExperienceCard({ index, job }: ExperienceCardProps) {
  const cardAnimation = useHoverAnimation({
    scale: 1.02,
    y: -4,
    duration: 0.3,
  });
  const iconAnimation = useHoverAnimation({
    scale: 1.1,
    rotation: 5,
    duration: 0.3,
  });

  return (
    <div
      ref={cardAnimation.elementRef as unknown as React.RefObject<HTMLDivElement>}
      onMouseEnter={() => {
        cardAnimation.handleMouseEnter();
        iconAnimation.handleMouseEnter();
      }}
      onMouseLeave={() => {
        cardAnimation.handleMouseLeave();
        iconAnimation.handleMouseLeave();
      }}
      className="job-entry"
      key={index}
    >
      <div className="experience-header">
        <div className="experience-info">
          <div className="experience-title">
            <div ref={iconAnimation.elementRef as unknown as React.RefObject<HTMLDivElement>} className="experience-icon">
              <IoBriefcase size={20} />
            </div>
            <h2 className="experience-role">{job.role}</h2>
          </div>
          <p className="experience-company">{job.company}</p>
          <p className="experience-date">{job.date}</p>
        </div>
        {job.image && (
          <Image
            src={job.image}
            alt={job.company}
            width={60}
            height={60}
            className="experience-logo"
          />
        )}
      </div>

      <ul className="experience-description">
        {job.description.map((desc, i) => (
          <li key={i}>{desc}</li>
        ))}
      </ul>
    </div>
  );
}
