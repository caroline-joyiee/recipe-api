import { Router } from "express";
import { login, logout, profile, register } from "../controllers/user.js";
import session from "express-session";
import { checkUserSession } from "../middleware/auth.js";

//create Router
const userRouter = Router();


//Define Router
userRouter.post('/register', register);

userRouter.post('/login', login);

userRouter.get('/profile', checkUserSession, profile);

userRouter.post('/logout', checkUserSession, logout);

//Export Router
export default userRouter;