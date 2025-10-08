import Image from "next/image";
import { IoBriefcase } from "react-icons/io5";

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
  return (
    <div className="job-entry" key={index}>
      <div className="experience-header">
        <div className="experience-info">
          <div className="experience-title">
            <div className="experience-icon">
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
