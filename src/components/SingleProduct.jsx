import React, { useContext } from "react";
import { StoreContext } from "../StoreContext/StoreContext";

function SingleProduct({ product }) {
  const { addToCart } = useContext(StoreContext);

  const addInCart = () => {
    addToCart(product);
  };

  return (
    <>
      <div className="my-2 flex items-center space-x-3 border border-gray-200 p-4">
        <img
          src={product.image}
          alt="all gategory prod"
          className="w-40 h-auto"
        />
        <div className="truncate">
          <p className="text-sm font-light">Prezzo: € {product.price.toFixed(2)}</p>
          <h1 className="font-bold text-lg">{product.title}</h1>
          <p className="truncate">{product.description}...</p>
          <div className="mt-5">
            <button
              onClick={addInCart}
              className="bg-orange-400
             hover:bg-orange-500 transition-all 
             ease-linear px-2 py-2 
             rounded-md cursor-pointer"
            >
              Aggiungi al Carrello
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleProduct;
