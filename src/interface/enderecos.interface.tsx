
export interface EnderecosInterface {
   readonly id?: string;
            Cep: string;
            Logradouro: string;
            Numero: string;
            Complmento?: string;
            Bairro: string;
            Cidade: string;
            Estado: string;
   readonly UserId: string;
   readonly createdAt?: Date
   readonly updatedAt?: Date;
}