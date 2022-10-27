import { Container, Paragraph } from "./styled";

const InventoryPage = ({ data }) => {
  const inventory = data?.map(({ id, name, qtyStock }) => {
    return (
      <tr key={id}>
        <td>{`${name}`}</td>
        <td>
          {qtyStock > 0 ? qtyStock : <Paragraph>{"INDISPONÍVEL"}</Paragraph>}
        </td>
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
