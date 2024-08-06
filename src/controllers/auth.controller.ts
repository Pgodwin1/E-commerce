import { Request, Response } from "express";
import catchAsync from "../utils/catchAsync";
import authService from "../services/auth.service";
import httpStatus from "http-status";


export const authController = {
    registerUser: catchAsync(async (req: Request, res: Response) => {
        const { body } = req;

        const user = authService.registerUser(body)

        res.status(httpStatus.CREATED).json({ message: "user created successfully", user })
    }),
    loginUser: catchAsync(async (req: Request, res: Response) => {
        const { email, password } = req.body
        const user = authService.loginUser(email, password)

        res.status(httpStatus.OK).json({ message: "logged In successfully", user})
    })
}