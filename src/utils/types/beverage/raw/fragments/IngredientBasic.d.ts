import type { LanguageValue } from '@/utils/types/common';
import { IngredientType } from '@/utils/enums/beverage';

export type IngredientBasic = {
  id: string;
  badge: string;
  name: LanguageValue[];
  type: IngredientType;
};
