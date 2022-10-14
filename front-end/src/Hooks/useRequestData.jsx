import axios from "axios";
import { useEffect, useState } from "react";

const useRequestData = (url) => {
  const [data, setData] = useState(undefined);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err.message.includes("Network")) {
          alert("Erro inesperado, tente novamente");
        } else {
          alert(err);
        }
      });
  }, [url, cart]);

  return { data, loading, cart, setCart };
};
export default useRequestData;
