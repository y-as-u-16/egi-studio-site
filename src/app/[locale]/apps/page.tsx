import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ProjectCard, Section } from "@/components/ui";
import { withCanonical } from "@/lib/metadata";
import { projects } from "@/lib/site";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Apps.meta" });

  return withCanonical({
    title: t("title"),
    description: t("description"),
  }, `/${locale}/apps`);
}

export default async function AppsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("Apps");
  const projectT = await getTranslations("Projects");
  const localizedProjects = projects.map((project) => ({
    ...project,
    title: projectT(`${project.key}.title`),
    type: projectT(`${project.key}.type`),
    summary: projectT(`${project.key}.summary`),
    status: projectT(`${project.key}.status`),
  }));

  return (
    <Section
      eyebrow={t("hero.eyebrow")}
      title={t("hero.title")}
      description={t("hero.description")}
    >
      <div className="grid gap-3 sm:gap-5 lg:grid-cols-3">
        {localizedProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </Section>
  );
}
