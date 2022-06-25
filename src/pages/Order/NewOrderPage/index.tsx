import { FormEvent, useContext, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { api } from '../../../services/api';
import { Container, Form, MainSection, AddProductSection, FormBlock, SecondSection } from './styles';
import { Table } from 'reactstrap';
import { Button } from 'reactstrap';
import { BsCartFill, BsFillPlusSquareFill } from "react-icons/bs";
import { OrderContext } from '../../../contexts/OrderContext';
import { ProductContext } from '../../../contexts/ProductContext';
import { PaymentContext } from '../../../contexts/PaymentContext';
import { UserContext } from '../../../contexts/UserContext';

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
    promotion: {
        discount: number;
        name: string;
    };
    value: number;
}

interface IProductInOrder {
    product_name?: string;
    pp?: number,
    p?: number,
    m?: number,
    g?: number,
    gg?:number,
    order_product_value: number,
    fk_id_product?: string,
    hasPromotion?: false,
}

interface IPaymentInOrder {
    id: string,
    name: string
}

export default function NewOrderPage() {

    const history = useHistory();

    const {
       fk_id_payment_options,
       setFk_id_payment_options,
       fk_id_user,
       setFk_id_user,
       dateSubmitted,
       totalValue,
       setTotalValue,
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
       //productHasOrder,
       getOrders      
    } = useContext(OrderContext)

    const { payments } = useContext(PaymentContext)
    const { users } = useContext(UserContext)
    const { products } = useContext(ProductContext)

    //REfatorar: usar o do contexto
    const [productsInOrderList, setProductsInOrderList] = useState<IProductInOrder[]>([]);
    const [ orderProductValue, setOrderProductValue] = useState<number[]>([]);


    function calculateTotalInsideProduct(value :number,id:string,discount:number){


        let pp = document.getElementById("pp"+id) as HTMLInputElement || {value:0}
        let p = document.getElementById("p"+id) as HTMLInputElement || {value:0}
        let g = document.getElementById("g"+id) as HTMLInputElement || {value:0}
        let gg = document.getElementById("gg"+id) as HTMLInputElement || {value:0}
        let m = document.getElementById("m"+id) as HTMLInputElement || {value:0}

        let total = Number(p.value)+Number(m.value)+Number(pp.value)+Number(g.value)+Number(gg.value)
        //console.log("discount", discount)
        

        if(total >0){
            let total_value = total * value
            let totalValue_discont = total_value * (1-discount/100)
            console.log(1-discount/100)
            if(totalValue_discont >=0 ){
                console.log("totalValue_discont")
                console.log(totalValue_discont)

            return`${total_value} -> ${totalValue_discont}` ||  null 
            }
            else{
                return `${total_value}`  || null 
            }
        }

        return 0
    }

   function handleIncludeProductsInOrder(product: IProduct,) {

        

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
            hasPromotion: false,
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
   }

   function getTotalValue(event: FormEvent) {

    event.preventDefault();

    if(productsInOrderList.length != orderProductValue.length) {

        productsInOrderList.map((product) => {
            orderProductValue.push(product.order_product_value) 
        })
    
        var soma = 0;
    
        for(var i = 0; i < orderProductValue.length; i++) {
            soma += orderProductValue[i];
        }
    
        setTotalValue(soma);
    }
    else {
        console.log("VALOR JA CALCULADO")
    }


   }

    function handleCreateNewOrder(event: FormEvent) {
        event.preventDefault();
        if(fk_id_user == "") {
            
            return alert("Insira um vendedor")
        }

        if(totalValue == 0) {
            
            return alert("Error: Pedido sem Produtos")
        }

        console.log("TOTAL VALUE+++++++", totalValue)
        const data = {
            //id,
            //dateCreated,
            fk_id_payment_options: fk_id_payment_options,
            fk_id_user: fk_id_user,
            //dateSubmitted,
            total_value: totalValue,
            //isOpen,
            product_has_order: productsInOrderList
        };

        console.log("DATA", data)
        api.post('/orders', data)
        alert("Cadastro Realizado com Sucesso!")
        getOrders();
        history.push("/order")

        setTimeout(() => {
            setFk_id_payment_options(""),
            setFk_id_user(""),
            setTotalValue(0)
        }, 1000)
    }



    

    return (
        <Container>

            <Form>
                <h1>Novo Pedido</h1>
                
                <AddProductSection>
                    <BsCartFill style={{ fontSize: "3rem", color: "black" }}></BsCartFill>
                    <h5>Nome do Produto</h5>
                    <input type="text" />
                    <br />
                    <button id="searchButton">Consultar</button>
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
                            {
                                products.map((product: IProduct) => (

                                    <tr key={product.id}>
                                        <td scope="row">
                                            {product.name}
                                        </td>
                                        <td>
                                            <label>
                                                PP:<input
                                                    className='size-qtd'
                                                    type="number"
                                                    id = {"pp"+product.id}
                                                    onChange={event => setPP(Number(event.target.value))} 
                                                />
                                            </label>

                                            <label>
                                                P: <input
                                                    className='size-qtd'
                                                    type="number"
                                                    id = {"p"+product.id}
                                                    onChange={event => setP(Number(event.target.value))} 
                                                />
                                            </label>

                                            <label>
                                                M: <input
                                                    className='size-qtd'
                                                    type="number"
                                                    id = {"m"+product.id}
                                                    onChange={event => setM(Number(event.target.value))}
                                                />
                                            </label>

                                            <label>
                                                G: <input
                                                    className='size-qtd'
                                                    type="number"
                                                    id = {"g"+product.id}
                                                    onChange={event => setG(Number(event.target.value))}
                                                />
                                            </label>

                                            <label>
                                                GG: <input
                                                    className='size-qtd'
                                                    type="number"
                                                    id = {"gg"+product.id}
                                                    onChange={event => setGG(Number(event.target.value))}
                                                />
                                            </label>

                                        </td>
                                        <td>
                                            {product.promotion?.name}
                                        </td>
                                        <td>
                                        {String(product.value) + (product.promotion?.discount ? "->"+Number(product.value) * (1- (Number(product.promotion?.discount)/100)):"")}
                                        </td>
                                        <td>
                                        {calculateTotalInsideProduct(product.value,product.id,Number(product.promotion?.discount))}
                                        </td>

                                        <td id="actionsColumn">
                                            <Button id="addProductButton" variant="primary" size="sm" onClick={() => handleIncludeProductsInOrder(product)}>Incluir</Button>
                                            &nbsp;
                                            &nbsp; 
                                            <Button id="deleteProductButton" variant="danger" size="sm" >Excluir</Button>

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

                        <p>Opçao de Pagamento</p>
                        {console.log(payments)}
                        <select value={fk_id_payment_options} onChange={event => setFk_id_payment_options(event.target.value)} placeholder="Pagamento" required>
                            <option></option>
                            {
                                payments.map((payment: IPaymentInOrder) => (
                                    <option value={payment.id}>{payment.name}</option>
                                ))
                            }
                           
                        </select>


                        <p>Parcelamento</p>
                        <select> 
                            <option value="vista">A vista</option>
                            <option value="2x">2x</option>
                            <option value="3x">3x</option>
                            <option value="4x">4x</option>
                            <option value="5x">5x</option>
                            <option value="6x">6x</option>
                            <option value="7x">7x</option>
                            <option value="8x">8x</option>
                            <option value="9x">9x</option>
                            <option value="10x">10x</option>
                            <option value="11x">11x</option>
                            <option value="12x">12x</option>
                        </select>

                    </MainSection>

                    <SecondSection>

                        <p>Nome atendente:</p>
                        <select  onChange={event => setFk_id_user(event.target.value)} placeholder="Atendente" required>
                            <option></option>
                            {
                                users.map((user: IPaymentInOrder) => (
                                    <option value={user.id}>{user.name}</option>
                                ))
                            }
                        </select>


                        <p>Número do Pedido:</p>
                        <input
                            type="text"
                            placeholder=""
                        />


                        <p>Total do Pedido:</p>
                        <button onClick={(event) => getTotalValue(event)}>Ver Total</button>
                        <p>R${totalValue}</p>


                    </SecondSection>

                </FormBlock>


                <Link to="/order">
                    <button id="buttonCancel" type="reset">Voltar</button>
                </Link>
                &nbsp;
                &nbsp;
                <button id="registerButton" type="submit" onClick={handleCreateNewOrder}>Cadastrar <BsFillPlusSquareFill /></button>


            </Form>


        </Container>
    )
}