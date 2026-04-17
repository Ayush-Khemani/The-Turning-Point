export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const sanityProjectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "demo-project";

export const sanityDataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export const sanityApiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-02-01";

export const hasSanityConfig =
  Boolean(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) &&
  Boolean(process.env.NEXT_PUBLIC_SANITY_DATASET);
