import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex justify-center items-center my-10 h-30">
      <Link href="/">
        <Image src="/logo.svg" alt="logo" width={100} height={100} />
      </Link>
    </nav>
  );
}

export function NavbarItem({
  href,
  icon,
  text,
  active,
}: {
  href: string;
  icon: React.ReactNode;
  text: string;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`text-sm font-medium nav-link ${active ? "active" : ""}`}
    >
      <span className="flex items-center gap-2 justify-center">
        {icon}
        {text}
      </span>
    </Link>
  );
}
