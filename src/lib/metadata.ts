import type { Metadata } from "next";
import { site } from "@/lib/site";

const stripTrailingSlash = (value: string) => value.replace(/\/+$/, "");
const ensureLeadingSlash = (value: string) =>
  value.startsWith("/") ? value : `/${value}`;

export function getSiteOrigin() {
  return stripTrailingSlash(process.env.NEXT_PUBLIC_SITE_URL || site.url);
}

export function getBasePath() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  if (!basePath) {
    return "";
  }

  return stripTrailingSlash(ensureLeadingSlash(basePath));
}

export function getCanonicalUrl(path = "/") {
  const normalizedPath = ensureLeadingSlash(path);

  if (normalizedPath === "/") {
    return `${getSiteOrigin()}${getBasePath()}/`;
  }

  const cleanPath = stripTrailingSlash(normalizedPath);
  const hasFileExtension = /\/[^/]+\.[^/]+$/.test(cleanPath);

  return `${getSiteOrigin()}${getBasePath()}${cleanPath}${hasFileExtension ? "" : "/"}`;
}

export function withCanonical(metadata: Metadata, path: string): Metadata {
  return {
    ...metadata,
    alternates: {
      ...metadata.alternates,
      canonical: getCanonicalUrl(path),
    },
  };
}
