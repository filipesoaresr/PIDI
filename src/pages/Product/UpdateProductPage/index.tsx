import React, { FormEvent, useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { ProductContext } from '../../../contexts/ProductContext';
import { api } from '../../../services/api';
import { useHistory } from "react-router-dom";

import { 
    Container,
    Form, 
    MainSection, 
    ImageSection, 
    FormProductBlock } from './styles';


interface Product {
    _id: string;
    productType: string;
    name: string;
    collection: string;
    dateCreated: string;
    pp: number;
    p: number;
    m: number;
    g: number;
    gg: number;
    promotion: string;
    value: number;
}



export default function UpdateProductPage() {

    //const [products, setProducts] = useState();
    //const [id, setId] = useState('')
    const history = useHistory();

    const {
        id,
        value,
        setValue,
        pp,
        setPP,
        p,
        setP,
        m,
        setM,
        g,
        setG,
        gg,
        setGG,
        getProducts 
    } = useContext(ProductContext)



    async function handleUpdate(event: FormEvent, id: string) {

        event.preventDefault();

       const dataUpdated = {
           value,
           pp,
           p,
           m,
           g,
           gg
       }

        console.log(dataUpdated)
        await api.put(`/products/${id}`, dataUpdated)
        getProducts()
        history.push("/products")
        
    }



    return (
        <Container>
            <Form>
                <h1>Alterar Produto</h1>

                <FormProductBlock>
                    <MainSection>
                    <p>Tipo de Produto:</p>
                        <input>
                        </input>

                        <p>Nome do Produto:</p>
                        <input/>

                        <p>Coleção:</p>
                        <input
                            type="text"
                        />

                        <p>Data do Cadastro: </p>
                        <input
                            type="date"
                        />

                        <p>Quantidade/Tamanho</p>
                        <label>
                            PP: <input 
                            className='size-qtd' 
                            type="number" 
                            value={pp}
                            onChange={event => setP(Number(event.target.value))}
                            />
                        </label>

                        <label>
                            P: <input 
                            className='size-qtd' 
                            type="number"
                            value={p}
                            onChange={event => setPP(Number(event.target.value))} 
                            />
                        </label>

                        <label>
                            M: <input 
                            className='size-qtd' 
                            type="number"
                            value={m}
                            onChange={event => setM(Number(event.target.value))} 
                            />
                        </label>

                        <label>
                            G: <input 
                            className='size-qtd' 
                            type="number"
                            value={g}
                            onChange={event => setG(Number(event.target.value))} 
                            />
                        </label>

                        <label>
                            GG: <input 
                            className='size-qtd' 
                            type="number"
                            value={gg}
                            onChange={event => setGG(Number(event.target.value))} 
                            />
                        </label>


                        <p>Valor:</p>
                        <input
                        //id='value-input' 
                        type="number" 
                        value={value}
                        onChange={event => setValue(Number(event.target.value))}
                        />
                    </MainSection>

                    <ImageSection>
                        <img src="https://i.pinimg.com/originals/fe/7f/4b/fe7f4b418e2778863247a7dcc6aed421.png" alt="" />
                    </ImageSection>

                </FormProductBlock>
                <br/>
                <Link to="/products"><button id="buttonCancel" type="reset">Cancelar</button></Link> 
                &nbsp;
                <button id="buttonRegister" type="submit" onClick={(event) => { handleUpdate(event, id) }}>
                    Alterar
                </button>

            </Form>
        </Container>
    )
}
