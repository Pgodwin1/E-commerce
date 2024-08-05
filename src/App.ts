import express from "express";
import mongoose from "mongoose";
import cors from "cors"

const app = express()
const port = 3400

app.use(cors())
app.use(express.json())

app.listen(port, () => {
    console.log(`Ecommerce server running on port ${port}`)
} )