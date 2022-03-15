import { FormEvent, useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { ProductContext } from '../../../contexts/ProductContext';
import { api } from '../../../services/api';
import { 
    Container,
    Form, 
    MainSection, 
    ImageSection, 
    FormProductBlock } from './styles';

export default function NewProductPage() {

   
   const {
    productType,
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
    setGG 
   } = useContext(ProductContext)

    function handleCreateNewProduct(event: FormEvent) {
        event.preventDefault();

        const data = {
            productType,
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

        api.post('/products', data)
        alert("Cadastro Realizado com Sucesso!")
    }
 

    return (
        <Container>
            <Form>
                <h3>Novo Produto</h3>

                <FormProductBlock>
                    <MainSection>
                        <p>Tipo de Produto:</p>
                        <select value={productType} onChange={event => setProductType(event.target.value)}>
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
                        onChange={event =>setDate(event.target.value)}
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
                        <p>Imagem:</p>
                        <input id="image-input" type="image" alt="Imagem do Produto"/>
                        
                    </ImageSection>

                </FormProductBlock>
                <br/>
                <Link to="/products">
                    <button id="buttonCancel" type="reset">Cancelar</button>
                </Link> 
                <button id="buttonRegister" type="submit" onClick={handleCreateNewProduct}>
                    Cadastrar
                </button>
            </Form>
        </Container>
    )
}
