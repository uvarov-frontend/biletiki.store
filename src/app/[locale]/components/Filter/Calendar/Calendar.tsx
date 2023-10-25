/* eslint-disable sort-keys */

'use client';

import VanillaCalendar, { Options } from '@uvarov.frontend/vanilla-calendar';
import { useEffect, useRef, useState } from 'react';

import { Locale } from '@/types';

import Input from './Input';
import DOMTemplate from './helpers/DOMTemplate';
import { formatCalendarDate } from './helpers/formatDate';
import handlerClearInput from './helpers/handlerClearInput';
import handlerClickDay from './helpers/handlerClickDay';

import '@uvarov.frontend/vanilla-calendar/build/vanilla-calendar.min.css';
import './Calendar.css';

export default function Calendar({
  locale,
  placeholderStart,
  placeholderEnd,
  titleStart,
  titleEnd,
  titleBtn,
}: {
  locale: Locale;
  placeholderStart: string;
  placeholderEnd: string;
  titleStart: string;
  titleEnd: string;
  titleBtn: string | false;
}) {
  const [visibilityStart, setVisibilityStart] = useState(false);
  const [visibilityEnd, setVisibilityEnd] = useState(false);
  const [calendar, setCalendar] = useState<VanillaCalendar<HTMLElement, Options> | null>(null);
  const [initDateMin, setInitDateMin] = useState<Date | null>(null);
  const calendarEl = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!calendarEl.current || calendar) return;
    const maxDate = new Date();
    maxDate.setFullYear(maxDate.getFullYear() + 1);

    const options: Options = {
      input: true,
      type: 'multiple',
      date: {
        max: formatCalendarDate(maxDate),
      },
      settings: {
        lang: locale,
        range: {
          disablePast: true,
        },
        selection: {
          day: 'multiple-ranged',
          year: false,
          month: 'only-arrows',
        },
        visibility: {
          theme: 'light',
          daysOutside: false,
        },
      },
      DOMTemplates: {
        multiple: DOMTemplate(false, false, titleStart, titleEnd, titleBtn),
      },
      actions: {
        clickDay: (e, dates) => {
          // eslint-disable-next-line @typescript-eslint/no-use-before-define
          handlerClickDay(e, dates, vanillaCalendar, calendarEl, locale, setVisibilityStart, setVisibilityEnd, setInitDateMin, titleStart, titleEnd, titleBtn);
        },
      },
    };

    const vanillaCalendar = new VanillaCalendar(calendarEl.current, options);
    setCalendar(vanillaCalendar);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [calendarEl]);

  useEffect(() => {
    if (!calendar) return;
    calendar.init();
  }, [calendar]);

  useEffect(() => {
    if (!calendar?.HTMLElement) return;
    calendar.HTMLElement?.addEventListener('click', (e: MouseEvent) => {
      if (!e.target || !(e.target as HTMLElement).closest('[data-custom-btn-calendar="close"]')) return;
      (calendar.HTMLElement as HTMLElement).classList.add(`${calendar.CSSClasses.calendarHidden}`);
      handlerClearInput(
        calendar as VanillaCalendar<HTMLElement, Options>,
        calendarEl.current as HTMLDivElement,
        'date-end',
        initDateMin as Date,
        setVisibilityStart,
        setVisibilityEnd,
        titleStart,
        titleEnd,
        titleBtn,
      );
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [calendar?.HTMLElement]);

  return (
    <div ref={calendarEl} className="pointer-events-none relative grid h-full grid-cols-2 gap-[2px]">
      <Input
        name="date-start"
        placeholder={placeholderStart}
        visibility={visibilityStart}
        handlerClear={() =>
          handlerClearInput(
            calendar as VanillaCalendar<HTMLElement, Options>,
            calendarEl.current as HTMLDivElement,
            'date-start',
            initDateMin as Date,
            setVisibilityStart,
            setVisibilityEnd,
            titleStart,
            titleEnd,
            titleBtn,
          )
        }
      />
      <Input
        name="date-end"
        placeholder={placeholderEnd}
        visibility={visibilityEnd}
        handlerClear={() =>
          handlerClearInput(
            calendar as VanillaCalendar<HTMLElement, Options>,
            calendarEl.current as HTMLDivElement,
            'date-end',
            initDateMin as Date,
            setVisibilityStart,
            setVisibilityEnd,
            titleStart,
            titleEnd,
            titleBtn,
          )
        }
      />
    </div>
  );
}
