import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Table } from 'reactstrap';
import { Button } from 'reactstrap';
import { api } from '../../../services/api';
import { Container, ProductIntro, ProductTable } from './styles'

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

export default function ProductsPage() {

    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
        api.get('/products').then((response) => {
            setProducts(response.data.product)
        })
    }, [])
    console.log(products)

    
    async function handleDelete(id: any) {
        api.delete(`/products/${id}`)
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
                        {
                            products.map((product) => (
                                <tr key={product._id}>
                                    <th scope="row">
                                        {product._id}
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
                                        <Link to='/products/updateproduct'><Button id="updateButton" variant="primary" size="sm">Alterar</Button></Link>
                                        &nbsp;
                                        &nbsp;
                                        <Button id="deleteButton" variant="danger" size="sm" onClick={() => handleDelete(product._id)}>Excluir</Button>
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
