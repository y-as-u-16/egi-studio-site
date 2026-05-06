import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { LanguageSwitcher } from "@/components/language-switcher";
import { navigation, site } from "@/lib/site";

export function Header() {
  const t = useTranslations("Navigation");

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-950/5 bg-white/75 backdrop-blur-xl dark:border-white/10 dark:bg-zinc-950/70">
      <nav
        className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8"
        aria-label={t("primaryLabel")}
      >
        <Link href="/" className="flex items-center gap-3 font-semibold tracking-tight">
          <span className="grid size-8 place-items-center rounded-xl border border-zinc-200 bg-zinc-950 text-xs text-white shadow-sm dark:border-white/10 dark:bg-white dark:text-zinc-950">
            E
          </span>
          <span>{site.name}</span>
        </Link>
        <div className="hidden items-center gap-1 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm text-zinc-600 transition hover:bg-zinc-100 hover:text-zinc-950 dark:text-zinc-300 dark:hover:bg-white/10 dark:hover:text-white"
            >
              {t(item.key)}
            </Link>
          ))}
        </div>
        <div className="hidden lg:block">
          <LanguageSwitcher label={t("languageLabel")} />
        </div>
        <Link
          href="/contact"
          className="rounded-full border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-950 transition hover:border-zinc-300 hover:bg-zinc-50 dark:border-white/10 dark:text-zinc-50 dark:hover:border-white/20 dark:hover:bg-white/10"
        >
          {t("inquire")}
        </Link>
      </nav>
      <nav
        className="mx-auto flex w-full max-w-6xl items-center gap-1 overflow-x-auto px-5 pb-3 md:hidden"
        aria-label={t("mobileLabel")}
      >
        {navigation.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="shrink-0 rounded-full px-3 py-1.5 text-xs text-zinc-600 transition hover:bg-zinc-100 hover:text-zinc-950 dark:text-zinc-300 dark:hover:bg-white/10 dark:hover:text-white"
          >
            {t(item.key)}
          </Link>
        ))}
        <div className="ml-auto shrink-0">
          <LanguageSwitcher label={t("languageLabel")} />
        </div>
      </nav>
    </header>
  );
}

export function Footer() {
  const t = useTranslations("Footer");
  const nav = useTranslations("Navigation");

  return (
    <footer className="border-t border-zinc-200/80 bg-zinc-50/70 dark:border-white/10 dark:bg-zinc-950">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-[1.3fr_1fr]">
        <div>
          <Link href="/" className="text-lg font-semibold tracking-tight">
            {site.name}
          </Link>
          <p className="mt-4 max-w-md text-sm leading-7 text-zinc-600 dark:text-zinc-400">
            {t("description")}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 text-sm">
          <div>
            <p className="font-medium text-zinc-950 dark:text-zinc-50">{t("pages")}</p>
            <div className="mt-4 grid gap-3">
              {navigation.map((item) => (
                <Link key={item.href} href={item.href} className="text-muted-link">
                  {nav(item.key)}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="font-medium text-zinc-950 dark:text-zinc-50">Social</p>
            <div className="mt-4 grid gap-3">
              <a className="text-muted-link" href={site.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a className="text-muted-link" href={site.x} target="_blank" rel="noreferrer">
                X
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 border-t border-zinc-200/80 px-5 py-6 text-xs text-zinc-500 dark:border-white/10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>{t("copyright", { year: new Date().getFullYear() })}</p>
        <p>{t("staticBuild")}</p>
      </div>
    </footer>
  );
}
