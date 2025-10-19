import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import localFont from "next/font/local";
import "./globals.scss";
import Navbar from "@/components/navbar/navbar";
import { Footer } from "@/components/footer/footer";
import { ThemeProvider } from "@/context/theme-context";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Hitvardhan Singh Solanki | Full Stack Developer",
    template: "%s | Hitvardhan Singh Solanki",
  },
  description:
    "Senior Full-Stack Software Engineer based in Barcelona, Spain. Specializing in React, Next.js, TypeScript, Node.js, and building scalable web applications.",
  keywords: [
    "Full Stack Developer",
    "Software Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Web Development",
    "Barcelona",
    "Hitvardhan",
  ],
  authors: [{ name: "Hitvardhan Singh Solanki" }],
  creator: "Hitvardhan Singh Solanki",
  metadataBase: new URL("https://hitvardhan-portfolio-next.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hitvardhan-portfolio-next.vercel.app",
    title: "Hitvardhan Singh Solanki | Full Stack Developer",
    description:
      "Senior Full-Stack Software Engineer based in Barcelona, Spain. Specializing in React, Next.js, TypeScript, Node.js, and building scalable web applications.",
    siteName: "Hitvardhan Singh Solanki Portfolio",
    images: [
      {
        url: "/img/png/main.png",
        width: 1200,
        height: 630,
        alt: "Hitvardhan Singh Solanki - Full Stack Developer Portfolio",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hitvardhan Singh Solanki | Full Stack Developer",
    description:
      "Senior Full-Stack Software Engineer based in Barcelona, Spain. Specializing in React, Next.js, TypeScript, Node.js, and building scalable web applications.",
    images: ["/img/png/main.png"],
    creator: "@hitvardhan",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/img/svg/logo.svg" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme') || 'dark';
                document.documentElement.setAttribute('data-theme', theme);
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider>
          <div className="relative">
            <Navbar />
            {children}
            <div className="h-10" />
            <div className="absolute top-0 left-0 w-full h-full overlay"></div>
          </div>
          <Footer />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
