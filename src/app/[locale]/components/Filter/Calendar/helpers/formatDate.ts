/* eslint-disable sort-keys */
import { FormatDateString } from '@uvarov.frontend/vanilla-calendar/src/types';

export const formatDate = (date: Date, locale: string, options: Intl.DateTimeFormatOptions) => date.toLocaleDateString(locale, options);

export const formatInputDate = (date: string, locale: string) => formatDate(new Date(date), locale, {
	weekday: 'short',
	month: locale === 'ru' ? 'long' : 'short',
	day: 'numeric',
}).split(', ').reverse().join(', ');

export const formatCalendarDate = (date: Date, locale: string = 'en-CA'): FormatDateString => formatDate(date, locale, {
	year: 'numeric',
	month: '2-digit',
	day: '2-digit',
}) as FormatDateString;
