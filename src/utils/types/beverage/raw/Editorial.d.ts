import type { LanguageValue } from '@/utils/types/common';
import { AlcoholScope, Clarity, Fermentation } from '@/utils/enums/beverage';
import { Aged, Ingredient, Institution, Place, Price } from './fragments';

export type EditorialGeneral = {
  cooperation?: Institution[];
  contract?: Institution;
  isContract?: boolean;
  place?: Place;
  remark?: LanguageValue[];
};

export type EditorialBrewing = {
  beverageType?: Category;
  fermentation?: Fermentation[];
  alcohol?: {
    scope?: AlcoholScope;
  };
  filtration?: boolean;
  pasteurization?: boolean;
  aged?: Aged[];
  style?: LanguageValue[];
  isDryHopped?: boolean;
  dryHopped?: {
    hops: {
      type: Ingredient[];
    };
  };
};

export type EditorialImpressions = {
  color?: string;
  clarity?: Clarity;
};

export type EditorialPhotos = {
  cap?: boolean;
  cover?: {
    height: number;
    width: number;
  };
  gallery?: number;
  outlines?: {
    cover?: string;
    gallery?: string;
  };
};

export type Editorial = {
  general?: EditorialGeneral;
  brewing?: EditorialBrewing;
  impressions?: EditorialImpressions;
  price?: Price[];
  photos?: EditorialPhotos;
  notes?: string;
};
