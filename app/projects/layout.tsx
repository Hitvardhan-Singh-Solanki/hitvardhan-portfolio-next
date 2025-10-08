import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A collection of web applications, tools, and solutions I've built to solve real-world problems. Explore my portfolio of React, Next.js, and TypeScript projects.",
  openGraph: {
    title: "Projects | Hitvardhan Singh Solanki",
    description:
      "A collection of web applications, tools, and solutions I've built to solve real-world problems. Explore my portfolio of React, Next.js, and TypeScript projects.",
    url: "https://hitvardhan-portfolio-next.vercel.app/projects",
    type: "website",
    images: [
      {
        url: "/img/png/main.png",
        width: 1200,
        height: 630,
        alt: "Hitvardhan's Projects Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Hitvardhan Singh Solanki",
    description:
      "A collection of web applications, tools, and solutions I've built to solve real-world problems.",
    images: ["/img/png/main.png"],
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
