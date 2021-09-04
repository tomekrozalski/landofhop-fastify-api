import * as mongoose from 'mongoose';

import labelSchema from './Label/label.schema';

const beverageSchema = new mongoose.Schema(
  {
    shortId: {
      type: String,
      required: true,
    },
    badge: {
      type: String,
      required: true,
    },
    label: {
      type: labelSchema,
      required: true,
    },
    // producer: producerSchema,
    // editorial: editorialSchema,
    // added: {
    //   type: Date,
    //   required: true,
    // },
    // updated: Date,
  },
  // { strict: false },
);

// beverageSchema.index({ badge: 1, shortId: 1 }, { unique: true });

export default mongoose.model('Beverage', beverageSchema);
