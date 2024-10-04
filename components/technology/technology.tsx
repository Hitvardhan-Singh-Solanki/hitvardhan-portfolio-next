"use client";

import Image from "next/image";

const technologies = [
  { src: "/ts.svg", alt: "typescript" },
  { src: "/js.svg", alt: "javascript" },
  { src: "/next-js.svg", alt: "next-js" },
  { src: "/tailwind.svg", alt: "tailwind" },
  { src: "/react.svg", alt: "react" },
  { src: "/go.svg", alt: "go" },
  { src: "/angular.svg", alt: "angular" },
  { src: "/vue.svg", alt: "vue" },
  { src: "/html.svg", alt: "html-5" },
  { src: "/python.svg", alt: "python" },
  { src: "/kotlin.svg", alt: "kotlin" },
  { src: "/node.svg", alt: "node" },
  { src: "/docker.svg", alt: "docker" },
  { src: "/kubernets.svg", alt: "kubernetes" },
  { src: "/postgresql.svg", alt: "postgres" },
  { src: "/mongodb.svg", alt: "mongodb" },
];

export default function Technology() {
  return (
    <>
      <Image
        src="/waves.svg"
        alt="divider"
        width={100}
        height={100}
        className="w-full z-[-1] relative top-1 waves"
      />
      <div className="col-span-5 bg-[#03346E]">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-center text-[var(--foreground)] py-4 mb-4">
            Technologies I am Familiar With
          </h1>
          <div className="carousel grid grid-cols-4 gap-3 place-items-center p-4">
            {technologies.map((technology) => (
              <CarouselItem
                key={technology.alt}
                src={technology.src}
                alt={technology.alt}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

function CarouselItem({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="carousel-item p-2">
      <Image src={src} alt={alt} width={90} height={90} />
    </div>
  );
}
