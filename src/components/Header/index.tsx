import { Container, Content } from "./styles";
import LogoImg from '../../assets/favicon.png';
import { Link } from 'react-router-dom';
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { ProductContext } from "../../contexts/ProductContext";

export function Header() {

    const { token, setToken } = useContext(AuthContext)
    //const { getProducts } = useContext(ProductContext)
    const history = useHistory();

    function handleLogOut() {
        localStorage.clear();
        history.push("/login")
        location.reload()
    } 

    return (

        <Container>
            <Content>

                <Link to='/'>
                    <img src={LogoImg} alt="Logo Image" />
                </Link>
                <div className="links">
                    <Link to="/products"><h6>Produtos</h6></Link>

                    <Link to="/promotions"><h6>Promoções</h6></Link>

                    <Link to="/paymentoption"><h6>Opções de Pagamento</h6></Link>

                    <Link className="Users" to="/users"><h6>Usuários</h6></Link>

                    <Link to="/order"><h6>Pedidos</h6></Link>

                    <Link to="/sales"><h6>Vendas</h6></Link>

                    <Link to="/report"><h6>Relatório</h6></Link>

                    <Link className="Login" to="/login">
                        <button type='button' id="entrarButton" className="register">Entrar</button>
                    </Link>

                    <button type="submit" id="sairButton" onClick={() => handleLogOut()}>Sair</button>

                </div>

            </Content>
        </Container>

    );
}