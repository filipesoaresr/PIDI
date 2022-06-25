import React, { FormEvent, useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { ProductContext } from '../../../contexts/ProductContext';
import { PromotionContext } from '../../../contexts/PromotionContext';
import { api } from '../../../services/api';
import { Container, Report, TableSection, GraphBlock, } from './styles'

import { Table } from 'reactstrap';
import { Button } from 'reactstrap';
import { VscPackage } from 'react-icons/vsc';




export default function ShowReportPage() {


        

       
    return (
        <Container>

            <Report>
            <h1>Relatório Inteligente</h1>
                <GraphBlock>

                <h2>Gráfico Aqui</h2>
                   
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
                                    
                                            <tr>
                                                <td>
                                                </td>
                                                <td>
                                                </td>
                                                <td>
                                                </td>
                                                <td>                                     
                                                </td>
                                                <td>
                                                </td>
                                                <td>
                                                </td>
                                            </tr>

                                            <tr id="rowTotal">
                                                <td></td>
                                                <td></td>
                                                <td>Total</td>
                                                <td></td>
                                                <td>100%</td>
                                            </tr>
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
