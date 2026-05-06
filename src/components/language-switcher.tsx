"use client";

import { useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export function LanguageSwitcher({ label }: { label: string }) {
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-1" aria-label={label}>
      {routing.locales.map((targetLocale) => (
        <Link
          key={targetLocale}
          href={pathname}
          locale={targetLocale}
          className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${
            locale === targetLocale
              ? "bg-zinc-950 text-white dark:bg-white dark:text-zinc-950"
              : "text-zinc-500 hover:bg-zinc-100 hover:text-zinc-950 dark:text-zinc-400 dark:hover:bg-white/10 dark:hover:text-white"
          }`}
        >
          {targetLocale.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
