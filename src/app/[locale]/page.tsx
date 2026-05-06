import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { HomeContent } from "@/components/home-content";
import type { Locale } from "@/i18n/routing";
import { withCanonical } from "@/lib/metadata";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Home.meta" });

  return withCanonical({
    title: t("title"),
    description: t("description"),
  }, `/${locale}`);
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <HomeContent locale={locale as Locale} />;
}
