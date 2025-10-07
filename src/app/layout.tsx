// app/layout.tsx (veya src/app/layout.tsx)
import Header from "@/components/header/Header";
import "@/style/globals.css";
import { Inter } from "next/font/google";
import type { Metadata, Viewport } from "next";
import IletisimLazy from "@/components/contact/ContactLazy";
import FooterLazy from "@/components/footer/FooterLazy";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
  ),
  icons: [
    { rel: "icon", url: "/ico/favicon-16x16.ico", sizes: "16x16" },
    { rel: "icon", url: "/ico/favicon-32x32.ico", sizes: "32x32" },
    { rel: "icon", url: "/ico/favicon-48x48.ico", sizes: "48x48" },
  ],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#ffffff" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={`${inter.variable} antialiased`}>
      <head>
        <meta httpEquiv="x-dns-prefetch-control" content="on" />
      </head>
      <body>
        <Header />
        {children}
        <IletisimLazy />
        <FooterLazy />
      </body>
    </html>
  );
}
