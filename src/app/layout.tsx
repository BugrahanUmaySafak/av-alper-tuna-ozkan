import Header from "@/components/header/Header";
import "@/style/globals.css";
import { Inter } from "next/font/google";
import type { Metadata, Viewport } from "next";
import IletisimLazy from "@/components/contact/ContactLazy";
import FooterLazy from "@/components/footer/FooterLazy";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "next-themes";
import {
  buildMetadata,
  organizationJsonLd,
  seoConfig,
} from "@/config/seo";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
  display: "swap",
});

const baseMetadata = buildMetadata({ path: "/" });

export const metadata: Metadata = {
  ...baseMetadata,
  metadataBase: new URL(seoConfig.siteUrl),
  title: {
    default: seoConfig.defaultTitle,
    template: `%s | ${seoConfig.shortName}`,
  },
  applicationName: seoConfig.siteName,
  manifest: "/site.webmanifest",
  category: "legal",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any", type: "image/x-icon" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: ["/favicon.ico"],
    other: [
      {
        rel: "mask-icon",
        url: "/logo/logo.svg",
        color: "#0b2540",
      },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="tr"
      className={`${inter.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        <meta httpEquiv="x-dns-prefetch-control" content="on" />
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-black">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          forcedTheme="light"
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-1">{children}</main>
          <IletisimLazy />
          <FooterLazy />
          <Toaster
            closeButton
            richColors
            position="top-center"
            duration={4000}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
