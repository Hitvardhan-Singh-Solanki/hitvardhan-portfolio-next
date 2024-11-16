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
  isVisible: boolean;
};

export default function ExperienceCard({
  index,
  job,
  isVisible,
}: ExperienceCardProps) {
  return (
    <div>
      <div
        key={index}
        className={`job-entry p-6 border border-[var(--secondary)] rounded-lg hover:shadow-lg transition-shadow duration-300 transform transition-all delay-${
          index * 200
        } ${isVisible ? "animate-slideInUp" : "opacity-0 translate-y-8"}`}
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.2)",
          color: "var(--foreground)",
          fontFamily: "var(--font-montserat)",
        }}
      >
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4 mb-4">
            <IoBriefcase className="text-3xl text-[var(--secondary)]" />
            <div>
              <h2 className="text-2xl font-semibold">{job.role}</h2>
              <p className="text-lg text-[var(--secondary)]">{job.company}</p>
              <p className="text-sm">{job.date}</p>
            </div>
          </div>
          {job.image && (
            <Image
              src={job.image}
              alt={job.company}
              width={50}
              height={50}
            ></Image>
          )}
        </div>

        <ul className="pl-8 list-disc">
          {job.description.map((desc, i) => (
            <li key={i} className="mb-2 text-lg">
              {desc}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
