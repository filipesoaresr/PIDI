import React from 'react'
import { Container, SalesIntro, Form } from './styles'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap';

export default function SalesPage() {

    return (
        <Container>
            <Form>

                <SalesIntro>

                    <h1>Listagem de Vendas</h1>

                    <p>Data Inicial:</p>
                    <input type='date' />

                    <p>Data Final:</p>
                    <input type='date' />

                </SalesIntro>

                <Link to='/sales/salespage'>
                    <button type='button' className="register">Gerar Listagem</button>
                </Link>

            </Form>
        </Container>
    )
}
