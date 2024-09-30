
import { error } from 'console';
import { Request, Response, NextFunction } from 'express';
import { CreateUserDTO } from '../interfaces/user';

const emailRegex = /^[^\s@]+[^\s@]+\.[^\s@]+$/

const validation = (req: Request, res: Response, next: NextFunction) => {
    const { email, name, password } = req.body as CreateUserDTO

    if (!name) {
        return res.status(400).json({error:"Invalid name"})
    }

    if (!email || !emailRegex.test(email)) {
        return res.status(400).json({ error: "Invalid email format" })
    }

    if(!password){
        return res.status(400).json({error:"Invalid password"})
    }

    next()
}

export default validation;

