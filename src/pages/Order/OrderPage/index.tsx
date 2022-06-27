import React, { useContext, useEffect, useState } from 'react'
import { BiCaretLeft, BiError } from 'react-icons/bi';
import { Link, useHistory } from 'react-router-dom'
import { toast } from 'react-toastify';
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
    const [ date, setDate ] = useState<Date>()
    const [ result, setResult ] = useState([])
    const [notFound, setNotFound] = useState(false)



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
        await api.delete(`/orders/${id}`).then((response) => {
            console.log("RESPOSTA DELETE", response)
            if(response.data.is_open ==  "Finalizado"){
                return toast.error('Esta venda não pode ser excluída!');
            }
            else {
                toast.success('Pedido excluído com sucesso!');
            }
        })
        getOrders()
        console.log("TENTANDO DELETAR", orders)
    }

    function handleSearch(date: any){
        const dateISO = date.toISOString()

        console.log("DAta", dateISO)
        api.get(`/orders/search/${dateISO}`).then(response => {
            console.log("DAta", response.data)
            setResult(response.data)

            if(response.data.length == 0) {
                setNotFound(true)
            }
            
        })
    }

    function handleGetBack(){
        setNotFound(false)
    }


    return (
        <Container>
           {console.log("====ORDERS=====",orders)}
            <OrderIntro>
                <h1>Pedidos</h1>

                <input type='date' placeholder='Busque Aqui...' onChange={(event) => setDate(new Date(event.target.value))}/>
                <br/>
                <button type='submit' onClick={() => handleSearch(date)}>Consultar</button>
            </OrderIntro>

            { result.length == 0 && notFound && (
                <div id="warningNotFound">
                    <p>PRODUTO NAO ENCONTRADO</p>
                    <BiError size="35" style={{color: "#F9DC5C", verticalAlign: 'middle', marginLeft: "1rem"}}/>

                </div>
                )
            }


                {result.length != 0 && (
                <OrderTable>
                <Table bordered hover responsive >
                    <table className="content-table">
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
                                Valor Pedido
                            </th>
                            <th>
                                Ações
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        result.map((order: IOrder) => (
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
                                    &nbsp;
                                    &nbsp;
                                    <Link to='/order/updateorder' >
                                        <Button id="updateButton" variant="primary" size="sm">
                                            Alterar
                                        </Button>
                                    </Link>
                                    &nbsp;
                                    &nbsp;
                                    <Button id="deleteButton" variant="danger" size="sm" onClick={() => handleDelete(order.id)}>
                                        Excluir
                                    </Button>
                                </td>
                            </tr>
                            ))
                        }
                    </tbody>
                    </table>
                </Table>
            </OrderTable>
            )}


            { result.length == 0 && !notFound && (
                <OrderTable>
                <Table bordered hover responsive >
                    <table className="content-table">
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
                                Valor Pedido
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
                    </table>
                </Table>
            </OrderTable>
            )}


            { result.length == 0 && notFound && (
                 <button type='button' className="getBack" onClick={() => handleGetBack()}>
                    <BiCaretLeft size="28" style={{color: "white", verticalAlign: 'middle'}}/>
                    Voltar
                </button>   
                )
            }

            <Link to='/order/neworder'>
                <button type='button' className="register">+ Cadastrar</button>
            </Link>
        </Container>
    )
}
