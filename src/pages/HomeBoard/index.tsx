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

    return (
        <Container>
            <HomeIntro>
                <h5>
                    Lorem ipsum dolor sit amet. Non nulla possimus et earum
                     quidem hic quas reiciendis sit voluptate quas non quia 
                     dolores sit atque molestiae
                </h5>

                <Link to='/login'>

                <button type="button">Comece a usar</button>
                </Link>
            
            </HomeIntro>

            <img src={HomeImg} alt="Imagem Intro" />
        </Container>
    );
}