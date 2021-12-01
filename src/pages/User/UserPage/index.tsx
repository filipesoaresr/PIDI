import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Table } from 'reactstrap';
import { Button } from 'reactstrap';
import { Container, UserIntro, UserTable } from './styles'
import { api } from '../../../services/api';
import axios from 'axios';

interface User {
    _id: string;
    name: string;
    dateCreated: Date;
    phone: string;
    login: string;
    cpf: string;
}


export default function UserPage() {

    const [users, setUsers] = useState<User[]>([]);
    const [id, setId] = useState('');


    useEffect(() => {
        api.get('/users')
        .then(response => {
            setUsers(response.data);
        })
        //eslint-disable-next-line
    }, [])
    console.log(users)


    function handleUpdate(id: any) {
        setId(id)
        
    }

    async function handleDelete(id: any) {
        api.delete(`users/${id}`)
    }
    
    


    return (
        <Container>
           
            <UserIntro>
                <h1>Usuários</h1>

                <input type='text' placeholder='Digite o Nome do Usuário' />
                <br/>
                <input type='text' placeholder='Digite o Login do Usuário' />
                <br />
                <button type='submit'>Consultar</button>
            </UserIntro>

            <UserTable>
                <Table bordered hover responsive >
                    <thead>
                        <tr>
                            <th id="cpfColumn">
                                CPF
                            </th>
                            <th id="nomeColumn">
                                Nome
                            </th>
                            <th id="loginColumn">
                                Login
                            </th>
                            <th id="telefoneColumn">
                                Telefone
                            </th>
                            <th id="dateColumn">
                                Data do Cadastro
                            </th>
                            <th id="actionsColumn">
                                Ações
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            
                                <tr key={user._id}>
                                    <th scope="row">
                                        {user.cpf}
                                    </th>
                                    <td>
                                        {user.name}
                                    </td>
                                    <td>
                                       {user.login}
                                    </td>
                                    <td>
                                        {user.phone}
                                    </td>
                                    <td>
                                        {user.dateCreated}
                                    </td>
                                    <td>
                                        <Link to='/users/updateuser/:id'><Button id="updateButton" variant="primary" size="sm" onClick={() => handleUpdate(user._id)}>Alterar</Button></Link>
                                        &nbsp;
                                        &nbsp;
                                        <Button id="deleteButton" variant="danger" size="sm" onClick={() => handleDelete(user._id)}>Excluir</Button>
                                    </td>
                                </tr>                       
                        ))}
                    </tbody>
                </Table>
            </UserTable>

            <Link to='/users/newuser'>
                <button type='button' className ="register">+ Cadastrar</button>
            </Link>

       </Container>
    )
}
