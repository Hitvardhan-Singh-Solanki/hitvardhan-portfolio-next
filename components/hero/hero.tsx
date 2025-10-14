"use client";

import { ChevronDown } from "lucide-react";
import Image from "next/image";
import MainButtons from "../main-buttons/main-buttons";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Hero() {
  const imageRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // GSAP pulsating animation for the profile image
  useEffect(() => {
    if (imageRef.current) {
      const tl = gsap.timeline({ repeat: -1 });

      tl.to(imageRef.current, {
        scale: 1.02,
        duration: 3,
        ease: "power2.inOut",
      }).to(imageRef.current, {
        scale: 1,
        duration: 3,
        ease: "power2.inOut",
      });

      return () => {
        tl.kill();
      };
    }
  }, []);

  // Dynamic shadow based on mouse position
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Calculate shadow offset based on mouse position relative to image center
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const offsetX = (x - centerX) / 20; // Scale down the offset
    const offsetY = (y - centerY) / 20;

    // Apply dynamic shadow (opposite direction from light source)
    imageRef.current.style.boxShadow = `${-offsetX}px ${-offsetY}px 20px rgba(var(--primary-rgb), 0.3)`;
  };

  const handleMouseLeave = () => {
    if (imageRef.current) {
      imageRef.current.style.boxShadow =
        "0 0 20px rgba(var(--primary-rgb), 0.2)";
    }
  };

  return (
    <div className="h-screen relative container mx-auto px-4 lg:px-0">
      <div className="grid grid-cols-5 gap-4 items-center justify-between h-full">
        <div
          ref={containerRef}
          className="col-span-5 flex flex-col items-center justify-center expand-center opacity-1"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {/* Enhanced Profile Image - Minified spacing */}
          <div
            className="relative"
            style={{ marginBottom: "var(--spacing-lg)" }}
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent opacity-5"></div>
            <Image
              ref={imageRef}
              src="/img/png/main.png"
              alt="Hitvardhan Singh Solanki"
              width={200}
              height={200}
              className="border-4 rounded-full shadow-2xl opacity-100"
              style={{
                borderColor: "var(--primary)",
              }}
            />
            {/* Floating elements around image */}
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full animate-bounce"></div>
            <div
              className="absolute -bottom-2 -left-2 w-4 h-4 bg-accent rounded-full animate-bounce"
              style={{ animationDelay: "0.5s" }}
            ></div>
          </div>

          {/* Enhanced Divider - Minified spacing */}
          <div
            className="w-full max-w-md mx-auto"
            style={{ marginBottom: "var(--spacing-md)" }}
          >
            <div className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"></div>
          </div>

          {/* Enhanced Content - Minified spacing */}
          <div
            className="main-content flex flex-col items-center justify-center text-center opacity-100"
            style={{ margin: "var(--spacing-md) 0" }}
          >
            <div style={{ marginBottom: "var(--spacing-sm)" }}>
              <span className="text-sm md:text-base font-medium text-primary tracking-widest uppercase">
                Welcome to my portfolio
              </span>
            </div>

            <h1
              className="leading-tight text-4xl md:text-6xl lg:text-7xl font-bold"
              style={{ marginBottom: "var(--spacing-xs)" }}
            >
              Hi, I&apos;m{" "}
              <span className="name relative">
                Hitvardhan
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
              </span>
            </h1>

            <p className="text-base md:text-lg text-secondary max-w-2xl mx-auto leading-relaxed">
              Full stack developer
            </p>
          </div>

          {/* Enhanced Divider - Minified spacing */}
          <div
            className="w-full max-w-md mx-auto"
            style={{ marginBottom: "var(--spacing-md)" }}
          >
            <div className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"></div>
          </div>

          <div className="opacity-100">
            <MainButtons />
          </div>
        </div>
      </div>
      <div
        className="hidden md:flex items-start justify-center col-span-5 gap-4 fixed bottom-20 right-10 cursor-pointer h-10 w-6 border-2 rounded-full hover:border-[var(--primary)]"
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
