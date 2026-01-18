import type { Metadata } from "next";
import { Space_Grotesk, Fira_Code } from "next/font/google";
import "./globals.css";

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
  ],
  authors: [{ name: "Stone" }],
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "https://stone.dev",
    siteName: "Stone's Space",
    title: "Stone | AI Explorer & Product Builder",
    description:
      "Personal website of Stone - exploring AI, building products, and sharing insights.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stone | AI Explorer & Product Builder",
    description:
      "Personal website of Stone - exploring AI, building products, and sharing insights.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
