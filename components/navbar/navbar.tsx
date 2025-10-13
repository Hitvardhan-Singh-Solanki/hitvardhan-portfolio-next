"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "../ui/button";
import ThemeToggle from "../theme-toggle/theme-toggle";
import { useHoverAnimation } from "@/lib/hooks/animations";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const isHomePage = pathname === "/";

  const backAnimation = useHoverAnimation({ scale: 1.05, duration: 0.2 });
  const contactAnimation = useHoverAnimation({ scale: 1.05, duration: 0.2 });

  const handleBackClick = () => {
    router.back();
  };

  return (
    <nav className="flex justify-between items-center container mx-auto py-5 px-4 lg:px-0">
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
          <Button
            variant="outline"
            size="lg"
            className="max-w-50 max-h-15 contact-button"
            ref={contactAnimation.elementRef}
            onMouseEnter={contactAnimation.handleMouseEnter}
            onMouseLeave={contactAnimation.handleMouseLeave}
          >
            Contact
          </Button>
        </Link>
      </div>
    </nav>
  );
}
