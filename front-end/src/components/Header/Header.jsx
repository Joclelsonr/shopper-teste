import { useNavigate } from "react-router-dom";
import { HeaderContainer } from "./styled";
import cartImage from "../../assets/cart.png";

const Header = ({ showSidebar }) => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  const goToRequest = () => {
    navigate("/pedidos");
  };

  const goToInventory = () => {
    navigate("/estoque");
  };

  return (
    <HeaderContainer>
      <div></div>
      <ul>
        <a onClick={goToHome}>Home</a>
        <a onClick={goToRequest}>Pedidos</a>
        <a onClick={goToInventory}>Estoque</a>
      </ul>
      <img src={cartImage} onClick={showSidebar} />
    </HeaderContainer>
  );
};
export default Header;
