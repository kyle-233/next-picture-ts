import { metadata } from "../layout";
import { generateFeed } from "../../lib/feed";

export async function GET() {
  const feed = generateFeed(metadata);
  return new Response(feed.rss2());
}