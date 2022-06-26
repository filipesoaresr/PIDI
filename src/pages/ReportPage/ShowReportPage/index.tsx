import React, { FormEvent, useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { ProductContext } from '../../../contexts/ProductContext';
import { PromotionContext } from '../../../contexts/PromotionContext';
import { api } from '../../../services/api';
import { Container, Report, TableSection, GraphBlock, } from './styles'
import { Doughnut } from 'react-chartjs-2';

import { Table } from 'reactstrap';
import { Button } from 'reactstrap';
import { VscPackage } from 'react-icons/vsc';
import { OrderContext } from '../../../contexts/OrderContext';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
//import { ArcElement } from "chart.js";
//import Chart from "chart.js/auto";
ChartJS.register(ArcElement, Tooltip, Legend);


export default function ShowReportPage() {

    const { productsPercentage, groupedProductListInPeriod } = useContext(OrderContext)
    let chartLabels: Array<any> = []
    let chartData: Array<any> = []
    const productListTable: Array<any> = [];

    //Talvez mover para a Página de ReportPage para otimização
    function handleChartData() {
        productsPercentage.map((product: any) => {
            chartLabels.push(product.nome)
            chartData.push(product.percent)
        })

        //console.log("CHART DATA", chartData)
        //console.log("CHART LABELS", chartLabels)
    }

    function handleTableData() {

        let soldAmount: number = 0;
        let newValue: number = 0
        let percent: number = 0

        groupedProductListInPeriod.map((product: any) => {
            
            productsPercentage.map((productWithPercentage: any) => {
                if(productWithPercentage.nome == product.product_name){
                    percent = productWithPercentage.percent
                }
            })


            soldAmount = product.pp + product.p + product.m + product.g + product.gg;
            newValue = (product.order_product_value / soldAmount);

            
            productListTable.push({
                name: product.product_name,
                amount: soldAmount,
                value: newValue,
                totalSold: product.order_product_value,
                percent: percent
            })
        })
        
        console.log("NEW TABLE", productListTable)
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
            ],
            
            borderWidth: 1,
          },
        ],
      };


    return (
        <Container>

            <Report>
            <h1>Relatório Inteligente</h1>
                <GraphBlock>
                    <Doughnut 
                    data={data}
                    width={"50%"}
                    options={{ maintainAspectRatio: false }} 
                    />
                </GraphBlock>

                <TableSection>
                
                        <VscPackage style={{ fontSize: "3rem", color: "black" }}></VscPackage>
                        <h5>Produtos mais Rentáveis</h5>
            
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
                                            Valor Unitário
                                        </th>
                                        <th>
                                            Valor Total
                                        </th>
                                        <th>
                                            Porcentagem
                                        </th>
                                        <th>
                                            Nível Produto
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {
                                        productListTable.map((product: any) => (
                                            <tr key={product.name}>
                                                <td>
                                                    {product.name}
                                                    llll
                                                </td>
                                                <td>
                                                    {product.amount}
                                                </td>
                                                <td>
                                                    {product.value}
                                                </td>
                                                <td> 
                                                    {product.totalSold}                                    
                                                </td>
                                                <td>
                                                    {product.percent}
                                                </td>
                                                <td>
                                                    
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
                    <button id="buttonCancel" type="reset">Voltar</button>
                </Link>

            </Report>

            
        </Container>
    )
}
