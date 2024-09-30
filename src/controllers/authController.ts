import { Request, Response } from 'express';
import { UserLogin } from '../interfaces/user';
import authService from '../services/authService';

class AuthController {
    async login(req: Request, res: Response): Promise<void> {
        const { email, password } = req.body as UserLogin

        try {
            const token = await authService.login(email,password)
            res.status(200).json({token})
        } catch (error) {
            console.log(error, "Auth Controller error");
            let errorMessage = "Auth Controller Error"
            if (error instanceof Error) {
                errorMessage = error.message
            }
            res.status(401).json({ error: errorMessage })
        }
    }
}

export default new AuthController()