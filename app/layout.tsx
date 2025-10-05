import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import localFont from "next/font/local";
import "./globals.scss";
import Navbar from "@/components/navbar/navbar";
import { Footer } from "@/components/footer/footer";
import { ThemeProvider } from "@/context/theme-context";

const geistSans = localFont({
  src: "../public/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../public/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const montserat = localFont({
  src: "../public/fonts/Montserrat-VariableFont_wght.ttf",
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
        className={`${geistSans.variable} ${geistMono.variable} ${montserat.variable} antialiased`}
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
