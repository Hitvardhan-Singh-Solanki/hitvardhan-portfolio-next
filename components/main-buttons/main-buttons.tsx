"use client";

import Link from "next/link";
import { mainButtons } from "@/data/main-buttons";
import { Download } from "lucide-react";
import "./main-buttons.scss";

export default function MainButtons() {
  // Removed GSAP hover animations - now using CSS animations

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
            className="text-[var(--foreground)] px-2 md:px-3 py-2 text-base md:text-lg font-medium main-button opacity-100"
          >
            <span className="main-button__text flex items-center gap-2">
              {button.icon === "download" && <Download size={16} />}
              {button.label}
            </span>
            <div className="main-button__border"></div>
          </Link>
        ))}
      </div>
    </>
  );
}
