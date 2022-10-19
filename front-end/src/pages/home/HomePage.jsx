import { useState } from "react";
import InputForm from "../../components/Input/InputForm";
import Loading from "../../components/loading/Loading";
import {
  TitleH3,
  ContainerSearch,
  ProductsContainer,
  ProductContainer,
  ButtonAdd,
  ButtonInd,
} from "./styled";

const HomePage = ({ data, loading, addPoduct }) => {
  const [inputFields, setInputFields] = useState("");

  const products = data
    ?.filter((product) => {
      return product.name.includes(inputFields.toUpperCase());
    })
    .map((product) => {
      return (
        <ProductContainer key={product.id}>
          <p>{product.name}</p>
          <div>
            <p>{`R$: ${product.price}`}</p>
          </div>
          {product.qtyStock > 1 ? (
            <ButtonAdd onClick={() => addPoduct(product)}>Adicionar</ButtonAdd>
          ) : (
            <ButtonInd disabled>Indisponível</ButtonInd>
          )}
        </ProductContainer>
      );
    });

  return (
    <>
      <TitleH3>Produtos</TitleH3>
      <ContainerSearch>
        <InputForm
          onChange={(e) => setInputFields(e.target.value)}
          value={inputFields}
          type={"text"}
          label={"Buscar Produto"}
        />
      </ContainerSearch>
      <ProductsContainer>{!loading ? products : <Loading />}</ProductsContainer>
    </>
  );
};
export default HomePage;
