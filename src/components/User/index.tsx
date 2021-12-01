import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'
import { Container } from './styles'

interface User {
    id: string;
    name: string;
    dateCreated: Date;
    phone: string;
    login: string;
    cpf: string;
}


export default function User() {

    const  [users, setUsers] = useState<User[]>([])


    return (
        <Container>
            <th scope="row">
                000.222.364-95
            </th>
            <td>
                José Marcelino da Silva
            </td>
            <td>
                jose.marcelino07
            </td>
            <td>
                (61) 98175-9887
            </td>
            <td>
                15/01/2021
            </td>
            <td>
                <Link to='/users/updateuser'><Button id="updateButton" variant="primary" size="sm">Alterar</Button></Link>
                &nbsp;
                &nbsp;
                <Button id="deleteButton" variant="danger" size="sm">Excluir</Button>
            </td>
        </Container>
    )
}
