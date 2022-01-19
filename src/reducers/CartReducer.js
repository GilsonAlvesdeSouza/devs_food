const initialState = {
  products: [],
  address: [],
  discount: 0,
  delivery: 0,
};

const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      let products = [...state.products];
      let id = action.payload.data.id;
      let index = products.findIndex((item) => item.id === id);

      if (index > -1) {
        products[index].quantity += action.payload.quantity;
      } else {
        products.push({
          ...action.payload.data,
          quantity: action.payload.quantity,
        });
      }

      console.log(products);

      return { ...state, products };
    // // trecho para limpar o carrinho
    //   case "CLEAR_DATA": 
    //   return initialState;
    default:
      break;
  }
  return state;
};

export default CartReducer;
