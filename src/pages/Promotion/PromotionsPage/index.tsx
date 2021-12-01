import React from 'react'
import { Container, PromoIntro, PromoDisplay } from './styles'
import Promotion from '../../../components/Promotion'
import { Link } from 'react-router-dom'

export default function PromotionsPage() {
    return (
        <Container>
            <PromoIntro>
                <h1>Promoções</h1>

                <input type='text' placeholder='Digite o Nome da Promoção' />
                <br/>
                <button type='submit'>Consultar</button>
            </PromoIntro>
            
            <PromoDisplay>

                <Promotion/>
                <Promotion/>
                <Promotion/>

                <Promotion/>
                <Promotion/>
                <Promotion/>
                
            </PromoDisplay>
            
            <Link to='/promotion/newpromotion'>
            <button type='submit' className ="register">+ Cadastrar</button>
            </ Link>

        </Container>
    )
}
