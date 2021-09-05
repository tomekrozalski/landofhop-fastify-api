import type { LanguageValue } from '@/utils/types/common';
import { Brewing, Container, Impressions, Ingredients, Institution, Place, Price, Tale } from './fragments';

export type LabelGeneral = {
  name: LanguageValue[];
  series?: LanguageValue[];
  brand: Institution;
  cooperation?: Institution[];
  contract?: Institution;
  isContract?: boolean;
  place?: Place;
  remark?: LanguageValue[];
  tale?: Tale[];
  barcode?: string;
};

export type Label = {
  general: LabelGeneral;
  brewing?: Brewing;
  ingredients?: Ingredients;
  impressions?: Impressions;
  container: Container;
  price?: Price[];
};
