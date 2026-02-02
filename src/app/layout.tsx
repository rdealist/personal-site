import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Fira_Code } from "next/font/google";
import "./globals.css";

// JSON-LD for structured data (SEO)
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Stone",
  "jobTitle": "AI Explorer & Product Builder",
  "url": "https://stone.dev",
  "sameAs": [
    "https://github.com/stone",
    "https://twitter.com/stone",
    "https://linkedin.com/in/stone",
  ],
  "knowsAbout": [
    "Artificial Intelligence",
    "Machine Learning",
    "Large Language Models",
    "Product Development",
    "Web Development",
  ],
  "description": "Personal website of Stone - exploring AI, building products, and sharing insights on technology and innovation.",
};

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Stone | AI Explorer & Product Builder",
    template: "%s | Stone",
  },
  description:
    "Personal website of Stone - exploring AI, building products, and sharing insights on technology and innovation.",
  keywords: [
    "AI",
    "Machine Learning",
    "Product",
    "Developer",
    "LLM",
    "Technology",
    "Artificial Intelligence",
    "AI Applications",
    "Tech Blog",
  ],
  authors: [{ name: "Stone", url: "https://stone.dev" }],
  creator: "Stone",
  publisher: "Stone",
  icons: {
    icon: [
      { url: "/icons/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/icons/apple-touch-icon.svg", type: "image/svg+xml", sizes: "180x180" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "https://stone.dev",
    siteName: "Stone's Space",
    title: "Stone | AI Explorer & Product Builder",
    description:
      "Personal website of Stone - exploring AI, building products, and sharing insights.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Stone's Personal Website - AI Explorer & Product Builder",
      },
    ],
    siteName: "Stone's Space",
  },
  twitter: {
    card: "summary_large_image",
    site: "@stone",
    creator: "@stone",
    title: "Stone | AI Explorer & Product Builder",
    description:
      "Personal website of Stone - exploring AI, building products, and sharing insights.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Stone's Personal Website",
      },
    ],
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
  manifest: "/manifest.json",
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FF4D94" },
    { media: "(prefers-color-scheme: dark)", color: "#2567F2" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${spaceGrotesk.variable} ${firaCode.variable}`}>
        {children}
      </body>
    </html>
  );
}
