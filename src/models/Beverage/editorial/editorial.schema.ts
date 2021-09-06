import * as mongoose from 'mongoose';

import type { Editorial as EditorialTypes } from '@/utils/types/beverage/raw';
import { priceSchema } from '../common';
import brewingSchema from './brewing.schema';
import generalSchema from './general.schema';
import impressionsSchema from './impressions.schema';
import photosSchema from './photos.schema';

const editorialSchema = new mongoose.Schema<EditorialTypes>(
  {
    general: generalSchema,
    brewing: brewingSchema,
    impressions: impressionsSchema,
    price: {
      type: [priceSchema],
      default: undefined,
    },
    photos: photosSchema,
    notes: String,
  },
  { _id: false },
);

export default editorialSchema;
