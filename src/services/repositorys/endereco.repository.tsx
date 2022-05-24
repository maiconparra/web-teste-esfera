import { EnderecosInterface } from "../../interface/enderecos.interface";


export abstract class EnderecosRepository {

    abstract get(): Promise<any>;
    abstract post(values: EnderecosInterface): Promise<any>;
    abstract getByUserId(userId: string): Promise<any>;
    abstract update(values: EnderecosInterface): Promise<any>;
    abstract delete(id: string | null): Promise<any>;

}