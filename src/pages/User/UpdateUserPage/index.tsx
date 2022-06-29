import React, { FormEvent, useContext, useEffect, useState } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'
import { UserContext } from '../../../contexts/UserContext';
import { api } from '../../../services/api';
import { toast } from 'react-toastify'
import { Container, Form, FormBlock, MainSection, SecondSection } from './styles';
import { BsFillPencilFill } from 'react-icons/bs';

export default function UpdateUserPage() {

    const history = useHistory();


   const {
    id,
    phone,
    setPhone,
    email,
    setEmail,
    role,
    setRole,
    username,
    setUsername,
    password,
    setPassword,
    confirmedPassword,
    setconfirmedPassword,
    getUsers
   } = useContext(UserContext)


    async function handleUpdate(event: FormEvent, id: string) {

        event.preventDefault();
        
        console.log(phone)
        console.log(email)
        console.log(role)
        console.log(username)
        console.log(password)
        console.log("========ID======",id)
      

        const userUpdated = {
            phone: phone,
            email: email,
            role: role,
            username: username,
            password: password,
        };
        

        await api.put(`/users/${id}`, userUpdated)
        toast.success('Usuário alterado com sucesso!');
        getUsers();
        history.push("/users") 
    }



    return (
        <Container>

            <Form>
                <h1>Alterar Usuário</h1>
                <FormBlock>
                    <MainSection>

                        <p>Telefone: </p>
                        <input 
                        type="text" 
                        value={phone}
                        onChange={event =>setPhone(event.target.value)}
                        />

                        <p>Username: </p>
                        <input 
                        type="text" 
                        value={username} 
                        onChange={event =>setUsername(event.target.value)}/>

                        <p>Senha: </p>
                        <input 
                        type="text" 
                        value={password} 
                        onChange={event =>setPassword(event.target.value)}/>


                          

                    </MainSection>

                    <SecondSection>

                       
                    <p>Email: </p>
                        <input 
                        type="text" 
                        value={email}
                        onChange={event =>setEmail(event.target.value)}
                        />

                        <p>Cargo:</p>
                        <select value={role} onChange={event => setRole(event.target.value)}>
                            <option></option>
                            <option value={"Atendimento"}>Atendimento</option>
                            <option value={"Financeiro"}>Financeiro</option>
                        </select>
                        
                        
                        <p>Confirmar Senha: </p>
                        <input 
                        type="text" 
                        value={confirmedPassword} 
                        onChange={event =>setconfirmedPassword(event.target.value)}/>

                    </SecondSection>
                    <br /> 
                  
                </FormBlock>
                
                <Link to='/users'>
                    <button id="buttonCancel" type="reset">Cancelar</button>
                </Link>
                &nbsp;
                &nbsp;
                <Link to='/users'>  
                <button id="buttonUpdate" type="submit" onClick={(event) => {handleUpdate(event, id)}}>Alterar <BsFillPencilFill/></button>
                </Link>
            </Form>
        </Container>
    )
}