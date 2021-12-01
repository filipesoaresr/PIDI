import React from 'react'
import { Link } from 'react-router-dom';

import { Container,Form, MainSection, AddProductSection, FormBlock } from './styles'

export default function UpdatePromotionPage() {
    return (
        <Container>

            <Form>
                <h3>Nova Promoção</h3>
                <FormBlock>
                    <MainSection>

                        <p>Nome da Promoção:</p>
                        <input type="text" placeholder="Nome da Promoção" />

                        <p>Inicio da Promoção:</p>
                        <input type="date" />


                        <p>Fim da Promoção</p>
                        <input type="date" />

                        <p>Desconto</p>
                        <select >
                            <option value="70">70% OFF</option>
                            <option value="60">60% OFF</option>
                            <option value="50">50% OFF</option>
                            <option value="30">30% OFF</option>
                            <option value="20">20% OFF</option>
                            <option value="10">10% OFF</option>
                        </select>
                    </MainSection>

                    <AddProductSection>
                        <h5>Incluir Produtos:</h5>

                        <p>Nome do Produto:</p>
                        <input type="text" />
                        <br />
                        <button id="AddProduct-btn" type="submit" >Consultar</button>
                    </AddProductSection>
                    <br />               
                </FormBlock>

                <Link to="/promotions"><button id="buttonCancel" type="reset">Cancelar</button></Link>  <button id="form-btn" type="submit" >Cadastrar</button>

            </Form>


        </Container>
    )
}
