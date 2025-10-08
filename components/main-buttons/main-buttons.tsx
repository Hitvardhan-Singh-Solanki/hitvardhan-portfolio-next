"use client";

import Link from "next/link";
import { useButtonAnimation } from "@/lib/hooks";

export default function MainButtons() {
  useButtonAnimation();

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
