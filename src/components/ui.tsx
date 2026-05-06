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
      className={`mx-auto w-full max-w-6xl px-5 py-12 sm:px-8 sm:py-20 ${className}`}
    >
      <div className="grid gap-5 md:grid-cols-[minmax(0,0.92fr)_minmax(12rem,0.32fr)] md:items-end">
        <div className="max-w-3xl">
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h2 className="mt-4 text-[2rem] font-semibold leading-tight tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-5xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400 sm:mt-5 sm:text-lg sm:leading-8">
              {description}
            </p>
          ) : null}
        </div>
        <div className="hidden h-px bg-gradient-to-r from-blue-500/40 via-zinc-200 to-transparent dark:via-white/10 md:block" />
      </div>
      {children ? <div className="mt-8 sm:mt-10">{children}</div> : null}
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
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-zinc-200/80 bg-white/85 shadow-sm shadow-zinc-950/[0.03] transition hover:-translate-y-1 hover:border-zinc-300 hover:shadow-xl hover:shadow-zinc-950/[0.06] dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-white/20 dark:hover:shadow-black/30">
      <div className="h-2 bg-gradient-to-r from-blue-500/70 via-cyan-400/60 to-transparent" />
      <div className="flex items-start justify-between gap-4 p-5 pb-0 sm:p-6 sm:pb-0">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-blue-600 dark:text-blue-300">
            {project.type}
          </p>
          <h3 className="mt-4 text-xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
            {project.title}
          </h3>
        </div>
        <span className="shrink-0 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs text-zinc-500 dark:border-white/10 dark:bg-white/[0.04] dark:text-zinc-400">
          {project.status}
        </span>
      </div>
      <p className="mt-5 flex-1 px-5 text-sm leading-7 text-zinc-600 dark:text-zinc-400 sm:px-6">
        {project.summary}
      </p>
      <div className="mt-6 flex flex-wrap gap-2 px-5 pb-5 sm:px-6 sm:pb-6">
        {project.stack.map((item) => (
          <span
            key={item}
            className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-600 dark:bg-white/10 dark:text-zinc-300"
          >
            {item}
          </span>
        ))}
      </div>
      {project.github || project.appStore ? (
        <div className="mt-2 flex flex-wrap gap-3 px-5 pb-5 sm:px-6 sm:pb-6">
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
