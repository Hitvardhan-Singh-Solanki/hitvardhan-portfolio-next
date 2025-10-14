"use client";

import { technologies } from "@/data/technologies";
import Image from "next/image";
import { useHoverAnimation } from "@/lib/hooks/animations";
import { useTheme } from "@/context/theme-context";

export default function Technology() {
  return (
    <div
      className="w-full relative overflow-hidden"
      style={{ padding: "var(--spacing-4xl) 0" }}
    >
      {/* Enhanced background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-rgba(var(--primary-rgb), 0.02) to-transparent"></div>

      {/* Accent line at top */}
      <div
        className="absolute top-0 left-0 w-full h-1"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, var(--primary) 50%, transparent 100%)",
        }}
      />

      <div className="container mx-auto px-4 lg:px-0 relative z-10">
        <div className="relative" style={{ padding: "var(--spacing-2xl)" }}>
          {/* Enhanced header - Tighter spacing */}
          <div
            className="text-center"
            style={{ marginBottom: "var(--spacing-3xl)" }}
          >
            <div
              className="inline-block"
              style={{ marginBottom: "var(--spacing-md)" }}
            >
              <span className="text-sm font-semibold text-primary tracking-widest uppercase">
                Tech Stack
              </span>
            </div>
            <h1
              className="text-3xl md:text-5xl lg:text-6xl font-bold"
              style={{
                background: `linear-gradient(135deg, var(--primary), var(--accent), var(--foreground))`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                marginBottom: "var(--spacing-lg)",
              }}
            >
              Technologies I Love
            </h1>
            <p className="text-lg text-secondary max-w-2xl mx-auto">
              Modern tools and frameworks that power my development journey
            </p>
          </div>

          {/* Enhanced grid - Tighter spacing */}
          <div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center"
            style={{ gap: "var(--spacing-2xl)" }}
          >
            {technologies.map((technology) => (
              <CarouselItem
                key={technology.alt}
                src={technology.src}
                alt={technology.alt}
                name={technology.name}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Accent line at bottom */}
      <div
        className="absolute bottom-0 left-0 w-full h-1"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, var(--primary) 50%, transparent 100%)",
        }}
      />
    </div>
  );
}

function CarouselItem({
  src,
  alt,
  name,
}: {
  src: string;
  alt: string;
  name: string;
}) {
  const { theme } = useTheme();
  const cardAnimation = useHoverAnimation({ scale: 1.1, y: -4, duration: 0.3 });
  const iconAnimation = useHoverAnimation({ scale: 1.1, duration: 0.3 });

  // Use theme-aware Next.js logo
  const getImageSrc = () => {
    if (alt === "next-js") {
      return theme === "light"
        ? "/img/svg/next-js-light.svg"
        : "/img/svg/next-js-dark.svg";
    }
    return src;
  };

  return (
    <figure
      ref={cardAnimation.elementRef}
      onMouseEnter={() => {
        cardAnimation.handleMouseEnter();
        iconAnimation.handleMouseEnter();
      }}
      onMouseLeave={() => {
        cardAnimation.handleMouseLeave();
        iconAnimation.handleMouseLeave();
      }}
      className="flex flex-col items-center text-center group cursor-pointer"
      style={{ padding: "var(--spacing-xl)" }}
    >
      <div className="relative">
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"></div>

        <span
          className="relative w-32 h-32 flex flex-col items-center justify-center rounded-2xl shadow-lg transition-all duration-300 group-hover:shadow-2xl"
          style={{
            backgroundColor: "var(--card-bg)",
            border: "1px solid var(--card-border)",
            backdropFilter: "blur(10px)",
          }}
        >
          <Image
            src={getImageSrc()}
            alt={alt}
            width={90}
            height={90}
            ref={iconAnimation.elementRef as unknown as React.RefObject<HTMLImageElement>}
            className="transition-all duration-300 group-hover:drop-shadow-lg"
            style={{
              filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.1))",
            }}
          />

          {/* Hover overlay */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </span>
      </div>

      <figcaption
        className="text-sm font-semibold transition-colors duration-300 group-hover:text-primary"
        style={{ color: "var(--foreground)", marginTop: "var(--spacing-md)" }}
      >
        {name}
      </figcaption>
    </figure>
  );
}
