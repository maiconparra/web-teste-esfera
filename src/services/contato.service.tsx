//repositorys
import { ContatosRepository } from "./repositorys/contato.repostory";

//api
import { Api } from "../assets/enviroments/api";

//interfaces
import { ContatosInterface } from "../interface/contatos.interface";

//Serviço HTTP
import axios from "axios";

//Templates
import { EstateRequestsTemplate } from "./template/state.requests.template";


export class ContatoService extends EstateRequestsTemplate implements ContatosRepository {

    private baseUrl: any;

    constructor() {
        super();
        const { baseUrl } = Api;
        this.baseUrl = baseUrl;
    }

    public async get(): Promise<ContatosInterface[] | any> {


        const contato = await axios.get<Array<ContatosInterface> | Array<any> | any>(`${this.baseUrl}/listContato`)
            .then(value => {
                if (value.status === 200) {
                    this.seccessReport(value);
                } else {
                    this.warningReport(value);
                }
            }).catch(error => {
                this.errorReport(error);
            });

        return contato;
    }

    public async getByUserId(userId: string): Promise<any> {
        const contatos = await axios.get<Array<ContatosInterface> | Array<any>>(`${this.baseUrl}/byUserIdContato/${userId}`)
            .then(value => {
                if (value.status === 200) {
                    this.seccessReport(value);
                } else {
                    this.warningReport(value);
                }
            })
            .catch(error => {
                this.errorReport(error);
            });

        return contatos;
    }

    public async update(value?: ContatosInterface): Promise<any> {

        const updateContato = await axios.put<ContatosInterface>(`${this.baseUrl}/updateContato`, value)
            .then(value => {
                if (value.status === 200) {
                    this.seccessReport(value);
                } else {
                    this.warningReport(value);
                }
            }).catch(error => {
                this.errorReport(error);
            });

        return updateContato;
    }

    public async post(value: ContatosInterface): Promise<any> {
        const postContato = await axios.post<ContatosInterface>(`${this.baseUrl}/createContato`, value)
            .then(value => {
                if (value.status === 200) {
                    this.seccessReport(value);
                } else {
                    this.warningReport(value);
                }
            })
            .catch(error => {
                this.errorReport(error);
            });
        return postContato;
    }

    public async delete(id: string | null): Promise<any> {
        const caontato = await axios.delete<any>(`${this.baseUrl}/deleteContato/${id}`)
            .then(value => {
                if (value.status === 200) {
                    this.seccessReport(value);
                } else {
                    this.warningReport(value);
                }
            })
            .catch(error => {
                this.errorReport(error);
            });

        return caontato;
    }

}