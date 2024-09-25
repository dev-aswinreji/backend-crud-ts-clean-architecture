import { IUser } from "../interfaces/user";

export class User implements IUser {
    constructor(
        public userid: number,
        public name: string,
        public email: string,
        public password: string,
        public isauth: boolean,
        public isadmin:boolean
    ) { }
}