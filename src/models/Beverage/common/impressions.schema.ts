import * as mongoose from 'mongoose';
const Int32 = require('mongoose-int32').loadType(mongoose);

import { TemperatureUnit } from '@/utils/enums/beverage';
import type { Impressions as ImpressionsTypes } from '@/utils/types/beverage/raw/fragments';

const impressionsSchema = new mongoose.Schema<ImpressionsTypes>(
  {
    bitterness: {
      type: Int32,
      min: 0,
      max: 100,
    },
    sweetness: {
      type: Int32,
      min: 0,
      max: 100,
    },
    fullness: {
      type: Int32,
      min: 0,
      max: 100,
    },
    power: {
      type: Int32,
      min: 0,
      max: 100,
    },
    hoppyness: {
      type: Int32,
      min: 0,
      max: 100,
    },
    temperature: {
      from: {
        type: Int32,
        min: 0,
        max: 100,
      },
      to: {
        type: Int32,
        min: 0,
        max: 100,
      },
      unit: {
        type: String,
        enum: Object.values(TemperatureUnit),
      },
    },
  },
  { _id: false },
);

export default impressionsSchema;
