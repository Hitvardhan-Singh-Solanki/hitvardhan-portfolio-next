"use client";

import { Heading } from "@/components/heading/heading";
import { certificates, credlyUrl, udemyUrl } from "@/data/certifications";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(useGSAP);

export default function Certificates() {
  useGSAP(() => {
    const tl = gsap.timeline({
      delay: 0.25,
      duration: 0.5,
      ease: "power2.inOut",
    });

    tl.to(".certificate", {
      opacity: 1,
      y: -20,
      stagger: 0.2,
    });
  });

  return (
    <div className="container mx-auto h-screen flex flex-col items-start justify-start pt-20">
      <Heading>Certifications</Heading>
      <div className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-6 w-full content-center items-center justify-center text-center">
        {certificates.map((certificate) => (
          <Link
            href={
              certificate.credly
                ? credlyUrl + certificate.id
                : udemyUrl + certificate.id
            }
            target="_blank"
            key={certificate.id}
            className="justify-center flex flex-col items-center text-center certificate opacity-0 p-6 rounded-xl border transition-all duration-300 hover:scale-[1.02]"
            style={{
              backgroundColor: "var(--card-bg)",
              borderColor: "var(--card-border)",
            }}
          >
            <figure className="my-4 flex flex-col items-center justify-center">
              <h2 className="text-xl font-bold text-center text-[var(--foreground)] mb-4">
                {certificate.name}
              </h2>
              <Image
                src={certificate.src}
                alt={certificate.alt}
                width={400}
                height={200}
                className="rounded-lg"
              ></Image>
            </figure>
            <figcaption className="text-sm text-[var(--foreground)] opacity-80 max-w-xl text-justify mt-2">
              {certificate.description}
            </figcaption>
          </Link>
        ))}
        <div className="justify-center flex flex-col items-center text-center">
          <Link
            href={
              "https://www.linkedin.com/in/hitvardhan/details/certifications/"
            }
            target="_blank"
            className="hover:border-b-2 hover:border-b-[var(--primary)] px-4 py-2 font-medium transition-all"
            style={{ color: "var(--primary)" }}
          >
            View more on LinkedIn
          </Link>
        </div>
      </div>
    </div>
  );
}
