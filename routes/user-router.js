import { Router } from "express";
import { register } from "../controllers/user.js";

//create Router
const userRouter = Router();


//Define Router
userRouter.post('/register', register)

//Export Router
export default userRouter;