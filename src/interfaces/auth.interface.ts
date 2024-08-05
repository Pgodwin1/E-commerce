import { Model } from "mongoose";

interface IUser {
  userName: string;
  email: string;
  password: string;
}

export interface IUserDoc extends IUser {}

export interface IUserModel extends Model<IUserDoc> {
  isEmailTaken(email: string): Promise<boolean>;
}
