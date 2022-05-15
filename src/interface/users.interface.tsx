import { ContatosInterface } from "./contatos.interface"
import { EnderecosInterface } from "./enderecos.interface"

export interface ListUsersInterface {
   readonly id: string;
            Nome: string;
            CPF?: string;
            Sobrenome: string;
            Contatos?: [ContatosInterface];
            Enderecos?: [EnderecosInterface];
   readonly createdAt?: Date;
   readonly updatedAt?: Date;
}