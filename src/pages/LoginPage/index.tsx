import React from 'react';
import { Link } from 'react-router-dom';
import { Container, LoginBlock, ButtonsBlock, UserImage} from './styles';

export default function LoginPage() {
    return (
        <Container>
           
            <LoginBlock>
            <UserImage>
                <img src="https://i.pinimg.com/originals/ff/a0/9a/ffa09aec412db3f54deadf1b3781de2a.png" alt="" />
            </UserImage>
            <br />
                <h5>Usuário:</h5>
                <input type="text" placeholder="Digite seu login" />
                <br/>
                <h5>Senha:</h5>
                <input type="password" placeholder="Digite sua senha" />
                <br />
                <ButtonsBlock>

                    <Link to="/users/newuser"><a id="createUser">Criar Conta</a></Link>
                    <br />
                    <Link to="/products"><button id="entrar" type="submit">Entrar</button></Link>

                </ButtonsBlock>
               
            </LoginBlock>
        </Container>
    )
}
