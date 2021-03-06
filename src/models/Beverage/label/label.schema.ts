import * as mongoose from 'mongoose';

import { brewingSchema, impressionsSchema, ingredientsSchema, priceSchema } from '@/models/Beverage/common';
import type { Label as LabelTypes } from '@/utils/types/beverage/raw';
import containerSchema from './container.schema';
import generalSchema from './general.schema';

const labelSchema = new mongoose.Schema<LabelTypes>(
  {
    general: {
      type: generalSchema,
      required: true,
    },
    brewing: brewingSchema,
    ingredients: ingredientsSchema,
    impressions: impressionsSchema,
    container: {
      type: containerSchema,
      required: true,
    },
    price: {
      type: [priceSchema],
      default: undefined,
    },
  },
  { _id: false },
);

export default labelSchema;
