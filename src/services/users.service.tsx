//repositorys
import { UserRepository } from "./repositorys/user.repository";

//api
import { Api } from "../assets/enviroments/api";

//interfaces
import { UsersInterface } from "../interface/users.interface";
import axios from "axios";
import { EstateRequestsTemplate } from "./template/state.requests.template";


export class UserService extends EstateRequestsTemplate implements UserRepository {

    private baseUrl: any;

    constructor() {
        super();
        const { baseUrl } = Api;
        this.baseUrl = baseUrl;
    }

    public async get(): Promise<UsersInterface[] | any> {


        const users = await axios.get<Array<UsersInterface> | Array<any>>(`${this.baseUrl}/listUsers`)
            .then(value => {
                if (value.status === 200) {
                    this.seccessReport(value);
                } else {
                    this.warningReport(value);
                }
            }).catch(error => {
                this.errorReport(error);
            });

        return users;
    }

    public async getById(userId: string): Promise<any> {
        const users = await axios.get<Array<UsersInterface> | Array<any>>(`${this.baseUrl}/byIdUser/${userId}`)
            .then(value => {
                if (value.status === 200) {
                    this.seccessReport(value);
                } else {
                    this.warningReport(value);
                }
            }).catch(error => {
                this.errorReport(error);
            });

        return users;
    }

    public async update(value: UsersInterface): Promise<any> {

        const updateUser = await axios.put<UsersInterface>('http://localhost:3334/updateUser', value)
            .then(value => {
                if (value.status === 200) {
                    this.seccessReport(value);
                } else {
                    this.warningReport(value);
                }
            }).catch(error => {
                this.errorReport(error);
            });

        return updateUser;
    }

    public async post(value: UsersInterface): Promise<any> {
        const postUser = await axios.post<UsersInterface>(`${this.baseUrl}/createUser`, value)
            .then(value => {
                if (value.status === 200) {
                    this.seccessReport(value);
                } else {
                    this.warningReport(value);
                }
            }).catch(error => {
                this.errorReport(error);
            });

        return postUser;
    }

    public async delete(id: string | null): Promise<any> {
        const users = await axios.delete<any>(`${this.baseUrl}/deleteUser/${id}`)
            .then(value => {
                if (value.status === 200) {
                    this.seccessReport(value);
                } else {
                    this.warningReport(value);
                }
            }).catch(error => {
                this.errorReport(error);
            });

        return users;
    }

}