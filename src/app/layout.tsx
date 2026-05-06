import type { Metadata } from "next";
import { getCanonicalUrl } from "@/lib/metadata";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(getCanonicalUrl("/")),
  title: {
    default: "EGI Studio | Mobile App Development Studio",
    template: "%s | EGI Studio",
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: "EGI Studio" }],
  creator: "EGI Studio",
  publisher: "EGI Studio",
  keywords: [
    "EGI Studio",
    "mobile app development",
    "Flutter developer",
    "iOS developer",
    "Android developer",
    "indie app studio",
    "software engineering",
    "Japan developer",
  ],
  openGraph: {
    type: "website",
    url: getCanonicalUrl("/"),
    siteName: site.name,
    title: "EGI Studio | Yasuyuki Egi",
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "EGI Studio | Yasuyuki Egi",
    description: site.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="h-full scroll-smooth antialiased" suppressHydrationWarning>
      <body className="flex min-h-full flex-col">
        {children}
      </body>
    </html>
  );
}
