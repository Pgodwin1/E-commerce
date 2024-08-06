import { Document, Model, Types } from "mongoose";

interface IUser {
  userName: string;
  email: string;
  password: string;
}

export interface IUserDoc extends IUser, Document {
  _id: Types.ObjectId;
  isPasswordMatch(password: string): Promise<boolean>;
}
export interface IUserModel extends Model<IUserDoc> {
  isEmailTaken(email: string): Promise<boolean>;
}

