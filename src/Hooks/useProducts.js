import { useEffect, useState } from "react";
import axios from "axios";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    axios
      .get("/funitruerData.json") 
      .then((res) => {
        if (Array.isArray(res.data)) {
          setProducts(res.data); 
        } else {
          setProducts([]); 
        }
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return { products, loading, error };
};

export default useProducts;
