import React, { FormEvent, useContext, useState } from 'react'
import { BsFillPlusSquareFill } from 'react-icons/bs';
import { Link, useHistory } from 'react-router-dom'
import { UserContext } from '../../../contexts/UserContext';
import { api } from '../../../services/api';
import { toast } from 'react-toastify'
import { 
    Container,
    Form, 
    MainSection, 
    FormBlock,
    SecondSection,
    ThirdSection } from './styles';

export default function NewUserPage() {

   
    const {
        id,
        setId,
        name,
        setName,
        cpf,
        setCpf,
        birthDate,
        setBirthDate,
        sex,
        setSex,
        phone,
        setPhone,
        dateCreated,
        setDateCreated,
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
        getUsers,
        setUsers
        } = useContext(UserContext)         
    

    const history = useHistory();

    async function handleCreateNewUser(event: FormEvent) {
        event.preventDefault();

        console.log(name)
        console.log(birthDate)
        console.log(role)
        console.log(cpf)
        console.log(username)
        console.log(password)
        console.log(sex)
        if(!name || !birthDate || !role || !cpf || !username || !password || !sex){
            return  toast.error('Campos obrigatórios não preenchidos!');
        }

        const data = {
            id,
            name,
            birthDate,
            dateCreated,
            sex,
            role,
            phone,
            cpf,
            email,
            username,
            password,
        };

        await api.post('/users', data);
        getUsers()
        toast.success('Usuário criado com sucesso!');
        history.push("/users")
    }



    return (
        <Container>

            <Form onSubmit={handleCreateNewUser}>
                <h1>Novo Usuário</h1>
                <FormBlock>
                    <MainSection>
                    <p>Nome:</p>
                        <input 
                        type="text"  
                        value={name}
                        onChange={event => setName(event.target.value)}
                        />

                        <p>Data de Nascimento: </p>
                        <input 
                        type="date" 
                        value={birthDate}
                        onChange={event =>setBirthDate(event.target.value)}
                        />

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

                    </MainSection>

                    <SecondSection>

                        <p>CPF: </p>
                        <input 
                        type="text" 
                        value={cpf}
                        onChange={event =>setCpf(event.target.value)}
                        />

                        <p>Sexo:</p>
                        <select value={sex} onChange={event => setSex(event.target.value)}>
                            <option></option>
                            <option value="Masculino">Masculino</option>
                            <option value="Feminino">Feminino</option>
                        </select>

                        <p>Email: </p>
                        <input 
                        type="text" 
                        value={email}
                        onChange={event =>setEmail(event.target.value)}
                        />
                        
                        <p>Senha: </p>
                        <input 
                        type="text" 
                        value={password} 
                        onChange={event =>setPassword(event.target.value)}/>

                    </SecondSection>

              
                </FormBlock>

                <ThirdSection>
                        <p>Cargo:</p>
                        <select value={role} onChange={event => setRole(event.target.value)}>
                            <option></option>
                            <option value="Atendimento">Atendimento</option>
                            <option value="Financeiro">Financeiro</option>
                        </select>
                </ThirdSection>
                <br />
               
                <Link to='/users'>
                    <button id="buttonCancel" type="reset">Cancelar</button>
                </Link>
                &nbsp;
                &nbsp;
                <Link to='/login'> 
                <button id="buttonRegister" type="submit" onClick={handleCreateNewUser} >
                    Cadastrar  <BsFillPlusSquareFill/>
                </button>
                </Link>

            </Form>


        </Container>
    )
}


