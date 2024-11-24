"use client";

import Image from "next/image";

const technologies = [
  { src: "/img/svg/ts.svg", alt: "typescript", name: "Typescript" },
  { src: "/img/svg/js.svg", alt: "javascript", name: "Javascript" },
  { src: "/img/svg/next-js.svg", alt: "next-js", name: "Next.js" },
  { src: "/img/svg/tailwind.svg", alt: "tailwind", name: "Tailwind" },
  { src: "/img/svg/react.svg", alt: "react", name: "React" },
  { src: "/img/svg/go.svg", alt: "go", name: "Go" },
  { src: "/img/svg/angular.svg", alt: "angular", name: "Angular" },
  { src: "/img/svg/vue.svg", alt: "vue", name: "Vue" },
  { src: "/img/svg/html.svg", alt: "html-5", name: "HTML" },
  { src: "/img/svg/python.svg", alt: "python", name: "Python" },
  { src: "/img/svg/kotlin.svg", alt: "kotlin", name: "Kotlin" },
  { src: "/img/svg/node.svg", alt: "node", name: "Node" },
  { src: "/img/svg/docker.svg", alt: "docker", name: "Docker" },
  { src: "/img/svg/kubernets.svg", alt: "kubernetes", name: "Kubernetes" },
  { src: "/img/svg/postgresql.svg", alt: "postgres", name: "Postgresql" },
  { src: "/img/svg/mongodb.svg", alt: "mongodb", name: "Mongo" },
];

export default function Technology() {
  return (
    <>
      <Image
        src="/img/svg/waves.svg"
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
