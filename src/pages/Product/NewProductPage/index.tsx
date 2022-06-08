import { FormEvent, useContext, useState } from 'react'
import * as React from 'react'
import { Link } from 'react-router-dom';
import { ProductContext } from '../../../contexts/ProductContext';
import { api } from '../../../services/api';
import { BsFillPlusSquareFill } from 'react-icons/bs';
import { useForm, SubmitHandler } from "react-hook-form";
import {
    Container,
    Form,
    MainSection,
    ImageSection,
    FormProductBlock
} from './styles';
import ReactDOM from 'react-dom';

let renderCount = 0;

type FormProductValues = {
    productType: string,
    name: string,
    collection: string,
    dateCreated: Date,
    pp: number,
    p: number,
    m: number,
    g: number,
    gg: number,
    value: number
}

export default function NewProductPage() {

    renderCount++;

    const { register, handleSubmit, formState: { errors } } = useForm<FormProductValues>({});
    
    console.log("errors", errors);
 

    return (
        <Container>
            <Form onSubmit={handleSubmit((data) => {
                console.log(data);
            })}>
                <h1>Novo Produto</h1>

                <FormProductBlock>
                    <MainSection>
                        <form>

                            <p>Tipo de Produto:</p>
                            <select {...register("productType", {
                            })}>
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
                                {...register("name", {
                                    required: "This is required.", 
                                    maxLength: {value: 50, message: 'You exceed max length'}
                                })}
                            />
                            {errors.name && <p>{errors.name.message}</p>}

                            <p>Coleção:</p>
                            <input
                                type="text"
                                {...register("collection", {
                                    required: "This is required.",
                                    maxLength: 40
                                })}
                            />

                            <p>Data do Cadastro: </p>
                            <input
                                type="date"
                                {...register("dateCreated", {
                                    required: "This is required."
                                })}
                            />

                            <p>Quantidade/Tamanho</p>
                            <label>
                                PP: <input
                                    className='size-qtd'
                                    type="number"
                                    {...register("pp", {
                                        required: false,
                                    })}
                                />
                            </label>

                            <label>
                                P: <input
                                    className='size-qtd'
                                    type="number"
                                    {...register("p", {
                                        required: false,
                                    })}
                                />
                            </label>

                            <label>
                                M: <input
                                    className='size-qtd'
                                    type="number"
                                    {...register("m", {
                                        required: false,
                                    })}
                                />
                            </label>

                            <label>
                                G: <input
                                    className='size-qtd'
                                    type="number"
                                    {...register("g", {
                                        required: false,
                                    })}
                                />
                            </label>

                            <label>
                                GG: <input
                                    className='size-qtd'
                                    type="number"
                                    {...register("gg", {
                                        required: false,
                                    })}
                                />
                            </label>


                            <p>Valor:</p>
                            <input
                                //id='value-input' 
                                type="number"
                                {...register("value", {
                                    required: false,
                                })}
                            />
                        </form>
                    </MainSection>

                    <ImageSection>
                        <img src="https://i.pinimg.com/originals/fe/7f/4b/fe7f4b418e2778863247a7dcc6aed421.png" alt="" />
                    </ImageSection>

                </FormProductBlock>
                <br />
                <Link to="/products"><button id="buttonCancel" type="reset">Cancelar</button></Link>  <button id="buttonRegister" type="submit"> Cadastrar <BsFillPlusSquareFill /></button>
            </Form>
        </Container>
    )


}