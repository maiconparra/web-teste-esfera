import { event } from "jquery";
import { Trash } from "phosphor-react";
import React, { useEffect, useState } from "react";

//Interfaces
import { UsersInterface } from "../../../interface/users.interface";
import { EnderecosInterface } from "../../../interface/enderecos.interface";
import { ContatosInterface } from "../../../interface/contatos.interface";

//Material-ui React
import { TextField, Box, Button } from "@mui/material";



export const UserForm = () => {
    const [user, setUser] = useState<UsersInterface | any>(Object);
    const [contatos, setContatos] = useState<Array<ContatosInterface> | any>(user.Contatos);
    const [enderecos, setEnderecos] = useState<Array<EnderecosInterface> | any>(user.Enderecos);

    useEffect(() => {
        setUser(user);
    }, [user]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.persist();

        setUser((user: UsersInterface | any) => ({
            ...user,
            [event.target.name]: event.target.value
        }));
    }

    /*const addContato = (event: React.ChangeEvent<any>) => {
        event.preventDefault();

        setContatos((contatos: any) => [
            ...contatos,
            contatos = contato
        ]);
    }*/

    /*const deleteContato = (key: number, value?: ContatosInterface) => {

        const cont = contatos.filter((item: any, index: number, array: any) => index !== key);

        console.log(cont);

        setContatos(cont);

    }*/

    return (
        <>
            <Box
                component="form"
                sx={
                    {
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }
                }
                autoComplete="on"
                noValidate
            >
                <input className="hidden" name="id" value={user.id}/>
                <TextField 
                    id="filled-basic" 
                    label="Nome" 
                    variant="filled"
                    value={user.Nome}
                    onChange={handleChange} 
                />
                <TextField id="filled-basic" label="Sobrenome" name="Sobrenome" variant="filled" />
                <TextField id="filled-basic" label="CPF" name="CPF" variant="filled" />

                <Box
                    component="form"
                    sx={
                        {
                            '& > :not(style)': { m: 1, width: '25ch' },
                        }
                    }
                    autoComplete="on"
                    noValidate
                >
                    <input 
                        className="hidden"
                        name="id" 
                    />
                    <input 
                        className="hidden" 
                        name="UserId" 
                    />
                    <TextField id="filled-basic" label="Email" name="Email" variant="filled" />
                    <TextField 
                        id="filled-basic" 
                        label="Telefone" 
                        name="Telefone" 
                        variant="filled" 
                    />
                    <Button>Salvar</Button>
                </Box>

            </Box>
        </>
    );
}