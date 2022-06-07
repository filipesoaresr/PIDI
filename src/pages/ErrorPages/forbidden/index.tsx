import  { FormEvent, useContext, useState } from 'react'
import { Button } from 'reactstrap';
import { api } from '../../../services/api';
import { Link } from 'react-router-dom'
import { Container, ErrorIntro } from './styles'

export default function ErrorForbiddenPage() {

    <Container>

            <ErrorIntro>
            <h1>403</h1>
            
            <h3>Desculpe o seu usuário não está autorizado a acessar essa página!</h3>
            <br />
            <Link to='/'>
                <button type='button' id="backButton">Voltar</button>
            </Link>
            </ErrorIntro>

        </Container>
    
}