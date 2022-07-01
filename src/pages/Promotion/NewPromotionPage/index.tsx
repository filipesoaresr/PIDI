import React, { FormEvent, useContext, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { ProductContext } from '../../../contexts/ProductContext';
import { PromotionContext } from '../../../contexts/PromotionContext';
import { api } from '../../../services/api';
import { Container,Form, MainSection, AddProductSection, FormBlock, SecondSection } from './styles'
import { toast } from 'react-toastify'
import { Table } from 'reactstrap';
import { Button } from 'reactstrap';
import { BsCartFill, BsFillPlusSquareFill } from 'react-icons/bs';
import { GiTShirt } from 'react-icons/gi';

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




export default function NewPromotionPage() {
    const history = useHistory();

   const {
    name,
    setName,
    //startDate,
    //setStartDate,
    endDate,
    setEndDate,
    discount,
    setDiscount,
    productsInPromo,
    setProductsInPromo,
    getPromotions
} = useContext(PromotionContext)

    

//const [recivedProducts, setRecivedProducts] = useState<Product[]>([])
    const { products, getProducts } = useContext(ProductContext)
    const [ fODA_SE, setfODA_SE] = useState(true);
    const [productsInOrderList, setProductsInOrderList] = useState<String[]>([]);
    //const recivedProducts: Array<any> = []

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

        if(vai){
            return Butao_de_sim(product)
        }
        else{

        return Butao_de_nao(product)
        }
    }


    async function handleExcludeProductInOrder(product: IProduct, event: FormEvent){
        
        let List: Array<any> = productsInOrderList

        event.preventDefault();
        console.log("PRODUCTS IN ORDER LIST", List)
        
        List.forEach((i,index)=>{
            console.log("forEach i")
            console.log(i)
            if(i === product.id){
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
       
        //await api.put(`promotions/remove-products/${product.id}`)
        getProducts()
        return  toast.dark('Produto Excluido com sucesso no pedido!');
    }


    async function handleCreateNewPromotion(event: FormEvent) {
        event.preventDefault();

        const data = {
           name,
           endDate,
           discount,
           products: productsInOrderList,
        };

        console.log("PRomo nova", data)
        await api.post('/promotions', data)
        getPromotions()
        toast.success('Promoção criada com sucesso!');
        setTimeout(() => {
            history.push("/promotions")
        }, 300)
    }

    return (
        <Container>

            <Form>
            <h1>Nova Promoção</h1>
                <FormBlock>
                    <MainSection>

                        <p>Nome da Promoção:</p>
                        <input
                            type="text"
                            placeholder="Nome da Promoção"
                            value={name}
                            onChange={event => setName(event.target.value)}
                        />
                    </MainSection>

                    <SecondSection>

                        <p>Desconto</p>
                        <select value={discount} onChange={event => setDiscount(event.target.value)}>
                            <option></option>
                            <option value="80">80% OFF</option>
                            <option value="70">70% OFF</option>
                            <option value="60">60% OFF</option>
                            <option value="50">50% OFF</option>
                            <option value="40">40% OFF</option>
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
                <GiTShirt style={{ fontSize: "3rem", color: "black" }}></GiTShirt>
                <h5>Produtos</h5>
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
                    {console.log(products)}
                    {
                        products.map((product: IProduct) => (
                            <tr key={product.id}>
                                <td >
                                    {product.name}
                                </td>
                                <td>
                                    {product.promotion?.name}
                                </td>
                                <td>
                                    {product.value}
                                </td>
                                <td id="actionsColumn">
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
                    <button id="buttonCancel" type="reset">Cancelar</button>
                </Link>
                &nbsp;
                &nbsp;
                <button id="buttonRegister" type="submit" onClick={handleCreateNewPromotion}>
                    Cadastrar <BsFillPlusSquareFill/>
                </button>
        

            </Form>


        </Container>
    )
}
