import React from 'react'
import { Container } from './styles';
import { TiTrash, TiPencil, TiDocumentText } from "react-icons/ti";
import { api } from '../..//services/api';
import { Link } from 'react-router-dom';


export default function Promotion({ id, name, startDate, endDate, discount }: any) {
    const deleteIcon = { color: "red", fontSize: "1.5em", marginLeft:"" }
    const editIcon = { color: "white", fontSize: "1.5em", marginLeft:"" }
    const showIcon = { color: "yellow", fontSize: "1.5em", marginLeft:"" }


    async function handleDelete(id: any) {
        api.delete(`/promotions/${id}`)

        console.log(id)
    }

    async function handleEdit(id: any) {

    }
    

    return (


        <Container>
            <h4>{name}</h4>
            <p>{startDate}</p>
            <p>{endDate}</p>
            <p className="discount">{discount}%OFF</p>
            
            <Link to="/promotions/updatepromotions"> <TiPencil style={editIcon}/></Link> <TiDocumentText style={showIcon}/> <TiTrash onClick={() => handleDelete(id)} style={deleteIcon}/> 
        </Container>
    )
}
