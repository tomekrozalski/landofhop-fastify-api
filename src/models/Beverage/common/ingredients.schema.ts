import * as mongoose from 'mongoose';

import type {
  IngredientsInfo as IngredientsInfoTypes,
  IngredientDescription as IngredientDescriptionTypes,
} from '@/utils/types/beverage/raw/fragments';

const langValueCompleteSchema = new mongoose.Schema<IngredientDescriptionTypes>(
  {
    complete: Boolean,
    language: String,
    value: String,
  },
  { _id: false },
);

const ingredientsSchema = new mongoose.Schema<IngredientsInfoTypes>(
  {
    description: {
      type: [langValueCompleteSchema],
      default: undefined,
    },
    list: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Ingredient',
        },
      ],
      default: undefined,
    },
    smokedMalt: {
      type: Boolean,
      validate: {
        validator(value: boolean) {
          return value;
        },
        message: (props) => `${props.value} need to be true or be undefined`,
      },
    },
  },
  { _id: false },
);

export default ingredientsSchema;
