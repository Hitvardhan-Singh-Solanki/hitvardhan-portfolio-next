import Link from "next/link";
import { FaLinkedin, FaGithub, FaLink, FaEnvelope } from "react-icons/fa6";

export default function Contact() {
  return (
    <div className="container mx-auto h-screen flex flex-col items-start justify-start pt-20">
      <h1
        className="text-2xl md:text-4xl font-bold text-transparent bg-clip-text"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--secondary), var(--tertiary))",
        }}
      >
        Like what you see?
      </h1>
      <p className="text-center text-sm md:text-md text-[var(--foreground)]">
        I am currently looking for a full-time position in the field of web
        development.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full content-center items-center justify-center text-center my-4">
        <div className="border-0 md:border-2 border-[var(--foreground)] p-4 rounded-lg hover:bg-[var(--tertiary)] hover:text-[var(--background)]">
          <Link
            href="mailto:hitvardhan19@gmail.com"
            className="text-[var(--foreground)] flex flex-col items-center justify-center"
          >
            <FaEnvelope className="w-10 h-10" />
            <span className="mt-2">hitvardhan19@gmail.com</span>
          </Link>
        </div>
        <div className="border-0 md:border-2 border-[var(--foreground)] p-4 rounded-lg hover:bg-[var(--tertiary)] hover:text-[var(--background)]">
          <Link
            href="resume.pdf"
            target="_blank"
            className="text-[var(--foreground)] flex flex-col items-center justify-center"
          >
            <FaLink className="w-10 h-10" />
            <span className="mt-2">Resume</span>
          </Link>
        </div>
        <div className="border-0 md:border-2 border-[var(--foreground)] p-4 rounded-lg hover:bg-[var(--tertiary)] hover:text-[var(--background)]">
          <Link
            href="https://www.linkedin.com/in/hitvardhan/"
            target="_blank"
            className="text-[var(--foreground)] flex flex-col items-center justify-center"
          >
            <FaLinkedin className="w-10 h-10" />
            <span className="mt-2">LinkedIn</span>
          </Link>
        </div>
        <div className="border-0 md:border-2 border-[var(--foreground)] p-4 rounded-lg hover:bg-[var(--tertiary)] hover:text-[var(--background)]">
          <Link
            href="https://www.github.com/hitvardhan-singh-solanki"
            target="_blank"
            className="text-[var(--foreground)] flex flex-col items-center justify-center"
          >
            <FaGithub className="w-10 h-10" />
            <span className="mt-2">GitHub</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
