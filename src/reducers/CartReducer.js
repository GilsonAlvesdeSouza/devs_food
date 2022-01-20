const initialState = {
  products: [],
  address: [],
  discount: 0,
  delivery: 0,
};

const CartReducer = (state = initialState, action) => {
  let products = [...state.products];
  switch (action.type) {
    case "ADD_PRODUCT":
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
      return { ...state, products };
    case "CHANGE_QUANTITY_PRODUCT":
      let indexChange = action.payload.key;
      if (products[indexChange]) {
        switch (action.payload.operation) {
          case "-":
            products[indexChange].quantity--;
            if (products[indexChange].quantity <= 0) {
              products = products.filter(
                (item, index) => index !== indexChange
              );
            }
            break;
          case "+":
            products[indexChange].quantity++;
            break;

          default:
            break;
        }
      }
      return { ...state, products };
    default:
      break;
  }
  return state;
};

export default CartReducer;
