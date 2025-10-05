"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import MainButtons from "../main-buttons/main-buttons";
gsap.registerPlugin(useGSAP);

export default function Hero() {
  useGSAP(() => {
    const tl = gsap.timeline({
      delay: 0.25,
      duration: 0.5,
      ease: "power2.inOut",
    });

    tl.to(".expand-center > hr", {
      width: "100%",
    })
      .from(".main-content", {
        height: "0px",
      })
      .to(".main-content", {
        height: "auto",
      })
      .to(".main-content", {
        opacity: 1,
      });

    tl.to(".dp", {
      opacity: 1,
      scale: 0.8,
      y: -10,
    });

    const tl2 = gsap.timeline({
      yoyo: true,
      repeat: -1,
      ease: "power2.inOut",
      duration: 0.5,
    });

    tl2.to(".go-down", {
      y: 15,
    });
  });

  return (
    <div className="h-screen relative container mx-auto px-4 lg:px-0">
      <div className="grid grid-cols-5 gap-4 items-center justify-between h-full">
        <div className="col-span-5 flex flex-col items-center justify-center expand-center opacity-1">
          <Image
            src="/img/png/main.png"
            alt="Hero"
            width={200}
            height={200}
            className="my-4 border-4 rounded-full opacity-0 dp shadow-lg"
            style={{ borderColor: "var(--primary)" }}
          />
          <hr className="w-0 h-1 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]" />
          <div className="main-content my-6 opacity-0 flex flex-col items-center justify-center text-center">
            <h1 className="leading-relaxed mb-2">
              Hi, I&apos;m{" "}
              <span className="name px-2 font-bold">Hitvardhan</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-medium opacity-80 tracking-wide">
              FULL STACK DEVELOPER
            </h2>
          </div>
          <hr className="w-0 h-1 bg-gradient-to-r from-[var(--secondary)] to-[var(--primary)]" />
          <MainButtons />
        </div>
      </div>
      <div
        className="hidden md:flex items-start justify-center col-span-5 gap-4 fixed bottom-20 right-10 cursor-pointer h-10 w-6 border-2 rounded-full transition-colors hover:border-[var(--primary)]"
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
