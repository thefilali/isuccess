import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "achieve — Teambuilding Intelligence",
  description: "ISuccess by Achieve — Teambuilding intelligence platform for corporate events",
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  themeColor: "#4A1D96",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
