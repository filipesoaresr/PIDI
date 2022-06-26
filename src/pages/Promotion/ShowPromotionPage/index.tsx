import React, { FormEvent, useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { ProductContext } from '../../../contexts/ProductContext';
import { PromotionContext } from '../../../contexts/PromotionContext';
import { api } from '../../../services/api';
import { Container,Form, MainSection, AddProductSection, FormBlock, SecondSection } from './styles'

import { Table } from 'reactstrap';
import { Button } from 'reactstrap';
import { BsCartFill, BsFillPlusSquareFill } from 'react-icons/bs';
import { GiTShirt } from 'react-icons/gi';


interface IProductInPromotion {
    product_name: string;
    order_product_value: number,
    fk_id_product: string,
    hasPromotion: false,

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
    promotion: {    
        name: string;
    };
    value: string;
}



export default function ShowPromotionPage() {


  
    return (
        <Container>

            <Form>
            <h1>Promoção</h1>
                <FormBlock>
                    <MainSection>


                        Codigo da Promoção: <input placeholder="Codigo" disabled={true}/>
                        <br/>
                        <br/>
                        Nome da Promoção: <input placeholder="Nome da Promoção" disabled={true} />
                        <br/>
                        <br/>
                        Vendas: <input placeholder="Nome da Promoção" disabled={true} />

                    </MainSection>

                    <SecondSection>

                        Inicio da Promoção: <input disabled={true}/>
                        <br/>
                        <br/>
                        Fim da Promoção: <input  disabled={true}/>
                        <br/>
                        <br/>
                        Desconto: <input disabled={true}/>

                    </SecondSection>
                </FormBlock>
                


                <AddProductSection>
                <GiTShirt style={{ fontSize: "3rem", color: "black" }}></GiTShirt>
                <h5>Produtos</h5>
                <br />
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
                            Valor com desconto
                        </th>
                    </tr>
                </thead>

                <tbody>
                    
                            <tr >
                                <td >
                                    
                                </td>
                                <td>
                                   
                                </td>
                                <td>
                                  
                                </td>
                                <td>                                     
                            

                                </td>
                            </tr>
                      
                </tbody>
                </table>
                </Table>
                </AddProductSection>
                <br /> 
                <Link to="/promotions">
                    <button id="buttonCancel" type="reset">Voltar</button>
                </Link>
            </Form>


        </Container>
    )
}