import { Heading } from "@/components/heading/heading";
import "./about.scss";

export default function About() {
  return (
    <div className="container mx-auto h-auto flex flex-col items-start justify-start pt-20 px-4 lg:px-0 animate-fadeIn">
      <Heading>A Bit About Me</Heading>
      <div
        className="flex flex-col items-start justify-start mt-10 leading-loose text-lg max-w-3xl"
        style={{
          color: "var(--foreground)",
          fontFamily: "var(--font-montserat)",
        }}
      >
        <p className="opacity-0 animate-fadeInDelay1">
          I&apos;m a{" "}
          <span className="font-semibold" style={{ color: "var(--secondary)" }}>
            Senior Full-Stack Software Engineer
          </span>{" "}
          based in{" "}
          <span className="font-semibold" style={{ color: "var(--secondary)" }}>
            Barcelona, Spain
          </span>
          , with{" "}
          <span className="font-semibold" style={{ color: "var(--secondary)" }}>
            a decade
          </span>{" "}
          of experience in web engineering and software development.
        </p>
        <br />

        <p className="opacity-0 animate-fadeInDelay2">
          I have a passion for building innovative solutions that drive{" "}
          <span className="font-semibold" style={{ color: "var(--secondary)" }}>
            user experiences
          </span>{" "}
          and{" "}
          <span className="font-semibold" style={{ color: "var(--secondary)" }}>
            operational efficiency
          </span>
          . I&apos;ve contributed to high-impact projects across startups and
          multinational corporations, demonstrating adaptability and success.
        </p>
        <br />

        <p className="opacity-0 animate-fadeInDelay3">
          My diverse skill set includes{" "}
          <span className="font-semibold" style={{ color: "var(--secondary)" }}>
            AngularJS, Node.js, Python, and ReactJS
          </span>
          , as well as expertise in{" "}
          <span className="font-semibold" style={{ color: "var(--secondary)" }}>
            database management
          </span>{" "}
          with MySQL and MongoDB. I thrive in all stages of the{" "}
          <span className="font-semibold" style={{ color: "var(--secondary)" }}>
            software development lifecycle
          </span>
          , delivering user-friendly applications that improve{" "}
          <span className="font-semibold" style={{ color: "var(--secondary)" }}>
            customer satisfaction
          </span>{" "}
          and operational metrics.
        </p>
        <br />

        <p className="opacity-0 animate-fadeInDelay4">
          A key achievement: leading the development of a vendor onboarding
          solution that boosted satisfaction by{" "}
          <span className="font-semibold" style={{ color: "var(--secondary)" }}>
            60%
          </span>{" "}
          and saved{" "}
          <span className="font-semibold" style={{ color: "var(--secondary)" }}>
            €1.5 million
          </span>
          . I also developed a customer support SDK, enhancing communication
          across platforms, cutting costs, and elevating user experiences.
        </p>
        <br />

        <p className="opacity-0 animate-fadeInDelay5">
          I&apos;m passionate about leveraging technology to solve real-world
          problems while fostering a culture of{" "}
          <span className="font-semibold" style={{ color: "var(--secondary)" }}>
            collaboration
          </span>{" "}
          and{" "}
          <span className="font-semibold" style={{ color: "var(--secondary)" }}>
            continuous learning
          </span>
          . Outside work, I enjoy exploring new technologies and sharing
          knowledge with fellow engineers.
        </p>
      </div>
      <div className="h-10"></div>
    </div>
  );
}
