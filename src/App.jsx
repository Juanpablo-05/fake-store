import { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Products from "./components/Products";

function App() {
  const url = "https://fakestoreapi.com/products";

  const [info, setInfo] = useState([]);
  const [sininfo, setSininfo] = useState(false);

  const [filter, setFilter] = useState({
    category: "all",
    minPrice: 0,
    maxPrice: 1000
  });

  const [filteredProducts, setFilteredProducts] = useState([]);

  const api = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setInfo(data);
      });
  };

  useEffect(() => {
    api(url);
  }, []);

  useEffect(() => {
    const filteredProducts = info.filter( product => {
      return (
        product.price >= filter.minPrice &&
        (filter.category === "all" || product.category === filter.category) &&
        product.price <= filter.maxPrice
      );
    });
    setFilteredProducts(filteredProducts);
  }, [info, filter]);

  if (info.length === 0) {
    return <h1 className="carga">Cargando...</h1>;
  }

  const nada = () => {
    const noProductsInPriceRange = filteredProducts.length === 0;
    const noProductsInCategory = sininfo;
    const allProductsInPriceRange = filteredProducts.length === info.length;
    
    if (noProductsInPriceRange && noProductsInCategory) {
      setSininfo(true);
    } else if (allProductsInPriceRange) {
      setSininfo(false);
    }
  };

  return (
    <>
      <Nav filter = {setFilter} />
      <Products 
        info={filteredProducts}
        nada={ nada }
        sininfo={sininfo}
      />
    </>
  );
}

export default App;
