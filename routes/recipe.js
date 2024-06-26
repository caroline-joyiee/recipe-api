import { Router } from "express";
import { RecipeModel } from "../models/recipe.js";

//Create a router
const recipeRouter = Router();

//Define routes
recipeRouter.get('/recipes', (req, res) =>{
    res.json('All recipes');
});
recipeRouter.post('/recipes', async (req, res) => {
    //Add recipe to database
    await RecipeModel.create(req.body);
    //Return response
    res.json('Recipe Added');
});

// res.json(req.body);

recipeRouter.patch('/recipes/:id', (req, res) => {
    res.json(`Recipe with ID ${req.params.id} Updated`);
});

recipeRouter.delete('/recipes/:id', (req, res) => {
    res.json(`Recipe with ID ${req.params.id} is Deleted`)
});

recipeRouter.get('/recipes/:id', (req, res) => {
    res.json(`Recipe with ID ${req.params.id} Selected`)
});




//Export router
export default recipeRouter;