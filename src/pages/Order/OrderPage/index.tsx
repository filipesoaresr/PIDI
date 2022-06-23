import React, { useContext, useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Table } from 'reactstrap';
import { Button } from 'reactstrap';
import { OrderContext } from '../../../contexts/OrderContext';
import { ProductContext } from '../../../contexts/ProductContext';
import { api } from '../../../services/api';
import { Container, OrderIntro, OrderTable } from './styles'



interface  IOrder{
    id: string
    fk_id_payment_options: string
    fk_id_user: string;
    dateSubmitted: Date;
    total_value: number;
    is_open: boolean;
    product_has_order: IProductInOrder[];
}

interface IProductInOrder {
    product_name: string;
    pp?: number,
    p?: number,
    m?: number,
    g?: number,
    gg?:number,
    order_product_value: number,
    fk_id_product?: string,
    hasPromotion?: false,
}

export default function OrderPage() {

    const history = useHistory();

    const { orders, isOpen, getOrders, setOneOrder, setId, id, getOneOrder } = useContext(OrderContext);

    async function handleOrderID(idOrder: string) {
        console.log("ID A SER TRANSFERIDA", idOrder)
        setId(idOrder)
        console.log("ID DO ESTADO NA FUNCTION SETID", id)
        getOneOrder(idOrder)
        setTimeout(() =>{
            history.push("/order/showorder")     
        }, 500)
    }

    async function handleDelete(id: string) {
        await api.delete(`/orders/${id}`)
        getOrders()
        console.log("TENTANDO DELETAR", orders)
    }


    

    return (
        <Container>
           {console.log("====ORDERS=====",orders)}
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
                    {
                        orders.map((order: IOrder) => (
                            <tr key={order.id}>
                                <td>
                                    {order.id}
                                </td>
                                <td>
                                    {order.product_has_order.map((product) => (
                                        <p>{product.product_name}</p>
                                    ))
                                    }
                                </td>
                                <td>
                                    {order.is_open ? "Em andamento" : "Finalizado"}
                                </td>
                                <td>
                                    {order.total_value}
                                </td>
                                <td>
                                    
                                        <Button id="showButton" variant="primary" size="sm" onClick={() => handleOrderID(order.id)}>
                                            Exibir
                                        </Button>
                                    

                                    <Link to='/order/updateorder' >
                                        <Button id="updateButton" variant="primary" size="sm">
                                            Alterar
                                        </Button>
                                    </Link>
                                
                                    <Button id="deleteButton" variant="danger" size="sm" onClick={() => handleDelete(order.id)}>
                                        Excluir
                                    </Button>
                                </td>
                            </tr>
                            ))
                        }

                    </tbody>
                </Table>
            </OrderTable>




            <Link to='/order/neworder'>
                <button type='button' className="register">+ Cadastrar</button>
            </Link>
        </Container>
    )
}
