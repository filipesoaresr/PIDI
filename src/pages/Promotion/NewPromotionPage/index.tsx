import React, { FormEvent, useState } from 'react'
import { Link } from 'react-router-dom';
import { api } from '../../../services/api';
import { Container,Form, MainSection, AddProductSection, FormBlock } from './styles'

export default function NewPromotionPage() {


    const [name, setName] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [discount, setDiscount] = useState('');

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
                <h3>Nova Promoção</h3>
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


                        <p>Fim da Promoção</p>
                        <input 
                        type="date" 
                        value={endDate}
                        onChange={event => setEndDate(event.target.value)}
                        />

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
                        
                    </AddProductSection>
                    <br />               
                </FormBlock>

                <Link to="/promotions"><button id="buttonCancel" type="reset">Cancelar</button></Link>  <button id="form-btn" type="submit" onClick={handleCreateNewPromotion}>Cadastrar</button>

            </Form>


        </Container>
    )
}
