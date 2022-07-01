import React, { useContext, useEffect, useState } from 'react'
import { BiCaretLeft, BiError } from 'react-icons/bi';
import { Link } from 'react-router-dom'
import { Table } from 'reactstrap';
import { Button } from 'reactstrap';
import { PaymentContext } from '../../../contexts/PaymentContext';
import { api } from '../../../services/api';
import { Container, PaymentIntro, PaymentTable} from './styles'
import { toast } from 'react-toastify'

interface PaymentOption {
    id: string;
    name: string;
    flag: string;
    installment: string;
}

export default function PaymentOption(){

    const { payments, setId, setPayments } = useContext(PaymentContext)
    const [ paymentName, setPaymentName ] = useState('')
    const [ result, setResult ] = useState([])
    const [notFound, setNotFound] = useState(false)

    function updatePayment() {
        console.log("++++++++++++++++++++")
        api.get('/payment_options').then((response) => {
            console.log("++++++++++POS-REQUISIÇÃO++++++++++=", response.data)
            setPayments(response.data)
        })
    }

    async function handleDelete(id: string) {
        console.log(id)
        const delete_req = await api.delete(`/payment_options/${id}`).then((response) => {
            console.log("RESPOSTA DELETE", response)
            if(!response.data.name){
                return toast.error('Opção de pagamento vinculada a um Pedido ou Venda!');
            }
            else {
                toast.success('Opção de pagamento excluída com sucesso!');
            }
        })
        console.log(`/payment_options/${id}`)
        console.log(delete_req)
        updatePayment()

    }


    function handleSearch(name: string){

        if(!localStorage.getItem('token')){
            return toast.error('É preciso estar logado para realizar essa ação!')
        }

        api.get(`/payment_options/search/${name}`).then(response => {
            console.log("DAta", response.data)
            console.log("NAme", name)
            setResult(response.data)

            if(response.data.length == 0) {
                setNotFound(true)
            }
            
        })
    }

    function handleGetBack(){
        setNotFound(false)
    }

    return (
        <Container>
           
            <PaymentIntro>
                <h1>Opções de Pagamento</h1>

                <input type='text' placeholder='Digite o Nome da Opção de Pagamento' onChange={(event) => setPaymentName(event.target.value)}/>
                <br/>
                <button type='submit' onClick={() => handleSearch(paymentName)}>Consultar</button>
            </PaymentIntro>


            { result.length == 0 && notFound && (
                <div id="warningNotFound">
                    <p>OPÇÃO DE PAGAMENTO NAO ENCONTRADA</p>
                    <BiError size="35" style={{color: "#F9DC5C", verticalAlign: 'middle', marginLeft: "1rem"}}/>
                </div>
                )
            }

           { result.length != 0 && (
             <PaymentTable>
             <Table bordered hover responsive >
                 <table className="content-table">
                 <thead>
                     <tr>
                         <th>
                             Nome Opção de Pagamento
                         </th>
                         <th>
                             Bandeira
                         </th>
                         <th>
                             Parcelamento
                         </th>
                         <th>
                             Ações
                         </th>
                     </tr>
                 </thead>
                 <tbody>
                     {result.map((payment: PaymentOption) => (
                         <tr key={payment.id}>
                             <td scope="row">
                                 {payment.name}
                             </td>
                             <td>
                                 {payment.flag}
                             </td>
                             <td>
                                 {payment.installment}
                             </td>
                             <td id="actionsColumn">
                                 <Button id="deleteButton" variant="danger" size="sm" onClick={() => handleDelete(payment.id)}>Excluir</Button>
                             </td>
                         </tr>
                         ))
                     }
                 </tbody>
                 </table>
             </Table>

             <Button id="cleanSearchButton"  size="sm" onClick={() => {setResult([])}}>
                Limpar Busca
            </Button>  

         </PaymentTable>

        )}


        {
        result.length == 0 && !notFound && localStorage.getItem('token') && (
            <PaymentTable>
             <Table bordered hover responsive >
                 <table className="content-table">
                 <thead>
                     <tr>
                         <th>
                             Nome Opção de Pagamento
                         </th>
                         <th>
                             Bandeira
                         </th>
                         <th>
                             Parcelamento
                         </th>
                         <th>
                             Ações
                         </th>
                     </tr>
                 </thead>
                 <tbody>
                     {payments.map((payment: PaymentOption) => (
                         <tr key={payment.id}>
                             <td scope="row">
                                 {payment.name}
                             </td>
                             <td>
                                 {payment.flag}
                             </td>
                             <td>
                                 {payment.installment}
                             </td>
                             <td id="actionsColumn">
                                 <Button id="deleteButton" variant="danger" size="sm" onClick={() => handleDelete(payment.id)}>Excluir</Button>
                             </td>
                         </tr>
                         ))
                     }
                 </tbody>
                 </table>
             </Table>
         </PaymentTable>
            )
        }
            
            { result.length == 0 && notFound && (
                 <button type='button' className="getBack" onClick={() => handleGetBack()}>
                    <BiCaretLeft size="28" style={{color: "white", verticalAlign: 'middle'}}/>
                    Voltar
                </button>   
                )
            }


            {
                localStorage.getItem('token') && (

                <Link to='/paymentoption/newpaymentoption'>
                    <button type='button' className ="register">+ Cadastrar</button>
                </Link>
                )
            }
       </Container>
    )
}