import { IUser } from "../interfaces/user";

export class User implements IUser {
    constructor(public id: number, public name: string, public email: string) {

    }
}