import { Router } from "express";

//Create a router
const recipeRouter = Router();

//Define routes
recipeRouter.get('/recipes', (req, res) =>{
    res.json('All recipes');
});
recipeRouter.post('/recipes', (req, res) => {
    res.json('Recipe Added');
});

recipeRouter.patch('/recipes/:id', (req, res) => {
    res.json(`Recipe with ID ${req.params.id} Updated`);
});

recipeRouter.delete('/recipes/:id', (req, res) => {
    res.json(`Recipe with ID ${req.params.id} is Deleted`)
})




//Export router
export default recipeRouter;