import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import userRepository from '../repositories/userRepository';

class AuthService {
    async login(email: string, password: string): Promise<string> {
        cosnt user = await userRepository.ge
    }
}
