import * as mongoose from 'mongoose';
const Int32 = require('mongoose-int32').loadType(mongoose);

import type { EditorialPhotos as EditorialPhotosTypes } from '@/utils/types/beverage/raw';

const coverImageSchema = new mongoose.Schema(
  {
    height: Int32,
    width: Int32,
  },
  { _id: false },
);

const outlinesSchema = new mongoose.Schema(
  {
    cover: String,
    gallery: String,
  },
  { _id: false },
);

const photosSchema = new mongoose.Schema<EditorialPhotosTypes>(
  {
    cap: {
      type: Boolean,
      validate: {
        validator(value: boolean) {
          return value;
        },
        message: (props: any) => `${props.value} need to be true or be undefined`,
      },
    },
    cover: coverImageSchema,
    gallery: Int32,
    outlines: outlinesSchema,
  },
  { _id: false },
);

export default photosSchema;
