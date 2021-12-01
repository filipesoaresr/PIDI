import React from 'react'
import { Link } from 'react-router-dom'
import { Container, ProductIntro, ProductTable   } from './styles'

export default function OrderPage() {
    return (
        <Container>
           
            <ProductIntro>
                <h1>Pedidos</h1>

                <input type='text' placeholder='Busque Aqui...' />
                <br/>
                <button type='submit'>Consultar</button>
            </ProductIntro>

            <ProductTable>



            </ProductTable>

            <Link to='/order/neworder'>
                <button type='button' className ="register">+ Cadastrar</button>
            </Link>
       </Container>
    )
}
