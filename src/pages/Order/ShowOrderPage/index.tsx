import  { FormEvent, useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { ProductContext } from '../../../contexts/ProductContext';
import { PromotionContext } from '../../../contexts/PromotionContext';
import { api } from '../../../services/api';
import { Container, Form, MainSection, AddProductSection, FormBlock, SecondSection  } from './styles';
import { Table } from 'reactstrap';
import { Button } from 'reactstrap';
import { BsCartFill } from "react-icons/bs";

interface Product {
    _id: string;
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
    value: string;
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

    const { products } = useContext(ProductContext)

    function handleCreateNewPromotion(event: FormEvent) {
        event.preventDefault();

        const data = {
            name,
            startDate,
            endDate,
            discount,
        };

        api.post('/promotions', data)
        alert("Cadastro Realizado com Sucesso!")
    }

    return (
        <Container>

            <Form>
                <h1>Pedido</h1>

                <AddProductSection>
                    <BsCartFill style={{fontSize: "2.5rem", color: "black"}}></BsCartFill>
                    <h5>Produtos do Pedido</h5>
                    <br />
                        <Table bordered hover responsive >
                            <table className="content-table">
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
                                {console.log(products)}
                                {
                                    products.map((product: Product) => (
                                        <tr key={product._id}>
                                            <td scope="row">
                                                {product._id}
                                            </td>
                                            <td>
                                                {product.name}
                                            </td>
                                            <td>
                                                Tamanho e quantidade
                                            </td>
                                            <td>
                                                {product.promotion}
                                            </td>
                                            <td>
                                                {product.value}
                                            </td>
                                            <td>
                                                Total
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
                    <p>Data do Pedido:</p>
                        <input
                            type="date"
                            placeholder="--/--/--"
                            value={name}
                            onChange={event => setName(event.target.value)}
                        />

                        <p>Opçao de Pagamento</p>
                        <select value={discount} onChange={event => setDiscount(event.target.value)}>
                            <option value="dinheiro">Dinheiro</option>
                            <option value="credito">Cartão Crédito</option>
                            <option value="debito">Cartão Débito</option>
                            <option value="pix">PIX</option>
                            <option value="picpay">Pic pay</option>
                            <option value="paypal">PayPal</option>
                        </select>


                        <p>Parcelamento</p>
                        <select value={discount} onChange={event => setDiscount(event.target.value)}>
                            <option value="vista">A vista</option>
                            <option value="2x">2x</option>
                            <option value="3x">3x</option>
                            <option value="4x">4x</option>
                            <option value="5x">5x</option>
                            <option value="6x">6x</option>
                            <option value="7x">7x</option>
                            <option value="8x">8x</option>
                            <option value="9x">9x</option>
                            <option value="10x">10x</option>
                            <option value="11x">11x</option>
                            <option value="12x">12x</option>
                        </select>
                                              
                    </MainSection>

                    <SecondSection>

                    <p>Nome atendente:</p>
                        <input
                            type="text"
                            placeholder="Digite seu nome"
                            value={name}
                            onChange={event => setName(event.target.value)}
                        />

                        <p>Número do Pedido:</p>
                        <input
                            type="text"
                            placeholder=""
                            value={name}
                            onChange={event => setName(event.target.value)}
                        />

                        
                    <p>Total do Pedido:</p>
                    <input
                        type="text"
                        placeholder=""
                        value={name}
                        onChange={event => setName(event.target.value)}
                    />

                    
                    </SecondSection>

                    </FormBlock>

                <Link to="/order">
                    <button id="buttonCancel" type="reset">Voltar</button>
                </Link>
                &nbsp;
                &nbsp;
                <button id="registerSaleButton" type="submit">
                    Confirmar Venda
                </button>

            </Form>


        </Container>
    )
}