import { IVanillaCalendar } from '@uvarov.frontend/vanilla-calendar/src/types';

import { formatCalendarDate } from './formatDate';

const handlerMultipleRanged = (calendar: IVanillaCalendar) => {
	const { HTMLElement, CSSClasses } = calendar;

	const removeHover = () => {
		const daysEl = HTMLElement?.querySelectorAll(`.${CSSClasses.dayBtnHover}`);
		daysEl?.forEach((d) => d.classList.remove(CSSClasses.dayBtnHover));
	};

	const addHover = (day: Date) => {
		const date = formatCalendarDate(day);
		const dayEls = HTMLElement?.querySelectorAll(`[data-calendar-day="${date}"]`);
		dayEls?.forEach((dayEl) => dayEl.classList.add(CSSClasses.dayBtnHover));
	};

	const hoverDaysEvent = (e: MouseEvent) => {
		if (!e.target) return;

		if (!(e.target as HTMLElement).closest(`.${CSSClasses.days}`)) {
			removeHover();
			return;
		}

		const date = (e.target as HTMLElement).dataset.calendarDay;
		if (!date) return;
		removeHover();

		if (!calendar.selectedDates) return;
		let startDate = new Date(`${calendar.selectedDates[0]}T00:00:00.000Z`);
		let endDate = new Date(`${date}T00:00:00.000Z`);

		if (endDate <= startDate) [startDate, endDate] = [endDate, startDate];
		for (let i = startDate; i <= endDate; i.setDate(i.getDate() + 1)) {
			addHover(i);
		}
	};

	const clickDay = () => {
		if (calendar.selectedDates?.[0] && calendar.selectedDates.length <= 1) return;
		(HTMLElement as HTMLElement).removeEventListener('click', clickDay);
		(HTMLElement as HTMLElement).removeEventListener('mousemove', hoverDaysEvent);
	};

	if (!calendar.selectedDates?.[0] || calendar.selectedDates.length > 1) return;
	(HTMLElement as HTMLElement).addEventListener('mousemove', hoverDaysEvent);
	(HTMLElement as HTMLElement).addEventListener('click', clickDay);
};

export default handlerMultipleRanged;
