import { IProductDoc, NewCreatedproduct } from "../interfaces/product.interface";
import Product from "../models/product.model";
import { createProduct } from "../utils/validators/product.validator";
import { option } from "../utils/validators/user.validator";


class productService {
  /**
   * create a product
   * @param {NewCreatedproduct} productBody
   * @param {string} userId
   * @return {Promise<IProductDoc>}
   */
  async createProduct(
    productBody: NewCreatedproduct,
    userId: string
  ): Promise<IProductDoc> {
    const { error } = createProduct.body.validate(productBody, option);
    if (error) {
      throw new Error(error.details[0].message);
    }

    const product = Product.create({
        ...productBody,
        createdBy: userId
    })

    return product;
  }
}

export default new productService()