/* eslint-disable sort-keys */
import { ICategories, IMenuFooter } from './types';

export const FlightPeoples = {
  locales: {
    ru: {
      title: 'Количество пассажиров',
      formats: ['пассажир', 'пассажира', 'пассажиров'],
      data: [
        {
          id: 0,
          title: 'Взрослые',
          subtitle: 'cтарше 12 лет',
          range: {
            min: 1,
            max: 6,
          },
        },
        {
          id: 1,
          title: 'Дети',
          subtitle: 'от 2 до 12 лет',
          range: {
            min: 0,
            max: 3,
          },
        },
        {
          id: 2,
          title: 'Младенцы',
          subtitle: 'до 2 лет, без места',
          range: {
            min: 0,
            max: 3,
          },
        },
      ],
    },
    en: {
      title: 'Number of passengers',
      formats: ['passenger', 'passengers', 'passengers'],
      data: [
        {
          id: 0,
          title: 'Adults',
          subtitle: 'over 12 years old',
          range: {
            min: 1,
            max: 6,
          },
        },
        {
          id: 1,
          title: 'Children',
          subtitle: 'from 2 to 12 years',
          range: {
            min: 0,
            max: 3,
          },
        },
        {
          id: 2,
          title: 'Babies',
          subtitle: 'up to 2 years, no place',
          range: {
            min: 0,
            max: 3,
          },
        },
      ],
    },
  },
};

export const FlightLevels = {
  locales: {
    ru: {
      title: 'Класс обслуживания',
      data: [
        {
          id: 0,
          title: 'Эконом',
        },
        {
          id: 1,
          title: 'Комфорт',
        },
        {
          id: 2,
          title: 'Бизнес',
        },
        {
          id: 3,
          title: 'Первый класс',
        },
      ],
    },
    en: {
      title: 'Service class',
      data: [
        {
          id: 0,
          title: 'Economy',
        },
        {
          id: 1,
          title: 'Comfort',
        },
        {
          id: 2,
          title: 'Business',
        },
        {
          id: 3,
          title: 'First grade',
        },
      ],
    },
  },
};

export const HotelPeoples = {
  locales: {
    ru: {
      title: 'Количество гостей',
      formats: ['гость', 'гостя', 'гостей'],
      data: [
        {
          id: 0,
          title: 'Взрослые',
          subtitle: undefined,
          range: {
            min: 1,
            max: 3,
          },
        },
        {
          id: 1,
          title: 'Дети',
          subtitle: 'Младше 17 лет',
          range: {
            min: 0,
            max: 3,
          },
        },
      ],
    },
    en: {
      title: 'Number of guests',
      formats: ['guest', 'guests', 'guests'],
      data: [
        {
          id: 0,
          title: 'Adults',
          subtitle: undefined,
          range: {
            min: 1,
            max: 3,
          },
        },
        {
          id: 1,
          title: 'Children',
          subtitle: 'Under 17 years old',
          range: {
            min: 0,
            max: 3,
          },
        },
      ],
    },
  },
};

