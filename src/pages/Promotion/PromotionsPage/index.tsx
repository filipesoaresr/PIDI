import React, { useContext, useEffect, useState } from 'react'
import { Container, PromoIntro, PromoDisplay } from './styles'
import Promotion from '../../../components/Promotion'
import { Link } from 'react-router-dom'
import { api } from '../../../services/api';
import { PromotionContext } from '../../../contexts/PromotionContext';

interface PromotionPage {
    _id: string,
    name: string,
    startDate: Date,
    endDate: Date,
    discount: string,
}

interface PromotionPageProps {
    promotions: PromotionPage[];
}

export default function PromotionsPage() {

    
    const {promotions} = useContext(PromotionContext);

    return (
        <Container>
            <PromoIntro>
                <h1>Promoções</h1>

                <input type='text' placeholder='Digite o Nome da Promoção' />
                <br/>
                <button type='submit'>Consultar</button>
            </PromoIntro>
            
            <PromoDisplay>
                {
                    
                    promotions.map((promotion: PromotionPage) => (
                        <Promotion
                            _id={promotion._id}
                            name={promotion.name}
                            startDate={promotion.startDate}
                            endDate={promotion.endDate}
                            discount={promotion.discount}
                        />
                    ))
                }
                
            </PromoDisplay>
            
            <Link to='/promotion/newpromotion'>
                +<button type='submit' className ="register">+ Cadastrar</button>
            </ Link>

        </Container>
    )
}
