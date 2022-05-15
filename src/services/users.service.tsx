//repositorys
import { UserRepository } from "./repositorys/user.repository";

//api
import { Api } from "../assets/enviroments/api";

//interfaces
import { ListUsersInterface } from "../interface/users.interface";
import axios from "axios";


export class UserService implements UserRepository {

    private baseUrl: any;

    constructor() {
        const { baseUrl } = Api;
        this.baseUrl = baseUrl;
    }

    public async get(): Promise<ListUsersInterface[] | any> {


        const users = await axios.get<Array<ListUsersInterface> | Array<any>>(`${this.baseUrl}/listUsers`);

        return users;
    }

    public async getById(userId: string): Promise<any> {
        const users = await axios.get<Array<ListUsersInterface> | Array<any>>(`${this.baseUrl}/byIdUser/${userId}`);
    }

    public async update(value: ListUsersInterface): Promise<any> {
        
        const updateUser = await axios.put<ListUsersInterface>('http://localhost:3334/updateUser', value);

        return updateUser;
    }

    public async post(value: ListUsersInterface): Promise<any> {
        const postUser = await axios.post<ListUsersInterface>('http://localhost:3334/createUser', value);
        return postUser;
    }

    public async delete(id: string | null): Promise<any> {
        const users = await axios.delete<any>(`${this.baseUrl}/deleteUser/${id}`);
        
        return users;
    }

}