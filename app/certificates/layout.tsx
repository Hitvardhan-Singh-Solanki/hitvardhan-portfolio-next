import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Certifications",
  description:
    "Professional certifications and credentials in web technologies, cloud computing, data visualization, blockchain, and software engineering.",
  openGraph: {
    title: "Certifications | Hitvardhan Singh Solanki",
    description:
      "Professional certifications and credentials in web technologies, cloud computing, data visualization, blockchain, and software engineering.",
    url: "https://hitvardhan-portfolio-next.vercel.app/certificates",
    type: "website",
    images: [
      {
        url: "/img/png/main.png",
        width: 1200,
        height: 630,
        alt: "Hitvardhan's Certifications",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Certifications | Hitvardhan Singh Solanki",
    description:
      "Professional certifications and credentials in web technologies and software engineering.",
    images: ["/img/png/main.png"],
  },
};

export default function CertificatesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
