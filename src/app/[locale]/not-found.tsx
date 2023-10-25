'use client';

import { useTranslations } from 'next-intl';

export default function NotFoundPage() {
  const t = useTranslations('NotFoundPage');

  return (
    <main className="container mx-auto min-h-[500px] grow py-16">
      <h1 className="mb-2 text-center text-[2.55rem] font-extrabold leading-[3.56rem] text-white">{t('title')}</h1>
      <b className="block text-center text-[1.06rem] font-semibold text-white">{t('description')}</b>
    </main>
  );
}
