import { Container, HomeIntro } from './styles';
import { Link } from 'react-router-dom'
import HomeImg from '../../assets/imageHome.png';

export function HomeBoard() {

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