import "./css/style.css";
import "aos/dist/aos.css";

import { Inter } from "next/font/google";
import localFont from "next/font/local";

import Header from "@/components/ui/header";
import AOSInit from "@/components/aos-init";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const nacelle = localFont({
  src: [
    {
      path: "../public/fonts/nacelle-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/nacelle-italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/nacelle-semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/nacelle-semibolditalic.woff2",
      weight: "600",
      style: "italic",
    },
  ],
  variable: "--font-nacelle",
  display: "swap",
});

export const metadata = {
  title: {
    default: "Ethical HCK - Cybersecurity Community",
    template: "%s | Ethical HCK",
  },
  description: "Empowering the next generation of cybersecurity professionals through hands-on learning and community collaboration at Herald College Kathmandu.",
  keywords: ["cybersecurity", "ethical hacking", "infosec", "cyber security", "herald college", "nepal", "ethical hck", "security community"],
  authors: [{ name: "Ethical HCK" }],
  creator: "Ethical HCK",
  publisher: "Ethical HCK",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Ethical HCK - Cybersecurity Community",
    description: "Empowering the next generation of cybersecurity professionals through hands-on learning and community collaboration.",
    siteName: "Ethical HCK",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ethical HCK - Inspire, Innovate, Secure",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ethical HCK - Cybersecurity Community",
    description: "Empowering the next generation of cybersecurity professionals through hands-on learning and community collaboration.",
    images: ["/images/og-image.png"],
    creator: "@ethicalhck",
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
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${nacelle.variable} bg-gray-950 font-inter text-base text-gray-200 antialiased`}
      >
        <AOSInit />
        {/* Skip to main content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-lg focus:bg-indigo-600 focus:px-4 focus:py-2 focus:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Skip to main content
        </a>
        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          <Header />
          <main id="main-content" role="main">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
