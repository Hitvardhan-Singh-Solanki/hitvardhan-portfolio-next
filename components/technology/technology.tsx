"use client";

import { technologies } from "@/data/technologies";
import Image from "next/image";

export default function Technology() {
  return (
    <div className="w-full py-16 relative">
      {/* Accent line at top */}
      <div
        className="absolute top-0 left-0 w-full h-1"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, var(--primary) 50%, transparent 100%)",
        }}
      />

      <div className="container mx-auto px-4 lg:px-0">
        <div className="p-8 md:p-12 relative">
          <h1
            className="text-2xl md:text-4xl font-bold text-center mb-12"
            style={{
              background: `linear-gradient(135deg, var(--primary), var(--foreground))`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Technologies I Frequently Use
          </h1>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 place-items-center">
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
  return (
    <figure className="p-4 flex flex-col items-center text-center transition-all duration-300 hover:scale-110 group">
      <span
        className="w-28 h-28 flex flex-col items-center justify-center rounded-xl transition-all duration-300 shadow-md"
        style={{
          backgroundColor: "var(--card-bg)",
          border: "1px solid var(--card-border)",
        }}
      >
        <Image
          src={src}
          alt={alt}
          width={80}
          height={80}
          className="transition-all duration-300 group-hover:scale-110"
          style={{
            filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))",
          }}
        />
      </span>
      <figcaption
        className="text-sm font-semibold mt-3"
        style={{ color: "var(--foreground)" }}
      >
        {name}
      </figcaption>
    </figure>
  );
}
