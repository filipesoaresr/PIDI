import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Table } from 'reactstrap';
import { Button } from 'reactstrap';
import { ProductContext } from '../../../contexts/ProductContext';
import { api } from '../../../services/api';
import UpdateProductPage from '../UpdateProductPage';
import { Container, ProductIntro, ProductTable } from './styles'
import { BiCaretLeft, BiError } from "react-icons/bi";
import { toast } from 'react-toastify'
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

    const { products, setId, setProducts } = useContext(ProductContext)
    const [ productName, setProductName ] = useState('')
    const [ result, setResult ] = useState([])
    const [notFound, setNotFound] = useState(false)

    function idTransfer(id: string) {
        setId(id)
    }

    function updateProducts() {
        console.log("++++++++++++++++++++")
        api.get('/products').then((response) => {
            console.log("++++++++++POS-REQUISIÇÃO++++++++++=", response.data)
            setProducts(response.data)
            setResult([])
        })
    }

    const defaultProps:IProduct[] = [];

    async function handleDelete(id: string) {

        await api.delete(`/products/${id}`).then((response) => {
            console.log("RESPOSTA DELETE", response)
            if(!response.data.name){
                return toast.error('Não é possível excluir produto vinculado a um Pedido ou Venda!');
            }
            else {
                toast.success('Produto excluído com sucesso!');
            }
        })
        updateProducts()
        

    }

    function handleSearch(name: string){

        if(!localStorage.getItem('token')){
            return toast.error('É preciso estar logado para realizar essa ação!')
        }

        api.get(`/products/search/${name}`).then(response => {
            console.log("DAta", response.data)
            setResult(response.data)

            if(response.data.length == 0) {
                setNotFound(true)
            }
            
        })
    }

    function handleGetBack(){
        setNotFound(false)
    }

    return (
        <Container>

            <ProductIntro>
                <h1>Produtos</h1>

                <input type='text' placeholder='Digite o Nome do Produto' onChange={(event) => setProductName(event.target.value)}/> 
                <br />
                <button type='submit' onClick={() => handleSearch(productName)}>Consultar</button>

            </ProductIntro>


            { result.length == 0 && notFound && (
                <div id="warningNotFound">
                    <p>PRODUTO NÃO ENCONTRADO</p>
                    <BiError size="35" style={{color: "#F9DC5C", verticalAlign: 'middle', marginLeft: "1rem"}}/>

                </div>
                )
            }

            { result.length != 0 && (

                <ProductTable>   
                <Table bordered hover responsive >
                    <table className="content-table">
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
                        {console.log("RESULT", result)}
                        { 
                            result.map((product: IProduct) => (
                                <tr key={product.id}>
                                    <td scope="row">
                                        {product.product_type}
                                    </td>
                                    <td>
                                        {product.name}
                                    </td>
                                    <td>
                                        {product.collection != null ? product.collection : "Sem coleção"}
                                    </td>
                                    <td>
                                        R${product.value}
                                    </td>
                                    <td id="actionsColumn">
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
                    </table>
                </Table>
                
                <Button id="cleanSearchButton"  size="sm" onClick={() => {setResult([])}}>
                    Limpar Busca
                </Button>  

                </ProductTable>
            )}

            { 
            result.length == 0 && !notFound && localStorage.getItem('token') && (
                <ProductTable>   
                    <Table bordered hover responsive >
                        <table className="content-table">
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
                                            {product.collection}
                                        </td>
                                        <td>
                                            R${product.value}
                                        </td>
                                        <td id="actionsColumn">
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
                        </table>
                    </Table>
                </ProductTable>
                )
            }

            {
                localStorage.getItem('token') && (

                <Link to='/products/newproduct'>
                    <button type='button' className="register">+ Cadastrar</button>
                </Link>
                )
            }


            { result.length == 0 && notFound && (
                 <button type='button' className="getBack" onClick={() => handleGetBack()}>
                    <BiCaretLeft size="28" style={{color: "white", verticalAlign: 'middle'}}/>
                    Voltar
                </button>   
            )
            }
           

        </Container>

    )
}

