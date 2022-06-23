import React, { FormEvent, useContext } from 'react'
import { BsCartFill } from 'react-icons/bs';
import { Button, Table } from 'reactstrap';
import { Link } from 'react-router-dom';
import { PromotionContext } from '../../../contexts/PromotionContext';
import { api } from '../../../services/api';

import { Container,Form, MainSection, AddProductSection, FormBlock, SecondSection} from './styles'
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

export default function UpdatePromotionPage() {

    const {
        id,
        name,
        setName,
        startDate,
        setStartDate,
        endDate,
        setEndDate,
        discount,
        setDiscount,
        getProducts
        } = useContext(PromotionContext)

        const { products } = useContext(ProductContext)

    function handleUpdate( id: string) {

        const dataUpdated = {
            name,
            startDate,
            endDate,
            discount,
        }

        console.log(dataUpdated)
        api.put(`/promotions/${id}`, dataUpdated)

    }


    return (
        <Container>

            <Form>
                <h1>Alterar Promoção</h1>
                <FormBlock>
                    <MainSection>

                        <p>Nome da Promoção:</p>
                        <input 
                        type="text" 
                        placeholder="Nome da Promoção" 
                        value={name}
                        onChange={event => setName(event.target.value)}
                        />

                        <p>Inicio da Promoção:</p>
                        <input 
                        type="date" 
                        value={startDate}
                        onChange={event => setStartDate(event.target.value)}
                        />


                     
                    </MainSection>

                    <SecondSection>

                        <p>Desconto</p>
                        <select value={discount} onChange={event => setDiscount(event.target.value)}>
                            <option value="70">70% OFF</option>
                            <option value="60">60% OFF</option>
                            <option value="50">50% OFF</option>
                            <option value="30">30% OFF</option>
                            <option value="20">20% OFF</option>
                            <option value="10">10% OFF</option>
                        </select>

                        <p>Fim da Promoção</p>
                        <input 
                        type="date" 
                        value={endDate}
                        onChange={event => setEndDate(event.target.value)}
                        />

                    </SecondSection>

                    </FormBlock>

                    <AddProductSection>
                    <BsCartFill style={{  fontSize: "3rem", color: "black" }}></BsCartFill>
                    <h5>Nome do Produto</h5>
                    <input type="text" />
                    <br />
                    <button id="searchButton">Consultar</button>
                    <Table bordered hover responsive>
                    <table className="content-table">
                    <thead>
                        <tr>
                            <th>
                                Produto
                            </th>
                            <th>
                                Promoção
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
                        {console.log(products)}
                        {
                            products.map((product: IProduct) => (
                                <tr >
                                    <td key={product.name}>
                                        {product.name}
                                    </td>
                                    <td>
                                        {product.promotion}
                                    </td>
                                    <td>
                                        {product.value}
                                    </td>
                                    <td>                                     
                                    <Button id="addProductButton" variant="primary" size="sm" >
                                        Incluir
                                    </Button>
                                       &nbsp;
                                       &nbsp; 
                                    <Button id="deleteProductButton" variant="primary" size="sm" >
                                            Excluir
                                    </Button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                    </table>
                </Table>
                    </AddProductSection>
                    <br />               

                <Link to="/promotions">
                    <button id="buttonCancel" type="reset">Voltar</button>
                </Link>
                &nbsp;
                &nbsp;
                <Link to="/promotions">   
                <button id="form-btn" type="submit" onClick={() => {handleUpdate(id)}}>Alterar</button>
                </Link>
            </Form>


        </Container>
    )
}
