/* eslint-disable sort-keys */
import { Options, FormatDateString } from 'vanilla-calendar-pro';

const getOptions = (locale: string, date: FormatDateString, template: string): Options => ({
  input: true,
  type: 'multiple',
  date: {
    max: date,
  },
  settings: {
    lang: locale,
    range: {
      disablePast: true,
    },
    selection: {
      day: 'multiple-ranged',
      year: 'only-arrows',
      month: 'only-arrows',
      cancelableDay: false,
    },
    visibility: {
      theme: 'light',
      daysOutside: false,
    },
  },
  DOMTemplates: {
    multiple: template,
  },
});

export default getOptions;
