import * as mongoose from 'mongoose';

import langValue from '@/models/common/langValue.schema';
import type { EditorialGeneral as EditorialGeneralTypes } from '@/utils/types/beverage/raw';

const generalSchema = new mongoose.Schema<EditorialGeneralTypes>(
  {
    cooperation: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Institution',
        },
      ],
      default: undefined,
    },
    contract: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Institution',
    },
    isContract: Boolean,
    place: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Place',
    },
    remark: {
      type: [langValue],
      default: undefined,
    },
  },
  { _id: false },
);

export default generalSchema;
