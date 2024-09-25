import { CreateUserDTO, IUser } from "../interfaces/user";
import userRepository from "../repositories/userRepository";



class UserService {
    async getAllUsers():Promise<IUser[]> {
        return await userRepository.getAllUsers()
    }

    async getUserById(id:number): Promise<IUser | null>{
        return await userRepository.getUserById(id)
    }

    async createUser(data:CreateUserDTO): Promise<IUser>{
        return await userRepository.createUser(data)
    }
}


export default new UserService()
