import express from "express";
import mongoose from "mongoose";
import recipeRouter from "./routes/recipe.js";

//Connect to database
await mongoose.connect(process.env.MONGO_URL);



//Create Epress App
const app = express();

//Apply Middlewares
app.use(express.json())

// Define routes
app.get('/', (req, res) => {
    res.json('Welcome Home');
});

app.post('/login', (req, res) => {
    res.json('Login sucessful');
});

app.delete('/delete', (req, res) => {
    res.json('Deleted');
});

//use routes
app.use(recipeRouter);

//Listen for incoming requests
app.listen(3000, () => {
    console.log('App listening on port 3000');
})