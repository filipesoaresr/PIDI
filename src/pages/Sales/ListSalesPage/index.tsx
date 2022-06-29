import React, { useEffect } from 'react'
import { useContext, useState } from 'react'
import { Container, SalesTable, MainSection, FormBlock, InitialDateSection, EndDateSection} from './styles'
import { Link, useHistory } from 'react-router-dom'
import { Button, Table } from 'reactstrap';
import { BsFillCalendarRangeFill } from 'react-icons/bs';
import { OrderContext } from '../../../contexts/OrderContext';
import { ProductContext } from '../../../contexts/ProductContext';
import { api } from '../../../services/api';
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
    promotion: string;
    value: number;
}

interface IProductHasOrder {
    id: string;
    name: string;
    collection: string;
    pp: number;
    p: number;
    m: number;
    g: number;
    gg: number;
    promotion: string;
    value: string;
}

interface IOrder {
    id: string;
    dateCreated: Date;
    fk_id_payment_options: string
    fk_id_user: string;
    dateSubmitted: Date;
    totalValue: number;
    isOpen: boolean;
    installment: string;
    productHasOrder: [{}];
}


export default function ListSalesPage() {
    
    const history = useHistory();
    
    const { orders } = useContext(OrderContext)
    const { products } = useContext(ProductContext)
    
    const {sales, startDate, endDate} = useContext(OrderContext)

    const { users } = useContext(UserContext)
    const [userName, setUserName] = useState('')
    const [totalValue, setTotalValue] = useState(0)


    const List: Array<any> = [];

    function handleUserName(sale: any){ 
         users.map((user: any) => {
             if(user.id == sale.fk_id_user){
                setUserName(user.name)
             }
             else {
                setUserName("Sem atendente")
             }
         })
    }

    function handleGenerateTotal() {
        sales.map((sale: any) => {
            List.push(sale.total_value)
        })
        var soma = 0;
    
        for(var i = 0; i < List.length; i++) {
            soma += List[i];
        }
        setTotalValue(soma)
        console.log("SOMA", soma)
        console.log("VALOR NO ESTADO", totalValue)
    }

    useEffect(() => {
        handleGenerateTotal()
    }, [])

    return (
        <Container>

            <MainSection>
                <h1>Listagem de Vendas</h1>

                <SalesTable>
                    <BsFillCalendarRangeFill style={{ fontSize: "3rem", color: "black", verticalAlign: 'middle', marginLeft: "43rem", }}></BsFillCalendarRangeFill>
                    <br />

                    <FormBlock>
                    <InitialDateSection>
                    <div id="initialDate">
                    <label id="initialDateLabel">Data Inicial: </label>
                    <br />
                    <p>{startDate.toString()}</p>
                    </div>
                    </InitialDateSection>

                    <EndDateSection>
                    <div id="endDate">
                    <label id="endDateLabel">Data Final: </label>
                    <br />
                    <p>{endDate.toString()}</p>
                    </div>
                    </EndDateSection>
                    
                    </FormBlock>

                    <Table bordered hover responsive >
                        <table className="content-table">
                            <thead>
                                <tr>
                                    <th>
                                        Data da Venda
                                    </th>
                                    <th>
                                        Produto
                                    </th>
                                    <th>
                                        Nome do Atendente
                                    </th>
                                    <th>
                                        Valor
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                sales.map((sale: any) => (
                                    <tr key={sale.id}>
                                        <td scope="row">
                                            {sale.date_submitted.split("T")[0]}
                                        </td>
                                        <td>
                                            {sale.product_has_order.map((product: any) => (
                                                <p>{product.product_name}</p>
                                            ))}
                                        </td>
                                        <td>
                                            {sale.user.name}
                                        </td>
                                        <td>
                                            R${sale.total_value}
                                        </td>
                                    </tr>
                                ))
                                }
                                
                            </tbody>
                        </table>
                    </Table>

                    
                    <label> Total do Período </label>
                    <br />
                    <p id="totalValue">R${totalValue}</p>
                    
                </SalesTable>

                <Link to="/sales"><button id="buttonCancel" type="reset">Voltar</button></Link>
            </MainSection>


        </Container>
    )
}