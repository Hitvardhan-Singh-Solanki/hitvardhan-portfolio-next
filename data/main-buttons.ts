export interface MainButton {
  href: string;
  label: string;
  target?: string;
  download?: boolean;
  icon?: string;
}

export const mainButtons: MainButton[] = [
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/projects", label: "Projects" },
  { href: "/blogs", label: "Blog" },
  { href: "/certificates", label: "Certifications" },
  {
    href: "/docs/pdf/resume.pdf",
    label: "Resume",
    download: true,
    icon: "download",
  },
];
