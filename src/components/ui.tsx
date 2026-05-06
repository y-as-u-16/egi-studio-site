import type { ReactNode } from "react";
import { Link } from "@/i18n/navigation";

type SectionProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
};

export function Section({
  eyebrow,
  title,
  description,
  children,
  className = "",
}: SectionProps) {
  return (
    <section
      className={`mx-auto w-full max-w-6xl px-4 py-10 sm:px-8 sm:py-20 ${className}`}
    >
      <div className="grid gap-5 md:grid-cols-[minmax(0,0.92fr)_minmax(12rem,0.32fr)] md:items-end">
        <div className="max-w-3xl">
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h2 className="mt-3 text-[1.6rem] font-bold leading-tight tracking-tight text-zinc-950 dark:text-zinc-50 sm:mt-4 sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-3 text-[0.9rem] leading-7 text-zinc-600 dark:text-zinc-400 sm:mt-5 sm:text-base sm:leading-8 lg:text-lg">
              {description}
            </p>
          ) : null}
        </div>
        <div className="hidden h-px bg-gradient-to-r from-blue-500/40 via-zinc-200 to-transparent dark:via-white/10 md:block" />
      </div>
      {children ? <div className="mt-7 sm:mt-10">{children}</div> : null}
    </section>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
}) {
  const className =
    variant === "primary"
      ? "bg-zinc-950 text-white shadow-sm shadow-zinc-950/20 hover:-translate-y-0.5 hover:bg-zinc-800 hover:shadow-lg hover:shadow-zinc-950/15 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
      : "border border-zinc-200 bg-white/70 text-zinc-950 hover:-translate-y-0.5 hover:border-zinc-300 hover:bg-white hover:shadow-lg hover:shadow-zinc-950/[0.06] dark:border-white/10 dark:bg-white/5 dark:text-zinc-50 dark:hover:border-white/20 dark:hover:bg-white/10";

  return (
    <Link
      href={href}
      className={`inline-flex min-h-11 items-center justify-center rounded-full px-5 text-sm font-medium transition sm:px-6 ${className}`}
    >
      {children}
    </Link>
  );
}

export function ProjectCard({
  project,
}: {
  project: {
    title: string;
    type: string;
    summary: string;
    stack: string[];
    status: string;
    github?: string;
    appStore?: string;
  };
  labels?: {
    github: string;
    appStore: string;
  };
}) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200/80 bg-white/85 shadow-sm shadow-zinc-950/[0.03] transition hover:-translate-y-1 hover:border-zinc-300 hover:shadow-xl hover:shadow-zinc-950/[0.06] dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-white/20 dark:hover:shadow-black/30 sm:rounded-3xl">
      <div className="h-1.5 bg-gradient-to-r from-blue-500/70 via-cyan-400/60 to-transparent sm:h-2" />
      <div className="flex items-start justify-between gap-3 p-4 pb-0 sm:gap-4 sm:p-6 sm:pb-0">
        <div className="min-w-0">
          <p className="text-[0.65rem] font-medium uppercase tracking-[0.22em] text-blue-600 dark:text-blue-300 sm:text-xs">
            {project.type}
          </p>
          <h3 className="mt-3 text-lg font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 sm:mt-4 sm:text-xl">
            {project.title}
          </h3>
        </div>
        <span className="shrink-0 rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-0.5 text-[0.65rem] text-zinc-500 dark:border-white/10 dark:bg-white/[0.04] dark:text-zinc-400 sm:px-3 sm:py-1 sm:text-xs">
          {project.status}
        </span>
      </div>
      <p className="mt-4 flex-1 px-4 text-[0.8rem] leading-7 text-zinc-600 dark:text-zinc-400 sm:mt-5 sm:px-6 sm:text-sm">
        {project.summary}
      </p>
      <div className="mt-4 flex flex-wrap gap-1.5 px-4 pb-4 sm:mt-6 sm:gap-2 sm:px-6 sm:pb-6">
        {project.stack.map((item) => (
          <span
            key={item}
            className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-[0.65rem] text-zinc-600 dark:bg-white/10 dark:text-zinc-300 sm:px-3 sm:py-1 sm:text-xs"
          >
            {item}
          </span>
        ))}
      </div>
      {project.github || project.appStore ? (
        <div className="flex flex-wrap gap-3 border-t border-zinc-100 px-4 py-3 dark:border-white/5 sm:px-6 sm:py-4">
          {project.github ? (
            <a
              className="text-link"
              href={project.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          ) : null}
          {project.appStore ? (
            <a
              className="text-link"
              href={project.appStore}
              target="_blank"
              rel="noreferrer"
            >
              App Store
            </a>
          ) : null}
        </div>
      ) : null}
    </article>
  );
}
