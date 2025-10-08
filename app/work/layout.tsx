import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work Experience",
  description:
    "Explore my professional journey as a Full-Stack Developer. From startups to multinational corporations, delivering innovative solutions with React, Node.js, and TypeScript.",
  openGraph: {
    title: "Work Experience | Hitvardhan Singh Solanki",
    description:
      "Explore my professional journey as a Full-Stack Developer. From startups to multinational corporations, delivering innovative solutions with React, Node.js, and TypeScript.",
    url: "https://hitvardhan-portfolio-next.vercel.app/work",
    type: "website",
    images: [
      {
        url: "/img/png/main.png",
        width: 1200,
        height: 630,
        alt: "Hitvardhan's Work Experience",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Work Experience | Hitvardhan Singh Solanki",
    description:
      "Explore my professional journey as a Full-Stack Developer across various industries.",
    images: ["/img/png/main.png"],
  },
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
