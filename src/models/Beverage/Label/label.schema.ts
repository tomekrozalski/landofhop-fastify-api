import * as mongoose from 'mongoose';

import containerSchema from './container.schema';

const labelSchema = new mongoose.Schema(
  {
    // general: {
    //   type: generalSchema,
    //   required: true,
    // },
    // brewing: brewingSchema,
    // ingredients: ingredientsSchema,
    // impressions: impressionsSchema,
    container: {
      type: containerSchema,
      required: true,
    },
    // price: {
    //   type: [priceSchema],
    //   default: undefined,
    // },
  },
  { _id: false },
);

export default labelSchema;
