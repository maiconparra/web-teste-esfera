import { ListUsersInterface } from "../../interface/users.interface";


export abstract class UserRepository {

    abstract get(): Promise<any>;
    abstract getById(userId: string): Promise<any>;
    abstract post(value: ListUsersInterface):  Promise<any>;
    abstract update(value: ListUsersInterface): Promise<any>;
    abstract delete(id: string | null): Promise<any>;

}