import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptj';

import userRepository from '../repositories/userRepository';

class AuthService {
    async login(email: string, password: string): Promise<string> {
        const user = await userRepository.getUserByEmail(email);
        if(!user){
            throw new Error("User not found")
        }

        // const isPasswordValid = await bcrypt.compare
        return "hello"
    }
}
