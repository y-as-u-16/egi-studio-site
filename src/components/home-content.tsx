import { getTranslations } from "next-intl/server";
import { ButtonLink, ProjectCard, Section } from "@/components/ui";
import type { Locale } from "@/i18n/routing";
import { projects, stacks } from "@/lib/site";

type LocalizedCard = {
  title: string;
  copy: string;
};

export async function HomeContent({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: "Home" });
  const projectT = await getTranslations({ locale, namespace: "Projects" });
  const profileCards = t.raw("profile.cards") as LocalizedCard[];
  const featuredProjects = projects.map((project) => ({
    ...project,
    title: projectT(`${project.key}.title`),
    type: projectT(`${project.key}.type`),
    summary: projectT(`${project.key}.summary`),
    status: projectT(`${project.key}.status`),
  }));

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-zinc-200/80 dark:border-white/10">
        <div className="absolute inset-x-0 top-0 -z-10 h-80 bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.12),transparent_60%)] dark:bg-[radial-gradient(circle_at_50%_0%,rgba(96,165,250,0.16),transparent_62%)]" />
        <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-5 py-14 sm:px-8 sm:py-20 lg:min-h-[calc(100svh-4rem)] lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:py-24">
          <div>
            <p className="eyebrow">{t("hero.eyebrow")}</p>
            <h1 className="mt-5 max-w-4xl text-[2.5rem] font-semibold leading-[1.1] tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-5xl sm:leading-[1.05] lg:text-7xl lg:leading-[1.02]">
              {t("hero.title")}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-400 sm:mt-7 sm:text-lg sm:leading-8">
              {t("hero.description")}
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row">
              <ButtonLink href="/contact">{t("hero.primaryCta")}</ButtonLink>
              <ButtonLink href="/apps" variant="secondary">
                {t("hero.secondaryCta")}
              </ButtonLink>
            </div>
            {/* Mobile: compact tech stack badges (replaces widget on small screens) */}
            <div className="mt-8 flex flex-wrap gap-2 lg:hidden">
              {["Flutter", "React Native", "Next.js", "iOS / Android", "AWS"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-zinc-200 bg-white/80 px-3.5 py-1.5 text-xs font-medium text-zinc-600 dark:border-white/10 dark:bg-white/[0.04] dark:text-zinc-400"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          {/* Desktop: tech stack widget */}
          <div className="relative hidden lg:block">
            <div className="rounded-[2rem] border border-zinc-200 bg-white/80 p-4 shadow-2xl shadow-zinc-950/[0.08] dark:border-white/10 dark:bg-white/[0.04] dark:shadow-black/40">
              <div className="rounded-[1.5rem] border border-zinc-200 bg-zinc-950 p-5 text-white dark:border-white/10">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-zinc-400">{t("hero.buildTarget")}</span>
                  <span className="rounded-full bg-blue-400/15 px-3 py-1 text-xs text-blue-200">
                    {t("hero.stable")}
                  </span>
                </div>
                <div className="mt-10 space-y-4">
                  {["Flutter", "iOS", "Android", "Backend"].map((item, index) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                    >
                      <div className="flex items-center justify-between text-sm">
                        <span>{item}</span>
                        <span className="font-mono text-xs text-zinc-500">0{index + 1}</span>
                      </div>
                      <div className="mt-4 h-1.5 rounded-full bg-white/10">
                        <div
                          className="h-full rounded-full bg-blue-300"
                          style={{ width: `${88 - index * 9}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Profile */}
      <div className="border-b border-zinc-200/80 bg-zinc-50/70 dark:border-white/10 dark:bg-white/[0.02]">
        <Section
          eyebrow={t("profile.eyebrow")}
          title={t("profile.title")}
          description={t("profile.description")}
        >
          <div className="grid gap-4 md:grid-cols-3">
            {profileCards.map((card, i) => (
              <div
                key={card.title}
                className="rounded-3xl border border-zinc-200 bg-white p-6 dark:border-white/10 dark:bg-white/[0.06]"
              >
                <div className="mb-4 inline-flex size-9 items-center justify-center rounded-2xl bg-blue-50 text-sm font-semibold text-blue-600 dark:bg-blue-400/10 dark:text-blue-400">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-semibold text-zinc-950 dark:text-zinc-50">{card.title}</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
                  {card.copy}
                </p>
              </div>
            ))}
          </div>
        </Section>
      </div>

      {/* Featured Projects */}
      <Section
        eyebrow={t("featured.eyebrow")}
        title={t("featured.title")}
        description={t("featured.description")}
        className="pt-0"
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {featuredProjects.slice(0, 3).map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </Section>

      {/* Tech Stack */}
      <div className="border-t border-zinc-200/80 bg-zinc-50/70 dark:border-white/10 dark:bg-white/[0.02]">
        <Section
          eyebrow={t("stack.eyebrow")}
          title={t("stack.title")}
          description={t("stack.description")}
          className="pt-0"
        >
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {stacks.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-zinc-200 bg-white px-4 py-4 text-sm font-medium text-zinc-700 transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-sm dark:border-white/10 dark:bg-white/[0.04] dark:text-zinc-300 dark:hover:border-white/20 dark:hover:bg-white/[0.06]"
              >
                {item}
              </div>
            ))}
          </div>
        </Section>
      </div>
    </>
  );
}
