
import { Request, Response } from 'express';
import userService from '../services/userService';
import { CreateUserDTO } from '../interfaces/user';


class UserController {
    async getAllUsers(req: Request, res: Response): Promise<void> {
        try {
            const users = await userService.getAllUsers();
            res.status(200).json(users)
        } catch (error) {
            console.log(error, "Error in usercontroller getAllUsers");
            res.status(500).json({ error: "Internal Server Error" })
        }
    }

    async getUserById(req: Request, res: Response): Promise<void> {
        try {
            const id = parseInt(req.params.id)
            const user = await userService.getUserById(id)
            if (user) {
                res.status(200).json(user)
            } else {
                res.status(404).json({ error: "user not found" })
            }
        } catch (error) {
            console.log(error, "Error in UserController getUserById ");
            res.status(500).json({ error: "Internal Server Error" })
        }
    }

    async createUser(req: Request, res: Response): Promise<void> {
        try {
            const { name, email, password } = req.body as CreateUserDTO
            const newUser = await userService.createUser({ name, email, password, isauth:true })
            res.status(201).json(newUser)
        } catch (error) {
            console.log(error, "Error in UserController createUser");
            res.status(400).json({ error: "Bad Request" })
        }
    }
}


export default new UserController()