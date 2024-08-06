import mongoose, { Schema } from "mongoose";
import { IProductDoc } from "../interfaces/product.interface";

const productSchema = new mongoose.Schema<IProductDoc>(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Product = mongoose.model<IProductDoc>("Product", productSchema)

export default Product;