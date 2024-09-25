
export interface IUser {
    userid: number;
    name: string;
    email: string;
    password: string;
}

export interface CreateUserDTO {
    name: string;
    email: string;
    password: string;
}
