import { event } from "jquery";
import { Trash } from "phosphor-react";
import React, { useEffect, useState } from "react";



export const UserForm = () => {
    const [contatos, setContatos] = useState<Array<any> | any>([]);
    const [contato, setContato] = useState<string | any>('');

    useEffect(() => {
        setContatos(contatos);
    }, [contatos]);

    useEffect(() => {
        setContato(contato);
    }, [contato]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.persist();

        setContato(event.target.value);
    }

    const addContato = (event: React.ChangeEvent<any>) => {
        event.preventDefault();

        setContatos((contatos: any) => [
            ...contatos,
            contatos = contato
        ]);
    }

    const deleteContato = (key: number) => {

        const cont = contatos.filter((item: any, index: number, array: any) => index !== key);

        console.log(cont);

        setContatos(cont);
    
    }

    console.log(contatos);

    return (
        <>
            <div className="">
                <input
                    type="text"
                    name="nome"
                    id="nome"
                    value={contato}
                    onChange={handleChange}
                />
                <button onClick={addContato}>Add</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>nome</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {contatos.map((value: any, index: number) => (
                        <tr key={index}>
                            <td>
                                {value}
                            </td>
                            <td>
                                <button
                                    onClick={() => deleteContato(index)}
                                >
                                    <Trash size={10} />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}