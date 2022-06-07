import  { FormEvent, useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { Container, ErrorIntro } from './styles'

export default function ErrorRequestPage() {

    <Container>

            <ErrorIntro>
            <h1>400</h1>
            
            <h3>Está página não está funcionando corretamente no momento!</h3>
            <br />
            <Link to='/'>
                <button type='button' id="backButton">Voltar</button>
            </Link>
            </ErrorIntro>

        </Container>
    
}