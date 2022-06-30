import React, { FormEvent, useContext, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { api } from '../../../services/api';
import { PaymentContext } from '../../../contexts/PaymentContext';
import { toast } from 'react-toastify'
import { 
    Container,
    Form, 
    MainSection, 
    ImageSection, 
    FormPaymentBlock } from './styles';
import { BsFillPlusSquareFill } from 'react-icons/bs';

export default function NewPaymentOption() {

    const {
        name,
        setName,
        flag,
        setFlag,
        installment,
        setInstallment,
        getPaymentOptions
    } = useContext(PaymentContext)

    const history = useHistory();

    async function handleCreateNewPayment(event: FormEvent) {
        event.preventDefault();

        if(!name || !flag || !installment){
            console.log(name)
            console.log(flag)
            console.log(installment)
            return  toast.error('Campos obrigatórios não preenchidos!');
        }

        const data = {
            name,
            flag,
            installment
        };

        await api.post('/payment_options', data)
        toast.success('Opção de pagamento criada com sucesso!');
        getPaymentOptions()
        history.push("/paymentoption")

    }


    return (
        <Container>
            <Form>
                <h1>Nova Opção de Pagamento</h1>

                <FormPaymentBlock>
                    <MainSection>
                    <p>Nome da Opção de Pagamento:</p>
                        <input 
                        type="text" 
                        placeholder="Nome da Opção de Pagamento" 
                        value={name}
                        onChange={event => setName(event.target.value)}
                        />

                       <p>Bandeira:</p>
                        <select value={flag} onChange={event => setFlag(event.target.value)}>
                            <option></option>
                            <option value="Visa">Visa</option>
                            <option value="Mastercard">Mastercard</option>
                            <option value="Elo">Elo</option>
                            <option value="Hipercard">Hipercard</option>
                            <option value="Diners Club">Diners Club</option>
                            <option value="American Express">American Express</option>
                            <option value="Todas">Todas</option>
                            <option value="Nenhuma">Nenhuma</option>
                        </select>

                        {/* Campo Será gerado Automaticamente */}
                        {/* <p>Código da Froma de Pagamento:</p>
                        <input 
                        type="text" 
                        placeholder="Nome da Opção de Pagamento" 
                        value={id}
                        onChange={event => setId(event.target.value)}
                        /> */}

                        <p>Parcelamento:</p>
                        <select value={installment} onChange={event => setInstallment(event.target.value)}>
                            <option></option>
                            <option value="1x">A Vista</option>
                            <option value="2x">Até 2x</option>
                            <option value="3x">Até 3x</option>
                            <option value="4x">Até 4x</option>
                            <option value="5x">Até 5x</option>
                            <option value="6x">Até 6x</option>
                            <option value="7x">Até 7x</option>
                            <option value="8x">Até 8x</option>
                            <option value="9x">Até 9x</option>
                            <option value="10x">Até 10x</option>
                            <option value="11x">Até 11x</option>
                            <option value="12x">Até 12x</option>
                        </select>


                    </MainSection>
                    <ImageSection> 
                        <img src="https://i.pinimg.com/originals/fe/7f/4b/fe7f4b418e2778863247a7dcc6aed421.png" alt="" />
                    </ImageSection>
                    

                </FormPaymentBlock>
                <br/>
                <Link to='/paymentoption'> <button id="buttonCancel" type="reset">Cancelar</button></Link> 
                &nbsp;
                &nbsp;
                <button id="buttonRegister" type="submit" onClick={(event) => handleCreateNewPayment(event)}>Cadastrar <BsFillPlusSquareFill/></button>
            </Form>
        </Container>
    )
}
