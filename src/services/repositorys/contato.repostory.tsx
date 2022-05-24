import { ContatosInterface } from "../../interface/contatos.interface";


export abstract class ContatosRepository {

    abstract get(): Promise<any>;
    abstract getByUserId(userId: string): Promise<any>;
    abstract post(values: ContatosInterface): Promise<any>;
    abstract update(values: ContatosInterface): Promise<any>;
    abstract delete(id: string | null): Promise<any>;
    
}