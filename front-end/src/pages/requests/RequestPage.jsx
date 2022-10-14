import axios from "axios";
import InputForm from "../../components/Input/InputForm";
import useForm from "../../Hooks/UseForm";
import { BASE_URL } from "../../constants/Urls";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FormContainer, ProductContainer, TitleH3, Button } from "./styled";

const RequestPage = ({ cart, setCart }) => {
  const { form, onChange, clean } = useForm({ client: "", date: "" });

  const productsCart = cart?.map((product, index) => {
    return (
      <ProductContainer key={index}>
        <p>{product.name}</p>
        <div>
          <p>{`R$: ${product.price.toFixed(2)}`}</p>
          <p>{`Quantidade: ${product.qtyStock}`}</p>
        </div>
        <button onClick={() => removeProduct(product)}>Remover Item</button>
      </ProductContainer>
    );
  });

  const total = cart.reduce((valAtn, valAtu) => valAtn + valAtu.price, 0);

  const removeProduct = (product) => {
    const products = [...cart];

    const newCart = products
      .map((item) => {
        if (item.id === product.id) {
          return {
            ...item,
            qtyStock: item.qtyStock - 1,
            price: (item.price / item.qtyStock) * (item.qtyStock - 1),
          };
        }

        return item;
      })
      .filter((item) => item.qtyStock > 0);

    setCart(newCart);
  };

  const sendRequest = async (event) => {
    event.preventDefault();

    const body = {
      form,
      cart,
    };
    await axios
      .post(`${BASE_URL}/products/purchases`, body)
      .then((response) => {
        console.log(response);
        toast.success(`${response.data}`);
        clean();
      })
      .catch((error) => {
        console.log(error);
        toast.error(`${error.response.data.message}`);
      });
  };

  return (
    <>
      <TitleH3>Pedidos</TitleH3>
      <FormContainer onSubmit={sendRequest}>
        <InputForm
          onChange={onChange}
          value={form.client}
          name={"client"}
          type={"text"}
          label={"Nome do cliente"}
        />

        <InputForm
          onChange={onChange}
          value={form.date}
          name={"date"}
          type={"date"}
          label={""}
        />
        {productsCart}
        {`Valor total: R$${total.toFixed(2).replace(".", ",")}`}
        <Button>Fazer Pedido</Button>
        <ToastContainer />
      </FormContainer>
    </>
  );
};
export default RequestPage;
