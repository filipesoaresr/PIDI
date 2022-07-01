import  { FormEvent, useContext, useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { ProductContext } from '../../../contexts/ProductContext';
import { PromotionContext } from '../../../contexts/PromotionContext';
import { Container, Form, MainSection, AddProductSection, FormBlock, SecondSection  } from './styles';
import { Table } from 'reactstrap';
import { Button } from 'reactstrap';
import { BsCartFill } from "react-icons/bs";
import { OrderContext } from '../../../contexts/OrderContext';
import { UserContext } from '../../../contexts/UserContext';
import { PaymentContext } from '../../../contexts/PaymentContext';
import { api } from '../../../services/api';
import { toast } from 'react-toastify';

interface IProductInOrder {
    product_name: string;
    product_type: string;
    pp: number,
    p: number,
    m: number,
    g: number,
    gg:number,
    order_product_value: number,
    fk_id_product: string,
    hasPromotion: false,

}

interface Payment {
    id: string;
    name: string;
    flag?: string;
    installment: string;
}
interface Product {
    id: string;
    product_type: string;
    name: string;
    collection: string;
    dateCreated: string;
    pp: number;
    p: number;
    m: number;
    g: number;
    gg: number;
    promotion: string;
    value: number;
}

export default function ShowOrderPage() {

    const history = useHistory();

    const {
        promotions
    } = useContext(PromotionContext)
    const { payments } = useContext(PaymentContext)
    const { oneOrder, id, isOpen, setIsOpen, getOrders } = useContext(OrderContext)

    const [userName, setUserName] = useState('');
    const [orderPayment, setOrderPayment] = useState('');
    const [orderInstallment, setOrderInstallment] = useState('');

    const { users } = useContext(UserContext)
    const { products } = useContext(ProductContext)



   function handleUserName(){
        users.map((user: Product) => {
            if(user.id == oneOrder.fk_id_user){
                setUserName(user.name);
            }
        })
    
   }

   function handlePaymentOption(){
    payments.map((payment: Payment) => {
        if(payment.id == oneOrder.fk_id_payment_options){
            setOrderPayment(payment.name);
            setOrderInstallment(payment.installment)
        }
    })
    return console.log(orderPayment)
}

async function handleUpdate(event: FormEvent, id: string) {

    event.preventDefault();

   const dataUpdated = {
       is_open: false,
       date_submitted: new Date().toISOString(),
   }

    console.log(dataUpdated)
    await api.put(`/sales/${id}`, dataUpdated).then(response => {
        console.log("RESPOSTA AO CONFIRMAR VENDA", response.data)
        if (response.data.status === 'erro') {
            return toast.error('Algum produto esta em falta no estoque, Por favor faça um novo pedido');
        }else {

            toast.success('Venda do pedido realizada com sucesso!');
            getOrders()
            history.push("/order")
        }
    })
    
}

   useEffect(() => {
    handleUserName()
    handlePaymentOption()
   }, [])

    return (
        <Container>

            <Form>
                <h2>Pedido</h2>

                <AddProductSection>
                    <BsCartFill style={{fontSize: "2.5rem", color: "black"}}></BsCartFill>
                    <h5>Produtos do Pedido</h5>
                   
                        <Table bordered hover responsive >
                        <table className="content-table">
                            <thead>
                                <tr>
                                    <th>
                                        Tipo do Produto
                                    </th>
                                    <th>
                                        Produto
                                    </th>
                                    <th>
                                        Tamanho/Qtd
                                    </th>
                                    <th>
                                        Valor
                                    </th>
                                    <th>
                                        Total
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                {console.log("ID DO ESTADO NA PAGINA SHOW ORDER", id)}
                                {console.log("====ONE ORDER=====", oneOrder)}
                                {console.log("====ONE ORDER IS OPEN=====", oneOrder.is_open)}
                                {
                                    oneOrder.product_has_order.map((product: IProductInOrder) => (
                                        <tr key={product.fk_id_product}>
                                             <td>
                                                {product.product_type}
                                            </td>
                                            <td>
                                                {product.product_name}
                                            </td>
                                            <td>
                                               <p>PP : {product.pp}</p>
                                               <p>P : {product.p}</p>
                                               <p>M : {product.m}</p>
                                               <p>G : {product.g}</p>
                                               <p>GG : {product.gg}</p>
                                            </td>
                                            <td>
                                                {product.order_product_value / Number((product.pp + product.p + product.m + product.g + product.gg))}
                                            </td>
                                            <td>
                                                {product.order_product_value}
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                            </table>
                        </Table>
                    </AddProductSection>

                    <FormBlock>

                    <MainSection>
                        <label>Data do Pedido</label>
                        <p>{oneOrder.date_created.split("T")[0]}</p>
                        
                        <label>Opçao de Pagamento</label>
                        <p>{orderPayment}</p> 
                    </MainSection>

                    <SecondSection>
                        <label>Nome atendente</label>
                        <p>{userName}</p>         

                        <label>Parcelamento</label>
                        <p id="showOrder">{orderInstallment}</p>
                    </SecondSection>
                    
                    </FormBlock>
                    <div id="totalOrder">
                    <label>Total do Pedido:</label>
                    <p>R${oneOrder.total_value}</p>
                    </div>

                <Link to="/order">
                    <button id="buttonCancel" type="reset">Voltar</button>
                </Link>
                &nbsp;
                &nbsp;
                {
                oneOrder.is_open ? 
                <button id="registerSaleButton" type="submit" onClick={(event) => handleUpdate(event, id)}>
                    Confirmar Venda
                </button>
                :
                ""
                }

            </Form>


        </Container>
    )
}