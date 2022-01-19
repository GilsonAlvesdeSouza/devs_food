const initialState = {
    products: [],
    address: [],
    discount: 0,
    delivery: 0,
};

const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    // case "SET_TOKEN":
    //   return { ...state, token: action.payload.token };
    // case "SET_NAME":
    //   return { ...state, name: action.payload.name };
    // default:
    //   break;
  }

  return state;
};

export default CartReducer;
