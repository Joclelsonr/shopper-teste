import useRequestData from "../../Hooks/useRequestData";
import { BASE_URL } from "../../constants/Urls";
import { Container, Paragra, Purchases } from "./styled";

const Sidebar = () => {
  const { data } = useRequestData(`${BASE_URL}/products/purchases`);

  const purchases = data
    ?.sort((current, next) => {
      let currentDate = current.date.split("/").reverse().join("-");
      let nextDate = next.date.split("/").reverse().join("-");

      return new Date(currentDate).getTime() - new Date(nextDate).getTime();
    })
    .map((item, index) => {
      return (
        <Purchases key={index}>
          <div className="textup">
            <p>N. Cliente</p>
            <h5>{item.client}</h5>
            <p>Data de entrega:</p>
            <h5>{item.date}</h5>
          </div>
          <div>
            <p>{`N. Produto: ${item.name}`}</p>
            <p>{`Preço: ${item.price}`}</p>
            <p>{`Quantidade: ${item.qtd}`}</p>
          </div>
        </Purchases>
      );
    });

  return (
    <Container>
      <h2>Compras</h2>
      {purchases}
      {!purchases?.length && <Paragra>Você não tem compras :( </Paragra>}
    </Container>
  );
};
export default Sidebar;
