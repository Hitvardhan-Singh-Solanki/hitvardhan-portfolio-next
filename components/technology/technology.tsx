"use client";

import Image from "next/image";

const technologies = [
  { src: "/ts.svg", alt: "typescript", name: "Typescript" },
  { src: "/js.svg", alt: "javascript", name: "Javascript" },
  { src: "/next-js.svg", alt: "next-js", name: "Next.js" },
  { src: "/tailwind.svg", alt: "tailwind", name: "Tailwind" },
  { src: "/react.svg", alt: "react", name: "React" },
  { src: "/go.svg", alt: "go", name: "Go" },
  { src: "/angular.svg", alt: "angular", name: "Angular" },
  { src: "/vue.svg", alt: "vue", name: "Vue" },
  { src: "/html.svg", alt: "html-5", name: "HTML" },
  { src: "/python.svg", alt: "python", name: "Python" },
  { src: "/kotlin.svg", alt: "kotlin", name: "Kotlin" },
  { src: "/node.svg", alt: "node", name: "Node" },
  { src: "/docker.svg", alt: "docker", name: "Docker" },
  { src: "/kubernets.svg", alt: "kubernetes", name: "Kubernetes" },
  { src: "/postgresql.svg", alt: "postgres", name: "Postgresql" },
  { src: "/mongodb.svg", alt: "mongodb", name: "Mongo" },
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
          <h1 className="text-2xl md:text-4xl  font-bold text-center text-[var(--foreground)] py-4 mb-4">
            Technologies I Frequently Use
          </h1>
          <div className="carousel grid grid-cols-2 md:grid-cols-4 gap-3 place-items-center p-4">
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
    </>
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
    <figure className="carousel-item p-2 flex flex-col items-center text-center">
      <span className="w-32 h-32 flex flex-col items-center justify-center">
        <Image src={src} alt={alt} width={90} height={90} />
      </span>
      <figcaption className="text-sm font-bold text-[var(--foreground)]">
        {name}
      </figcaption>
    </figure>
  );
}
