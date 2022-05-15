import { Popover } from "@headlessui/react";
import { Pencil, Trash } from "phosphor-react";
import React, { useEffect, useState } from "react";


import { isString } from "validate.js";

/**
 * Interface dos dados de contato do usuário
 * id?: string;
 * Telefone: string;
 * Email: string;
 * UserId: string;
 * createdAt: Date;
 * updatedAt: Date;
 */
import { ContatosInterface } from "../../../../interface/contatos.interface";

/**
 * Class de comunicação com a API de cadastro de usuário
 * Métodos:
 * post(value); Cria um contato para do usuário
 * update(value); Atualiza o contato do usuário 
 * get(); Busca todos os contatos do usuário
 * getByUserId(id); Busca um contato específico por id
 * delete(id); Exclui o contato do usuário
 */
import { ContatoService } from "../../../../services/contato.service";

interface Props {
    readonly contatos: Array<ContatosInterface>;
    setContatos: (type: Array<ContatosInterface>) => void;
}

export const ContatosForm: React.FC<Props> = ({contatos, setContatos}) => {

    const contatoService = new ContatoService

    const [contato, setContato] = useState<ContatosInterface>();

    const [exists, setExists] = useState<Boolean>(false);


    useEffect(() => {

    }, [contatos]);


    useEffect(() => {
        if(contato?.id === undefined || contato?.id === null) {
            setExists(false);
        }else if(isString(contato?.id) && contato?.id?.length === 36){
            if(isString(contato?.UserId && contato?.UserId.length === 36)){
                setExists(true);
            }
        }
    });

    const editContato = (value?: ContatosInterface) => {
        
    }

    const deleteContato = (id?: string) => {

    }


    return (
        <>
            <div className="">
                <div className="">
                    <table>
                        <thead>
                            <tr>
                                <td className="hidden">
                                    id
                                </td>
                                <td>
                                    Email
                                </td>
                                <td>
                                    Telefone
                                </td>
                                <td className="hidden">
                                    UserId 
                                </td>
                                <td></td>
                                <td></td>
                            </tr>
                        </thead>
                        <tbody>
                            {contatos.map((value: ContatosInterface, index: number) => (
                                <tr key={index}>
                                    <td>
                                        {value.id}
                                    </td> 
                                    <td> 
                                        {value.Email}
                                    </td>
                                    <td>
                                        {value.Telefone}
                                    </td>
                                    <td className="hidden">
                                        {value.UserId}
                                    </td>
                                    <td>
                                        <Popover.Button 
                                            onClick={() => editContato(value)}
                                        >
                                            <Pencil size={16}/>
                                        </Popover.Button>
                                    </td>
                                    <td>
                                        <Popover.Button
                                            onClick={() => deleteContato(value.id)}
                                        >
                                            <Trash size={16}/>
                                        </Popover.Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );

}