import React, { useContext, useState } from 'react'
import { Container } from './styles';
import { TiTrash, TiPencil, TiDocumentText } from "react-icons/ti";
import { api } from '../..//services/api';
import { Link } from 'react-router-dom';
import { PromotionContext } from '../../contexts/PromotionContext';

interface Promotion {
    _id: string,
    name: string,
    //startDate: Date,
    endDate: Date,
    discount: string,
    products: [],
}


export default function Promotion({ _id, name, endDate, discount, products }: Promotion) {
    const deleteIcon = { color: "#C81D25", fontSize: "1.5em", marginLeft:"" }
    const editIcon = { color: "white", fontSize: "1.5em", marginLeft:"" }
    const showIcon = { color: "#bba901", fontSize: "1.5em", marginLeft:"" }

    const {setId} = useContext(PromotionContext)

    const objTeste = {

        id: '555555222222222225505050505',
        name: 'Black friday'

    }

    async function handleDelete(id: string) {
        api.delete(`/promotions/${id}`)

        console.log(id)
    }

    function idTransfer(id: string) {
        setId(id)
    }

    /* async function handlePromotionID(idPromotion: string) {
        console.log("ID A SER TRANSFERIDA", idPromotion)
        setId(idPromotion)
        console.log("ID DO ESTADO NA FUNCTION SETID", id)
        getOneOrder(idPromotion)
        setTimeout(() =>{
            history.push("/order/showorder")     
        }, 500)
    }
 */
    return (


        <Container>
            <h4>{name}</h4>
            <p>{endDate}</p>
            <p className="discount">{discount}%OFF</p>
            {products?.map((product: any) => (
                <p>{product.name}</p>
            ))}
            {console.log("PRODUCTS NO COMP PROMOTION", products)}
            
            <Link to="/promotion/updatepromotions">
                <TiPencil style={editIcon} onClick={() =>{idTransfer(_id)}}/>
            </Link> 
            <TiDocumentText style={showIcon}/> 
            <TiTrash onClick={() => handleDelete(_id)} style={deleteIcon}/> 

        </Container>
    )
}
