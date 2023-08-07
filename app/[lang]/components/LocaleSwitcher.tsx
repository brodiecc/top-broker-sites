"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { i18n } from "@/i18n-config";

export default function LocaleSwitcher() {
  const pathName = usePathname();
  const currentLocale = pathName.split("/")[1]; // Get the current locale from the pathname

  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <div className="border-b-4">
      <select
        defaultValue={currentLocale} // Set the default value to the current locale
        onChange={(e) =>
          (window.location.href = redirectedPathName(e.target.value))
        }
      >
        {i18n.locales.map((locale) => {
          return (
            <option key={locale} value={locale}>
              {locale === "en"
                ? "English"
                : locale === "vi"
                ? "Tiếng Việt"
                : locale}
            </option>
          );
        })}
      </select>
    </div>
  );
}
