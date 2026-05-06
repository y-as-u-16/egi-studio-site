import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || undefined;
const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  turbopack: {
    root: process.cwd(),
  },
  images: {
    unoptimized: true,
  },
};

export default withNextIntl(nextConfig);
