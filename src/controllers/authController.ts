import { Request, Response } from 'express';

class AuthController {
    async login(req:Request,res:Response):Promise<void>{
        const {email,password} = req.body 
    }
}