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
        <Navbar />
        {children}
        <div className="h-10" />
        <footer className="bg-[var(--tertiary)] text-[var(--foreground)] text-center py-4 fixed bottom-0 z-10 w-full">
          <p>Made with ❤️ by Hitvardhan</p>
        </footer>
      </body>
    </html>
  );
}
