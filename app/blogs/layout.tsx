import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Technical articles, tutorials, and insights on web development, React, Next.js, TypeScript, Node.js, and modern software engineering best practices.",
  openGraph: {
    title: "Blog | Hitvardhan Singh Solanki",
    description:
      "Technical articles, tutorials, and insights on web development, React, Next.js, TypeScript, Node.js, and modern software engineering best practices.",
    url: "https://hitvardhan-portfolio-next.vercel.app/blogs",
    type: "website",
    images: [
      {
        url: "/img/png/main.png",
        width: 1200,
        height: 630,
        alt: "Hitvardhan's Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Hitvardhan Singh Solanki",
    description:
      "Technical articles and insights on web development and software engineering.",
    images: ["/img/png/main.png"],
  },
};

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
