import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import { IUserDoc, IUserModel } from "../interfaces/auth.interface";

const userSchema = new mongoose.Schema<IUserDoc, IUserModel>({
  userName: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 4,
  },
},
{ timestamps: true }
);

/**
 * check if email already exist
 * @param {String} email
 * @returns {Promise<boolean>}
 */
userSchema.static('isEmailTaken', async function (email: string): Promise<boolean> {
    const user = await this.findOne({ email })
    return !!user
})

/**
 * Hash the user's password before saving
 */
userSchema.methods.isPasswordMatch = async function (
  password: string
): Promise<boolean> {
  const user = this as IUserDoc;
  return bcrypt.compare(password, user.password);
};

userSchema.pre('save', async function (next) {
  const user = this as IUserDoc;

  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 8);
  }

  next();
});

const User = mongoose.model<IUserDoc, IUserModel>('user', userSchema)

export default User;