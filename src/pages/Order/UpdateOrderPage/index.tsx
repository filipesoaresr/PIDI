import { FormEvent, useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { ProductContext } from '../../../contexts/ProductContext';
import { PromotionContext } from '../../../contexts/PromotionContext';
import { api } from '../../../services/api';
import { Container, Form, MainSection, AddProductSection, FormBlock, SecondSection } from './styles';
import { Table } from 'reactstrap';
import { Button } from 'reactstrap';
import { BsCartFill, BsFillPlusSquareFill } from "react-icons/bs";
import { OrderContext } from '../../../contexts/OrderContext';
import { PaymentContext } from '../../../contexts/PaymentContext';
import { UserContext } from '../../../contexts/UserContext';
import { toast } from 'react-toastify';
import { BsFillPencilFill } from 'react-icons/bs';


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
    promotion: {
        discount: number;
        name: string;
    };
    value: number;
}

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
    promotion: 
        {
            name: string;
        };
    value: string;
}
interface IProductInOrder {
    product_name: string;
    pp: number;
    p: number;
    m: number;
    g: number;
    gg: number;
    order_product_value: number;
    fk_id_product: string;
}
interface IUpdateOrder {
    name: string;
    fk_id_user: string;
    fk_id_payment_options: string;
    product_has_order: []

}

