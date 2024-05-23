import { Feed } from "feed";
import type { Metadata } from "next";

export function generateFeed(metadata: Metadata) {
  const site_url = "https://me.overreacted.top/";

  const feedOptions = {
    author: {
      name: "Kyle Lou",
      email: "xxx@gmail.com",
      link: site_url,
    },
    description: metadata.description,
    favicon: `${site_url}/icon.png`,
    feedLinks: { atom: `${site_url}atom.xml`, rss: `${site_url}rss.xml` },
    generator: "Feed for Node.js",
    id: site_url,
    // image: "https://github.com/gaearon.png",
    link: site_url,
    title: metadata.title,
  };

  const feed = new Feed(feedOptions as any);

  return feed;
}