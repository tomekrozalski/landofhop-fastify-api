import * as mongoose from 'mongoose';

import { Currency } from '@/utils/enums/beverage';
import type { Price as PriceTypes } from '@/utils/types/beverage/raw/fragments';

const priceSchema = new mongoose.Schema<PriceTypes>(
  {
    date: {
      type: Date,
      required: true,
    },
    value: {
      type: mongoose.Schema.Types.Decimal128,
      min: 0,
      max: 100000,
      required: true,
    },
    currency: {
      type: String,
      enum: Object.values(Currency),
      required: true,
    },
  },
  { _id: false },
);

export default priceSchema;