export const categories: ICategories = {
  locales: {
    en: [
      {
        id: 1,
        slug: 'flights',
        name: 'category-of-filter',
        value: 'Airline tickets',
        title: 'Find your perfect flight ticket',
        subtitle: 'Seize the moment to find cheap tickets',
        inputs: [
          {
            id: 0,
            placeholder: 'From',
          },
          {
            id: 1,
            placeholder: 'To',
          },
        ],
        calendar: {
          placeholder: {
            start: 'Depart',
            end: 'Return',
          },
          title: {
            start: 'Select departure date',
            end: 'Select return date',
            btn: 'No return ticket needed',
          },
        },
        dropdown: {
          placeholder: 'Passengers and class',
        },
        submit: 'Find tickets',
      },
      {
        id: 2,
        slug: 'hotels',
        name: 'category-of-filter',
        value: 'Hotels',
        title: 'Thousands of hotels here and now',
        subtitle: 'The best rooms without overpayment',
        inputs: [
          {
            id: 0,
            placeholder: 'Destination',
          },
        ],
        calendar: {
          placeholder: {
            start: 'Check-in',
            end: 'Check-out',
          },
          title: {
            start: 'Select your check-in date',
            end: 'Select your check-out date',
            btn: false,
          },
        },
        dropdown: {
          placeholder: 'Guests',
        },
        submit: 'Find hotels',
      },
    ],
    ru: [
      {
        id: 1,
        slug: 'flights',
        name: 'category-of-filter',
        value: 'Авиабилеты',
        title: 'Найди свой идеальный авиабилет',
        subtitle: 'Лови момент для поиска дешёвых билетиков',
        inputs: [
          {
            id: 0,
            placeholder: 'Откуда',
          },
          {
            id: 1,
            placeholder: 'Куда',
          },
        ],
        calendar: {
          placeholder: {
            start: 'Когда',
            end: 'Обратно',
          },
          title: {
            start: 'Выберите дату отправления',
            end: 'Выберите дату возвращения',
            btn: 'Обратный билет не нужен',
          },
        },
        dropdown: {
          placeholder: 'Пассажиры и класс',
        },
        submit: 'Найти билетики',
      },
      {
        id: 2,
        slug: 'hotels',
        name: 'category-of-filter',
        value: 'Отели',
        title: 'Тыщи отелей тут и сейчас',
        subtitle: 'Лучшие номера без переплаты',
        inputs: [
          {
            id: 0,
            placeholder: 'Город или отель',
          },
        ],
        calendar: {
          placeholder: {
            start: 'Заезд',
            end: 'Выезд',
          },
          title: {
            start: 'Выберите дату заезда',
            end: 'Выберите дату выезда',
            btn: false,
          },
        },
        dropdown: {
          placeholder: 'Гости',
        },
        submit: 'Найти отели',
      },
    ],
  },
};

