import  { FormEvent, useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { Container, ErrorIntro } from './styles'

export default function ErrorNotFoundPage() {
    
    <Container>

            <ErrorIntro>
            <h1>404</h1>
            
            <h3>Página não encontrada!</h3>
            <br />
            <Link to='/'>
                <button type='button' id="backButton">Voltar</button>
            </Link>
            </ErrorIntro>

        </Container>
}