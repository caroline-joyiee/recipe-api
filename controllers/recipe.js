import { RecipeModel } from "../models/recipe.js";

//Get all Recipes
export const getRecipes =  async (req, res, next) =>{
    try {
        //Get all recipes from database
        const allRecipes = await RecipeModel.find();
        //Return all recipes as response
        res.json(allRecipes);
    } catch (error) {
        next(error);
        
    }
}


//post Recipe
export const postRecipes = async (req, res, next) => {
    try {
        //Add recipe to database
        const newRecipe = await RecipeModel.create(req.body);
        //Return response
        res.json(newRecipe);
    } catch (error) {
        next(error);

    }
}


//patch recipe
export const  patchRecipe = (req, res) => {
    //return response
    res.json(`Recipe with ID ${req.params.id} Updated`);
}


//Delete Recipe
export const deleteRecipe = async (req, res, next) => {
   try {

    //Delete recipe by id
    const deleteRecipe = await RecipeModel.findByIdAndDelete(req.params.id);
     res.json(deleteRecipe);
   } catch (error) {
    next (error);
   }
}


//get recipe
export const getRecipe = (req, res) => {
    //return response
    res.json(`Recipe with ID ${req.params.id} Selected`)
}