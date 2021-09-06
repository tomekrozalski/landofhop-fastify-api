import * as mongoose from 'mongoose';
const Int32 = require('mongoose-int32').loadType(mongoose);

import type { Container as ContainerTypes } from '@/utils/types/beverage/raw/fragments';
import { ContainerColor, ContainerMaterial, ContainerType, ContainerUnit } from '@/utils/enums/beverage';

const containerSchema = new mongoose.Schema<ContainerTypes>(
  {
    color: {
      type: String,
      enum: Object.values(ContainerColor),
    },
    material: {
      type: String,
      enum: Object.values(ContainerMaterial),
    },
    unit: {
      type: String,
      enum: Object.values(ContainerUnit),
    },
    type: {
      type: String,
      enum: Object.values(ContainerType),
    },
    value: {
      type: Int32,
      min: 0,
      max: 100000,
    },
    hasCork: {
      type: Boolean,
      validate: {
        validator(value: boolean) {
          return value;
        },
        message: (props: any) => `${props.value} need to be true or be undefined`,
      },
    },
    hasCapWireFlip: {
      type: Boolean,
      validate: {
        validator(value: boolean) {
          return value;
        },
        message: (props: any) => `${props.value} need to be true or be undefined`,
      },
    },
  },
  { _id: false },
);

export default containerSchema;
