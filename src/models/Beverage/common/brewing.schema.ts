import * as mongoose from 'mongoose';
const Int32 = require('mongoose-int32').loadType(mongoose);

import langValue from '@/models/common/langValue.schema';
import {
  AlcoholRelate,
  AlcoholScope,
  AlcoholUnit,
  Category,
  ExpirationDateUnit,
  ExtractRelate,
  ExtractUnit,
  Fermentation,
  HopRateUnit,
} from '@/utils/enums/beverage';
import type { Brewing as BrewingTypes } from '@/utils/types/beverage/raw/fragments';
import agedSchema from './aged.schema';

const brewingSchema = new mongoose.Schema<BrewingTypes>(
  {
    beverageType: {
      type: String,
      enum: Object.values(Category),
    },
    fermentation: {
      type: [
        {
          type: String,
          enum: Object.values(Fermentation),
        },
      ],
      default: undefined,
    },
    extract: {
      relate: {
        type: String,
        enum: Object.values(ExtractRelate),
        required: function (this: BrewingTypes) {
          return this.extract?.unit || this.extract?.value;
        },
      },
      unit: {
        type: String,
        enum: Object.values(ExtractUnit),
        required: function (this: BrewingTypes) {
          return this.extract?.relate || this.extract?.value;
        },
      },
      value: {
        type: mongoose.Schema.Types.Decimal128,
        min: 0,
        max: 100,
        required: function (this: BrewingTypes) {
          return this.extract?.relate || this.extract?.unit;
        },
      },
    },
    alcohol: {
      relate: {
        type: String,
        enum: Object.values(AlcoholRelate),
        required: function (this: BrewingTypes) {
          return this.alcohol?.unit || this.alcohol?.value;
        },
      },
      unit: {
        type: String,
        enum: Object.values(AlcoholUnit),
        required: function (this: BrewingTypes) {
          return this.alcohol?.relate || this.alcohol?.value;
        },
      },
      value: {
        type: mongoose.Schema.Types.Decimal128,
        min: 0,
        max: 100,
        required: function (this: BrewingTypes) {
          return this.alcohol?.relate || this.alcohol?.unit;
        },
      },
      scope: {
        type: String,
        enum: Object.values(AlcoholScope),
      },
    },
    filtration: Boolean,
    pasteurization: Boolean,
    aged: {
      type: [agedSchema],
      default: undefined,
    },
    style: {
      type: [langValue],
      default: undefined,
    },
    isDryHopped: Boolean,
    dryHopped: {
      hops: {
        type: [
          {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Ingredients',
          },
        ],
        default: undefined,
      },
    },
    hopRate: {
      value: {
        type: mongoose.Schema.Types.Decimal128,
        min: 0,
        max: 10000,
        required: function (this: BrewingTypes) {
          return this.hopRate?.unit;
        },
      },
      unit: {
        type: String,
        enum: Object.values(HopRateUnit),
        required: function (this: BrewingTypes) {
          return this.hopRate?.value;
        },
      },
    },
    expirationDate: {
      value: {
        type: Int32,
        min: 0,
        max: 10000,
        required: function (this: BrewingTypes) {
          return this.expirationDate?.unit;
        },
      },
      unit: {
        type: String,
        enum: Object.values(ExpirationDateUnit),
        required: function (this: BrewingTypes) {
          return this.expirationDate?.value;
        },
      },
    },
  },
  { _id: false },
);

export default brewingSchema;
