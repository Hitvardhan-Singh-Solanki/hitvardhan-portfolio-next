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
    <div>
      <div
        key={index}
        className={`job-entry p-6 border rounded-xl hover:shadow-xl opacity-0 transition-all duration-300 hover:scale-[1.01]`}
        style={{
          backgroundColor: "var(--card-bg)",
          borderColor: "var(--card-border)",
          color: "var(--foreground)",
        }}
      >
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-start gap-4">
            <IoBriefcase className="text-3xl text-[var(--primary)] mt-1" />
            <div>
              <h2 className="text-2xl font-semibold mb-1">{job.role}</h2>
              <p
                className="text-lg font-medium"
                style={{ color: "var(--primary)" }}
              >
                {job.company}
              </p>
              <p className="text-sm opacity-70 mt-1">{job.date}</p>
            </div>
          </div>
          {job.image && (
            <Image
              src={job.image}
              alt={job.company}
              width={60}
              height={60}
              className="rounded-lg"
            />
          )}
        </div>

        <ul className="pl-8 list-disc space-y-2">
          {job.description.map((desc, i) => (
            <li key={i} className="text-base leading-relaxed opacity-90">
              {desc}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
