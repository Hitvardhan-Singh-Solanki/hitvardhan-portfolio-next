"use client";
import { Button } from "@/components/ui/button";
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
      <div className="flex items-center justify-center gap-4 mt-6 pt-2">
        <Link
          href="/about"
          className="mt-4 text-[var(--foreground)] hover:border-b hover:border-b-[var(--foreground)] px-2 py-[0.2rem] text-lg main-button opacity-0 "
        >
          About
        </Link>
        <Link
          href="/contact"
          className="mt-4 text-[var(--foreground)] hover:border-b hover:border-b-[var(--foreground)] px-2 py-[0.2rem] text-lg main-button opacity-0 "
        >
          Contact
        </Link>
        <Link
          href="/work"
          className="mt-4 text-[var(--foreground)] hover:border-b hover:border-b-[var(--foreground)] px-2 py-[0.2rem] text-lg main-button opacity-0 "
        >
          Work
        </Link>
        <Link
          className="mt-4 text-[var(--foreground)] hover:border-b hover:border-b-[var(--foreground)] px-2 py-[0.2rem] text-lg main-button opacity-0 "
          href="https://resumes-flax.vercel.app"
          target="_blank"
        >
          Resume
        </Link>
      </div>
    </>
  );
}