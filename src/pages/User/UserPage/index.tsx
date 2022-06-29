import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { Table } from 'reactstrap';
import { Button } from 'reactstrap';
import { Container, UserIntro, UserTable } from './styles'
import { api } from '../../../services/api';
import { UserContext } from '../../../contexts/UserContext';
import { BiCaretLeft, BiError } from 'react-icons/bi';
import { toast } from 'react-toastify';


interface User {
    id: string;
    name: string;
    dateCreated: Date;
    phone: string;
    username: string;
    cpf: string;
    email: string;
    role: string;
}


export default function UserPage() {

   const {users, setId, getUsers, setUsers} = useContext(UserContext)
   const [ userName, setUserName ] = useState('')
   const [ result, setResult ] = useState([])
   const [notFound, setNotFound] = useState(false)


    
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

        await api.delete(`users/${id}`).then((response) => {
            console.log("RESPOSTA DELETE", response)
            if(!response.data){
                return toast.error('Usuário vinculado a um Pedido ou Venda!');
            }
            else {
                toast.success('Usuário excluído com sucesso!');
            }
        })
        getUsers()
    }
     

    function handleSearch(name: string){
        api.get(`/users/search/${name}`).then(response => {
            console.log("DAta", response.data)
            setResult(response.data)

            if(response.data.length == 0) {
                setNotFound(true)
            }
            
        })
    }

    function handleGetBack(){
        setNotFound(false)
    }
    
    return (
        <Container>
           
            <UserIntro>
                <h1>Usuários</h1>

                <input type='text' placeholder='Digite o Nome do Usuário' onChange={(event) => setUserName(event.target.value)}/>
                <br/>
                <button type='submit' onClick={() => handleSearch(userName)}>Consultar</button>
            </UserIntro>


            { result.length == 0 && notFound && (
                <div id="warningNotFound">
                    <p>PRODUTO NAO ENCONTRADO</p>
                    <BiError size="35" style={{color: "#F9DC5C", verticalAlign: 'middle', marginLeft: "1rem"}}/>

                </div>
                )
            }


            {result.length != 0 && (
            <UserTable>
                <Table bordered hover responsive >
                    <table className="content-table">
                    <thead> 
                        <tr>
                            <th id="cpfColumn">
                                CPF
                            </th>
                            <th id="nomeColumn">
                                Nome
                            </th>
                            <th id="loginColumn">
                                Email
                            </th>
                            <th id="telefoneColumn">
                                Telefone
                            </th>
                            <th id="dateColumn">
                                Cargo
                            </th>
                            <th id="actionsColumn">
                                Ações
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {console.log("TESTE ID", users)}
                        {result.map((user: User) => (
                            
                                <tr key={user.id}>
                                    <td scope="row">
                                        {user.cpf}
                                    </td>
                                    <td>
                                        {user.name}
                                    </td>
                                    <td>
                                       {user.email}

                                    </td>
                                    <td>
                                        {user.phone}
                                    </td>
                                    <td>
                                        {user.role}
                                    </td>
                                    <td id="actionsColumn">

                                        <Link to='/users/updateuser'>
                                            <Button id="updateButton" variant="primary" size="sm" onClick={() => {idTransfer(user.id);}}>
                                                Alterar
                                            </Button>
                                        </Link>
                                        &nbsp;
                                        &nbsp;
                                        <Button id="deleteButton" variant="danger" size="sm" onClick={() => handleDelete(user.id)}>
                                            Excluir
                                        </Button>
                                    </td>
                                </tr>                       
                        ))}
                    </tbody>
                    </table>
                </Table>

                <Button id="cleanSearchButton"  size="sm" onClick={() => {setResult([])}}>
                    Limpar Busca
                </Button>  

            </UserTable>
            )}


            {result.length == 0 && !notFound && (
                 <UserTable>
                 <Table bordered hover responsive >
                     <table className="content-table">
                     <thead> 
                         <tr>
                             <th id="cpfColumn">
                                 CPF
                             </th>
                             <th id="nomeColumn">
                                 Nome
                             </th>
                             <th id="loginColumn">
                                 Email
                             </th>
                             <th id="telefoneColumn">
                                 Telefone
                             </th>
                             <th id="dateColumn">
                                 Cargo
                             </th>
                             <th id="actionsColumn">
                                 Ações
                             </th>
                         </tr>
                     </thead>
                     <tbody>
                         {console.log("TESTE ID", users)}
                         {users.map((user: User) => (
                             
                                 <tr key={user.id}>
                                     <td scope="row">
                                         {user.cpf}
                                     </td>
                                     <td>
                                         {user.name}
                                     </td>
                                     <td>
                                        {user.email}
 
                                     </td>
                                     <td>
                                         {user.phone}
                                     </td>
                                     <td>
                                         {user.role}
                                     </td>
                                     <td id="actionsColumn">
 
                                         <Link to='/users/updateuser'><Button id="updateButton" variant="primary" size="sm" onClick={() => {idTransfer(user.id);}}>Alterar</Button></Link>
                                         &nbsp;
                                         &nbsp;
                                         <Button id="deleteButton" variant="danger" size="sm" onClick={() => handleDelete(user.id)}>Excluir</Button>
                                     </td>
                                 </tr>                       
                         ))}
                     </tbody>
                     </table>
                 </Table>
             </UserTable>
            )}
            
            { result.length == 0 && notFound && (
                 <button type='button' className="getBack" onClick={() => handleGetBack()}>
                    <BiCaretLeft size="28" style={{color: "white", verticalAlign: 'middle'}}/>
                    Voltar
                </button>   
            )
            }

            <Link to='/users/newuser'>
                <button type='button' className ="register">+ Cadastrar</button>
            </Link>

       </Container>
    )
}
