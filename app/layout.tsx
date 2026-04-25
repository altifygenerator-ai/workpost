import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WorkPost | Simple Post Builder for Local Businesses",
  description:
    "Turn job notes, service updates, and finished work into ready-to-post content for Facebook, Google, and local marketing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}