import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
export const metadata: Metadata = {
  metadataBase: new URL("https://www.showyourwork.site"),

  title: {
    default:
      "ShowYourWork | Contractor Facebook & Google Post Generator",
    template: "%s | ShowYourWork",
  },

  description:
    "Turn job notes into Facebook posts, Google Business updates, before-and-after posts, and simple ads for contractors and local service businesses.",

  keywords: [
    "contractor post generator",
    "contractor facebook post generator",
    "facebook posts for contractors",
    "google business post generator",
    "before and after post generator",
    "job completed post generator",
    "what should contractors post",
    "contractor social media posts",
    "local business post ideas",
    "small business facebook posts",
    "google business profile posts",
    "home service marketing",
    "roofing facebook posts",
    "landscaping facebook posts",
    "concrete contractor posts",
    "remodeling business posts",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "ShowYourWork | Turn Job Notes Into Posts That Get More Calls",
    description:
      "Create Facebook posts, Google Business updates, and before-and-after posts from rough job notes. Built for contractors and local service businesses.",
    url: "https://www.showyourwork.site",
    siteName: "ShowYourWork",
     images: [
    {
      url: "/og.png",
      width: 1200,
      height: 630,
    },
  ],
  type: "website",
},

  twitter: {
    card: "summary_large_image",
    title: "ShowYourWork | Contractor Post Generator",
    description:
      "Turn daily work into Facebook and Google posts without overthinking what to say.",
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