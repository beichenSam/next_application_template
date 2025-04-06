import { defineRouting } from 'next-intl/routing';

export const locales = ['en', 'zh'];

export const localePrefix =
  process.env.NEXT_PUBLIC_LOCALE_PREFIX === "never" ? "never" : "as-needed";

export const routing = defineRouting({
    locales,
    defaultLocale: 'zh',
    localePrefix
})