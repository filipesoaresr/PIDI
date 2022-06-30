import React, { FormEvent, useContext, useState } from 'react'
import { BsCartFill } from 'react-icons/bs';
import { Button, Table } from 'reactstrap';
import { Link } from 'react-router-dom';
import { PromotionContext } from '../../../contexts/PromotionContext';
import { api } from '../../../services/api';
import { toast } from 'react-toastify'
import { Container,Form, MainSection, AddProductSection, FormBlock, SecondSection} from './styles'
import { ProductContext } from '../../../contexts/ProductContext';
import { BsFillPencilFill } from 'react-icons/bs';

interface IProductInOrder {
    fk_id_product: string;
}
interface IProduct {
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
    id_promotion?: string;
    promotion:{
        name:string;
        endDate:string;
        discount:string;
        ProductsInPromo:[]
    } ;
    value: number;
}



export default function UpdatePromotionPage() {

    const {
        id,
        name,
        setName,
        startDate,
        setStartDate,
        endDate,
        setEndDate,
        discount,
        setDiscount,
        } = useContext(PromotionContext)

        const {getProducts} = useContext(ProductContext)
        const inputFeilds = document.querySelectorAll("input");
        const selectFeilds = document.querySelectorAll("select");

        const { products } = useContext(ProductContext)
        const [productsInOrderList, setProductsInOrderList] = useState<String[]>([]);
        const [ fODA_SE, setfODA_SE] = useState(true);
    
        async function handleExcludeProductInOrder(product: IProduct, event: FormEvent){
        
            let List: Array<any> = productsInOrderList
    
            event.preventDefault();
            console.log("PRODUCTS IN ORDER LIST", List)
            
            List.forEach((i,index)=>{
                console.log("forEach i")
                console.log(i)
                if(i.fk_id_product === product.id){
                    console.log("antes")
                    console.log(List)
                    List.splice(index,1)
                    console.log("depois")
                    console.log(List)
                    
                }
            } )
            setProductsInOrderList(List)
            console.log("PRODUCT IN ORDER LIST TIMEOUT", productsInOrderList)
    
            setTimeout(() => {
                
                setfODA_SE(true)
                setfODA_SE(false)
    
            }, 500)
           
            await api.put(`promotions/remove-products/${product.id}`)
            getProducts()
            return  toast.dark('Produto Excluido com sucesso no pedido!');
        }

        function handleIncludeProductsInOrder(product: IProduct,) {

            let productValueInOrder = 0
    
            productsInOrderList.push(product.id);
            setProductsInOrderList(productsInOrderList)
            //var oldList = productsInOrderList; 
            console.log("PRODUCT ORDER IN ORDER", productsInOrderList)
            console.log("PRODUCT VALUE WITH SIZES IN ORDER",productValueInOrder)
           
            setTimeout(() => {
             
                setfODA_SE(false)
                setfODA_SE(true)
    
            }, 500)
    
            toast.success('Produto incluído com sucesso no pedido!');
       }
    
       function Butao_de_sim (product :IProduct){

        return <Button 
        id="addProductButton" 
        variant="primary" 
        size="sm" 

        onClick={() => handleIncludeProductsInOrder(product)}>Incluir
        </Button>
}

        function Butao_de_nao (product :IProduct){

        return  <Button id="deleteProductButton" variant="danger" size="sm" onClick = {event =>handleExcludeProductInOrder(product,event)}>Excluir</Button>
        }

        function foda_se(vai:boolean,product:IProduct) {

            if(vai && !(product.id_promotion === id)){
                
                return Butao_de_sim(product)
            }
            else{

            return Butao_de_nao(product)
            }
        }


    function handleUpdate( id: string) {

        // products in promo precisa ser recebido da /promotions/id 
        // é um array de produtos, então as vezes vai selectFeilds
        
        const dataUpdated = {
            name,
            startDate,
            endDate,
            discount,
            products: productsInOrderList
        }

        
        console.log("LISTA TESTE", productsInOrderList)
        console.log(dataUpdated)
        api.put(`/promotions/${id}`, dataUpdated).then(response => {
            console.log("RESPOSTA UPDATE PROMO", response.data)
        })
        toast.success('Promoção alterada com sucesso!');

    }


    return (
        <Container>

            <Form>
                <h1>Alterar Promoção</h1>
                <FormBlock>
                    <MainSection>

                        <p>Nome da Promoção:</p>
                        <input 
                        type="text" 
                       
                        value={name}
                        onChange={event => setName(event.target.value)}
                        />

                        <p>Inicio da Promoção:</p>
                        <input 
                        type="date" 
                        value={startDate}
                        onChange={event => setStartDate(event.target.value)}
                        />


                     
                    </MainSection>

                    <SecondSection>

                        <p>Desconto</p>
                        <select value={discount} onChange={event => setDiscount(event.target.value)}>
                            <option></option>
                            <option value="70">70% OFF</option>
                            <option value="60">60% OFF</option>
                            <option value="50">50% OFF</option>
                            <option value="30">30% OFF</option>
                            <option value="20">20% OFF</option>
                            <option value="10">10% OFF</option>
                        </select>

                        <p>Fim da Promoção</p>
                        <input 
                        type="date" 
                        value={endDate}
                        onChange={event => setEndDate(event.target.value)}
                        />

                    </SecondSection>

                    </FormBlock>

                    <AddProductSection>
                    <BsCartFill style={{  fontSize: "3rem", color: "black" }}></BsCartFill>
                    <h5>Nome do Produto</h5>
                    <input type="text" />
                    <br />
                    <button id="searchButton">Consultar</button>
                    <Table bordered hover responsive>
                    <table className="content-table">
                    <thead>
                        <tr>
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
                            products.map((product: IProduct) => (
                                <tr >
                                    <td key={product.name}>
                                        {product.name}
                                    </td>
                                    <td>
                                        {product.promotion?.name}
                                    </td>
                                    <td>
                                        {product.value}
                                    </td>
                                    <td>                                     
                                    {foda_se(!productsInOrderList.some(i=> i === product.id),product)}
                                    </td>
                                    
                                </tr>
                            ))
                        }
                    </tbody>
                    </table>
                </Table>
                    </AddProductSection>
                    <br />               

                <Link to="/promotions">
                    <button id="buttonCancel" type="reset">Voltar</button>
                </Link>
                &nbsp;
                &nbsp;
                <Link to="/promotions">   
                <button id="form-btn" type="submit" onClick={() => {handleUpdate(id)}}>Alterar <BsFillPencilFill/></button>
                </Link>
            </Form>


        </Container>
    )
}
