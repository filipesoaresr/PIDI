import React from 'react'
import { Container, ReportIntro, Form } from './styles'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap';

export default function ReportPage() {
    return (
        <Container>
        <Form>

            <ReportIntro>

                <h1>Relatório Inteligente</h1>

                <p>Data Inicial:</p>
                <input type='date' />

                <p>Data Final:</p>
                <input type='date' />

            </ReportIntro>

            <Link to='/sales/salespage'>
                <button type='button' className="register">Gerar Listagem</button>
            </Link>

        </Form>
    </Container>
    )
}
