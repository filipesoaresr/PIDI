import React from 'react'
import { useContext, useState } from 'react'
import { Container, SalesTable, MainSection, FormBlock, InitialDateSection, EndDateSection} from './styles'
import { Link, useHistory } from 'react-router-dom'
import { Button, Table } from 'reactstrap';
import { BsFillCalendarRangeFill } from 'react-icons/bs';
import { OrderContext } from '../../../contexts/OrderContext';
import { ProductContext } from '../../../contexts/ProductContext';

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
                    <input id="dateInput" name="initialDate" type="date"></input>
                    </div>
                    </InitialDateSection>

                    <EndDateSection>
                    <div id="endDate">
                    <label id="endDateLabel">Data Final: </label>
                    <br />
                    <input id="dateInput" name="finalDate" type="date"></input>
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
                                <tr>
                                    <td scope="row">
                                        24/11/2020
                                    </td>
                                    <td>
                                        Camisa do Star Wars
                                    </td>
                                    <td>
                                        Filipe Soares Rocha
                                    </td>
                                    <td>
                                        R$ 60,00
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </Table>

                    
                    <label> Total do Período </label>
                    <br />
                    <input id="periodTotalInput" name="periodTotal" type="text"></input>
                    
                </SalesTable>

                <Link to="/sales"><button id="buttonCancel" type="reset">Voltar</button></Link>
            </MainSection>


        </Container>
    )
}