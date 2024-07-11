import express from "express";
import mongoose from "mongoose";
import expressOasGenerator from "express-oas-generator";
import recipeRouter from "./routes/recipe.js";
import session from "express-session";
import MongoStore from "connect-mongo";
import { categoryRouter } from "./routes/category .js";
import userRouter from "./routes/user-router.js";

//Connect to database
await mongoose.connect(process.env.MONGO_URL);

//Create Epress App
const app = express();
expressOasGenerator.handleResponses(app, {
    alwaysServeDocs: true,
    tags: ['categories', 'recipes'],
    mongooseModels: mongoose.modelNames(),
})

//Apply Middlewares
app.use(express.json());
app.use(express.static('uploads'));
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    // cookie: { secure: true }
    store: MongoStore.create({
        mongoUrl: process.env.MONGO_URL
    })
}))




//use routes
app.use(recipeRouter);
app.use(categoryRouter);
app.use(userRouter);
expressOasGenerator.handleRequests();
app.use((req, res) => res.redirect('/api-docs/'));

//Listen for incoming requests
const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log('App listening on port 3000')
})