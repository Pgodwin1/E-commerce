import mongoose from "mongoose";

interface IProduct {
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  createdBy: mongoose.Schema.Types.ObjectId;
}

export interface IProductDoc extends IProduct, Document {}

export type NewCreatedproduct = Omit<IProduct, 'createdBy'>