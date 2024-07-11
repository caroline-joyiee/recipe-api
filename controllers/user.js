import bcrypt from "bcrypt";
import { UserModel } from "../models/user.js";

export const register = async (req, res, next) => {
    //HAsh user password
    try {
        const hashedPassword = bcrypt.hashSync(req.body.password, 10);

        //Ceate a new user
        const registerUser = await UserModel.create({
            ...req.body,
            password: hashedPassword
        });
         //Generate a session
         req.session.user = { id: user.id }

        //return response
        res.status(201).json('User resgister suggesting')

    } catch (error) {
        next(error)
    }

}

export const login = async (req, res, next) => {
    try {

        const { email, username, phone, password } = req.body;
        //find a user using their unique identifier

        const user = await UserModel.findOne({
            $or: [
            {email: email },
            { username: username },
            { phone: phone }
            ]
        });
if (!user) {
    res.status(401).json('No user found');
} else {

    //Verify their password
    const correctPassword = bcrypt.compareSync(password, user.password);
    if (!correctPassword) {
        res.status(401).json('Invalid Credentails');
    } else {
        //Generate a session
        req.session.user = { id: user.id }

        //return response

        res.status(200).json('Login Successful');



    }
}
    } catch (error) {
    next(error)
}
}

export const logout = async (req, res, next) => { 
 try {
       //Destory user session
   
       await req.session.destory();
   
   
       //Return Response
       res.status(200).json('Logout Sucessfully')
   
 } catch (error) {

    next(error)
    
 }
}



export const profile = async (req, res, next) => {
   try {
     //find a user by id
     const user = await UserModel
         .findById(req.session.user.id)
         .select({ password: false });
 
     //return response
     res.status(200).json(user)
   
   } catch (error) {

    next(error)
    

   }

}