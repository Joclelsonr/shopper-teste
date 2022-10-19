import { useNavigate } from "react-router-dom";
import { HeaderContainer } from "./styled";
import cartImage from "../../assets/cart.png";

const Header = ({ showSidebar }) => {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <div></div>
      <ul>
        <a onClick={() => navigate("/")}>Home</a>
        <a onClick={() => navigate("/pedidos")}>Pedidos</a>
        <a onClick={() => navigate("/estoque")}>Estoque</a>
      </ul>
      <img src={cartImage} onClick={showSidebar} />
    </HeaderContainer>
  );
};
export default Header;
