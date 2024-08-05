import mongoose from "mongoose";
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
        type: String,
        required: true
      },
      imageUrl: {
        type: String,
        required: true,
      },
      createdBy: {
        type: String,
        required: true,
        ref: 'User'
      },
    },
    { timestamps: true }
);

const Product = mongoose.model<IProductDoc>("Product", productSchema)

export default Product;