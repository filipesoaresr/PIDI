import  { FormEvent, useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { Container, ErrorIntro } from './styles'

export default function ErrorUnauthorizedPage() {
    <Container>

    <ErrorIntro>
    <h1>401</h1>
    
    <h3>Você necessita de autorização para acessar a página!</h3>
    <br />
    <Link to='/'>
        <button type='button' id="backButton">Voltar</button>
    </Link>
    </ErrorIntro>

</Container>
}