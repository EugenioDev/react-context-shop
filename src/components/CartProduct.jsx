import React, { useContext } from "react";
import { StoreContext } from "../StoreContext/StoreContext";
import { TrashIcon } from "@heroicons/react/24/solid";

function CartProduct({ product }) {
  const {products,increaseQuantity, quantity, removeFromCart } = useContext(StoreContext);

  const remFromCart = () => {
    removeFromCart(product);
  };

  return (
    <>
      <div className="my-2 flex items-center space-x-3 border border-gray-200 p-4">
        <img
          src={product.image}
          alt="all gategory prod"
          className="w-20 h-auto"
        />
        <div className="flex items-center justify-between w-full">
          <div>
            <p className="text-sm font-light">
              Prezzo: € {product.price.toFixed(2)}
            </p>
            <h1 className="font-bold text-lg">{product.title}</h1>
          </div>

          <div className="mt-5 flex flex-row items-center space-x-2">
            <TrashIcon className="w-6 h-6 text-red-500" onClick={remFromCart} />
          </div>
        </div>
      </div>
    </>
  );
}

export default CartProduct;
