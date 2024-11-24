import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center container mx-auto py-5">
      <div className="flex flex-grow container">
        <Link href="/">
          <Image
            src="img/svg/logo.svg"
            alt="logo"
            width={120}
            height={100}
            className="max-w-50 max-h-15"
          />
        </Link>
      </div>
      <Link href="/contact">
        <Button
          variant="outline"
          size="lg"
          className="max-w-50 max-h-15 contact-button"
        >
          Contact
        </Button>
      </Link>
    </nav>
  );
}
