"use client";

import { technologies } from "@/data/technologies";
import Image from "next/image";

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
