import { Router } from "express";
import { deleteRecipe, getRecipe, getRecipes, patchRecipe, postRecipes } from "../controllers/recipe.js";
import { checkUserSession } from "../middleware/auth.js";

//Create a router
const recipeRouter = Router();



//Define routes
recipeRouter.get('/recipes', getRecipes);

recipeRouter.post('/recipes', checkUserSession ,postRecipes);

// res.json(req.body);

recipeRouter.patch('/recipes/:id', checkUserSession, patchRecipe);

recipeRouter.delete('/recipes/:id', checkUserSession, deleteRecipe);

recipeRouter.get('/recipes/:id', checkUserSession,getRecipe);




//Export router
export default recipeRouter;