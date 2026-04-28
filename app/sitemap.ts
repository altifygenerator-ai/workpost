import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = "https://www.showyourwork.site";

  const routes = [
    "",
    "/faq",
    "/contractor-facebook-post-generator",
    "/before-after-post-generator",
    "/google-business-post-generator",
    "/job-completed-post-generator",
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}