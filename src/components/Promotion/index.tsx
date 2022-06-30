import React, { useContext, useEffect, useState } from 'react'
import { Container } from './styles';
import { TiTrash, TiPencil, TiDocumentText } from "react-icons/ti";
import { api } from '../..//services/api';
import { Link, useHistory } from 'react-router-dom';
import { PromotionContext } from '../../contexts/PromotionContext';
import { toast } from 'react-toastify';
import { OrderContext } from '../../contexts/OrderContext';

interface Promotion {
    _id: string,
    name: string,
    //startDate: Date,
    endDate: Date,
    discount: string,
    products: [],
}


export default function Promotion({ _id, name, endDate, discount, products }: Promotion) {
    const deleteIcon = { color: "#9b1a20", fontSize: "2rem", marginLeft:"" }
    const editIcon = { color: "white", fontSize: "2rem", marginLeft:"" }
    const showIcon = { color: "#97CC04", fontSize: "2rem", marginLeft:"" }

    const {setId, id,  getPromotions,
        onePromotion, setOnePromotion, getOnePromotion, promotions} = useContext(PromotionContext)
    
    const {orders} = useContext(OrderContext)

    const history = useHistory();

    async function handleDelete(id: string) {
        await api.delete(`/promotions/${id}`).then((response) => {
            console.log("RESPOSTA DELETE", response)
            if(!response.data.name){
                return toast.error('Promoção vinculada a um Pedido ou Venda!');
            }
            else {
                getPromotions()
                toast.success('Promoção excluída com sucesso!');
            }
        })
    }

    function idTransfer(id: string) {
        setId(id)
    }

     async function handlePromotionID(idPromotion: string) {

        let List

        console.log("ID A SER TRANSFERIDA", idPromotion)
        setId(idPromotion)
        console.log("ID DO ESTADO NA FUNCTION SETID", id)
        getOnePromotion(idPromotion)
        setTimeout(() =>{
            console.log("SALES", orders)     
            history.push("/promotion/showpromotion")
        }, 500)

       orders.map((order: any) => {
            if(order.product_has_order.product_name) {

            }
       })

    }
    
    

    return (


        <Container>
            <h4>{name}</h4>
            <p>{endDate}</p>
            <p className="discount">{discount}%OFF</p>
           
            {console.log("PRODUCTS NO COMP PROMOTION", products)}
            
            <div id="icons">
                <Link to="/promotion/updatepromotions">
                    <TiPencil style={editIcon} onClick={() =>{idTransfer(_id)}}/>
                </Link>
                
                <TiDocumentText style={showIcon} onClick={() => handlePromotionID(_id)}/>
                
                <TiTrash onClick={() => handleDelete(_id)} style={deleteIcon}/> 
            </div>

        </Container>
    )
}
