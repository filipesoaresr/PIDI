import React, { useContext, useState } from 'react'
import { Container, SalesIntro, Form } from './styles'
import { Link, useHistory } from 'react-router-dom'
import { Button } from 'reactstrap';
import { api } from '../../../services/api';
import { OrderContext } from '../../../contexts/OrderContext';
import { HiOutlineClipboardList } from 'react-icons/hi';
import { toast } from 'react-toastify';

interface IProductInOrder {
    pp?: number,
    p?: number,
    m?: number,
    g?: number,
    gg?:number,
    order_product_value: number,
    fk_id_product: string,
    hasPromotion: false,

}
interface Order {
    id: string;
    dateCreated: Date;
    fk_id_payment_options: string;
    fk_id_user: string;
    dateSubmitted: Date;
    isOpen: boolean;
    installment?: string;
    totalValue: number;
    productHasOrder: IProductInOrder[]
}


export default function SalesPage() {

    const {sales, startDate, setStartDate, endDate, setEndDate, setSales} = useContext(OrderContext)
    const history = useHistory();
    let List: Array<any> = []

    function getSales(startDate: any, endDate: any) {

        if(!localStorage.getItem('token')){
            return toast.error('É preciso estar logado para realizar essa ação!')
        }
        //.toISOString()
        const start_dateNonFormatted= startDate
        const end_dateNonFormatted= endDate

        const start_date= start_dateNonFormatted.toISOString()
        const end_date= end_dateNonFormatted.toISOString()
         
        
        api.get('/sales/' + start_date + '/' + end_date).then((response) => {
           response.data.map((data: Order) => {
            List.push(data)
           })
           setSales([...List])
        }).catch((error) => {
            console.log("ERROR", error)
        })   
        setTimeout(() => {
            console.log("====SALES====", sales)
            history.push('/sales/listsalespage')
        }, 500)
    }

    return (
        <Container>
            <Form>
                <SalesIntro>
                    <HiOutlineClipboardList style={{ fontSize: "4rem", marginLeft: "8rem", marginBottom: "1rem", color: "#0dcaf0" }}></HiOutlineClipboardList>
                    <h1>Listar Vendas</h1>

                    <p>Data Inicial:</p> <input type='date'  onChange={event => setStartDate(new Date(event.target.value))}/>

                    <p>Data Final:</p> <input type='date'  onChange={event => setEndDate(new Date(event.target.value))}/>

                </SalesIntro>

            </Form>
            
                <button type='button' className="register" onClick={() => getSales(startDate, endDate)}>
                    Gerar Listagem
                </button>
                
        </Container>
    )
}

