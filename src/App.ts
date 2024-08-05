import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = 3400;

const startServer = async () => {
  await mongoose
    .connect(process.env.DATABASE_URL as string)
    .then(() => console.log("Database connected sucessfully"))
    .catch((err) => console.log(err));
    
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    
    app.listen(port, () => {
        console.log(`Ecommerce server running on port ${port}`);
    });
};


startServer()