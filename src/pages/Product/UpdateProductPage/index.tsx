import React, { FormEvent, useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { ProductContext } from '../../../contexts/ProductContext';
import { api } from '../../../services/api';
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
    value: string;
}



export default function UpdateProductPage() {

    //const [products, setProducts] = useState();
    //const [id, setId] = useState('')

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
        setGG 
    } = useContext(ProductContext)



    async function handleUpdate(id: string) {

        
       const dataUpdated = {
           value,
           pp,
           p,
           m,
           g,
           gg
       }

        console.log(dataUpdated)
        api.put(`/products/${id}`, dataUpdated)
        
    }



    return (
        <Container>
            <Form>
                <h3>Alterar Produto</h3>

                <FormProductBlock>
                    <MainSection>

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
                        onChange={event => setValue(event.target.value)}
                        />
                    </MainSection>

                    <ImageSection>
                        <p>Imagem:</p>
                        <input id="image-input" type="image" alt="Imagem do Produto"/>
                        
                    </ImageSection>

                </FormProductBlock>
                <br/>
                <Link to="/products">
                    <button id="buttonCancel" type="reset">Cancelar</button>
                </Link> 
               
                    <button id="buttonRegister" type="submit" onClick={() => { handleUpdate(id) }}>
                        Alterar
                    </button>

            </Form>
        </Container>
    )
}
