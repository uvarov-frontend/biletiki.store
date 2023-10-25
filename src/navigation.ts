import { notFound } from 'next/navigation';

import { Locale } from './types';

export async function getMessages(locale: Locale) {
  try {
    return (await import(`./messages/${locale}.json`)).default;
  } catch (error) {
    return notFound();
  }
}
