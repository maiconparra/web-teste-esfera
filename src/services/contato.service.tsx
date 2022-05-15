//repositorys
import { ContatosRepository } from "./repositorys/contato.repostory";

//api
import { Api } from "../assets/enviroments/api";

//interfaces
import { ContatosInterface } from "../interface/contatos.interface";
import axios from "axios";


export class ContatoService extends ContatosRepository {

    private baseUrl: any;

    constructor() {
        super();
        const { baseUrl } = Api;
        this.baseUrl = baseUrl;
    }

    public async get(): Promise<ContatosInterface[] | any> {


        const contato = await axios.get<Array<ContatosInterface> | Array<any>>(`${this.baseUrl}/listContato`);

        return contato;
    }

    public async getByUserId(userId: string): Promise<any>{
        const contatos = await axios.get<Array<ContatosInterface> | Array<any>>(`${this.baseUrl}/byUserIdContato/${userId}`);

        return contatos;
    }

    public async update(value?: ContatosInterface): Promise<any> {
        
        const updateContato = await axios.put<ContatosInterface>('http://localhost:3334/updateContato', value).catch(error => this.errorReport(error));

        return updateContato;
    }

    public async post(value: ContatosInterface): Promise<any> {
        const postContato = await axios.post<ContatosInterface>('http://localhost:3334/createContato', value);
        return postContato;
    }

    public async delete(id: string | null): Promise<any> {
        const caontato = await axios.delete<any>(`${this.baseUrl}/deleteContato/${id}`);
        
        return caontato;
    }

}