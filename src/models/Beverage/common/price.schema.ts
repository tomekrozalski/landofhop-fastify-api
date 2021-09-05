import * as mongoose from 'mongoose';

import Currency from '@/utils/enums/beverage/Currency.enum';

const priceSchema = new mongoose.Schema(
  {
    date: {
      type: Date,
    },
    value: {
      type: mongoose.Schema.Types.Decimal128,
      min: 0,
      max: 100000,
    },
    currency: {
      type: String,
      enum: Object.values(Currency),
    },
  },
  { _id: false },
);

export default priceSchema;
