import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Table } from 'reactstrap';
import { Button } from 'reactstrap';
import { ProductContext } from '../../../contexts/ProductContext';
import { api } from '../../../services/api';
import { Container, OrderIntro, OrderTable } from './styles'

export default function OrderPage() {
    return (
        <Container>
           
            <OrderIntro>
                <h1>Pedidos</h1>

                <input type='text' placeholder='Busque Aqui...' />
                <br/>
                <button type='submit'>Consultar</button>
            </OrderIntro>

            <OrderTable>
                
                <Table bordered hover responsive >
                    <thead>
                        <tr>
                            <th>
                                Nº do Pedido
                            </th>
                            <th>
                                Produto
                            </th>
                            <th>
                                Status
                            </th>
                            <th>
                                Valor
                            </th>
                            <th>
                                Ações
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                1616166
                            </td>
                            <td>
                                Camisa
                            </td>
                            <td>
                                Em andamento
                            </td>
                            <td>
                                168
                            </td>
                            <td>
                                <Link to='/order/updateorder' >
                                    <Button id="updateButton" variant="primary" size="sm">
                                        Alterar
                                    </Button>
                                </Link>
                                &nbsp;
                                &nbsp;
                                <Button id="deleteButton" variant="danger" size="sm">
                                    Excluir
                                </Button>
                            </td>
                        </tr>

                    </tbody>
                </Table>
            </OrderTable>




            <Link to='/order/neworder'>
                <button type='button' className="register">+ Cadastrar</button>
            </Link>
        </Container>
    )
}
