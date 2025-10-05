"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import Link from "next/link";
gsap.registerPlugin(useGSAP);

export default function MainButtons() {
  useGSAP(() => {
    const tl = gsap.timeline({
      delay: 0.25,
      duration: 0.75,
      ease: "power2.inOut",
    });

    tl.to(".main-button", {
      opacity: 1,
      y: -20,
      stagger: 0.2,
      delay: 1,
    });
  });

  return (
    <>
      <div className="flex flex-wrap items-center justify-center gap-4 mt-6 pt-2">
        <Link
          href="/about"
          className="mt-4 text-[var(--foreground)] hover:border-b-2 hover:border-b-[var(--primary)] px-3 py-2 text-lg font-medium main-button opacity-0 transition-all"
        >
          About
        </Link>
        <Link
          href="/work"
          className="mt-4 text-[var(--foreground)] hover:border-b-2 hover:border-b-[var(--primary)] px-3 py-2 text-lg font-medium main-button opacity-0 transition-all"
        >
          Work
        </Link>
        <Link
          href="/projects"
          className="mt-4 text-[var(--foreground)] hover:border-b-2 hover:border-b-[var(--primary)] px-3 py-2 text-lg font-medium main-button opacity-0 transition-all"
        >
          Projects
        </Link>
        <Link
          href="/blogs"
          className="mt-4 text-[var(--foreground)] hover:border-b-2 hover:border-b-[var(--primary)] px-3 py-2 text-lg font-medium main-button opacity-0 transition-all"
        >
          Blog
        </Link>
        <Link
          href="/certificates"
          className="mt-4 text-[var(--foreground)] hover:border-b-2 hover:border-b-[var(--primary)] px-3 py-2 text-lg font-medium main-button opacity-0 transition-all"
        >
          Certifications
        </Link>
        <Link
          href="/docs/pdf/resume.pdf"
          target="_blank"
          className="mt-4 text-[var(--foreground)] hover:border-b-2 hover:border-b-[var(--primary)] px-3 py-2 text-lg font-medium main-button opacity-0 transition-all"
        >
          Resume
        </Link>
      </div>
    </>
  );
}
