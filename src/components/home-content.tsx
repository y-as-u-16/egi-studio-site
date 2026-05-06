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
      <section className="relative overflow-hidden border-b border-zinc-200/80 dark:border-white/10">
        <div className="absolute inset-x-0 top-0 -z-10 h-72 bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.12),transparent_55%)] dark:bg-[radial-gradient(circle_at_50%_0%,rgba(96,165,250,0.16),transparent_58%)]" />
        <div className="mx-auto grid min-h-[calc(100svh-4rem)] w-full max-w-6xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="eyebrow">{t("hero.eyebrow")}</p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-7xl">
              {t("hero.title")}
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400 sm:text-xl">
              {t("hero.description")}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact">{t("hero.primaryCta")}</ButtonLink>
              <ButtonLink href="/apps" variant="secondary">
                {t("hero.secondaryCta")}
              </ButtonLink>
            </div>
          </div>
          <div className="relative">
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

      <Section
        eyebrow={t("profile.eyebrow")}
        title={t("profile.title")}
        description={t("profile.description")}
      >
        <div className="grid gap-4 md:grid-cols-3">
          {profileCards.map((card) => (
            <div
              key={card.title}
              className="rounded-3xl border border-zinc-200 bg-white p-6 dark:border-white/10 dark:bg-white/[0.04]"
            >
              <h3 className="font-semibold text-zinc-950 dark:text-zinc-50">{card.title}</h3>
              <p className="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
                {card.copy}
              </p>
            </div>
          ))}
        </div>
      </Section>

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
              className="rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-5 text-sm font-medium text-zinc-800 transition hover:border-zinc-300 hover:bg-white dark:border-white/10 dark:bg-white/[0.04] dark:text-zinc-200 dark:hover:border-white/20"
            >
              {item}
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
