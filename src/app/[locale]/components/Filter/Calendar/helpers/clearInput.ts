import { Dispatch, SetStateAction } from 'react';
import VanillaCalendar, { FormatDateString } from 'vanilla-calendar-pro';

import { ITitles } from '@/types';

import getTemplate from './getTemplate';

const clearInput = (
		calendar: VanillaCalendar,
		calendarEl: HTMLDivElement,
		typeDate: 'date-start' | 'date-end',
		dateMinStr: FormatDateString,
		setVisibilityStart: Dispatch<SetStateAction<boolean>>,
		setVisibilityEnd: Dispatch<SetStateAction<boolean>>,
		titles: ITitles,
	) => {
	const inputStart: HTMLInputElement | null = calendarEl.querySelector('input[name="date-start"]');
	const inputEnd: HTMLInputElement | null = calendarEl.querySelector('input[name="date-end"]');

	if (!inputStart || !inputEnd) return;

	const handlers = {
    'date-end': () => {
			calendar.DOMTemplates.multiple = getTemplate(true, true, titles);
			// eslint-disable-next-line prefer-destructuring
			calendar.settings.range.min = calendar.selectedDates[0];
			calendar.update({ dates: 'only-first' });
			inputEnd.value = '';
			setVisibilityEnd(false);
		},
    'date-start': () => {
			calendar.DOMTemplates.multiple = getTemplate(false, false, titles);
			calendar.settings.range.min = dateMinStr;
			calendar.update({ dates: 'reset-all' });
			inputStart.value = '';
			inputEnd.value = '';
			setVisibilityStart(false);
			setVisibilityEnd(false);
		},
  };

	handlers[typeDate]();
};

export default clearInput;
