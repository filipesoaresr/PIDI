import  { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { ProductContext } from '../../../contexts/ProductContext';
import { PromotionContext } from '../../../contexts/PromotionContext';
import { Container, Form, MainSection, AddProductSection, FormBlock, SecondSection  } from './styles';
import { Table } from 'reactstrap';
import { Button } from 'reactstrap';
import { BsCartFill } from "react-icons/bs";
import { OrderContext } from '../../../contexts/OrderContext';
import { UserContext } from '../../../contexts/UserContext';
import { PaymentContext } from '../../../contexts/PaymentContext';

interface IProductInOrder {
    product_name: string;
    pp?: number,
    p?: number,
    m?: number,
    g?: number,
    gg?:number,
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
    productType: string;
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

    const {
        name,
        setName,
        startDate,
        setStartDate,
        endDate,
        setEndDate,
        discount,
        setDiscount,
    } = useContext(PromotionContext)
    const { payments } = useContext(PaymentContext)
    const {getOneOrder, oneOrder, id, } = useContext(OrderContext)

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

   useEffect(() => {
    handleUserName()
    handlePaymentOption()
   }, [])

    return (
        <Container>

            <Form>
                <h2>Pedido</h2>

                <AddProductSection>
                    <BsCartFill style={{fontSize: "2.5rem"}}></BsCartFill>
                    <h5>Produtos do Pedido</h5>
                   
                        <Table bordered hover responsive >
                            <thead>
                                <tr>
                                    <th>
                                        Código
                                    </th>
                                    <th>
                                        Produto
                                    </th>
                                    <th>
                                        Tamanho/Qtd
                                    </th>
                                    <th>
                                        Promoção
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
                                {
                                    oneOrder.product_has_order.map((product: IProductInOrder) => (
                                        <tr key={product.fk_id_product}>
                                            <th scope="row">
                                                {product.fk_id_product}
                                            </th>
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
                                                {product.hasPromotion}
                                            </td>
                                            <td>
                                                <p>Total</p>
                                                {product.order_product_value}
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </Table>
                    </AddProductSection>

                    <FormBlock>

                    <MainSection>
                        <p>Data do Pedido:</p>
                        <p>{oneOrder.date_created}</p>

                        <p>Opçao de Pagamento</p>
                        <p>{orderPayment}</p>


                        <p>Parcelamento</p>
                        <p>{orderInstallment}</p>
                                              
                    </MainSection>

                    <SecondSection>

                    <p>Nome atendente:</p>
                    <p>{userName}</p>

                    <p>Número do Pedido:</p>
                    <p>{oneOrder.id}</p>    

                        
                    <p>Total do Pedido:</p>
                    <p>{oneOrder.total_value}</p>

                    
                    </SecondSection>

                    </FormBlock>

                <Link to="/order">
                    <button id="buttonCancel" type="reset">Voltar</button>
                </Link>
                <button id="registerSaleButton" type="submit">
                    Confirmar Venda
                </button>

            </Form>


        </Container>
    )
}