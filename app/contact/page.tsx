import Link from "next/link";
import { FaLinkedin, FaGithub, FaFilePdf, FaEnvelope } from "react-icons/fa6";

export default function Contact() {
  return (
    <div className="container mx-auto h-screen flex flex-col items-start justify-start pt-20">
      <h1>Like what you see?</h1>
      <p>
        I am currently looking for a full-time position in the field of web
        development.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-4 w-full content-center items-center justify-center text-center my-4">
        <div className="border-0 md:border-2 border-[var(--foreground)] p-4 rounded-lg hover:bg-[var(--tertiary)] hover:text-[var(--background)]">
          <Link
            href="mailto:hitvardhan19@gmail.com"
            className="text-[var(--foreground)] flex flex-col items-center justify-center"
          >
            <FaEnvelope className="w-20 h-20" />
            <span className="mt-2">hitvardhan19@gmail.com</span>
          </Link>
        </div>
        <div className="border-0 md:border-2 border-[var(--foreground)] p-4 rounded-lg hover:bg-[var(--tertiary)] hover:text-[var(--background)]">
          <Link
            href="https://resumes-flax.vercel.app"
            target="_blank"
            className="text-[var(--foreground)] flex flex-col items-center justify-center"
          >
            <FaFilePdf className="w-20 h-20" />
            <span className="mt-2">Resume</span>
          </Link>
        </div>
        <div className="border-0 md:border-2 border-[var(--foreground)] p-4 rounded-lg hover:bg-[var(--tertiary)] hover:text-[var(--background)]">
          <Link
            href="https://www.linkedin.com/in/hitvardhan/"
            target="_blank"
            className="text-[var(--foreground)] flex flex-col items-center justify-center"
          >
            <FaLinkedin className="w-20 h-20" />
            <span className="mt-2">LinkedIn</span>
          </Link>
        </div>
        <div className="border-0 md:border-2 border-[var(--foreground)] p-4 rounded-lg hover:bg-[var(--tertiary)] hover:text-[var(--background)]">
          <Link
            href="https://www.github.com/hitvardhan-singh-solanki"
            target="_blank"
            className="text-[var(--foreground)] flex flex-col items-center justify-center"
          >
            <FaGithub className="w-20 h-20" />
            <span className="mt-2">GitHub</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

/**
 * 
 * 
 * <div className="flex gap-2 items-center mt-4 w-full text-4xl">
        
          
        </Link>

       
        <Link
          href="https://www.linkedin.com/in/hitvardhan/"
          target="_blank"
          className="text-[var(--foreground)] underline"
        >
          <FaLinkedin className="w-10 h-10 inline-block" />
        </Link>

        <Link
          href="https://www.github.com/hitvardhan-singh-solanki"
          target="_blank"
          className="text-[var(--foreground)] underline"
        >
          <FaGithub className="w-10 h-10 inline-block" />
        </Link>
      </div>
 */
