import { model, Schema } from 'mongoose';

export const FoodSchema = new Schema(
  {
    fname: { type: String, required: true },
    price: { type: Number, required: true },
    rating: { type: String},
    imgsource: { type: String, required: true },
    somedata: { type: String },
    description: { type: String, required: true },
  },
  {
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
    timestamps: true,
  }
);

export const FoodModel = model('food', FoodSchema);
