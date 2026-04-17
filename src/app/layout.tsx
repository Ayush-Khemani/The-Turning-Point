import type { Metadata } from "next";

import "@/app/globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://theturningpoint.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "The Turning Point",
    template: "%s | The Turning Point",
  },
  description:
    "A reflective publication of essays on psychology, relationships, growth, meaning, and the inner life. Thoughtful writing about identity, personal development, and becoming.",
  keywords: [
    "essays",
    "psychology",
    "relationships",
    "personal growth",
    "self-knowledge",
    "meaning",
    "philosophy",
    "identity",
  ],
  authors: [{ name: "The Turning Point" }],
  creator: "The Turning Point",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "The Turning Point",
    title: "The Turning Point - Essays on Psychology, Growth, and Meaning",
    description:
      "A thoughtful publication exploring identity, relationships, psychology, and the difficult art of becoming.",
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "The Turning Point",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Turning Point",
    description:
      "Thoughtful essays on psychology, relationships, growth, meaning, and the inner life.",
    creator: "@theturningpoint",
    images: [`${siteUrl}/og-image.jpg`],
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
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "NewsMediaOrganization",
    name: "The Turning Point",
    description:
      "A reflective publication of essays on psychology, relationships, growth, meaning, and the inner life.",
    url: siteUrl,
    sameAs: [
      "https://twitter.com/theturningpoint",
      "https://substack.com/theturningpoint",
    ],
    logo: {
      "@type": "ImageObject",
      url: `${siteUrl}/logo.png`,
    },
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#f7f3ed" />
      </head>
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
