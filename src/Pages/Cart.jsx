import React, { useContext } from "react";
import { StoreContext } from "../StoreContext/StoreContext";
import Navbar from "../components/Navbar";
import CartProduct from "../components/CartProduct";

function Cart() {
  const { products, total } = useContext(StoreContext);
  return (
    <>
      <Navbar />

      <div className="mt-20 p-2 max-w-4xl mx-auto md:w-full">
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-2xl">Carrello</h3>
          <p>
            <span className="font-semibold">Totale:</span> € {total.toFixed(2)}
          </p>
        </div>
        <div>
          {products &&
            products.map((product) => (
              <CartProduct product={product} key={product.id} />
            ))}
        </div>
      </div>
    </>
  );
}

export default Cart;
