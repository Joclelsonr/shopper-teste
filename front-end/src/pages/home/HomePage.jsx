import Loading from "../../components/loading/Loading";
import { TitleH3, ProductsContainer, ProductContainer } from "./styled";

const HomePage = ({ data, loading, addPoduct }) => {
  const products = data?.map((product) => {
    return (
      <ProductContainer key={product.id}>
        <p>{product.name}</p>
        <div>
          <p>{`R$: ${product.price}`}</p>
          {/* <p>{`Qtd. disponível: ${product.qtyStock}`}</p> */}
        </div>
        <button onClick={() => addPoduct(product)}>Adicionar</button>
      </ProductContainer>
    );
  });
  return (
    <>
      <TitleH3>Produtos</TitleH3>
      <ProductsContainer>{!loading ? products : <Loading />}</ProductsContainer>
    </>
  );
};
export default HomePage;
