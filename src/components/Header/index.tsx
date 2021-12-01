import { Container, Content } from "./styles";
import LogoImg from '../../assets/piticas-logo-transparente.png';
import {Link} from 'react-router-dom';

export function Header() {
    
    return (

        <Container>       
            <Content>
                
                <Link to='/'>
                    <img src={LogoImg} alt="Logo imagem" />
                </Link>
                <div className="links">
                    <Link to="/products">Produtos</Link>

                    <Link to="/promotions">Promoções</Link>

                    <Link to="/paymentoption">Opções de Pagamento</Link>

                    <Link className ="Users" to="/users">Usuários</Link>

                    <Link to="/order">Pedidos</Link>
                    
                    <Link to="/sales">Vendas</Link>

                    <Link to="/report">Relatório Inteligente</Link>

                    <Link className ="Login" to="/login">Entrar</Link>
                    
                </div>

            </Content>
        </Container>

    );
}