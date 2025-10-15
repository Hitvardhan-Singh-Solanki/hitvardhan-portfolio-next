"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import ThemeToggle from "../theme-toggle/theme-toggle";
import { mainButtons } from "@/data/main-buttons";
import { ExternalLink } from "lucide-react";
import "./navbar.scss";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const isHomePage = pathname === "/";
  const isContactPage = pathname === "/contact";
  const [showMainButtons, setShowMainButtons] = useState(!isHomePage);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const buttonsRef = useRef<HTMLDivElement>(null);

  // Check if current page matches button href for active state
  const isButtonActive = (href: string) => {
    if (href === "/" && isHomePage) return true;
    if (href !== "/" && pathname?.startsWith(href)) return true;
    return false;
  };

  const handleBackClick = () => {
    router.back();
  };

  const handleHomeClick = () => {
    router.push("/");
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Smooth transition for main buttons
  useEffect(() => {
    if (!isHomePage) {
      // Show buttons for non-home pages
      if (!showMainButtons) {
        setShowMainButtons(true);
      }
    } else {
      // Hide buttons for home page
      if (showMainButtons && buttonsRef.current) {
        // Animate out
        gsap.to(buttonsRef.current, {
          opacity: 0,
          y: -10,
          scale: 0.95,
          duration: 0.3,
          ease: "power2.in",
          onComplete: () => setShowMainButtons(false),
        });
      }
    }
  }, [isHomePage, showMainButtons]);

  // Animate in when buttons become visible
  useEffect(() => {
    if (showMainButtons && buttonsRef.current && !isHomePage) {
      gsap.fromTo(
        buttonsRef.current,
        { opacity: 0, y: -10, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: "power2.out" }
      );
    }
  }, [showMainButtons, isHomePage]);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-gray-300 dark:border-gray-700 flex justify-between items-center container mx-auto py-5 px-4 lg:px-0">
        <div className="flex flex-grow items-center gap-4">
          {!isHomePage && (
            <div className="flex items-center gap-2">
              <button
                onClick={handleBackClick}
                className="flex items-center justify-center gap-2 text-foreground hover:text-primary transition-colors duration-200 py-2 px-3 rounded-md hover:bg-foreground/5"
                aria-label="Go back"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 flex-shrink-0"
                >
                  <path
                    d="M12.5 15L7.5 10L12.5 5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="font-medium hidden sm:inline">Back</span>
              </button>

              {/* Visual separator */}
              <div className="w-px h-6 bg-gray-600 dark:bg-gray-500"></div>

              <button
                onClick={handleHomeClick}
                className="flex items-center justify-center gap-2 text-foreground hover:text-primary transition-colors duration-200 py-2 px-3 rounded-md hover:bg-foreground/5"
                aria-label="Go to home"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 flex-shrink-0"
                >
                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9,22 9,12 15,12 15,22" />
                </svg>
                <span className="font-medium hidden sm:inline">Home</span>
              </button>
            </div>
          )}
        </div>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-3">
          {/* Main buttons for non-home pages */}
          {!isHomePage && showMainButtons && (
            <div ref={buttonsRef} className="flex items-center gap-2">
              {mainButtons.map((button, index) => (
                <Link
                  key={index}
                  href={button.href}
                  target={button.download ? undefined : button.target}
                  download={
                    button.download
                      ? "Hitvardhan_Singh_Solanki_Resume.pdf"
                      : undefined
                  }
                  className={`main-button ${
                    isButtonActive(button.href) ? "active" : ""
                  }`}
                >
                  <span className="main-button__text flex items-center gap-2">
                    {button.icon === "external" && <ExternalLink size={16} />}
                    {button.label}
                  </span>
                </Link>
              ))}
            </div>
          )}

          <ThemeToggle />
          <Link href="/contact">
            <button
              className={`contact-button ${isContactPage ? "active" : ""}`}
            >
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

        {/* Mobile/Tablet navigation */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <button
            onClick={toggleMobileMenu}
            className="hamburger-menu"
            aria-label="Toggle menu"
          >
            <span
              className={`hamburger-line ${isMobileMenuOpen ? "open" : ""}`}
            ></span>
            <span
              className={`hamburger-line ${isMobileMenuOpen ? "open" : ""}`}
            ></span>
            <span
              className={`hamburger-line ${isMobileMenuOpen ? "open" : ""}`}
            ></span>
          </button>
        </div>
      </nav>

      {/* Mobile/Tablet menu overlay */}
      <div
        className={`mobile-menu-overlay ${isMobileMenuOpen ? "open" : ""}`}
        onClick={closeMobileMenu}
      >
        <div
          className="mobile-menu-content"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Contact button at top */}
          <div className="mobile-contact-section">
            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
              <button
                className={`contact-button mobile ${
                  isContactPage ? "active" : ""
                }`}
              >
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

          {/* Main buttons below contact - only show on non-landing pages */}
          {!isHomePage && (
            <>
              {/* Divider */}
              <div className="mobile-menu-divider"></div>

              <div className="mobile-main-buttons">
                {mainButtons.map((button, index) => (
                  <Link
                    key={index}
                    href={button.href}
                    target={button.download ? undefined : button.target}
                    download={
                      button.download
                        ? "Hitvardhan_Singh_Solanki_Resume.pdf"
                        : undefined
                    }
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`main-button mobile ${
                      isButtonActive(button.href) ? "active" : ""
                    }`}
                  >
                    <span className="main-button__text flex items-center gap-2">
                      {button.icon === "external" && <ExternalLink size={16} />}
                      {button.label}
                    </span>
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
