import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Footer, Header } from "@/components/layout";
import { HomeContent } from "@/components/home-content";
import { routing } from "@/i18n/routing";
import { withCanonical } from "@/lib/metadata";

export const dynamic = "force-static";

export async function generateMetadata(): Promise<Metadata> {
  setRequestLocale(routing.defaultLocale);

  const t = await getTranslations({
    locale: routing.defaultLocale,
    namespace: "Home.meta",
  });

  return withCanonical({
    title: t("title"),
    description: t("description"),
  }, "/");
}

export default async function Home() {
  setRequestLocale(routing.defaultLocale);

  const messages = (await import(`../../messages/${routing.defaultLocale}.json`)).default;

  return (
    <NextIntlClientProvider locale={routing.defaultLocale} messages={messages}>
      <Header />
      <main className="flex-1">
        <HomeContent locale={routing.defaultLocale} />
      </main>
      <Footer />
    </NextIntlClientProvider>
  );
}
