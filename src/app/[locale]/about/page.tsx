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
      <section className="mx-auto grid w-full max-w-6xl gap-3 px-4 pb-16 sm:gap-5 sm:px-8 sm:pb-20 md:grid-cols-2">
        <div className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-white/10 dark:bg-white/[0.04] sm:rounded-3xl sm:p-7">
          <div className="mb-4 h-1 w-6 rounded-full bg-gradient-to-r from-blue-500/60 to-cyan-400/60 dark:from-blue-400/60 dark:to-cyan-400/60 sm:mb-5 sm:w-8" />
          <h2 className="text-xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-2xl">
            {t("focus.title")}
          </h2>
          <p className="mt-4 text-sm leading-7 text-zinc-600 dark:text-zinc-400 sm:mt-5">
            {t("focus.copy")}
          </p>
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-white/10 dark:bg-white/[0.04] sm:rounded-3xl sm:p-7">
          <div className="mb-4 h-1 w-6 rounded-full bg-gradient-to-r from-blue-500/60 to-cyan-400/60 dark:from-blue-400/60 dark:to-cyan-400/60 sm:mb-5 sm:w-8" />
          <h2 className="text-xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-2xl">
            {t("availability.title")}
          </h2>
          <p className="mt-4 text-sm leading-7 text-zinc-600 dark:text-zinc-400 sm:mt-5">
            {t("availability.copy")}
          </p>
        </div>
      </section>
    </>
  );
}
