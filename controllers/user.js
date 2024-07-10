import bcrypt from "bcrypt";
import { UserModel } from "../models/user.js";

export const register = async (req, res, next) => {
    //HAsh user password
try {
    const hashedPassword = bcrypt.hashSync(req.body. pasword, 10);
    
        //Ceate a new user
        const registerUser = await UserModel.create({
            ...req.body,
            password: hashedPassword
        })
    
        //return response
        res.status(201).json('User resgister suggesting')
    
} catch (error) {
    next(error)
}

}

export const login = async () => {}

export const logout = async () => {}

export const profile = async () => {}