export default function UpdateOrderPage() {

    const {
        id,
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
        installment,
        setInstallment,
        fk_id_payment_options, 
        setFk_id_payment_options,
        fk_id_user, 
        setFk_id_user,
       orders,
       getOrders
    } = useContext(OrderContext)

    const { products } = useContext(ProductContext)
    const { payments } = useContext(PaymentContext)
    const { users } = useContext(UserContext)
    const [productsInOrderList, setProductsInOrderList] = useState<IProductInOrder[]>([]);

    //const [productsInOrderList, setProductsInOrderList] = useState<String[]>([]);
    const [ fODA_SE, setfODA_SE] = useState(true);
    const [ teste, setTeste] = useState(false);
    

  


    function handleUpdateOrder(event: FormEvent, id: string) {
        event.preventDefault();

        const data = {

            fk_id_user: fk_id_user,
            fk_id_payment_options: fk_id_payment_options,
            product_has_order: productsInOrderList
               
          
        };
        console.log("=====ID=====", id)
        console.log("=======DATA=======",data)
        api.put(`/orders/${id}`, data)
        alert("Cadastro Realizado com Sucesso!")
    }

    function handleIncludeProductsInOrder(product: any,) {

        
        let productAmount = pp + p + m + g + gg;
        let discount = product.promotion?.discount;
        let productValueInOrder = 0

        product.promotion ? 
        productValueInOrder = (product.value * (1 - discount/100)) * productAmount :
        productValueInOrder = product.value * productAmount
       

        const productsOrder: IProductInOrder = {
            product_name: product.name,
            pp: pp,
            p: p,
            m: m,
            g: g,
            gg: gg,
            order_product_value: productValueInOrder,
            fk_id_product: product.id,
        }
        
        productsInOrderList.push(productsOrder);
        //var oldList = productsInOrderList; 
        console.log("PRODUCT ORDER IN ORDER", productsInOrderList)
        console.log("PRODUCT VALUE WITH SIZES IN ORDER",productValueInOrder)
       
        setTimeout(() => {
            setPP(0)
            setP(0)
            setM(0)
            setG(0)
            setGG(0)

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
       /////////////////////////////////////////
        await api.put(`promotions/remove-products/${product.id}`)
        //getProducts()
        return  toast.dark('Produto Excluido com sucesso no pedido!');
    }
  

    return (
        <Container>

            <Form>
                <h1>Alterar Pedido</h1>

                <AddProductSection>
                    <BsCartFill style={{ fontSize: "2rem", color: "black" }}></BsCartFill>
                    <h5>Produtos</h5>
                    <Table bordered hover responsive >
                    <table className="content-table">
                        <thead>
                            <tr>
                                <th>
                                    Produto
                                </th>
                                <th>
                                    Tamanho/Qtd
                                </th>
                                <th>
                                    Promoção
                                </th>
                                <th>
                                    Valor
                                </th>
                                <th>
                                    Total
                                </th>
                                <th>
                                    Ações
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {console.log(products)}
                            {
                                products?.map((product: IProduct) => (
                                    <tr key={product.id}>
                                        <td scope="row">
                                            {product.name}
                                        </td>
                                        <td>
                                            <label>
                                                PP: <input
                                                    className='size-qtd'
                                                    type="number"
                                                    placeholder={product.pp.toString()}
                                                    onChange={event => setPP(Number(event.target.value))}
                                                />
                                            </label>

                                            <label>
                                                P: <input
                                                    className='size-qtd'
                                                    type="number"
                                                    placeholder={product.p.toString()}
                                                    onChange={event => setP(Number(event.target.value))} 
                                                />
                                            </label>

                                            <label>
                                                M: <input
                                                    className='size-qtd'
                                                    type="number"
                                                    placeholder={product.m.toString()}
                                                    onChange={event => setM(Number(event.target.value))}
                                                />
                                            </label>

                                            <label>
                                                G: <input
                                                    className='size-qtd'
                                                    type="number"
                                                    placeholder={product.g.toString()}
                                                    onChange={event => setG(Number(event.target.value))}
                                                />
                                            </label>

                                            <label>
                                                GG: <input
                                                    className='size-qtd'
                                                    type="number"
                                                    placeholder={product.gg.toString()}
                                                    onChange={event => setGG(Number(event.target.value))}
                                                />
                                            </label>

                                        </td>
                                        <td>
                                            {product.promotion ? product.promotion.name : "Sem Promoção"}
                                        </td>
                                        <td>
                                            {product.value}
                                        </td>
                                        <td>
                                            Total
                                        </td>
                                        <td id="actionsColumn">
                                        {foda_se(!productsInOrderList.some(i=> i.fk_id_product === product.id),product)}
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                        </table>
                    </Table>
                </AddProductSection>

                <FormBlock>

                    <MainSection>
                        {console.log("ARRAY DE PAGAMENTOS", payments)}
                        <p>Opçao de Pagamento</p>
                        <select value={fk_id_payment_options} onChange={event => setFk_id_payment_options(event.target.value)}>
                        <option></option>
                           {
                            payments?.map((payment: any) => (
                                
                                <option key={payment.id} value={payment.id}>{payment.name}</option>
                            ))
                           }
                        </select>

                        {console.log("ARRAY DE USERS", users)}
                        <p>Parcelamento</p>
                        <select value={installment} onChange={event => setInstallment(event.target.value)}>
                            <option value="vista">A vista</option>
                            <option value="2">2x</option>
                            <option value="3">3x</option>
                            <option value="4">4x</option>
                            <option value="5">5x</option>
                            <option value="6">6x</option>
                            <option value="7">7x</option>
                            <option value="8">8x</option>
                            <option value="9">9x</option>
                            <option value="10">10x</option>
                            <option value="11">11x</option>
                            <option value="12">12x</option>
                        </select>

                    </MainSection>

                    <SecondSection>

                        <p>Nome atendente:</p>
                        <select value={fk_id_user} onChange={event => setFk_id_user(event.target.value)}>
                        <option></option>
                           {
                            users?.map((user: any) => (
                                
                                <option key={user.id} value={user.id}>{user.name}</option>
                            ))
                           }
                        </select>



                        {/* < <p id="totalPedidoText">Total do Pedido</p>
                        <button id="totalPedidoButton" onClick={(event) => getTotalValue(event)}>Ver Total</button>
                        <p id="totalValueText">R${totalValue}</p> */}

                    </SecondSection>

                </FormBlock>

                <Link to="/order">
                    <button id="buttonCancel" type="reset">Voltar</button>
                </Link> 
                
                <button id="registerButton" type="submit" onClick={(event) => handleUpdateOrder(event, id)}>Alterar <BsFillPencilFill/></button>

            </Form>


        </Container>
    )
}