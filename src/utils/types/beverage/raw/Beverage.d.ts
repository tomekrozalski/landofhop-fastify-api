import type { LanguageValue } from '@/utils/types/common';
import { AlcoholScope, Clarity, Fermentation } from '@/utils/enums/beverage';
import { Aged, Brewing, Impressions, Ingredient, Ingredients, Institution, Place, Price, Tale } from './fragments';
import { Label } from '.';

export type Beverage = {
  id: string;
  shortId: string;
  badge: string;
  label: Label;
  producer?: {
    general?: {
      series?: LanguageValue[];
      brand?: Institution;
      cooperation?: Institution[];
      contract?: Institution;
      isContract?: boolean;
      place?: Place;
      remark?: LanguageValue[];
      tale?: Tale[];
    };
    brewing?: Brewing;
    ingredients?: Ingredients;
    impressions?: Impressions;
    price?: Price[];
  };
  editorial?: {
    general?: {
      cooperation?: Institution[];
      contract?: Institution;
      isContract?: boolean;
      place?: Place;
    };
    brewing?: {
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
    impressions?: {
      color?: string;
      clarity?: Clarity;
    };
    price?: Price[];
    photos?: {
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
    notes?: string;
  };
  added: Date;
  updated?: Date;
};
