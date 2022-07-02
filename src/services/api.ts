import axios from 'axios';
//import { AuthContext } from '../../contexts/AuthContext';


const token = localStorage.getItem('token');

export const api = axios.create({
    baseURL: 'https://financepidibackend.herokuapp.com',
    headers: { Authorization: `Bearer ${token}` } 
});



