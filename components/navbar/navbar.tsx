"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import ThemeToggle from "../theme-toggle/theme-toggle";
import { useHoverAnimation } from "@/lib/hooks/animations";
import "./navbar.scss";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const isHomePage = pathname === "/";
  const isContactPage = pathname === "/contact";

  const backAnimation = useHoverAnimation({ scale: 1.05, duration: 0.2 });

  const handleBackClick = () => {
    router.back();
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50 flex justify-between items-center container mx-auto py-5 px-4 lg:px-0">
      <div className="flex flex-grow">
        {!isHomePage && (
          <button
            onClick={handleBackClick}
            ref={backAnimation.elementRef}
            onMouseEnter={backAnimation.handleMouseEnter}
            onMouseLeave={backAnimation.handleMouseLeave}
            className="flex items-center gap-2 text-foreground hover:text-primary transition-colors duration-200"
            aria-label="Go back"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
            >
              <path
                d="M12.5 15L7.5 10L12.5 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="font-medium">Back</span>
          </button>
        )}
      </div>
      <div className="flex items-center gap-3">
        <ThemeToggle />
        <Link href="/contact">
          <button className={`contact-button ${isContactPage ? "active" : ""}`}>
            <span className="flex items-center gap-2">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              Contact
            </span>
          </button>
        </Link>
      </div>
    </nav>
  );
}
