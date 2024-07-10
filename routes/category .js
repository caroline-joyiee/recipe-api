import { Router } from "express";
import multer from "multer";
import { getCategories, postCategory } from "../controllers/catergory-controller.js";
const upload = multer({dest: 'uploads'});

//Create Upload Middleware


//Creeat a router
export  const categoryRouter = Router();


//Define routes
categoryRouter.get('/categories', getCategories);

categoryRouter.post('/categories', upload.single('image'), postCategory);

