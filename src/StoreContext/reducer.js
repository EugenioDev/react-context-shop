//Nel reducer si crea lo stato che deve avere iniziale il nostro store
export const initialState = {
  total: 0,
  products: [],
  quantity: 1,
};

//2) LO STORE REDUCER HA DUE PARAMETRI: STATE - ACTION
// LO STATE è IL VALORE INIZIALE (INITIALSTATE)
// ACTION è un oggetto
const storeReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        products: action.payload, //  è utilizzato per passare i dati relativi all'aggiunta di un prodotto al carrello,
        //la rimozione di un prodotto dal carrello o l'aggiornamento del prezzo totale.
        //In sostanza modifiche che vengono apportate per aggiornare il componente che ci serve ed il suo stato
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        products: action.payload,
      };
    case "UPDATE_PRICE":
      return {
        ...state,
        total: action.payload,
      };
    default:
      return state;
  }
};
export default storeReducer;
