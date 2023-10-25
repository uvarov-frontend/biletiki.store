import VanillaCalendar, { Options } from '@uvarov.frontend/vanilla-calendar';
import { FormatDateString, IOptions, IVanillaCalendar } from '@uvarov.frontend/vanilla-calendar/src/types';
import { Dispatch, SetStateAction } from 'react';

import DOMTemplate from './DOMTemplate';
import { formatCalendarDate } from './formatDate';
import handlerMultipleRanged from './handlerMultipleRanged';

const clearInputDateStart = (
	calendar: IVanillaCalendar,
	inputEnd: HTMLInputElement,
	options: IOptions,
	calendarInstance: IVanillaCalendar,
	setVisibilityEnd: Dispatch<SetStateAction<boolean>>,
	titleBtn: string | false,
	titleStart: string,
	titleEnd: string,
	initDateMin: Date,
	inputStart: HTMLInputElement,
	setVisibilityStart: Dispatch<SetStateAction<boolean>>,
) => {
	options.settings.selected.dates = [];
	calendarInstance.selectedDates = [];
	options.settings.range.min = formatCalendarDate(initDateMin);
	options.DOMTemplates.multiple = DOMTemplate(false, false, titleStart, titleEnd, titleBtn);
	inputStart.value = '';
	inputEnd.value = '';
	setVisibilityStart(false);
	setVisibilityEnd(false);
};

const clearInputDateEnd = (
	calendar: IVanillaCalendar,
	inputEnd: HTMLInputElement,
	options: IOptions,
	calendarInstance: IVanillaCalendar,
	setVisibilityEnd: Dispatch<SetStateAction<boolean>>,
	titleBtn: string | false,
	titleStart: string,
	titleEnd: string,
) => {
	const selectedDate = calendarInstance.selectedDates?.[0] as FormatDateString;
	options.settings.selected.dates = [selectedDate] as string[];
	calendarInstance.selectedDates = [selectedDate];
	options.settings.range.min = formatCalendarDate(new Date(`${selectedDate}T00:00:00.000Z`));
	options.DOMTemplates.multiple = DOMTemplate(true, true, titleStart, titleEnd, titleBtn);;
	inputEnd.value = '';
	setVisibilityEnd(false);
	handlerMultipleRanged(calendar);
};

const handlerClearInput = (
		calendar: VanillaCalendar<HTMLElement, Options>,
		calendarEl: HTMLDivElement,
		typeDate: 'date-start' | 'date-end',
		initDateMin: Date,
		setVisibilityStart: Dispatch<SetStateAction<boolean>>,
		setVisibilityEnd: Dispatch<SetStateAction<boolean>>,
		titleStart: string,
		titleEnd: string,
		titleBtn: string | false,
	) => {
	const inputStart = calendarEl.querySelector('input[name="date-start"]') as HTMLInputElement;
	const inputEnd = calendarEl.querySelector('input[name="date-end"]') as HTMLInputElement;
	const options = calendar as IOptions;
  const calendarInstance = calendar as IVanillaCalendar;

	const handlers = {
    'date-end': clearInputDateEnd,
    'date-start': clearInputDateStart,
  };

	handlers[typeDate](calendar as IVanillaCalendar, inputEnd, options, calendarInstance, setVisibilityEnd, titleBtn, titleStart, titleEnd, initDateMin, inputStart, setVisibilityStart);
	calendar.update();
};

export default handlerClearInput;
