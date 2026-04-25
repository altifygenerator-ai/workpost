import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
export const metadata = {
  title: "ShowYourWork | Turn Your Jobs Into Posts That Get You More Calls",
  description:
    "Quickly turn your daily work into Facebook posts, Google updates, and simple ads. Built for contractors and local service businesses that want more calls without overthinking content.",
  keywords: [
    "contractor facebook posts",
    "what to post as a contractor",
    "local business marketing",
    "how to get more jobs",
    "facebook posts for small business",
    "google business post ideas",
    "contractor marketing ideas",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}