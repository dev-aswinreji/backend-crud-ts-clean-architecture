import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import userRepository from '../repositories/userRepository';
import { IUser } from '../interfaces/user';

class AuthService {
    async login(email: string, password: string): Promise<string> {
        const JWT_SECRET = process.env.JWT_SECRET
        if (!JWT_SECRET) {
            throw new Error("JWT SECRET KEY is not defined!")
        }
        const user = await userRepository.getUserByEmail(email);
        if (!user) {
            throw new Error("User not found")
        }

        const isPasswordValid = await bcrypt.compare(password, user.password)
        if (!isPasswordValid) {
            throw new Error("Invalid Credentials")
        }


        // Generating jwt token for secure authenctication
        const token = jwt.sign(
            { userid: user.userid }, JWT_SECRET as jwt.Secret, { expiresIn: "1h" }
        )
        return token
    }

    async register(user: IUser): Promise<IUser> {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        return userRepository.createUser({
            ...user,
            password: hashedPassword
        })
    }
}

export default new AuthService()
