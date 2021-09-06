import type { LanguageValue } from '@/utils/types/common';
import { Brewing, Impressions, Ingredients, Institution, Place, Price, Tale } from './fragments';

export type ProducerGeneral = {
  series?: LanguageValue[];
  brand?: Institution;
  cooperation?: Institution[];
  contract?: Institution;
  isContract?: boolean;
  place?: Place;
  remark?: LanguageValue[];
  tale?: Tale[];
};

export type Producer = {
  general?: ProducerGeneral;
  brewing?: Brewing;
  ingredients?: Ingredients;
  impressions?: Impressions;
  price?: Price[];
};
