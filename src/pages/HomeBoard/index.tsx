import { Container, HomeIntro } from './styles';
import { Link } from 'react-router-dom'
import HomeImg from '../../assets/imageHome.png';
import { useEffect } from 'react';
import { api } from '../../services/api'
import axios from 'axios';

export function HomeBoard() {

    useEffect(() => {
        api.get('/').then((response) => {
            console.log(response.data)
        })
    }, [])
    //<p>Sistem inteligente para administração de negocios de todos os tipos, Simples, Prático e Moderno</p>
    return (
        <Container>
            <HomeIntro>
                <h5>
                    Bem Vindo ao Finance!
                </h5>
                
                <Link to='/login'>
                    <button type="button">Comece a Usar</button>
                </Link>
            
            </HomeIntro>

            <img src={HomeImg} alt="Imagem Intro"/>
        </Container>
    );
}