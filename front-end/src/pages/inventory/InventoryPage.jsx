import { Container } from "./styled";

const InventoryPage = ({ data }) => {
  const inventory = data?.map((product) => {
    return (
      <tr key={product.id}>
        <td>{`${product.name}`}</td>
        <td>{product.qtyStock}</td>
      </tr>
    );
  });
  return (
    <Container>
      <h3>Estoque</h3>
      <table>
        <tr>
          <th>Nome do Produto</th>
          <th>Estoque (unidades)</th>
        </tr>
        {inventory}
      </table>
    </Container>
  );
};
export default InventoryPage;
