"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { mainButtons } from "@/data/main-buttons";
import { gsap } from "gsap";
import { Download } from "lucide-react";
import "./main-buttons.scss";

export default function MainButtons() {
  const [isMobile, setIsMobile] = useState(false);
  const buttonRefs = useRef<(HTMLAnchorElement | null)[]>([]);

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

  const handleMouseEnter = (index: number) => {
    const button = buttonRefs.current[index];
    if (button) {
      const border = button.querySelector(
        ".main-button__border"
      ) as HTMLElement;
      if (border) {
        gsap.to(border, {
          width: "100%",
          left: "0%",
          duration: 0.2,
          ease: "power2.out",
        });
      }
    }
  };

  const handleMouseLeave = (index: number) => {
    const button = buttonRefs.current[index];
    if (button) {
      const border = button.querySelector(
        ".main-button__border"
      ) as HTMLElement;
      if (border) {
        gsap.to(border, {
          width: "0%",
          left: "50%",
          duration: 0.2,
          ease: "power2.out",
        });
      }
    }
  };

  return (
    <>
      <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mt-4 pt-2">
        {mainButtons.map((button, index) => (
          <Link
            key={index}
            ref={(el) => {
              buttonRefs.current[index] = el;
            }}
            href={button.href}
            target={button.download ? undefined : button.target}
            download={
              button.download
                ? "Hitvardhan_Singh_Solanki_Resume.pdf"
                : undefined
            }
            className={`text-[var(--foreground)] px-2 md:px-3 py-2 text-base md:text-lg font-medium main-button ${
              isMobile ? "opacity-100" : "opacity-0"
            }`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            <span className="main-button__text flex items-center gap-2">
              {button.label}
              {button.icon === "download" && <Download size={16} />}
            </span>
            <div className="main-button__border"></div>
          </Link>
        ))}
      </div>
    </>
  );
}
