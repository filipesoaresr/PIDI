import { FormEvent, useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { ProductContext } from '../../../contexts/ProductContext';
import { api } from '../../../services/api';
import { BsFillPlusSquareFill } from 'react-icons/bs';
import { useHistory } from "react-router-dom";
import {
    Container,
    Form,
    MainSection,
    ImageSection,
    FormProductBlock
} from './styles';

export default function NewProductPage() {


    const {
        product_type,
        setProductType,
        name,
        setName,
        colection,
        setColection,
        date,
        setDate,
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

    const history = useHistory();


    async function handleCreateNewProduct(event: FormEvent) {
        event.preventDefault();

        const data = {
            product_type,
            name,
            colection,
            date,
            value,
            pp,
            p,
            m,
            g,
            gg
        };

        await api.post('/products', data)
        alert("Cadastro Realizado com Sucesso!")
        getProducts()
        history.push("/products")
    }

    function handlResetFields() {
        setProductType("")
        setName(""),
        setColection(""),
        setDate(""),
        setValue(0),
        setPP(0),
        setP(0),
        setM(0), 
        setG(0),
        setGG(0)
    }

    return (
        <Container>
            <Form>
                <h1>Novo Produto</h1>

                <FormProductBlock>
                    <MainSection>
                        <p>Tipo de Produto:</p>
                        <select value={product_type} onChange={event => setProductType(event.target.value)}>
                            <option value="Camisa">Camisa</option>
                            <option value="Boné">Boné</option>
                            <option value="Casaco">Casaco</option>
                            <option value="Caneca">Caneca</option>
                            <option value="Chaveiro">Chaveiro</option>
                            <option value="Garrafa">Garrafa</option>
                            <option value="Action Figure">Action Figure</option>
                        </select>

                        <p>Nome do Produto:</p>
                        <input
                            type="text"
                            placeholder="Nome do Produto"
                            value={name}
                            onChange={event => setName(event.target.value)}
                        />

                        <p>Coleção:</p>
                        <input
                            type="text"
                            value={colection}
                            onChange={event => setColection(event.target.value)}
                        />

                        <p>Data do Cadastro: </p>
                        <input
                            type="date"
                            value={date}
                            onChange={event => setDate(event.target.value)}
                        />

                        <p>Quantidade/Tamanho</p>
                        <label>
                            PP: <input
                                className='size-qtd'
                                type="number"
                                value={pp}
                                onChange={event => setPP(Number(event.target.value))}
                            />
                        </label>

                        <label>
                            P: <input
                                className='size-qtd'
                                type="number"
                                value={p}
                                onChange={event => setP(Number(event.target.value))}
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
                <br />
                <Link to="/products"><button id="buttonCancel" type="reset" onClick={() => handlResetFields()}>Cancelar</button></Link>
                &nbsp;
                &nbsp;  
                <button id="buttonRegister" type="submit" onClick={handleCreateNewProduct}> Cadastrar <BsFillPlusSquareFill/></button>
            </Form>
        </Container>
    )
} 
