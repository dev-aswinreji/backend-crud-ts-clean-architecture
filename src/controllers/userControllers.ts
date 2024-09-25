
import { Request, Response } from 'express';
import userService from '../services/userService';


class UserController {
    async getAllUsers(req: Request, res: Response): Promise<void> {
        try {
            const users = await userService.getAllUsers();
            res.status(200).json(users)
        } catch (error) {
            console.log(error, "Error in usercontroller getAllUsers");
            res.status(500).json({error:"Internal Server Error"})
        }
    }

    async getUserById(req:Request,res:Response): Promise<void>{
        try {
           const id = parseInt(req.params.id) 
           const user = await userService.getUserById(id)
           if(user){
            res.status(200).json(user)
           }else{
            res.status(404).json({error:"user not found"})
           }
        } catch (error) {
            console.log(error,"Error in UserController getUserById ");
            res.status(500).json({error:"Internal Server Error"})
        }
    }
}