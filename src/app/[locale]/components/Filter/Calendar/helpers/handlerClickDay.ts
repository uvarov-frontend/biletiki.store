import VanillaCalendar, { Options } from '@uvarov.frontend/vanilla-calendar';
import { FormatDateString, IOptions } from '@uvarov.frontend/vanilla-calendar/src/types';
import { Dispatch, MutableRefObject, SetStateAction } from 'react';

import { Locale } from '@/types';

import DOMTemplate from './DOMTemplate';
import { formatInputDate, formatCalendarDate } from './formatDate';

let dateMin: Date | null = null;
let selectedDates: string[] = [];

const updateInputValues = (
		dates: string[],
		locale: Locale,
		calendarEl: HTMLDivElement,
		setVisibilityStart: Dispatch<SetStateAction<boolean>>,
		setVisibilityEnd: Dispatch<SetStateAction<boolean>>,
	) => {
	const inputStart = calendarEl.querySelector('input[name="date-start"]') as HTMLInputElement;
	const inputEnd = calendarEl.querySelector('input[name="date-end"]') as HTMLInputElement;

	inputStart.value = formatInputDate(dates[0], locale);
	inputEnd.value = dates.length > 1 ? formatInputDate(dates[dates.length - 1], locale) : '';
	setVisibilityStart(inputStart.value.length > 0);
	setVisibilityEnd(inputEnd.value.length > 0);
};

const setRangeMin  = (vanillaCalendar: VanillaCalendar<HTMLDivElement, Options>, dates: string[], setInitDateMin: Dispatch<SetStateAction<Date | null>>) => {
	dateMin = dates.length > 1 && dateMin || vanillaCalendar.dateMin;
	setInitDateMin(dateMin);
	(vanillaCalendar as IOptions).settings.range.min = dates.length > 1 && dateMin ? formatCalendarDate(dateMin) : dates[0] as FormatDateString;
};

const handlerClickDay = (
		e: MouseEvent, dates: string[] | undefined,
		vanillaCalendar: VanillaCalendar<HTMLDivElement, Options>,
		calendarEl: MutableRefObject<HTMLDivElement | null>,
		locale: Locale,
		setVisibilityStart: Dispatch<SetStateAction<boolean>>,
		setVisibilityEnd: Dispatch<SetStateAction<boolean>>,
		setInitDateMin: Dispatch<SetStateAction<Date | null>>,
		titleStart: string,
		titleEnd: string,
		titleBtn: string | false,
	) => {

	if (!calendarEl.current || !e.target) return;

	const dayBtn = (e.target as HTMLElement)?.closest('[data-calendar-day]') as HTMLElement | undefined;
	if (dayBtn && selectedDates.includes((dayBtn.dataset.calendarDay) as string) && !dates?.[0] && dateMin) {
		selectedDates.push(selectedDates[0]);
		dates = selectedDates;
		(vanillaCalendar as IOptions).settings.selected.dates = selectedDates;
		(vanillaCalendar as IOptions).settings.range.min = formatCalendarDate(dateMin);
		vanillaCalendar.update();
	}
	if (!dates?.length) return;
	dates.sort((a, b) => +new Date(a) - +new Date(b));
	selectedDates = dates;
	updateInputValues(dates, locale, calendarEl.current, setVisibilityStart, setVisibilityEnd);
	setRangeMin(vanillaCalendar, dates, setInitDateMin);
	(vanillaCalendar as IOptions).DOMTemplates.multiple = DOMTemplate(dates.length === 1, dates.length >= 1, titleStart, titleEnd, titleBtn);
	vanillaCalendar.update();
};

export default handlerClickDay;
