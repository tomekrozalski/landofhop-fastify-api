import { IngredientBasic, IngredientDescription } from '.';

export type IngredientsInfo = {
  description?: IngredientDescription[];
  list?: IngredientBasic[];
  smokedMalt?: boolean;
};
