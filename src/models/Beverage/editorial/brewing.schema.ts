import * as mongoose from 'mongoose';

import langValue from '@/models/common/langValue.schema';
import { AlcoholScope, Category, Fermentation } from '@/utils/enums/beverage';
import type { EditorialBrewing as EditorialBrewingTypes } from '@/utils/types/beverage/raw';
import { agedSchema } from '../common';

const brewingSchema = new mongoose.Schema<EditorialBrewingTypes>(
  {
    beverageType: {
      type: String,
      enum: Object.values(Category),
    },
    fermentation: {
      type: [
        {
          type: String,
          enum: Object.values(Fermentation),
        },
      ],
      default: undefined,
    },
    alcohol: {
      scope: {
        type: String,
        enum: Object.values(AlcoholScope),
      },
    },
    filtration: Boolean,
    pasteurization: Boolean,
    aged: {
      type: [agedSchema],
      default: undefined,
    },
    style: {
      type: [langValue],
      default: undefined,
    },
    isDryHopped: Boolean,
    dryHopped: {
      hops: {
        type: [
          {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Ingredients',
          },
        ],
        default: undefined,
      },
    },
  },
  { _id: false },
);

export default brewingSchema;
