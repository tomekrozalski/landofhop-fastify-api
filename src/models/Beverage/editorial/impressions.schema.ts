import * as mongoose from 'mongoose';

import { Clarity } from '@/utils/enums/beverage';
import type { EditorialImpressions as EditorialImpressionsTypes } from '@/utils/types/beverage/raw';

const impressionsSchema = new mongoose.Schema<EditorialImpressionsTypes>(
  {
    color: String,
    clarity: {
      type: String,
      enum: Object.values(Clarity),
    },
  },
  { _id: false },
);

export default impressionsSchema;
