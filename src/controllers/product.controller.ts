// import { Request, Response } from "express";
// import catchAsync from "../utils/catchAsync";
// import productService from "../services/product.service";
// import httpStatus from "http-status";

// export const productController = {
//   createProduct: catchAsync(async (req: Request, res: Response) => {
//     const { body } = req;
//     const userId = req.user.id;

//     const product = productService.createProduct(body, userId);

//     res
//       .status(httpStatus.CREATED)
//       .json({ message: "Product created successfully", product });
//   }),
// };