export const menuFooter: IMenuFooter = {
  locales: {
    en: [
      {
        id: 0,
        title: 'Countries',
        all: {
          title: 'All countries',
          url: '#',
        },
        links: [
          {
            id: 0,
            title: 'Russia',
            url: '#',
          },
          {
            id: 1,
            title: 'Thailand',
            url: '#',
          },
          {
            id: 2,
            title: 'Montenegro',
            url: '#',
          },
          {
            id: 3,
            title: 'Cyprus',
            url: '#',
          },
          {
            id: 4,
            title: 'Bulgaria',
            url: '#',
          },
          {
            id: 5,
            title: 'Georgia',
            url: '#',
          },
        ],
      },
      {
        id: 1,
        title: 'Cities',
        all: {
          title: 'All cities',
          url: '#',
        },
        links: [
          {
            id: 0,
            title: 'Moscow',
            url: '#',
          },
          {
            id: 1,
            title: 'Saint Petersburg',
            url: '#',
          },
          {
            id: 2,
            title: 'Adler',
            url: '#',
          },
          {
            id: 3,
            title: 'Ekaterinburg',
            url: '#',
          },
          {
            id: 4,
            title: 'London',
            url: '#',
          },
        ],
      },
      {
        id: 2,
        title: 'Airlines',
        all: {
          title: 'All airlines',
          url: '#',
        },
        links: [
          {
            id: 0,
            title: 'Aeroflot',
            url: '#',
          },
          {
            id: 1,
            title: 'Air France',
            url: '#',
          },
          {
            id: 2,
            title: 'Alitalia',
            url: '#',
          },
          {
            id: 3,
            title: 'Air Baltic',
            url: '#',
          },
          {
            id: 4,
            title: 'Emirates',
            url: '#',
          },
          {
            id: 5,
            title: 'KLM',
            url: '#',
          },
        ],
      },
      {
        id: 3,
        title: 'Airports',
        all: {
          title: 'All airports',
          url: '#',
        },
        links: [
          {
            id: 0,
            title: 'Sheremetyevo',
            url: '#',
          },
          {
            id: 1,
            title: 'Kurumoch',
            url: '#',
          },
          {
            id: 2,
            title: 'Domodedovo',
            url: '#',
          },
          {
            id: 3,
            title: 'Tolmachevo',
            url: '#',
          },
          {
            id: 4,
            title: 'Vladivostok',
            url: '#',
          },
          {
            id: 5,
            title: 'Hamburg',
            url: '#',
          },
        ],
      },
      {
        id: 4,
        title: 'Directions',
        all: false,
        links: [
          {
            id: 0,
            title: 'Moscow – Sochi',
            url: '#',
          },
          {
            id: 1,
            title: 'Moscow – Tivat',
            url: '#',
          },
          {
            id: 2,
            title: 'Moscow – Mineralnye Vody',
            url: '#',
          },
          {
            id: 3,
            title: 'Saint Petersburg - Moscow',
            url: '#',
          },
          {
            id: 4,
            title: 'Moscow – Bangkok',
            url: '#',
          },
        ],
      },
    ],
    ru: [
      {
        id: 0,
        title: 'Страны',
        all: {
          title: 'Все страны',
          url: '#',
        },
        links: [
          {
            id: 0,
            title: 'Россия',
            url: '#',
          },
          {
            id: 1,
            title: 'Таиланд',
            url: '#',
          },
          {
            id: 2,
            title: 'Черногория',
            url: '#',
          },
          {
            id: 3,
            title: 'Кипр',
            url: '#',
          },
          {
            id: 4,
            title: 'Болгария',
            url: '#',
          },
          {
            id: 5,
            title: 'Грузия',
            url: '#',
          },
        ],
      },
      {
        id: 1,
        title: 'Города',
        all: {
          title: 'Все города',
          url: '#',
        },
        links: [
          {
            id: 0,
            title: 'Москва',
            url: '#',
          },
          {
            id: 1,
            title: 'Санкт-Петербург',
            url: '#',
          },
          {
            id: 2,
            title: 'Адлер',
            url: '#',
          },
          {
            id: 3,
            title: 'Екатеринбург',
            url: '#',
          },
          {
            id: 4,
            title: 'Лондон',
            url: '#',
          },
        ],
      },
      {
        id: 2,
        title: 'Авиакомпании',
        all: {
          title: 'Все авиакомпании',
          url: '#',
        },
        links: [
          {
            id: 0,
            title: 'Аэрофлот',
            url: '#',
          },
          {
            id: 1,
            title: 'Air France',
            url: '#',
          },
          {
            id: 2,
            title: 'Alitalia',
            url: '#',
          },
          {
            id: 3,
            title: 'Air Baltic',
            url: '#',
          },
          {
            id: 4,
            title: 'Emirates',
            url: '#',
          },
          {
            id: 5,
            title: 'KLM',
            url: '#',
          },
        ],
      },
      {
        id: 3,
        title: 'Аэропорты',
        all: {
          title: 'Все аэропорты',
          url: '#',
        },
        links: [
          {
            id: 0,
            title: 'Шереметьево',
            url: '#',
          },
          {
            id: 1,
            title: 'Курумоч',
            url: '#',
          },
          {
            id: 2,
            title: 'Домодедово',
            url: '#',
          },
          {
            id: 3,
            title: 'Толмачево',
            url: '#',
          },
          {
            id: 4,
            title: 'Владивосток',
            url: '#',
          },
          {
            id: 5,
            title: 'Гамбург',
            url: '#',
          },
        ],
      },
      {
        id: 4,
        title: 'Направления',
        all: false,
        links: [
          {
            id: 0,
            title: 'Москва – Сочи',
            url: '#',
          },
          {
            id: 1,
            title: 'Москва – Тиват',
            url: '#',
          },
          {
            id: 2,
            title: 'Москва – Минеральные Воды',
            url: '#',
          },
          {
            id: 3,
            title: 'Санкт-Петербург – Москва',
            url: '#',
          },
          {
            id: 4,
            title: 'Москва – Бангкок',
            url: '#',
          },
        ],
      },
    ],
  },
};
