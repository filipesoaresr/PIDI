import { FormEvent, useContext, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { api } from '../../../services/api';
import { Container, Form, MainSection, AddProductSection, FormBlock, SecondSection } from './styles';
import { Table } from 'reactstrap';
import { Button } from 'reactstrap';
import { BsCartFill } from "react-icons/bs";
import { OrderContext } from '../../../contexts/OrderContext';
import { ProductContext } from '../../../contexts/ProductContext';

interface IProduct {
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

interface IProductHasOrder {
    id: string;
    name: string;
    collection: string;
    pp: number;
    p: number;
    m: number;
    g: number;
    gg: number;
    promotion: string;
    value: string;
}

interface  IOrder{
    id: string;
    dateCreated: Date;
    fk_id_payment_options: string
    fk_id_user: string;
    dateSubmitted: Date;
    totalValue: number;
    isOpen: boolean;
    installment: string;
    productHasOrder: [{}];
}

export default function NewOrderPage() {

    const history = useHistory();

    const {
       id,
       dateCreated,
       fk_id_payment_options,
       fk_id_user,
       dateSubmitted,
       totalValue,
       isOpen,
       installment,
       productHasOrder,
       getOrder      
    } = useContext(OrderContext)

    const { orders } = useContext(OrderContext)

    const { products } = useContext(ProductContext)

    function handleCreateNewOrder(event: FormEvent) {
        event.preventDefault();

        const data = {
            id,
            dateCreated,
            fk_id_payment_options,
            fk_id_user,
            dateSubmitted,
            totalValue,
            installment,
            isOpen,
            productHasOrder 
        };


        api.post('/orders', data)
        alert("Cadastro Realizado com Sucesso!")
        getOrder();
        history.push("/orders")
    }

    return (
        <Container>

            <Form>
                <h1>Novo Pedido</h1>

                <AddProductSection>
                    <BsCartFill style={{ fontSize: "2rem" }}></BsCartFill>
                    <h5>Nome do Produto</h5>
                    <input type="text" />
                    <br />
                    <button id="searchButton">Consultar</button>
                    <Table bordered hover responsive >
                        <thead>
                            <tr>
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
                                <th>
                                    Ações
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {console.log(products)}
                            {
                                products.map((product: IProduct) => (
                                    <tr key={product.name}>
                                        <td scope="row">
                                            {product.name}
                                        </td>
                                        <td>
                                            <label>
                                                PP: <input
                                                    className='size-qtd'
                                                    type="number"
                                                />
                                            </label>

                                            <label>
                                                P: <input
                                                    className='size-qtd'
                                                    type="number" 
                                                />
                                            </label>

                                            <label>
                                                M: <input
                                                    className='size-qtd'
                                                    type="number"
                                                />
                                            </label>

                                            <label>
                                                G: <input
                                                    className='size-qtd'
                                                    type="number"
                                                />
                                            </label>

                                            <label>
                                                GG: <input
                                                    className='size-qtd'
                                                    type="number"
                                                    
                                                />
                                            </label>

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
                                        <td>
                                            <Button id="addProductButton" variant="primary" size="sm" >Incluir</Button> 
                                            <Button id="deleteProductButton" variant="danger" size="sm" >Excluir</Button>
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
                        <input
                            type="date"
                            placeholder="--/--/--"
                        />

                        <p>Opçao de Pagamento</p>
                        <select>
                            <option value="dinheiro">Dinheiro</option>
                            <option value="credito">Cartão Crédito</option>
                            <option value="debito">Cartão Débito</option>
                            <option value="pix">PIX</option>
                            <option value="picpay">Pic pay</option>
                            <option value="paypal">PayPal</option>
                        </select>


                        <p>Parcelamento</p>
                        <select>
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
                        />

                        <p>Número do Pedido:</p>
                        <input
                            type="text"
                            placeholder=""
                        />


                        <p>Total do Pedido:</p>
                        <input
                            type="text"
                            placeholder=""
                        />


                    </SecondSection>

                </FormBlock>

                <Link to="/order"><button id="buttonCancel" type="reset">Voltar</button></Link> <button id="form-btn" type="submit" onClick={handleCreateNewOrder}>Cadastrar
                </button>

            </Form>


        </Container>
    )
}