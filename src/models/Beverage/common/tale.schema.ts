import * as mongoose from 'mongoose';

import type { Tale as TaleTypes } from '@/utils/types/beverage/raw/fragments';

const taleSchema = new mongoose.Schema<TaleTypes>(
  {
    language: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Language',
      required: false,
    },
    lead: {
      type: String,
      required: true,
    },
    article: {
      type: String,
      required: false,
    },
  },
  { _id: false },
);

export default taleSchema;
