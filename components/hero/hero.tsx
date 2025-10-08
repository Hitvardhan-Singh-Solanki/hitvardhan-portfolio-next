"use client";

import { ChevronDown } from "lucide-react";
import Image from "next/image";
import MainButtons from "../main-buttons/main-buttons";
import { useEffect, useState } from "react";

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Run desktop animations only
  useEffect(() => {
    if (!isMobile && typeof window !== "undefined") {
      import("@/lib/animations").then(({ animateHero }) => {
        animateHero();
      });
    }
  }, [isMobile]);

  return (
    <div className="h-screen relative container mx-auto px-4 lg:px-0">
      <div className="grid grid-cols-5 gap-4 items-center justify-between h-full">
        <div className="col-span-5 flex flex-col items-center justify-center expand-center opacity-1">
          <Image
            src="/img/png/main.png"
            alt="Hero"
            width={200}
            height={200}
            className={`my-4 border-4 rounded-full dp shadow-lg ${
              isMobile ? "opacity-100" : "opacity-0"
            }`}
            style={{ borderColor: "var(--primary)" }}
          />
          <hr
            className={`h-1 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] ${
              isMobile ? "w-full max-w-xs mx-auto" : "w-0"
            }`}
          />
          <div
            className={`main-content my-6 flex flex-col items-center justify-center text-center ${
              isMobile ? "opacity-100" : "opacity-0"
            }`}
          >
            <h1 className="leading-relaxed mb-2 text-3xl md:text-5xl">
              Hi, I&apos;m{" "}
              <span className="name px-2 font-bold">Hitvardhan</span>
            </h1>
            <h2 className="text-lg md:text-2xl font-medium opacity-80 tracking-wide">
              FULL STACK DEVELOPER
            </h2>
          </div>
          <hr
            className={`h-1 bg-gradient-to-r from-[var(--secondary)] to-[var(--primary)] ${
              isMobile ? "w-full max-w-xs mx-auto" : "w-0"
            }`}
          />
          <MainButtons />
        </div>
      </div>
      <div
        className="hidden md:flex items-start justify-center col-span-5 gap-4 fixed bottom-20 right-10 cursor-pointer h-10 w-6 border-2 rounded-full transition-colors hover:border-[var(--primary)]"
        style={{ borderColor: "var(--foreground)" }}
        onClick={() => {
          window.scrollTo({
            top: window.innerHeight * 2,
            behavior: "smooth",
          });
        }}
      >
        <ChevronDown
          className="go-down"
          style={{ color: "var(--foreground)" }}
        />
      </div>
    </div>
  );
}
