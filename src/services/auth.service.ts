import mongoose from "mongoose";
import { IUserDoc, IUserModel } from "../interfaces/auth.interface";
import User from "../models/auth.model";
import { createUser, loginUser, option } from "../utils/validators/user.validator";
import { generateToken } from "../utils/token";

class authService {
  /**
   * register user
   * @param {NewCreatedUser} userBody
   * @return {Promise<IUserDoc>}
   */
  async registerUser({ ...userBody }): Promise<IUserDoc> {
    if (await User.isEmailTaken(userBody.email)) {
      throw new Error("Email already taken");
    }

    const { error } = createUser.body.validate(userBody, option);
    if (error) {
      throw new Error(error.details[0].message);
    }

    const user = new User(userBody);
    await user.save();

    return user;
  }

  /**
   * login user
   * @param {string} email
   * @param {string} password
   * @return {Promise<IUserDoc>}
   */
  async loginUser(
    email: string,
    password: string
  ): Promise<{user: IUserDoc, token: string}> {
      const {error} = loginUser.body.validate({email, password}, option)
      if (error) {
        throw new Error(error.details[0].message)
    }
    const userAuth = await User.findOne({ email });
     if (!userAuth || !(await userAuth.isPasswordMatch(password))) {
       throw new Error("Incorrect email or password");
     }

   const token = generateToken(userAuth._id.toString());
   return { user: userAuth, token };
  }

  async getUserById(
    userId: mongoose.Types.ObjectId | string
  ): Promise<IUserDoc | null> {
    return User.findOne({ userId });
  }
}

export default new authService();
