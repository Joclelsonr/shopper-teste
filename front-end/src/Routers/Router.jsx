import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import RequestPage from "../pages/requests/RequestPage";
import Header from "../components/Header/Header";
import useRequestData from "../Hooks/useRequestData";
import Sidebar from "../components/Sidebar/Sidebar";
import { BASE_URL } from "../constants/Urls";
import InventoryPage from "../pages/inventory/InventoryPage";

const Router = () => {
  const [sidebar, setSidebar] = useState(false);

  const { data, loading, cart, setCart } = useRequestData(
    `${BASE_URL}/products`
  );

  const addPoduct = (product) => {
    const newCart = [...cart];

    if (product.qtyStock > 1) {
      const index = newCart.findIndex((item) => item.id === product.id);

      if (index >= 0) {
        newCart[index].qtyStock += 1;
        newCart[index].price += product.price;
      } else {
        newCart.push({ ...product, qtyStock: 1 });
      }
      setCart(newCart);
    } else {
      alert("Produto Indisponivel");
    }
  };

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <BrowserRouter>
      <Header showSidebar={showSidebar} />
      {sidebar && <Sidebar />}
      <Routes>
        <Route
          index
          element={
            <HomePage data={data} loading={loading} addPoduct={addPoduct} />
          }
        />
        <Route
          path="/pedidos"
          element={<RequestPage cart={cart} setCart={setCart} />}
        />
        <Route path="/estoque" element={<InventoryPage data={data} />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
