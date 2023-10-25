import { ReactNode } from 'react';

import { locales } from './locales';

export type Locale = (typeof locales)[number]['code'];

export interface IParams {
  locale: Locale;
}

export interface IProps {
  children: ReactNode;
  params: IParams;
}

export interface ILevels {
  title: string;
  data: ILevel[];
}
export interface ILevel {
  id: number;
  title: string;
}

export interface IPeoples {
  title: string;
  formats: string[];
  data: IPeople[];
}

export interface IPeople {
  id: number;
  title: string;
  subtitle?: string;
  range: {
    min: number;
    max: number;
  };
}

export interface ILink {
  id: number;
  title: string;
  url: string;
}

export interface IColumnFooter {
  id: number;
  title: string;
  all:
    | {
        title: string;
        url: string;
      }
    | false;
  links: ILink[];
}

export interface IMenuFooter {
  locales: {
    [name in Locale]: IColumnFooter[];
  };
}

export interface IPeopleCounter extends IPeople {
  quantities: number[];
  onQuantityChange: (index: number, newQuantity: number) => void;
}

export interface ICategory {
  id: number;
  slug: string;
  name: string;
  value: string;
  title: string;
  subtitle: string;
  inputs: {
    id: number;
    placeholder: string;
  }[];
  calendar: {
    placeholder: {
      start: string;
      end: string;
    };
    title: {
      start: string;
      end: string;
      btn: string | false;
    };
  };
  dropdown: {
    placeholder: string;
  };
  submit: string;
}

export interface ICategoryFilter {
  [key: string]: ({ activeCategory }: { activeCategory: ICategory; locale: Locale }) => React.JSX.Element;
}

export interface ICategories {
  locales: {
    [name in Locale]: ICategory[];
  };
}
