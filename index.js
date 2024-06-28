import express from "express";
import mongoose from "mongoose";
import recipeRouter from "./routes/recipe.js";
import { categoryRouter } from "./routes/category .js";
//Connect to database
await mongoose.connect(process.env.MONGO_URL);

//Create Epress App
const app = express();

//Apply Middlewares
app.use(express.json())



//use routes
app.use(recipeRouter);
app.use(categoryRouter);

//Listen for incoming requests
const port = process.env.PORT || 300
app.listen(port, () => {
    console.log('App listening on port 3000');
})