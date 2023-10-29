import React, { useEffect, useState } from "react";
import { allProducts } from "../Api/allProducts";
import SingleProduct from "./SingleProduct";

function Products() {
  // Chiamata API a tutti i prodotto per stampare il singolo prodotto con un componente diverso.
  const [products, setProducts] = useState([]); // inizializzo uno stato prodotti ad array vuoto da caricare successivamente con l'api.

  const getAllProducts = async () => {
    const resp = await allProducts();
    setProducts(resp.data);
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <>
      <h2 className="text-2xl font-bold underline mt-20">All Products</h2>
      {products &&
        products.map((product) => (
          <SingleProduct key={product.id} product={product} />
        ))}
    </>
  );
}

export default Products;
