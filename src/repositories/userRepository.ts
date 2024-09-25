import { CreateUserDTO, IUser } from "../interfaces/user";
import { PrismaClient } from "../prisma/client";


const prisma = new PrismaClient();

interface IuserRepository {
    getAllUsers(): Promise<IUser[]>;
    getUserById(userid: number): Promise<IUser | null>;
    createUser(user: CreateUserDTO): Promise<IUser>;
}

class UserRepository implements IuserRepository {
    async getAllUsers(): Promise<IUser[]> {
        return prisma.user.findMany();
    }

    async getUserById(userid: number): Promise<IUser | null> {
        return prisma.user.findUnique({where:{userid}})
    }

    async createUser(user: CreateUserDTO): Promise<IUser> {
        return prisma.user.create({data:user})
    }
}


export default new UserRepository()