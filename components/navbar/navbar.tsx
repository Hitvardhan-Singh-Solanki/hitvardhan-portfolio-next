"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import ThemeToggle from "../theme-toggle/theme-toggle";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center container mx-auto py-5 px-4 lg:px-0">
      <div className="flex flex-grow">
        <Link href="/" className="hover:opacity-80 transition-opacity">
          <Image
            src="img/svg/logo.svg"
            alt="logo"
            width={120}
            height={100}
            className="max-w-50 max-h-15"
          />
        </Link>
      </div>
      <div className="flex items-center gap-3">
        <ThemeToggle />
        <Link href="/contact">
          <Button
            variant="outline"
            size="lg"
            className="max-w-50 max-h-15 contact-button hover:scale-105 transition-transform"
          >
            Contact
          </Button>
        </Link>
      </div>
    </nav>
  );
}
