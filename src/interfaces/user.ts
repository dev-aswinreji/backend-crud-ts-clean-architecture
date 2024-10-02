
export interface IUser {
    name: string;
    email: string;
    password: string;
    isauth:boolean;
    isadmin:boolean;
}

export interface CreateUserDTO {
    name: string;
    email: string;
    password: string;
}

export interface UserLogin {
    email: string;
    password: string;
}