import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { Table } from 'reactstrap';
import { Button } from 'reactstrap';
import { Container, UserIntro, UserTable } from './styles'
import { api } from '../../../services/api';
import { UserContext } from '../../../contexts/UserContext';


interface User {
    id: string;
    name: string;
    dateCreated: Date;
    phone: string;
    username: string;
    cpf: string;
}


export default function UserPage() {

   const {users, setUsers, setId} = useContext(UserContext)
   console.log(users)
    

    function idTransfer(id: string) {
        setId(id)
    }

    function updateUser() {
        console.log("++++++++++++++++++++")
        api.get('/users').then((response) => {
            console.log("++++++++++POS-REQUISIÇÃO++++++++++=", response.data)
            setUsers(response.data)
        })
    }

    async function handleDelete(id: string) {
        console.log(id)
        await api.delete(`/users/${id}`)
        updateUser()
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
                                Username
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
                        {users.map((user: User) => (
                            
                                <tr key={user.id}>
                                    <td scope="row">
                                        {user.cpf}
                                    </td>
                                    <td>
                                        {user.name}
                                    </td>
                                    <td>
                                       {user.username}
                                    </td>
                                    <td>
                                        {user.phone}
                                    </td>
                                    <td>
                                        {user.dateCreated}
                                    </td>
                                    <td>
                                        <Link to='/users/updateuser/:id'><Button id="updateButton" variant="primary" size="sm" onClick={() => {idTransfer(user.id);}}>Alterar</Button></Link>
                                        &nbsp;
                                        &nbsp;
                                        <Button id="deleteButton" variant="danger" size="sm" onClick={() => handleDelete(user.id)}>Excluir</Button>
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
