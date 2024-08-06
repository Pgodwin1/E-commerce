import Joi from "joi"
import { NewCreatedproduct } from "../../interfaces/product.interface";

const createProductBody: Record<keyof NewCreatedproduct, any> = {
  name: Joi.string().min(4).max(20).required().messages({
    "any.required": "Art Name is required",
  }),
  description: Joi.string().min(20).max(255).required().messages({
    "string.empty": "Description is required",
    "string.min": "Description should have a minimum length of {#limit}",
    "string.max": "Description should have a maximum length of {#limit}",
  }),
  price: Joi.number().required().messages({
    "any.required": "Price is required",
    "number.base": "Price must be a number",
  }),
  imageUrl: Joi.string().uri().required().messages({
    "any.required": "Image URL is required",
    "string.uri": "Invalid Image URL",
  }),
};

export const createProduct = {
    body: Joi.object().keys(createProductBody)
}