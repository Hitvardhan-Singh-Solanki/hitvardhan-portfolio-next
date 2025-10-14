"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Home, Search, AlertTriangle } from "lucide-react";

export default function NotFound() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const tl = gsap.timeline();

    // Initial state
    gsap.set(
      [
        titleRef.current,
        subtitleRef.current,
        buttonsRef.current,
        iconRef.current,
      ],
      {
        opacity: 0,
        y: 30,
      }
    );

    // Animation sequence
    tl.to(iconRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power2.out",
    })
      .to(
        titleRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.3"
      )
      .to(
        subtitleRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.3"
      )
      .to(
        buttonsRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.3"
      );

    // Floating animation for the icon
    gsap.to(iconRef.current, {
      y: -10,
      duration: 2,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1,
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, var(--background) 0%, var(--card-bg) 100%)",
      }}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full opacity-10"
          style={{ background: "var(--primary)" }}
        />
        <div
          className="absolute top-3/4 right-1/4 w-24 h-24 rounded-full opacity-10"
          style={{ background: "var(--accent)" }}
        />
        <div
          className="absolute top-1/2 right-1/3 w-16 h-16 rounded-full opacity-10"
          style={{ background: "var(--primary)" }}
        />
      </div>

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        {/* Icon */}
        <div ref={iconRef} className="mb-8">
          <div
            className="w-24 h-24 mx-auto rounded-full flex items-center justify-center"
            style={{
              background:
                "linear-gradient(135deg, var(--primary), var(--accent))",
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
            }}
          >
            <AlertTriangle size={48} className="text-white" />
          </div>
        </div>

        {/* Title */}
        <h1
          ref={titleRef}
          className="text-6xl md:text-8xl font-bold mb-6"
          style={{
            background:
              "linear-gradient(135deg, var(--primary), var(--accent))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          404
        </h1>

        {/* Subtitle */}
        <h2
          ref={subtitleRef}
          className="text-2xl md:text-3xl font-semibold mb-4"
          style={{ color: "var(--foreground)" }}
        >
          Oops! You&apos;ve wandered into the digital void
        </h2>

        <p
          ref={subtitleRef}
          className="text-lg md:text-xl mb-8 opacity-80"
          style={{ color: "var(--secondary)" }}
        >
          The page you&apos;re looking for seems to have vanished into the
          ether. Don&apos;t worry, even the best explorers sometimes take a
          wrong turn!
        </p>

        {/* Action Buttons */}
        <div
          ref={buttonsRef}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105"
            style={{
              background:
                "linear-gradient(135deg, var(--primary), var(--accent))",
              color: "white",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Home size={20} />
            <span>Take me Home</span>
          </Link>

          <Link
            href="/about"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 border-2"
            style={{
              borderColor: "var(--primary)",
              color: "var(--primary)",
            }}
          >
            <Search size={20} />
            <span>Explore Portfolio</span>
          </Link>
        </div>

        {/* Additional helpful links */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-md mx-auto">
          <Link
            href="/work"
            className="p-4 rounded-lg text-center transition-all duration-300 hover:scale-105"
            style={{
              background: "var(--card-bg)",
              border: "1px solid var(--card-border)",
            }}
          >
            <div
              className="text-sm font-medium"
              style={{ color: "var(--foreground)" }}
            >
              Work
            </div>
          </Link>
          <Link
            href="/projects"
            className="p-4 rounded-lg text-center transition-all duration-300 hover:scale-105"
            style={{
              background: "var(--card-bg)",
              border: "1px solid var(--card-border)",
            }}
          >
            <div
              className="text-sm font-medium"
              style={{ color: "var(--foreground)" }}
            >
              Projects
            </div>
          </Link>
          <Link
            href="/blogs"
            className="p-4 rounded-lg text-center transition-all duration-300 hover:scale-105"
            style={{
              background: "var(--card-bg)",
              border: "1px solid var(--card-border)",
            }}
          >
            <div
              className="text-sm font-medium"
              style={{ color: "var(--foreground)" }}
            >
              Blog
            </div>
          </Link>
          <Link
            href="/contact"
            className="p-4 rounded-lg text-center transition-all duration-300 hover:scale-105"
            style={{
              background: "var(--card-bg)",
              border: "1px solid var(--card-border)",
            }}
          >
            <div
              className="text-sm font-medium"
              style={{ color: "var(--foreground)" }}
            >
              Contact
            </div>
          </Link>
        </div>

        {/* Fun fact */}
        <div
          className="mt-12 p-4 rounded-lg"
          style={{ background: "var(--card-bg)" }}
        >
          <p
            className="text-sm opacity-70"
            style={{ color: "var(--secondary)" }}
          >
            💡 <strong>Fun fact:</strong> The term &quot;404 error&quot; comes
            from room 404 at CERN, where the original web servers were located!
          </p>
        </div>
      </div>
    </div>
  );
}
