// Generalmente si utilizza quando si crea il contest un PascaleCase
// Il nome del file reducer è generalmente camelCase
//1) importiamo createContext da React
import { createContext, useReducer } from "react";
import reducer, { initialState } from "./reducer";

// 2) salviamo il valore dello store in una costante in modo da utilizzarla in altri componenti!
export const StoreContext = createContext();

export const StoreContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState); // contiene due valori questo hook: lo stato iniziale
  //e la funzione reducer

  //Funzioni / metodi per aggiornare lo stato iniziale seguendo le indicazione del reducer funcion
  const addToCart = (product) => {
    const updateCart = state.products;
    // Verifica se il prodotto è già presente nel carrello
    const isProductInCart = updateCart.some((item) => item.id === product.id);
    if (!isProductInCart) {
      // Se il prodotto non è già nel carrello, aggiungilo
      updateCart.push(product);
      updatePrice(updateCart);

      dispatch({
        type: "ADD_TO_CART",
        payload: updateCart,
      });
    } else {
      console.log("Il prodotto è già presente nel carrello.");
    }
  };

  const removeFromCart = (product) => {
    const updateCart = state.products.filter(
      (currentProduct) => currentProduct.id !== product.id
    );

    updatePrice(updateCart);

    dispatch({
      type: "REMOVE_FROM_CART",
      payload: updateCart,
    });
  };

  const updatePrice = (products) => {
    let total = 0;
    products.forEach((product) => {
      total += product.price;
    });

    dispatch({
      type: "UPDATE_PRICE",
      payload: total,
    });
  };

  const value = {
    total: state.total,
    products: state.products,
    addToCart,
    removeFromCart,
  };

  //   Lo step finale è ritornare lo store provider con i metodi e gli stati che ci servono
  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};
