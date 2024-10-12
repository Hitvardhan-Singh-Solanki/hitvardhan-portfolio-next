"use client";
import Image from "next/image";
import { IoBriefcase } from "react-icons/io5";
import "./work.css";
import { useState, useEffect } from "react";

export default function Work() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const workExperience = [
    {
      company: "EQS Group",
      role: "Software Engineer, Full Stack",
      date: "April 2024 - Present",
      description: [
        "Led the development of compliance tools and whistleblowing platform, maintaining security and monitoring standards.",
        "Developed a new feature that enables users to view compliance status for all customers.",
        "Tech Stack: AngularJS, Node.js, MySQL.",
      ],
      image: "/eqs.svg",
    },
    {
      company: "Glovo",
      role: "Software Engineer, Full Stack",
      date: "February 2022 - April 2024",
      description: [
        "Increased partner satisfaction by 60% through a tailored, data-driven operational insights solution.",
        "Led the creation of a contact support SDK integrated across Glovo platforms in 25 countries.",
        "Saved €7/minute in partner calls by developing an automated messaging system.",
      ],
      image: "/glovo.svg",
    },
    {
      company: "Grab",
      role: "Software Engineer, Full Stack",
      date: "April 2020 - January 2022",
      description: [
        "Led a team in transitioning services from monolithic architecture to microservices, saving costs and reducing CI/CD time.",
        "Built a face comparison system for KYC, reducing processing time from 7 days to 2 hours.",
      ],
      image: "/grab.png",
    },
    {
      company: "Ernst & Young",
      role: "Lead Software Engineer, Full Stack",
      date: "October 2018 - March 2020",
      description: [
        "Developed a full-stack web application for Nationwide Insurance to facilitate motor insurance purchases.",
        "Created and maintained an error-handling engine that enhanced customer experience.",
      ],
      image: "/ey.svg",
    },
    {
      company: "Appirio (Wipro)",
      role: "Associate Consultant",
      date: "September 2016 - September 2018",
      description: [
        "Built a vendor enablement system for 7-Eleven's inventory management using Salesforce CMS and jQuery.",
        "Implemented zero-downtime deployments through redundancy and rolling upgrades.",
      ],
    },
  ];

  return (
    <div className="work-container container mx-auto h-auto pt-20 px-4 lg:px-0">
      <h1
        className={`text-2xl md:text-4xl font-bold text-transparent bg-clip-text mb-8 ${
          isVisible ? "animate-fadeIn" : ""
        }`}
        style={{
          opacity: 0,
          backgroundImage:
            "linear-gradient(to right, var(--secondary), var(--tertiary))",
        }}
      >
        My Work Experience
      </h1>
      <div className="work-experience flex flex-col gap-8">
        {workExperience.map((job, index) => (
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
                  <p className="text-lg text-[var(--secondary)]">
                    {job.company}
                  </p>
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
        ))}
      </div>
      <div className="h-10"></div>
    </div>
  );
}
