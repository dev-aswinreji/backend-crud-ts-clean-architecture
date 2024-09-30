
import { Request, Response, NextFunction } from 'express';

const emailRegex = /^[^\s@]+[^\s@]+\.[^\s@]+$/

const validateEmail = (req: Request, res: Response, next: NextFunction) => {
    const { email } = req.body

    if (!email || !emailRegex.test(email)) {
        return res.status(400).json({ error: "Invalid email format" })
    }
    next()
}

export default validateEmail;

