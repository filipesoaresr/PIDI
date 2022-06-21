import React, { FormEvent, useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { ProductContext } from '../../../contexts/ProductContext';
import { PromotionContext } from '../../../contexts/PromotionContext';
import { api } from '../../../services/api';
import { Container,Form, MainSection, AddProductSection, FormBlock, SecondSection } from './styles'

import { Table } from 'reactstrap';
import { Button } from 'reactstrap';
import { BsCartFill, BsFillPlusSquareFill } from 'react-icons/bs';


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



export default function NewPromotionPage() {


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
            <h1>Nova Promoção</h1>
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
                <BsCartFill style={{ fontSize: "3rem", color: "black" }}></BsCartFill>
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
                        products.map((product: Product) => (
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
                                <td id="actionsColumn">                                     
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
                    <button id="buttonCancel" type="reset">Cancelar</button>
                </Link>
                &nbsp;
                &nbsp;
                <button id="buttonRegister" type="submit" onClick={handleCreateNewPromotion}>
                    Cadastrar <BsFillPlusSquareFill/>
                </button>
        

            </Form>


        </Container>
    )
}
