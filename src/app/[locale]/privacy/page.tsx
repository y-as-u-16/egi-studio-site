import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Section } from "@/components/ui";
import { withCanonical } from "@/lib/metadata";

type Props = {
  params: Promise<{ locale: string }>;
};

type PrivacySection = {
  title: string;
  copy: string;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Privacy.meta" });

  return withCanonical({
    title: t("title"),
    description: t("description"),
  }, `/${locale}/privacy`);
}

export default async function PrivacyPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("Privacy");
  const sections = t.raw("sections") as PrivacySection[];

  return (
    <Section
      eyebrow={t("hero.eyebrow")}
      title={t("hero.title")}
      description={t("hero.description")}
    >
      <div className="grid gap-4">
        {sections.map((section) => (
          <article
            key={section.title}
            className="rounded-3xl border border-zinc-200 bg-white p-6 dark:border-white/10 dark:bg-white/[0.04]"
          >
            <h2 className="text-xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
              {section.title}
            </h2>
            <p className="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
              {section.copy}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
