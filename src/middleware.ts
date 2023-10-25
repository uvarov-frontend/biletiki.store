import createMiddleware from 'next-intl/middleware';

import { locales } from './locales';

export default createMiddleware({
  defaultLocale: locales[0].code,
  localeDetection: true,
  locales: locales.map((locale) => locale.code),
});

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
