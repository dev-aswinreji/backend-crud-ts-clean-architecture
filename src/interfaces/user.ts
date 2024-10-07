
export interface IUser {
    userid?:number;
    name: string;
    email: string;
    password: string;
    isauth?: boolean;
}

export interface CreateUserDTO {
    name: string;
    email: string;
    password: string;
    isauth: boolean;
}

export interface UserLogin {
    email: string;
    password: string;
}