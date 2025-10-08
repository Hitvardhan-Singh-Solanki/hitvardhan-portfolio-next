"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function MainButtons() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Run desktop animations
  useEffect(() => {
    if (!isMobile && typeof window !== "undefined") {
      import("@/lib/animations").then(({ animateMainButtons }) => {
        animateMainButtons(".main-button");
      });
    }
  }, [isMobile]);

  return (
    <>
      <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mt-4 pt-2">
        <Link
          href="/about"
          className={`text-[var(--foreground)] hover:border-b-2 hover:border-b-[var(--primary)] px-2 md:px-3 py-2 text-base md:text-lg font-medium main-button ${
            isMobile ? "opacity-100" : "opacity-0 transition-all"
          }`}
        >
          About
        </Link>
        <Link
          href="/work"
          className={`text-[var(--foreground)] hover:border-b-2 hover:border-b-[var(--primary)] px-2 md:px-3 py-2 text-base md:text-lg font-medium main-button ${
            isMobile ? "opacity-100" : "opacity-0 transition-all"
          }`}
        >
          Work
        </Link>
        <Link
          href="/projects"
          className={`text-[var(--foreground)] hover:border-b-2 hover:border-b-[var(--primary)] px-2 md:px-3 py-2 text-base md:text-lg font-medium main-button ${
            isMobile ? "opacity-100" : "opacity-0 transition-all"
          }`}
        >
          Projects
        </Link>
        <Link
          href="/blogs"
          className={`text-[var(--foreground)] hover:border-b-2 hover:border-b-[var(--primary)] px-2 md:px-3 py-2 text-base md:text-lg font-medium main-button ${
            isMobile ? "opacity-100" : "opacity-0 transition-all"
          }`}
        >
          Blog
        </Link>
        <Link
          href="/certificates"
          className={`text-[var(--foreground)] hover:border-b-2 hover:border-b-[var(--primary)] px-2 md:px-3 py-2 text-base md:text-lg font-medium main-button ${
            isMobile ? "opacity-100" : "opacity-0 transition-all"
          }`}
        >
          Certifications
        </Link>
        <Link
          href="/docs/pdf/resume.pdf"
          target="_blank"
          className={`text-[var(--foreground)] hover:border-b-2 hover:border-b-[var(--primary)] px-2 md:px-3 py-2 text-base md:text-lg font-medium main-button ${
            isMobile ? "opacity-100" : "opacity-0 transition-all"
          }`}
        >
          Resume
        </Link>
      </div>
    </>
  );
}
