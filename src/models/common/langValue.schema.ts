import * as mongoose from 'mongoose';

const langValue = new mongoose.Schema(
  {
    language: {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
    },
    value: {
      type: String,
      required: true,
    },
  },
  { _id: false },
);

export default langValue;
