import Joi from "joi"

export const option = {
  abortEarly: false,
  errors: {
    wrap: {
      label: "",
    },
  },
};

const passwordComplexityOptions = {
  min: 4, // Minimum length
  max: 20, // Maximum length
  lowerCase: 1, // Require at least 1 lowercase letter
  upperCase: 1, // Require at least 1 uppercase letter
  numeric: 1, // Require at least 1 digit
  symbol: 1, // Require at least 1 special character
};

const passwordSchema = Joi.string()
  .min(passwordComplexityOptions.min)
  .max(passwordComplexityOptions.max)
  .regex(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};:'",.<>/?]).{8,30}$/
  )
  .message(
    "Password must be between 4 and 20 characters, contain at least one lowercase letter, one uppercase letter, one digit, and one special character."
  )
  .required();

const createUserBody = {
  userName: Joi.string().required(),
  email: Joi.string().email().required().messages({
    "string.empty": "Email is required",
    "string.email": "Invalid email format",
  }),
  password: passwordSchema,
};

const loginUserBody = {
  email: Joi.string().email().required().messages({
    "string.empty": "Email is required",
    "string.email": "Invalid email format",
  }),
  password: passwordSchema,
};

export const createUser = {
    body: Joi.object().keys(createUserBody),
}

export const loginUser = {
    body: Joi.object().keys(loginUserBody)
}