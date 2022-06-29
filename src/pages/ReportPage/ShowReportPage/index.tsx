import React, { FormEvent, useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { ProductContext } from '../../../contexts/ProductContext';
import { PromotionContext } from '../../../contexts/PromotionContext';
import { api } from '../../../services/api';
import { Container, Report, TableSection, GraphBlock, SalesGraphBlock, } from './styles'
import { Doughnut, Line } from 'react-chartjs-2';

import { Table } from 'reactstrap';
import { Button } from 'reactstrap';
import { VscPackage } from 'react-icons/vsc';
import { OrderContext } from '../../../contexts/OrderContext';
//import faker from 'faker';


import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,} from 'chart.js';
//import { ArcElement } from "chart.js";
//import Chart from "chart.js/auto";
ChartJS.register(
    ArcElement, 
    Tooltip, 
    Legend, 
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title
    );


interface NewTable {
    name: string;
    amount: number,
    value: number,
    totalSold: number,
    percent: number;
}

export default function ShowReportPage() {

    const { productsPercentage, groupedProductListInPeriod, productsWithSaleDate, setProductsWithSaleDate } = useContext(OrderContext)
    const [ productListTable, setProductListTable ] = useState<NewTable[]>([])

    const [ chartLabels, setChartLabels] = useState<String[]>([])
    const [ chartData, setChartData] = useState<Number[]>([])

    const [ chartLabels2, setChartLabels2] = useState<String[]>([])
    const [ chartData2, setChartData2] = useState<Number[]>([])

    

    //Talvez mover para a Página de ReportPage para otimização
    function handleChartData() {
        productsPercentage.map((product: any) => {
            chartLabels.push(product.nome)
            chartData.push(product.percent)

           
        })

        productsWithSaleDate.map((product: any) => {
            chartLabels2.push(product.sale_date)
            chartData2.push(product.sold_amount)
        })
        console.log("CHART DATA", chartData2)
        console.log("CHART LABELS", chartLabels2)
    }
    
    function handleTableData() {

        let soldAmount: number = 0;
        let newValue: number = 0
        let percent: number = 0
        let List: Array<any> = []

        groupedProductListInPeriod.map((product: any) => {
            
            productsPercentage.map((productWithPercentage: any) => {
                if(productWithPercentage.nome == product.product_name){
                    percent = productWithPercentage.percent
                }
            })


            soldAmount = product.pp + product.p + product.m + product.g + product.gg;
            newValue = (product.order_product_value / soldAmount);

            
            List.push({
                name: product.product_name,
                amount: soldAmount,
                value: newValue,
                totalSold: product.order_product_value,
                percent: percent
            })
            List.sort((a, b) => (a.percent > b.percent ? -1 : 1));
        })
        setProductListTable(List)
        console.log("NEW TABLE", productListTable)
    }

    function handleResetChartFields() {
        setProductsWithSaleDate([])
        
    }

    useEffect(() => {
        console.log("LISTA DE PORCETAGENS", productsPercentage)
        console.log("LISTA DO PERIODO", groupedProductListInPeriod)
        handleChartData()
        handleTableData()
    }, [])

    
    const data = {
        labels: chartLabels,
        datasets: [
          {
            label: '# of Votes',
            data: chartData,
            backgroundColor: [
              '#CA054D',
              '#17BEBB',
              '#F9DC5C',
              '#004777',
              '#6F58C9',
              '#2D7DD2',
              '#B4E33D',
              '#EB4511',
              '#352D39',
              '#FF6978'
            ],
            
            borderWidth: 1,
          },
        ],
      };


    const labels2 = chartLabels2;
    const data2 = {
    labels: labels2,
    datasets: [{
        label: 'QUANTIDADE DE PRODUTOS VENDIDA',
        data: chartData2,
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
    }]
    };


    return (
        <Container>

            <Report>
            <h1>Relatório Inteligente</h1>

                <SalesGraphBlock>
                    <h5>Gráfico Produtos Vendidos Por Dia</h5>
                    <Line 
                    data={data2} 
                    />
                </SalesGraphBlock>

                <GraphBlock>
                    <h5>Gráfico dos produtos com maior receita</h5>
                    <Doughnut 
                    data={data}
                    width={"50%"}
                    options={{ maintainAspectRatio: false }} 
                    />
                </GraphBlock>

                <TableSection>
                
                        <VscPackage style={{ fontSize: "3rem", color: "black" }}></VscPackage>
                        <h5>Tabela produtos com maior receitas</h5>
            
                        <Table bordered hover responsive>
                        <table className="content-table">
                                <thead>
                                    <tr>
                                        <th>
                                            Nome do Produto
                                        </th>
                                        <th>
                                            Quantidade Vendida
                                        </th>
                                        <th>
                                            Valor Médio
                                        </th>
                                        <th>
                                            Valor Total
                                        </th>
                                        <th>
                                            Porcentagem
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {console.log("TESTE NOVA TABELA", productListTable)}
                                    {
                                        
                                        productListTable.map((product: any) => (
                                            <tr key={product.name}>
                                                <td>
                                                    {product.name}
                                                </td>
                                                <td>
                                                    {product.amount}
                                                </td>
                                                <td>
                                                    R${product.value.toFixed(2)}
                                                </td>
                                                <td> 
                                                    R${product.totalSold.toFixed(2)}                                    
                                                </td>
                                                <td>
                                                    {product.percent.toFixed(2)}%
                                                </td>
                                            </tr>
                                        ))
                                    }
                                           
                                </tbody>
                            </table>
                   
                        </Table>

                </TableSection>
                <br /> 
                <Link to="/report">
                    <button id="buttonCancel" type="reset" onClick={() => handleResetChartFields()}>Voltar</button>
                </Link>

            </Report>

            
        </Container>
    )
}
