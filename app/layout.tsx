import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://miventech.dev"),
  title: {
    default: "Miventech — Unity Game Developer & Tools Engineer",
    template: "%s · Miventech",
  },
  description:
    "Unity & VR/XR Developer focused on gameplay systems, native engine tooling and interactive experiences. MIT-licensed open-source maintainer with 25★ on GitHub and 17+ titles shipped on itch.io.",
  keywords: [
    "Unity Developer",
    "Unity Programmer",
    "Gameplay Programmer",
    "C# Developer",
    "Game Developer",
    "Indie Game Developer",
    "Unity Tools Developer",
    "Miventech",
    "Jose Jaspe",
  ],
  authors: [{ name: "José Jaspe", url: "https://miventech.dev" }],
  creator: "José Jaspe",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Miventech",
    title: "Miventech — Unity Game Developer & Tools Engineer",
    description:
      "Unity & VR/XR Developer building games, systems and tools. 25★ on GitHub, 17+ titles on itch.io.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Miventech — Unity Game Developer & Tools Engineer",
    description:
      "Unity & VR/XR Developer building games, systems and tools. 25★ on GitHub, 17+ titles on itch.io.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0f",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
