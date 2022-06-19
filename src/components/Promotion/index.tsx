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
    products: string[],
}

export default function Promotion({ _id, name, endDate, discount, products }: Promotion) {
    const deleteIcon = { color: "red", fontSize: "1.5em", marginLeft:"" }
    const editIcon = { color: "white", fontSize: "1.5em", marginLeft:"" }
    const showIcon = { color: "yellow", fontSize: "1.5em", marginLeft:"" }

    const {setId} = useContext(PromotionContext)

    async function handleDelete(id: string) {
        api.delete(`/promotions/${id}`)

        console.log(id)
    }

    function idTransfer(id: string) {
        setId(id)
    }

    return (


        <Container>
            <h4>{name}</h4>
            <p>{endDate}</p>
            <p className="discount">{discount}%OFF</p>
            <p>{products}</p>
            {console.log(products)}
            
            <Link to="/promotion/updatepromotions">
                <TiPencil style={editIcon} onClick={() =>{idTransfer(_id)}}/>
            </Link> 
            <TiDocumentText style={showIcon}/> 
            <TiTrash onClick={() => handleDelete(_id)} style={deleteIcon}/> 

        </Container>
    )
}
