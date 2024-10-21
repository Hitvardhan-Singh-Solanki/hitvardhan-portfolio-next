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
    <div className="h-screen relative container mx-auto">
      <div className="grid grid-cols-5 gap-4 items-center justify-between h-full">
        <div className="col-span-5 flex flex-col items-center justify-center expand-center opacity-1">
          <Image
            src="/main.png"
            alt="Hero"
            width={200}
            height={200}
            className="my-4 border-4 border-[var(--foreground)] rounded-full opacity-0 dp"
          />
          <hr className="w-0 h-1 bg-[var(--foreground)]" />
          <div className="main-content my-4 opacity-0 flex flex-col items-center justify-center">
            <h1 className="leading-loose">
              Hi, I am{" "}
              <span className="name px-2 font-bold">__HITVARDHAN__!</span>
            </h1>
            <h2 className="leading-loose">FULL STACK DEVELOPER</h2>
          </div>
          <hr className="w-0 h-1 bg-[var(--foreground)]" />
          <MainButtons />
        </div>
      </div>
      <div
        className="hidden md:flex items-start justify-center col-span-5 gap-4 fixed bottom-20 right-10 cursor-pointer h-10 w-6 border-2 border-[var(--foreground)] rounded-full"
        onClick={() => {
          window.scrollTo({
            top: window.innerHeight * 2,
            behavior: "smooth",
          });
        }}
      >
        <ChevronDown className="go-down" />
      </div>
    </div>
  );
}
