import { getTranslations } from "next-intl/server";
import { ButtonLink, ProjectCard, Section } from "@/components/ui";
import type { Locale } from "@/i18n/routing";
import { projects, stacks } from "@/lib/site";

type LocalizedCard = {
  title: string;
  copy: string;
};

const heroStacks = [
  "Flutter",
  "React Native",
  "Next.js",
  "iOS / Android",
  "AWS",
];
const deliverySteps = ["Discover", "Build", "Ship"];
const stackLevels = [88, 79, 72, 66];

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
      <section className="relative overflow-hidden border-b border-zinc-200/80 bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_56%,#f4f4f5_100%)] dark:border-white/10 dark:bg-[linear-gradient(180deg,#09090b_0%,#0a1628_58%,#09090b_100%)]">
        <div className="absolute left-1/2 top-[-12rem] -z-10 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-blue-500/8 blur-3xl dark:bg-blue-400/10" />
        <div className="absolute right-[-9rem] top-24 -z-10 hidden h-80 w-80 rounded-full bg-cyan-300/15 blur-3xl dark:bg-cyan-400/8 lg:block" />
        <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-4 py-12 sm:px-8 sm:py-16 lg:min-h-[calc(100svh-4rem)] lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:py-20">
          <div className="min-w-0">
            <p className="eyebrow">{t("hero.eyebrow")}</p>
            <h1 className="mt-4 text-[1.75rem] font-bold leading-[1.15] tracking-tight text-zinc-950 dark:text-zinc-50 sm:mt-5 sm:text-[2.75rem] sm:leading-[1.1] lg:text-6xl lg:leading-[1.06]">
              {t("hero.title")}
            </h1>
            <p className="mt-4 text-[0.9rem] leading-7 text-zinc-600 dark:text-zinc-400 sm:mt-6 sm:text-base sm:leading-8 lg:text-lg lg:leading-8">
              {t("hero.description")}
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row">
              <ButtonLink href="/contact">{t("hero.primaryCta")}</ButtonLink>
              <ButtonLink href="/apps" variant="secondary">
                {t("hero.secondaryCta")}
              </ButtonLink>
            </div>
          </div>

          <div className="relative min-w-0">
            <div className="absolute inset-x-8 top-8 -z-10 h-40 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-400/15" />
            <div className="overflow-hidden rounded-2xl border border-zinc-200/80 bg-white/70 p-2.5 shadow-2xl shadow-zinc-950/[0.06] backdrop-blur dark:border-white/10 dark:bg-white/[0.04] dark:shadow-black/40 sm:rounded-[2rem] sm:p-3.5">
              <div className="overflow-hidden rounded-xl border border-zinc-200 bg-zinc-950 text-white dark:border-white/10 sm:rounded-[1.5rem]">
                <div className="relative p-4 sm:p-6">
                  <div className="absolute right-[-2rem] top-[-2rem] h-32 w-32 rounded-full bg-blue-400/15 blur-2xl" />
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-[0.65rem] uppercase tracking-[0.2em] text-zinc-400 sm:text-xs">
                      {t("hero.buildTarget")}
                    </span>
                    <span className="shrink-0 rounded-full bg-emerald-400/15 px-2.5 py-0.5 text-[0.65rem] text-emerald-300 sm:px-3 sm:py-1 sm:text-xs">
                      {t("hero.stable")}
                    </span>
                  </div>

                  <div className="mt-5 grid grid-cols-3 gap-1.5 sm:mt-7 sm:gap-3">
                    {deliverySteps.map((item, index) => (
                      <div
                        key={item}
                        className="rounded-xl border border-white/10 bg-white/[0.05] p-2.5 sm:rounded-2xl sm:p-3"
                      >
                        <span className="font-mono text-[0.6rem] text-blue-300 sm:text-[0.65rem]">
                          0{index + 1}
                        </span>
                        <p className="mt-1.5 text-xs font-medium sm:mt-2 sm:text-sm">{item}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-3 grid gap-2 sm:mt-4 sm:grid-cols-[0.82fr_1fr] sm:gap-3">
                    <div className="hidden rounded-3xl border border-white/10 bg-white/[0.06] p-4 sm:block">
                      <div className="grid aspect-square place-items-center rounded-full border border-blue-300/20 bg-blue-300/10">
                        <div className="grid size-24 place-items-center rounded-full border border-blue-200/40 bg-blue-300/10 sm:size-28">
                          <div className="grid size-14 place-items-center rounded-full bg-gradient-to-br from-blue-400 to-cyan-300 text-lg font-bold text-zinc-950 sm:size-16">
                            E
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-1.5 sm:grid-cols-1 sm:gap-2.5">
                      {["Flutter", "iOS", "Android", "Backend"].map(
                        (item, index) => (
                          <div
                            key={item}
                            className="rounded-xl border border-white/10 bg-white/[0.04] p-2.5 sm:rounded-2xl sm:p-3.5"
                          >
                            <div className="flex items-center justify-between text-xs sm:text-sm">
                              <span>{item}</span>
                              <span className="font-mono text-[0.6rem] text-zinc-500 sm:text-xs">
                                0{index + 1}
                              </span>
                            </div>
                            <div className="mt-2 h-1 rounded-full bg-white/10 sm:mt-3 sm:h-1.5">
                              <div
                                className="h-full rounded-full bg-gradient-to-r from-blue-400 to-cyan-300"
                                style={{ width: `${stackLevels[index]}%` }}
                              />
                            </div>
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex gap-1.5 overflow-x-auto border-t border-white/10 bg-white/[0.03] px-4 py-3 sm:flex-wrap sm:gap-2 sm:overflow-visible sm:px-6 sm:py-4">
                  {heroStacks.map((item) => (
                    <span
                      key={item}
                      className="shrink-0 rounded-full border border-white/10 bg-white/[0.06] px-2.5 py-1 text-[0.65rem] font-medium text-zinc-300 sm:px-3.5 sm:py-1.5 sm:text-xs"
                    >
                      {item}
                    </span>
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
          <div className="grid gap-3 sm:gap-4 md:grid-cols-3">
            {profileCards.map((card, i) => (
              <div
                key={card.title}
                className="group rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm shadow-zinc-950/[0.03] transition hover:-translate-y-1 hover:shadow-xl hover:shadow-zinc-950/[0.06] dark:border-white/10 dark:bg-white/[0.06] dark:hover:shadow-black/20 sm:rounded-3xl sm:p-6"
              >
                <div className="mb-4 flex items-center gap-3 sm:mb-5">
                  <div className="inline-flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 text-xs font-bold text-blue-600 ring-1 ring-blue-100 transition group-hover:scale-105 dark:from-blue-400/10 dark:to-cyan-400/10 dark:text-blue-400 dark:ring-blue-400/15 sm:size-10 sm:rounded-2xl sm:text-sm">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="h-px flex-1 bg-gradient-to-r from-blue-200/80 to-transparent dark:from-blue-400/20" />
                </div>
                <h3 className="text-[0.9rem] font-semibold text-zinc-950 dark:text-zinc-50 sm:text-base">
                  {card.title}
                </h3>
                <p className="mt-2.5 text-sm leading-7 text-zinc-600 dark:text-zinc-400 sm:mt-3">
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
      >
        <div className="grid gap-3 sm:gap-5 lg:grid-cols-3">
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
        >
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3 lg:grid-cols-5">
            {stacks.map((item, index) => (
              <div
                key={item}
                className="group rounded-xl border border-zinc-200 bg-white p-3.5 text-sm font-medium text-zinc-700 shadow-sm shadow-zinc-950/[0.02] transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md dark:border-white/10 dark:bg-white/[0.04] dark:text-zinc-300 dark:hover:border-white/20 dark:hover:bg-white/[0.06] sm:rounded-2xl sm:p-4"
              >
                <span className="mb-2.5 block h-1 w-6 rounded-full bg-gradient-to-r from-blue-500/60 to-cyan-400/60 transition-all group-hover:w-10 dark:from-blue-400/50 dark:to-cyan-400/50 sm:mb-3 sm:w-8" />
                <span className="text-xs sm:text-sm">{item}</span>
                <span className="mt-2.5 block font-mono text-[0.6rem] text-zinc-400 dark:text-zinc-600 sm:mt-3 sm:text-[0.65rem]">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
            ))}
          </div>
        </Section>
      </div>
    </>
  );
}
