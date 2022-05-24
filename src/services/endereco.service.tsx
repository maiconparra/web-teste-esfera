//repositorys
import { EnderecosRepository } from "./repositorys/endereco.repository";

//api
import { Api } from "../assets/enviroments/api";

//interfaces
import { EnderecosInterface } from "../interface/enderecos.interface";

//Modulo de HTTP
import axios from 'axios';

//Templete de Estados de Requisições
import { EstateRequestsTemplate } from "./template/state.requests.template";

export class EnderecoService extends EstateRequestsTemplate implements EnderecosRepository {

    private baseUrl: any;

    constructor() {
        super();
        const { baseUrl } = Api;
        this.baseUrl = baseUrl;
    }

    public async get(): Promise<EnderecosInterface[] | any> {


        const contato = await axios.get<Array<EnderecosInterface> | Array<any>>(`${this.baseUrl}/listEndereco`)
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
        const enderecos = await axios.get<Array<EnderecosInterface> | Array<any>>(`${this.baseUrl}/byUserIdEndereco/${userId}`)
            .then(value => {
                if (value.status === 200) {
                    this.seccessReport(value);
                } else {
                    this.warningReport(value);
                }
            }).catch(error => {
                this.errorReport(error);
            });

        return enderecos;
    }

    public async update(value?: EnderecosInterface): Promise<any> {

        const updateContato = await axios.put<EnderecosInterface>(`${this.baseUrl}/updateEndereco`, value)
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

    public async post(value: EnderecosInterface): Promise<any> {
        const postEndereco = await axios.post<EnderecosInterface>(`${this.baseUrl}/createEndereco`, value)
            .then(value => {
                if (value.status === 200) {
                    this.seccessReport(value);
                } else {
                    this.warningReport(value);
                }
            }).catch(error => {
                this.errorReport(error);
            });

        return postEndereco;
    }

    public async delete(id: string | null): Promise<any> {
        const caontato = await axios.delete<any>(`${this.baseUrl}/deleteEndereco/${id}`)
            .then(value => {
                if (value.status === 200) {
                    this.seccessReport(value);
                } else {
                    this.warningReport(value);
                }
            }).catch(error => {
                this.errorReport(error);
            });

        return caontato;
    }

}