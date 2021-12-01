import React, { FormEvent, useState } from 'react'
import { Link } from 'react-router-dom';
import { 
    Container,
    Form, 
    MainSection, 
    ImageSection, 
    FormProductBlock } from './styles';

export default function UpdateProductPage() {

   
    const [value, setValue] = useState(0);
    const [qtdPP, setQtdPP] = useState(0);
    const [qtdP, setQtdP] = useState(0);
    const [qtdM, setQtdM] = useState(0);
    const [qtdG, setQtdG] = useState(0);
    const [qtdGG, setQtdGG] = useState(0);
    
   

    function handleCreateNewProduct(event: FormEvent) {
        event.preventDefault();

        console.log({

            value,
            qtdPP,
            qtdP,
            qtdM,
            qtdG,
            qtdGG
        });
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
                            value={qtdPP}
                            onChange={event => setQtdPP(Number(event.target.value))}
                            />
                        </label>

                        <label>
                            P: <input 
                            className='size-qtd' 
                            type="number"
                            value={qtdP}
                            onChange={event => setQtdP(Number(event.target.value))} 
                            />
                        </label>

                        <label>
                            M: <input 
                            className='size-qtd' 
                            type="number"
                            value={qtdM}
                            onChange={event => setQtdM(Number(event.target.value))} 
                            />
                        </label>

                        <label>
                            G: <input 
                            className='size-qtd' 
                            type="number"
                            value={qtdG}
                            onChange={event => setQtdG(Number(event.target.value))} 
                            />
                        </label>

                        <label>
                            GG: <input 
                            className='size-qtd' 
                            type="number"
                            value={qtdGG}
                            onChange={event => setQtdGG(Number(event.target.value))} 
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
                <Link to="/products"><button id="buttonCancel" type="reset">Cancelar</button></Link> <button id="buttonRegister" type="submit" onClick={handleCreateNewProduct}>Alterar</button>
            </Form>
        </Container>
    )
}
