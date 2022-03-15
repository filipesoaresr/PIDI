import React, { FormEvent, useContext } from 'react'
import { Link } from 'react-router-dom';
import { PromotionContext } from '../../../contexts/PromotionContext';
import { api } from '../../../services/api';

import { Container,Form, MainSection, AddProductSection, FormBlock } from './styles'




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
        } = useContext(PromotionContext)

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
                <h3>Alterar Promoção</h3>
                <FormBlock>
                    <MainSection>

                        <p>Nome da Promoção:</p>
                        <input 
                        type="text"
                        placeholder="Nome da Promoção"
                        value={name}
                        onChange={(event) => setName(event.target.value)} />

                        <p>Inicio da Promoção:</p>
                        <input 
                        type="date"
                        value={startDate}
                        onChange={event => setStartDate(event.target.value)} />


                        <p>Fim da Promoção</p>
                        <input 
                        type="date"
                        value={endDate}
                        onChange={event => setEndDate(event.target.value)} />

                        <p>Desconto</p>
                        <select value={discount} onChange={event => setDiscount(event.target.value)}>
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

                <Link to="/promotions">
                    <button id="buttonCancel" type="reset">Cancelar</button>
                </Link>  
                <button id="form-btn" type="submit" onClick={() => {handleUpdate(id)}}>Alterar</button>
            </Form>


        </Container>
    )
}
