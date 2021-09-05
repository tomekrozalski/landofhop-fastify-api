import * as mongoose from 'mongoose';

import langValue from '@/models/common/langValue.schema';
import type { LanguageValue } from '@/utils/types/common';
import type { LabelGeneral as LabelGeneralTypes } from '@/utils/types/beverage/raw';
import type { Tale as TaleTypes } from '@/utils/types/beverage/raw/fragments';
import taleSchema from '../common/tale.schema';

const generalSchema = new mongoose.Schema<LabelGeneralTypes>(
  {
    name: {
      type: [langValue],
      validate: {
        validator(value: LanguageValue[]) {
          return value.length;
        },
        message: (props: any) => `${props.value} is empty`,
      },
      required: true,
    },
    series: {
      type: [langValue],
      default: undefined,
    },
    brand: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Institution',
      required: true,
    },
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
    tale: {
      type: [taleSchema],
      validate: {
        validator(value: TaleTypes[]) {
          return !value.find(({ lead }) => lead.length < 5);
        },
        message: (props: any) => `${props.lead} has less then 4 signs`,
      },
      default: undefined,
    },
    barcode: String,
  },
  { _id: false },
);

export default generalSchema;
