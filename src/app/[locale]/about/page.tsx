import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Section } from "@/components/ui";
import { withCanonical } from "@/lib/metadata";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "About.meta" });

  return withCanonical({
    title: t("title"),
    description: t("description"),
  }, `/${locale}/about`);
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("About");

  return (
    <>
      <Section
        eyebrow={t("hero.eyebrow")}
        title={t("hero.title")}
        description={t("hero.description")}
      />
      <section className="mx-auto grid w-full max-w-6xl gap-5 px-5 pb-20 sm:px-8 md:grid-cols-2">
        <div className="rounded-3xl border border-zinc-200 bg-white p-7 dark:border-white/10 dark:bg-white/[0.04]">
          <div className="mb-5 h-1 w-8 rounded-full bg-blue-500/60 dark:bg-blue-400/60" />
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
            {t("focus.title")}
          </h2>
          <p className="mt-5 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
            {t("focus.copy")}
          </p>
        </div>
        <div className="rounded-3xl border border-zinc-200 bg-white p-7 dark:border-white/10 dark:bg-white/[0.04]">
          <div className="mb-5 h-1 w-8 rounded-full bg-blue-500/60 dark:bg-blue-400/60" />
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
            {t("availability.title")}
          </h2>
          <p className="mt-5 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
            {t("availability.copy")}
          </p>
        </div>
      </section>
    </>
  );
}
