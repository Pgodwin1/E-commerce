import express, { Router } from "express";
import { authController } from "../controllers/auth.controller";


const router: Router = express.Router()

router.post('/register', authController.registerUser)
router.post('/login', authController.loginUser)