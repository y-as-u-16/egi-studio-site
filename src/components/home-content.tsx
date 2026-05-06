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
      <section className="relative overflow-hidden border-b border-zinc-200/80 bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_56%,#f4f4f5_100%)] dark:border-white/10 dark:bg-[linear-gradient(180deg,#09090b_0%,#0f172a_58%,#09090b_100%)]">
        <div className="absolute left-1/2 top-[-12rem] -z-10 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-400/15" />
        <div className="absolute right-[-9rem] top-24 -z-10 hidden h-80 w-80 rounded-full bg-cyan-300/20 blur-3xl dark:bg-cyan-400/10 lg:block" />
        <div className="mx-auto grid w-full max-w-6xl items-center gap-8 px-5 py-10 sm:px-8 sm:py-16 lg:min-h-[calc(100svh-4rem)] lg:grid-cols-[1.02fr_0.98fr] lg:gap-16 lg:py-24">
          <div>
            <p className="eyebrow">{t("hero.eyebrow")}</p>
            <h1 className="mt-4 max-w-4xl text-[2.35rem] font-semibold leading-[1.08] tracking-tight text-zinc-950 dark:text-zinc-50 sm:mt-5 sm:text-5xl sm:leading-[1.05] lg:text-7xl lg:leading-[1.02]">
              {t("hero.title")}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-400 sm:mt-7 sm:text-lg sm:leading-8">
              {t("hero.description")}
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:mt-9 sm:flex-row">
              <ButtonLink href="/contact">{t("hero.primaryCta")}</ButtonLink>
              <ButtonLink href="/apps" variant="secondary">
                {t("hero.secondaryCta")}
              </ButtonLink>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-x-8 top-8 -z-10 h-40 rounded-full bg-blue-500/15 blur-3xl dark:bg-blue-400/20" />
            <div className="rounded-[2rem] border border-zinc-200/80 bg-white/75 p-3 shadow-2xl shadow-zinc-950/[0.08] backdrop-blur dark:border-white/10 dark:bg-white/[0.05] dark:shadow-black/40 sm:p-4">
              <div className="overflow-hidden rounded-[1.5rem] border border-zinc-200 bg-zinc-950 text-white dark:border-white/10">
                <div className="relative p-5 sm:p-6">
                  <div className="absolute right-[-2rem] top-[-2rem] h-32 w-32 rounded-full bg-blue-400/20 blur-2xl" />
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-xs uppercase tracking-[0.2em] text-zinc-400">
                      {t("hero.buildTarget")}
                    </span>
                    <span className="rounded-full bg-blue-400/15 px-3 py-1 text-xs text-blue-200">
                      {t("hero.stable")}
                    </span>
                  </div>

                  <div className="mt-7 grid grid-cols-3 gap-2 sm:gap-3">
                    {deliverySteps.map((item, index) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-white/10 bg-white/[0.05] p-3"
                      >
                        <span className="font-mono text-[0.65rem] text-blue-200">
                          0{index + 1}
                        </span>
                        <p className="mt-2 text-sm font-medium">{item}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 grid gap-3 sm:grid-cols-[0.82fr_1fr]">
                    <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-4">
                      <div className="grid aspect-square place-items-center rounded-full border border-blue-300/20 bg-blue-300/10">
                        <div className="grid size-24 place-items-center rounded-full border border-blue-200/40 bg-blue-300/10 sm:size-28">
                          <div className="grid size-14 place-items-center rounded-full bg-blue-300 text-lg font-semibold text-zinc-950 sm:size-16">
                            E
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      {["Flutter", "iOS", "Android", "Backend"].map(
                        (item, index) => (
                          <div
                            key={item}
                            className="rounded-2xl border border-white/10 bg-white/[0.04] p-3 sm:p-4"
                          >
                            <div className="flex items-center justify-between text-sm">
                              <span>{item}</span>
                              <span className="font-mono text-xs text-zinc-500">
                                0{index + 1}
                              </span>
                            </div>
                            <div className="mt-3 h-1.5 rounded-full bg-white/10">
                              <div
                                className="h-full rounded-full bg-gradient-to-r from-blue-200 to-cyan-200"
                                style={{ width: `${stackLevels[index]}%` }}
                              />
                            </div>
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 overflow-x-auto border-t border-white/10 bg-white/[0.03] px-5 py-4 sm:flex-wrap sm:overflow-visible sm:px-6">
                  {heroStacks.map((item) => (
                    <span
                      key={item}
                      className="shrink-0 rounded-full border border-white/10 bg-white/[0.06] px-3.5 py-1.5 text-xs font-medium text-zinc-200"
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
          <div className="grid gap-4 md:grid-cols-3">
            {profileCards.map((card, i) => (
              <div
                key={card.title}
                className="group rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm shadow-zinc-950/[0.03] transition hover:-translate-y-1 hover:shadow-xl hover:shadow-zinc-950/[0.06] dark:border-white/10 dark:bg-white/[0.06] dark:hover:shadow-black/20 sm:p-6"
              >
                <div className="mb-5 flex items-center gap-3">
                  <div className="inline-flex size-10 items-center justify-center rounded-2xl bg-blue-50 text-sm font-semibold text-blue-600 ring-1 ring-blue-100 transition group-hover:scale-105 dark:bg-blue-400/10 dark:text-blue-400 dark:ring-blue-400/15">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="h-px flex-1 bg-gradient-to-r from-blue-200 to-transparent dark:from-blue-400/30" />
                </div>
                <h3 className="font-semibold text-zinc-950 dark:text-zinc-50">
                  {card.title}
                </h3>
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
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-5">
            {stacks.map((item, index) => (
              <div
                key={item}
                className="group rounded-2xl border border-zinc-200 bg-white p-4 text-sm font-medium text-zinc-700 shadow-sm shadow-zinc-950/[0.02] transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md dark:border-white/10 dark:bg-white/[0.04] dark:text-zinc-300 dark:hover:border-white/20 dark:hover:bg-white/[0.06]"
              >
                <span className="mb-3 block h-1 w-8 rounded-full bg-blue-500/50 transition group-hover:w-12 dark:bg-blue-400/50" />
                <span>{item}</span>
                <span className="mt-3 block font-mono text-[0.65rem] text-zinc-400 dark:text-zinc-600">
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
