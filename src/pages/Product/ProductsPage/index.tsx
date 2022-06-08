import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Table } from 'reactstrap';
import { Button } from 'reactstrap';
import { ProductContext } from '../../../contexts/ProductContext';
import { api } from '../../../services/api';
import UpdateProductPage from '../UpdateProductPage';
import { Container, ProductIntro, ProductTable } from './styles'

interface Product {
    id: string;
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


export default function ProductsPage() {


    const { products, setId, setProducts } = useContext(ProductContext)

    function idTransfer(id: string) {
        setId(id)
    }

    function updateProducts() {
        console.log("++++++++++++++++++++")
        api.get('/products').then((response) => {
            console.log("++++++++++POS-REQUISIÇÃO++++++++++=", response.data)
            setProducts(response.data)
        })
    }

    async function handleDelete(id: string) {
        await api.delete(`/products/${id}`)
        updateProducts()

    }



    return (
        <Container>

            <ProductIntro>
                <h1>Produtos</h1>

                <input type='text' placeholder='Digite o Nome do Produto' />
                <br />
                <button type='submit'>Consultar</button>

            </ProductIntro>

            <ProductTable>

                <Table bordered hover responsive >
                    <thead>
                        <tr>
                            <th>
                                Código
                            </th>
                            <th>
                                Produto
                            </th>
                            <th>
                                Promoção
                            </th>
                            <th>
                                Valor
                            </th>
                            <th>
                                Ações
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {console.log(products)}
                        {
                            products.map((product: Product) => (
                                <tr key={product.id}>
                                    <th scope="row">
                                        {product.id}
                                    </th>
                                    <td>
                                        {product.name}
                                    </td>
                                    <td>
                                        {product.promotion}
                                    </td>
                                    <td>
                                        {product.value}
                                    </td>
                                    <td>
                                        <Link to='/products/updateproduct' >
                                            <Button id="updateButton" variant="primary" size="sm" onClick={() => { idTransfer(product.id) }}>
                                                Alterar
                                            </Button>
                                        </Link>
                                        &nbsp;
                                        &nbsp;
                                        <Button id="deleteButton" variant="danger" size="sm" onClick={() => handleDelete(product.id)}>
                                            Excluir
                                        </Button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </ProductTable>



            <Link to='/products/newproduct'>
                <button type='button' className="register">+ Cadastrar</button>
            </Link>

        </Container>

    )
}
