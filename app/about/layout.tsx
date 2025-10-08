import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Senior Full-Stack Software Engineer with 10+ years of experience based in Barcelona, Spain. Learn about my journey, expertise in React, Next.js, Node.js, and TypeScript.",
  openGraph: {
    title: "About | Hitvardhan Singh Solanki",
    description:
      "Senior Full-Stack Software Engineer with 10+ years of experience based in Barcelona, Spain. Learn about my journey, expertise in React, Next.js, Node.js, and TypeScript.",
    url: "https://hitvardhan-portfolio-next.vercel.app/about",
    type: "profile",
    images: [
      {
        url: "/img/png/main.png",
        width: 1200,
        height: 630,
        alt: "Hitvardhan Singh Solanki - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Hitvardhan Singh Solanki",
    description:
      "Senior Full-Stack Software Engineer with 10+ years of experience based in Barcelona, Spain.",
    images: ["/img/png/main.png"],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
