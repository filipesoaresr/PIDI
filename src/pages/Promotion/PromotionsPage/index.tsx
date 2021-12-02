import React, { useEffect, useState } from 'react'
import { Container, PromoIntro, PromoDisplay } from './styles'
import Promotion from '../../../components/Promotion'
import { Link } from 'react-router-dom'
import { api } from '../../../services/api';

interface Promotion {
    _id: string,
    name: string,
    startDate: Date,
    endDate: Date,
    discount: string,
}


export default function PromotionsPage() {

    const [promotions, setPromotions] = useState<Promotion[]>([])

    useEffect(() => {
        api.get('/promotions').then((response) => {
            setPromotions(response.data)
        })
    }, [])
    console.log(promotions)

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
                    promotions.map((promotion) => (
                        <Promotion
                            id={promotion._id}
                            name={promotion.name}
                            startDate={promotion.startDate}
                            endDate={promotion.endDate}
                            discount={promotion.discount}
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
