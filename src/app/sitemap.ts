import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://bbitadmission.in";
    const pages = [
        { path: "/", priority: 1, changeFreq: "monthly" },
        { path: "/courses", priority: 0.9, changeFreq: "monthly" },
        { path: "/placements", priority: 0.9, changeFreq: "monthly" },
        { path: "/campus-life", priority: 0.8, changeFreq: "monthly" },
        { path: "/scholarships", priority: 0.8, changeFreq: "yearly" },
        { path: "/training", priority: 0.8, changeFreq: "yearly" },
        { path: "/apply", priority: 1, changeFreq: "monthly" },
    ] as const;

    return pages.map((page) => ({
        url: `${baseUrl}${page.path}`,
        lastModified: new Date("2026-03-02"),
        changeFrequency: page.changeFreq,
        priority: page.priority,
    }));
}
