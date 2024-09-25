import { Request, Response } from 'express';
import { UserLogin } from '../interfaces/user';

class AuthController {
    async login(req:Request,res:Response):Promise<void>{
        const {email,password} = req.body as UserLogin

        try {

        } catch (error) {
            console.log(error,"Auth Controller error");
            let errorMessage = "Auth Controller Error"
            if(error instanceof Error){
                errorMessage = error.message
            }
            res.status(401).json({error:errorMessage})
        }
    }
}