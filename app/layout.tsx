import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const montserat = localFont({
  src: "./fonts/Montserrat-VariableFont_wght.ttf",
  variable: "--font-montserat",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Hitvardhan Singh Solanki",
  description: "Hitvardhan Singh Solanki's Portfolio",
  openGraph: {
    type: "website",
    images: [
      {
        url: "/og-image.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserat.variable} antialiased`}
      >
        <div className="relative">
          <Navbar />
          {children}
          <div className="h-10" />
          <div className="absolute top-0 left-0 w-full h-full overlay"></div>
        </div>
        <footer className="bg-[var(--background)] opacity-70 text-[var(--foreground)] text-center py-2 fixed bottom-0 z-10 w-full flex flex-col items-center justify-center">
          <p>Made with ❤️ by Hitvardhan</p>
        </footer>
      </body>
    </html>
  );
}
