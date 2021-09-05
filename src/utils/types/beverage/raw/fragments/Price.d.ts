import { Currency } from '@/utils/enums/beverage';

export type Price = {
  date: Date;
  value: any; // @ToDo: number
  currency?: Currency;
};
