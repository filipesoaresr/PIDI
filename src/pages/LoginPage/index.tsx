import { FormEvent, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { Container, LoginBlock, ButtonsBlock, UserImage } from './styles';

export default function LoginPage() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const { signIn } = useContext(AuthContext)

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();
        try {

            const data = {
                username,
                password,
            }

            await signIn(data);
            location.reload()
        }
        catch (error) {
            console.log(error)
        }
    }

    return (
        <Container>

            <LoginBlock>
                <UserImage>
                    <img src="https://i.pinimg.com/originals/ff/a0/9a/ffa09aec412db3f54deadf1b3781de2a.png" alt="" />
                </UserImage>
                <br />
                <h5>Usuário:</h5>
                <input type="text" value={username} onChange={event => setUsername(event.target.value)} placeholder="Digite seu username" />
                <br />
                <h5>Senha:</h5>
                <input type="password" value={password} onChange={event => setPassword(event.target.value)} placeholder="Digite sua senha" />
                <br />
                <ButtonsBlock>

                    <Link to="/users/newuser"><a id="createUser">Criar Conta</a></Link>
                    <br />
                    <button id="entrar" type="submit" onClick={(event) => handleSubmit(event)}>Entrar</button>

                </ButtonsBlock>

            </LoginBlock>
        </Container>
    )
}