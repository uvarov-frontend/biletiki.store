import { getTranslator } from 'next-intl/server';

import { menuFooter } from '@/bd';
import { Locale } from '@/types';

export default async function Footer({ locale }: { locale: Locale }) {
  const t = await getTranslator(locale, 'Footer');
  const github = await getTranslator(locale, 'Github');

  return (
    <footer className="bg-white">
      <nav className="container mx-auto grid grid-cols-5 py-10">
        {menuFooter.locales[locale]?.map((menu) => (
          <div key={menu.id}>
            <b className="mb-2 block text-xs font-semibold uppercase">{menu.title}</b>
            <ul>
              {menu.links.map((link) => (
                <li key={link.id} className="block py-[0.125rem]">
                  <a className="text-[0.8125rem] hover:text-[#ff6f32]" href={link.url}>
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
            {!menu.all || (
              <a className="mt-2 block w-auto max-w-max text-[0.8125rem] font-semibold text-[#0c73fe] hover:text-[#ff6f32]" href={menu.all.url}>
                {menu.all.title} →
              </a>
            )}
          </div>
        ))}
      </nav>
      <div className="w-full bg-[#f6f7f9]">
        <div className="container mx-auto py-4">
          <small className="block text-xs leading-5 text-[#666]">
            {t('copyright')}{' '}
            {t.rich('developer', {
              link: (developer) => (
                <a className="text-[#0c73fe] hover:text-[#ff6f32]" href="https://github.com/uvarov-frontend" rel="noreferrer" target="_blank">
                  {developer}
                </a>
              ),
            })}
            <br />
            {t.rich('source', {
              link: (source) => (
                <a className="text-[#0c73fe] hover:text-[#ff6f32]" href={github('url')} rel="noreferrer" target="_blank">
                  {source}
                </a>
              ),
            })}
          </small>
        </div>
      </div>
    </footer>
  );
}
