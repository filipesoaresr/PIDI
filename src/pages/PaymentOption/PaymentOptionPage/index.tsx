import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Table } from 'reactstrap';
import { Button } from 'reactstrap';
import { api } from '../../../services/api';
import { Container, PaymentIntro, PaymentTable} from './styles'

interface PaymentOption {
    _id: string;
    name: string;
    flag: string;
    installment: string;
}



export default function PaymentOption(){

    const [paymentOptions, setPaymentOptions] = useState<PaymentOption[]>([])

    useEffect(() => {
        api.get('/payment-options').then(response => {
            setPaymentOptions(response.data.paymentOption)
        })
    }, [])
    console.log(paymentOptions)


    async function handleDelete(id: any) {
        api.delete(`/payment-options/${id}`)
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
                    <thead>
                        <tr>
                            <th>
                                Código
                            </th>
                            <th>
                                Nome da Forma de Pagamento
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
                        {paymentOptions.map(paymentOption => (

                            <tr key={paymentOption._id}>
                                <th scope="row">
                                    {paymentOption._id}
                                </th>
                                <td>
                                    {paymentOption.name}
                                </td>
                                <td>
                                    {paymentOption.flag}
                                </td>
                                <td>
                                    {paymentOption.installment}
                                </td>
                                <td>
                                    <Button id="deleteButton" variant="danger" size="sm" onClick={() => handleDelete(paymentOption._id)}>Excluir</Button>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </Table>
            </PaymentTable>

            <Link to='/paymentoption/newpaymentoption'>
                <button type='button' className ="register">+ Cadastrar</button>
            </Link>
       </Container>
    )
}