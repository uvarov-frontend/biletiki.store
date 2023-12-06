/* eslint-disable sort-keys */

'use client';

import { useEffect, useRef, useState } from 'react';
import VanillaCalendar from 'vanilla-calendar-pro';
import { getDateString } from 'vanilla-calendar-pro/utilities';
import 'vanilla-calendar-pro/build/vanilla-calendar.layout.min.css';
import './Calendar.css';

import { ITitles, Locale } from '@/types';

import Input from './Input';
import clearInput from './helpers/clearInput';
import formatInputDate from './helpers/formatInputDate';
import getOptions from './helpers/getOptions';
import getTemplate from './helpers/getTemplate';

export default function Calendar({
  locale,
  placeholderStart,
  placeholderEnd,
  titles,
}: {
  locale: Locale;
  placeholderStart: string;
  placeholderEnd: string;
  titles: ITitles;
}) {
  const [visibilityStart, setVisibilityStart] = useState(false);
  const [visibilityEnd, setVisibilityEnd] = useState(false);
  const [calendar, setCalendar] = useState<VanillaCalendar | null>(null);
  const [inputStartEl, setInputStartEl] = useState<HTMLInputElement | null>(null);
  const [inputEndEl, setInputEndEl] = useState<HTMLInputElement | null>(null);
  const calendarEl = useRef<HTMLDivElement | null>(null);
  const dateMinStr = getDateString(new Date());

  useEffect(() => {
    if (!calendarEl.current) return;
    setInputStartEl(calendarEl.current.querySelector('input[name="date-start"]') as HTMLInputElement | null);
    setInputEndEl(calendarEl.current.querySelector('input[name="date-end"]') as HTMLInputElement | null);
  }, [calendarEl]);

  useEffect(() => {
    if (!calendarEl.current || !inputStartEl || !inputEndEl || calendar) return;
    const dateMax = new Date();
    dateMax.setFullYear(dateMax.getFullYear() + 1);

    setCalendar(new VanillaCalendar(calendarEl.current, {
      actions: {
        clickDay: (_, self) => {
          inputStartEl.value = formatInputDate(self.selectedDates[0], locale);
          inputEndEl.value = self.selectedDates.length > 1 ? formatInputDate(self.selectedDates[self.selectedDates.length - 1], locale) : '';
          setVisibilityStart(inputStartEl.value.length > 0);
          setVisibilityEnd(inputEndEl.value.length > 0);
          self.DOMTemplates.multiple = getTemplate(self.selectedDates.length === 1, self.selectedDates.length >= 1, titles);

          if(self.selectedDates.length === 1) {
            // eslint-disable-next-line prefer-destructuring
            self.settings.range.min = self.selectedDates[0];
          } else {
            self.settings.range.min = dateMinStr;
          }
          self.update();
        },
      },
      ...getOptions(locale, getDateString(dateMax), getTemplate(false, false, titles)),
    }));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [calendarEl, inputStartEl, inputEndEl]);

  useEffect(() => {
    if (!calendar || calendar.isInit) return;
    calendar.init();
  }, [calendar]);

  useEffect(() => {
    if (!calendarEl.current || !calendar?.HTMLElement) return;
    calendar.HTMLElement?.addEventListener('click', (e: MouseEvent) => {
      if (!e.target || !(e.target as HTMLElement).closest('[data-custom-btn-calendar="close"]')) return;
      calendar.HTMLElement.classList.add(calendar.CSSClasses.calendarHidden);
      clearInput(
        calendar as VanillaCalendar,
        calendarEl.current as HTMLDivElement,
        'date-end',
        dateMinStr,
        setVisibilityStart,
        setVisibilityEnd,
        titles,
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
        handleClear={() => clearInput(
          calendar as VanillaCalendar,
          calendarEl.current as HTMLDivElement,
          'date-start',
          dateMinStr,
          setVisibilityStart,
          setVisibilityEnd,
          titles,
        )}
      />
      <Input
        name="date-end"
        placeholder={placeholderEnd}
        visibility={visibilityEnd}
        handleClear={() => clearInput(
          calendar as VanillaCalendar,
          calendarEl.current as HTMLDivElement,
          'date-end',
          dateMinStr,
          setVisibilityStart,
          setVisibilityEnd,
          titles,
        )}
      />
    </div>
  );
}
