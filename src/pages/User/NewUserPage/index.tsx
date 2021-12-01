import React, { FormEvent, useState } from 'react'
import { Link } from 'react-router-dom'
import { api } from '../../../services/api';

import { 
    Container,
    Form, 
    MainSection, 
    FormBlock,
    SecondSection } from './styles';

export default function NewUserPage() {

    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [gender, setGender] = useState('');
    const [phone, setPhone] = useState('');
    const [dateCreated, setDateCreated] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [confirmedPassword, setconfirmedPassword] = useState('');
    
   

    function handleCreateNewUser(event: FormEvent) {
        event.preventDefault();

        const data = {
            name,
            cpf,
            birthDate,
            gender,
            phone,
            dateCreated,
            email,
            role,
            login,
            password,
        };

        api.post('/users', data);

        alert("Cadastro Realizado com Sucesso!")
    }



    return (
        <Container>

            <Form onSubmit={handleCreateNewUser}>
                <h3>Novo Usuário</h3>
                <FormBlock>
                    <MainSection>
                    <p>Nome Completo:</p>
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

                        <p>Email: </p>
                        <input 
                        type="text" 
                        value={email}
                        onChange={event =>setEmail(event.target.value)}
                        />

                        <p>Login: </p>
                        <input 
                        type="text" 
                        value={login} 
                        onChange={event =>setLogin(event.target.value)}/>  

                    </MainSection>

                    <SecondSection>

                        <p>CPF: </p>
                        <input 
                        type="text" 
                        value={cpf}
                        onChange={event =>setCpf(event.target.value)}
                        />

                        <p>Sexo:</p>
                        <select value={gender} onChange={event => setGender(event.target.value)}>
                            <option value="Atendimento">Masculino</option>
                            <option value="Financeiro">Feminino</option>
                        </select>

                        <p>Data de Cadastro: </p>
                        <input 
                        type="date" 
                        value={dateCreated}
                        onChange={event =>setDateCreated(event.target.value)}
                        />

                        <p>Cargo:</p>
                        <select value={role} onChange={event => setRole(event.target.value)}>
                            <option value="Atendimento">Atendimento</option>
                            <option value="Financeiro">Financeiro</option>
                        </select>
                        
                        <p>Senha: </p>
                        <input 
                        type="text" 
                        value={password} 
                        onChange={event =>setPassword(event.target.value)}/>

                    </SecondSection>
                    <br /> 
                  
              
                </FormBlock>
                <br />
                <p>Confirmar Senha: </p>
                        <input 
                        type="text" 
                        value={confirmedPassword} 
                        onChange={event =>setconfirmedPassword(event.target.value)}/>
                <br />
                <Link to='/users'><button id="buttonCancel" type="reset">Cancelar</button></Link> <button id="form-btn" type="submit" onClick={handleCreateNewUser} >Cadastrar</button>

            </Form>


        </Container>
    )
}
