import React, { useContext, useEffect, useState } from 'react'
import { Container, PromoIntro, PromoDisplay } from './styles'
import Promotion from '../../../components/Promotion'
import { Link } from 'react-router-dom'
import { api } from '../../../services/api';
import { PromotionContext } from '../../../contexts/PromotionContext';

interface PromotionPage {
    id: string,
    name: string,
    //startDate: Date,
    endDate: Date,
    discount: string,
    products: [],
    //PromotionHasProduct: []
}

interface PromotionPageProps {
    promotions: PromotionPage[];
}

export default function PromotionsPage() {

    
    const {promotions} = useContext(PromotionContext);

    return (
        <Container>
            <PromoIntro>
                <div className="container">
                    <div className="child">
                        <h1>Promoções</h1>

                        <input type='text' placeholder='Digite o Nome da Promoção' />
                        <br/>
                        <button type='submit'>Consultar</button>
                    </div>
                </div>
            </PromoIntro>
                {console.log("PROMOTIONS", promotions)}
            <PromoDisplay>
                {
                    promotions.map((promotion: PromotionPage) => (
                        <Promotion
                            _id={promotion.id}
                            name={promotion.name}
                            endDate={promotion.endDate}
                            discount={promotion.discount}
                            products={promotion.products}
                        />
                    ))
                }
                
            </PromoDisplay>
            
            <Link to='/promotion/newpromotion'>
                <button type='submit' className ="register">+ Cadastrar</button>
            </ Link>

        </Container>
    )
}
