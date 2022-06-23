import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Table } from 'reactstrap';
import { Button } from 'reactstrap';
import { ProductContext } from '../../../contexts/ProductContext';
import { api } from '../../../services/api';
import UpdateProductPage from '../UpdateProductPage';
import { Container, ProductIntro, ProductTable } from './styles'

interface IProduct {
    id: string;
    product_type: string;
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


    const { products, setId, setProducts, getProducts } = useContext(ProductContext)

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

    const defaultProps:IProduct[] = [];

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
                <div id="divTable">
                <Table bordered hover responsive >
                    <thead>
                        <tr>
                            <th>
                                Tipo do Produto
                            </th>
                            <th>
                                Produto
                            </th>
                            <th>
                                Coleção
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
                            products.map((product: IProduct) => (
                                <tr key={product.id}>
                                    <td scope="row">
                                        {product.product_type}
                                    </td>
                                    <td>
                                        {product.name}
                                    </td>
                                    <td>
                                        {product.promotion}
                                    </td>
                                    <td>
                                        R${product.value}
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
                </div>
            </ProductTable>



            <Link to='/products/newproduct'>
                <button type='button' className="register">+ Cadastrar</button>
            </Link>

        </Container>

    )
}

