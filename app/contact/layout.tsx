import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Hitvardhan Singh Solanki. Available for full-stack development opportunities, collaborations, and technical consultations.",
  openGraph: {
    title: "Contact | Hitvardhan Singh Solanki",
    description:
      "Get in touch with Hitvardhan Singh Solanki. Available for full-stack development opportunities, collaborations, and technical consultations.",
    url: "https://hitvardhan-portfolio-next.vercel.app/contact",
    type: "website",
    images: [
      {
        url: "/img/png/main.png",
        width: 1200,
        height: 630,
        alt: "Contact Hitvardhan Singh Solanki",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Hitvardhan Singh Solanki",
    description:
      "Get in touch for full-stack development opportunities and collaborations.",
    images: ["/img/png/main.png"],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
