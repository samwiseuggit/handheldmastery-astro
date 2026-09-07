const ASSOCIATE_TAG = "samwiseug-20";

// Keep ASINs only where the site has already verified the exact listing.
const PRODUCT_ASINS: Record<string, string> = {
  "amfilm-onetouch-glass": "B0BFB1P1JM",
  "lexar-play-1tb": "B0DQYCG9D6",
  "sabrent-rocket-2230-1tb": "B0BQG6JCRP",
};

export function amazonProductUrl(slug: string, name: string): string {
  const asin = PRODUCT_ASINS[slug];

  if (asin) {
    return `https://www.amazon.com/dp/${asin}?tag=${ASSOCIATE_TAG}`;
  }

  return `https://www.amazon.com/s?k=${encodeURIComponent(name)}&tag=${ASSOCIATE_TAG}`;
}
