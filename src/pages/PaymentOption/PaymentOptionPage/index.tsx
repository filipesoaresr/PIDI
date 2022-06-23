import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Table } from 'reactstrap';
import { Button } from 'reactstrap';
import { PaymentContext } from '../../../contexts/PaymentContext';
import { api } from '../../../services/api';
import { Container, PaymentIntro, PaymentTable} from './styles'

interface PaymentOption {
    id: string;
    name: string;
    flag: string;
    installment: string;
}

export default function PaymentOption(){

    const { payments, setId, setPayments } = useContext(PaymentContext)


    function updatePayment() {
        console.log("++++++++++++++++++++")
        api.get('/payment_options').then((response) => {
            console.log("++++++++++POS-REQUISIÇÃO++++++++++=", response.data)
            setPayments(response.data)
        })
    }

    async function handleDelete(id: string) {
        console.log(id)
        const delete_req = await api.delete(`/payment_options/${id}`)
        console.log(`/payment_options/${id}`)
        console.log(delete_req)
        updatePayment()

    }


    return (
        <Container>
           
            <PaymentIntro>
                <h1>Opções de Pagamento</h1>

                <input type='text' placeholder='Digite o Nome da Opção de Pagamento' />
                <br/>
                <button type='submit'>Consultar</button>
            </PaymentIntro>

            <PaymentTable>
                <Table bordered hover responsive >
                    <table className="content-table">
                    <thead>
                        <tr>
                            <th>
                                Código
                            </th>
                            <th>
                                Nome Opção de Pagamento
                            </th>
                            <th>
                                Bandeira
                            </th>
                            <th>
                                Parcelamento
                            </th>
                            <th>
                                Ações
                            </th>
                        </tr>
                    </thead>
                    <tbody>
<<<<<<< HEAD
                        {payments.map((payment: PaymentOption) => (
                            <tr key={payment.id}>
                                <th scope="row">
=======
                        {
                            payment.map((payment: PaymentOption) =>(
                                <tr key={payment.id}>
                                <td scope="row">
>>>>>>> c168524e6d6ea71b9a97c466c12f032ed57dbde2
                                    {payment.id}
                                </td>
                                <td>
                                    {payment.name}
                                </td>
                                <td>
                                    {payment.flag}
                                </td>
                                <td>
                                    {payment.installment}
                                </td>
                                <td id="actionsColumn">
                                    <Button id="deleteButton" variant="danger" size="sm" onClick={() => handleDelete(payment.id)}>Excluir</Button>
                                </td>
                            </tr>
                            ))
                        }
                    </tbody>
                    </table>
                </Table>

            </PaymentTable>

                     

            <Link to='/paymentoption/newpaymentoption'>
                <button type='button' className ="register">+ Cadastrar</button>
            </Link>
       </Container>
    )
}