import * as mongoose from 'mongoose';
const Int32 = require('mongoose-int32').loadType(mongoose);

import { AgedPreviousContent, AgedTimeUnit, AgedType, AgedWood } from '@/utils/enums/beverage';
import type { Aged as AgedTypes } from '@/utils/types/beverage/raw/fragments';

const agedSchema = new mongoose.Schema<AgedTypes>(
  {
    type: {
      type: String,
      enum: Object.values(AgedType),
    },
    wood: {
      type: String,
      enum: Object.values(AgedWood),
    },
    time: {
      value: {
        type: Int32,
        min: 0,
        max: 10000,
      },
      unit: {
        type: String,
        enum: Object.values(AgedTimeUnit),
      },
    },
    previousContent: {
      type: [
        {
          type: String,
          enum: Object.values(AgedPreviousContent),
        },
      ],
      default: undefined,
    },
  },
  { _id: false },
);

export default agedSchema;
