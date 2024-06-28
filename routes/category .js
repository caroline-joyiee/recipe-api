import { Router } from "express";
import { getCategories, postCategory } from "../controllers/catergory-controller.js";

//Creeat a router
export const categoryRouter = Router();


//Define routes
categoryRouter.get('/categories', getCategories);

categoryRouter.post('/categories', postCategory);

