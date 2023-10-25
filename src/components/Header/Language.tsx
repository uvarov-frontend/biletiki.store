'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

import { locales } from '@/locales';
import { Locale } from '@/types';

export default function Language({ locale }: { locale: Locale }) {
  const [visiblePopup, setVisiblePopup] = useState(false);
  const langRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();

  const redirectedPathName = (lang: Locale) => {
    if (!pathname) return '/';
    const segments = pathname.split('/');

    if (locales.map((l) => l.code).includes(segments[1] as Locale)) {
      segments[1] = lang;
    } else {
      segments[0] = lang;
      segments.unshift('');
    }

    return segments.join('/');
  };

  const closePopup = () => setVisiblePopup(false);
  const handleClickBtn = () => setVisiblePopup(!visiblePopup);

  const handlerClickLang = (lang: Locale) => {
    closePopup();
    window.location.replace(redirectedPathName(lang));
  };

  useEffect(() => {
    if (!visiblePopup || !langRef) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as HTMLElement)) {
        setVisiblePopup(false);
        document.removeEventListener('click', handleClickOutside, true);
      }
    };
    document.addEventListener('click', handleClickOutside, true);
  }, [visiblePopup, langRef]);

  return (
    <div ref={langRef} className="relative">
      <button
        className="flex items-center justify-center rounded-[10px] bg-transparent px-[0.4rem] py-[0.35rem] text-white transition-colors duration-300 hover:bg-white/10"
        type="button"
        onClick={handleClickBtn}
      >
        <svg fill="currentColor" height="20" viewBox="0 0 40 40" width="20">
          <path
            d="M39.8 17.3C39.2 13.1 37.1 9.1 34 6 30.9 2.9 26.9.8 22.7.2c-4.6-.7-9.3.4-13.6 3.1C4.7 6.1 1.5 10.7.4 15.9-.7 21.1.2 26.4 3.1
					30.8c3.6 5.5 8.9 8.6 15.8 9.2H21c7-.7 12.3-3.8 15.7-9.2 2.7-4.2 3.8-8.9 3.1-13.5zM13.6 30.6h5.1c.1 0
					.1 0 .1.1v6.6h-.1c-2.1-.8-3.8-3-5.2-6.6l.1-.1c-.1.1-.1 0 0 0zm5.2-21.3c0 .1 0 .1-.1.1h-5.2v-.1c1.1-2.6
					2.6-5.7 5.2-6.5h.1v6.5zm0 18.7c0 .1-.1.2-.2.2h-5.8c-.1 0-.2-.1-.2-.2l-.9-6.7c0-.1.1-.2.2-.2h6.7c.1 0
					.2.1.2.2V28zm0-9.3c0 .1-.1.2-.2.2h-6.7c-.1 0-.2-.1-.2-.2l.9-6.7c0-.1.1-.2.2-.2h5.8c.1 0
					.2.1.2.2v6.7zM14 3.5c-1.3 1.7-2.3 3.7-2.9 5.8 0 .1-.1.2-.2.2L6 9.4h-.1v-.1C8 6.7 11.1 4.4 14 3.5c0-.1 0-.1 0 0 0-.1
					0 0 0 0zM6 30.6h4.8c.1 0 .2.1.2.2.6 2.1 1.6 4.1 3 5.8-3.2-1.1-5.9-3.1-8-6-.1.1-.1 0 0 0-.1 0 0 0 0 0zm3.4-11.8s0 .1
					0 0l-6.8.1h-.1v-.2c.2-2.3.8-4.5 1.8-6.6.1-.2.2-.3.4-.3h5.5v.1l-.8 6.9zm-6.9 2.4h6.8c.1 0 .1 0 .1.1l.8 6.8v.1H4.4s-.1
					0-.1-.1c-1.1-2.1-1.7-4.4-1.9-6.8l.1-.1zm35-2.4h-6.8c-.1 0-.1 0-.1-.1l-.9-6.7v-.1h5.9c1.1 2.1 1.8 4.4 1.9 6.8v.1zm-7
					2.5c0-.1 0-.1.1-.1h6.9v.1c-.2 2.5-.9 4.5-1.9 6.8-.1.1-.1.2-.3.2h-5.6v-.1l.8-6.9zm-9.2 9.3h5.1v.1c-.8 2.9-2.5 5.2-5.1
					6.7-.1 0-.1 0-.1-.1v-6.7h.1zM21.1 12c0-.1.1-.2.2-.2H27c.1 0 .2.1.2.2l.9 6.7c0 .1-.1.2-.2.2h-6.6c-.1 0-.2-.1-.2-.2V12zm7.1 9.4-.9
					6.7c0 .1-.1.1-.2.1h-5.8c-.1 0-.2-.1-.2-.2v-6.7c0-.1.1-.2.2-.2h6.8s.1 0 .1.1v.2zm-1.8-12h-5.2c-.1 0-.1 0-.1-.1V2.7h.1c2.1.8
					3.8 3 5.1 6.5.1.1.1.2.1.2zm7.5 0h-4.8c-.2 0-.2-.1-.3-.2-.6-2-1.5-3.9-2.8-5.5 0-.1 0-.2-.1-.3 0 0 .1 0 .2.1 3.1 1.2 5.7 3.2
					7.8 5.8l.1.1h-.1zm-8 27.2c1.3-1.7 2.3-3.6 2.9-5.7 0-.2.1-.2.3-.2H34l-.1.1c-2 2.6-4.7 4.6-8 5.8z"
          />
        </svg>
      </button>
      <div
        className={`absolute right-0 mt-1 rounded-[5px] bg-white p-2 shadow-[0_6px_9px_rgba(0,0,0,0.08)] transition-opacity
				${!visiblePopup ? 'pointer-events-none opacity-0' : 'opacity-100'}`}
      >
        <ul>
          {locales.map((l) => (
            <li key={l.id} className="block">
              <button
                type="button"
                className={`flex w-full items-center rounded-[5px] px-2 py-[6px] transition
									${locale === l.code ? 'bg-[#eef5ff] text-[#1874fe]' : 'text-[#9ea9b7] hover:bg-[#f8f8f9] hover:text-[#0c131d]'}`}
                onClick={() => handlerClickLang(l.code)}
              >
                <span
                  className={`mr-3 flex h-8 w-8 items-center justify-center rounded-[10px] p-2 text-sm font-semibold leading-3
										${locale === l.code ? 'bg-[#1874fe] text-white' : 'bg-[#eff1f4]'}`}
                >
                  {l.code}
                </span>
                <span className="text-sm font-medium">{l.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
