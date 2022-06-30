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

    const {onePromotion} = useContext(PromotionContext)
  
    return (
        <Container>

            <Form>
            <h1>Promoção</h1>
                <FormBlock>
                    <MainSection>
                        {console.log("====UMA UNICA PROMOÇÃO====", onePromotion)}

                        Inicio da Promoção: <p>{onePromotion.start_date.split("T")[0]}</p>
                       
                        <br/>
                        <br/>
                        
                        Nome da Promoção: <p>{onePromotion.name}</p>
                    </MainSection>

                    <SecondSection>

                        Fim da Promoção:
                        {
                            onePromotion.end_date ? 
                            <p>{onePromotion.end_date.split("T")[0]}</p> :
                            <p>Ainda sem data final</p>
                        } 
                        <br/>
                        <br/>
                        Desconto:
                        <p id="discount">{onePromotion.discount}%OFF</p> 
                        
                        <br/>
                       

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
                            Tipo do Produto
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
                    {
                        onePromotion.products.map((product: any) => (
                        <tr >
                            <td >
                                {product.name}
                            </td>
                            <td>
                               {product.product_type}
                            </td>
                            <td>
                              R${product.value}
                            </td>
                            <td>                                     
                                R${(product.value / 100 ) * (100 - Number(onePromotion.discount)) }
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
            </Form>


        </Container>
    )
}