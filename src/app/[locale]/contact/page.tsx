import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Section } from "@/components/ui";
import { withCanonical } from "@/lib/metadata";
import { site } from "@/lib/site";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Contact.meta" });

  return withCanonical({
    title: t("title"),
    description: t("description"),
  }, `/${locale}/contact`);
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("Contact");
  const mailSubject = encodeURIComponent(t("mail.subject"));
  const mailBody = encodeURIComponent(t("mail.body"));
  const mailHref = `mailto:${site.email}?subject=${mailSubject}&body=${mailBody}`;

  return (
    <Section
      eyebrow={t("hero.eyebrow")}
      title={t("hero.title")}
      description={t("hero.description")}
    >
      <div className="grid gap-5 sm:gap-8 lg:grid-cols-[1fr_0.8fr]">
        <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/[0.04] sm:rounded-3xl sm:p-8">
          <p className="text-xs font-medium text-blue-600 dark:text-blue-300 sm:text-sm">
            {t("direct.eyebrow")}
          </p>
          <h2 className="mt-3 text-xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 sm:mt-4 sm:text-2xl">
            {t("direct.title")}
          </h2>
          <p className="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-400 sm:mt-4">
            {t("direct.description")}
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:mt-7 sm:flex-row">
            <a
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-zinc-950 px-5 text-sm font-medium text-white shadow-sm transition hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
              href={mailHref}
            >
              {t("direct.emailCta")}
            </a>
            <a
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-zinc-200 bg-white/70 px-5 text-sm font-medium text-zinc-950 transition hover:border-zinc-300 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-zinc-50 dark:hover:border-white/20 dark:hover:bg-white/10"
              href={site.x}
              target="_blank"
              rel="noreferrer"
            >
              {t("direct.xCta")}
            </a>
          </div>
          <p className="mt-4 text-xs leading-6 text-zinc-500 dark:text-zinc-500 sm:mt-5">
            {t("direct.note")}
          </p>
        </div>
        <aside className="space-y-3 sm:space-y-4">
          <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5 dark:border-white/10 dark:bg-white/[0.04] sm:rounded-3xl sm:p-6">
            <h2 className="text-lg font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-xl">
              {t("contactMethods.email")}
            </h2>
            <a className="mt-3 block text-link sm:mt-4" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5 dark:border-white/10 dark:bg-white/[0.04] sm:rounded-3xl sm:p-6">
            <h2 className="text-lg font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-xl">
              {t("contactMethods.x")}
            </h2>
            <div className="mt-3 grid gap-3 text-sm sm:mt-4">
              <a className="text-link" href={site.x} target="_blank" rel="noreferrer">
                @egys_16
              </a>
              <p className="text-sm leading-7 text-zinc-600 dark:text-zinc-400">
                {t("contactMethods.xDescription")}
              </p>
            </div>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5 dark:border-white/10 dark:bg-white/[0.04] sm:rounded-3xl sm:p-6">
            <h2 className="text-lg font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-xl">
              {t("contactMethods.include")}
            </h2>
            <ul className="mt-3 space-y-2.5 text-sm leading-6 text-zinc-600 dark:text-zinc-400 sm:mt-4 sm:space-y-3">
              {(t.raw("contactMethods.items") as string[]).map((item) => (
                <li key={item} className="flex items-center gap-2.5">
                  <span className="size-1.5 shrink-0 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </Section>
  );
}
