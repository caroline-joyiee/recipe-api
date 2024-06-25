import express from "express";
import recipeRouter from "./routes/recipes.js";



//Create Epress App
const app = express();

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