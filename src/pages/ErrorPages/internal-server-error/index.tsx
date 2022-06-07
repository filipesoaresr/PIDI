import  { useContext, useState } from 'react'
import { Button } from 'reactstrap';
import { api } from '../../../services/api';
import { Link } from 'react-router-dom'
import { Container, ErrorIntro } from './styles'

export default function ErrorServerPage() {

    return (
        <Container>

            <ErrorIntro>
            <img src="https://i.pinimg.com/originals/fe/7f/4b/fe7f4b418e2778863247a7dcc6aed421.png" alt="" />
            
            <h1>500</h1>
            
            <h3>Desculpe nós estamos passando por problemas internos no servidor. Por favor tente novamente mais tarde!</h3>
            <br />
            <Link to='/'>
                <button type='button' id="backButton">Voltar</button>
            </Link>
            </ErrorIntro>

        </Container>

    )
}
