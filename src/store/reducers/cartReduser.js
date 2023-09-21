import {
  ADD_TO_CART,
  DECREMENT_COUNT_PRODUCT_CART,
  DELETE_FROM_CART,
  DELETE_PAY_FROM_CART,
  INCREMENT_COUNT_PRODUCT_CART,
  SET_STATUS_PAY,
} from "../types/types";

const initialState = {
  productsCart: [],
  allPrice: 0,
};

export const cartReduser = (state = initialState, action) => {

  let price = 0;
  switch (action.type) {
    case ADD_TO_CART:
      action.product.count = action.count;
      state.productsCart.push(action.product);
      return {
        productsCart: state.productsCart,
        allPrice: state.allPrice
        // state.allPrice +
        // state.productsCart[state.productsCart.length - 1].price *
        //   action.count,
      };
    case DELETE_FROM_CART:
      if (state.productsCart[action.index].statusPay) {
        price = state.allPrice -
          state.productsCart[action.index].price *
          state.productsCart[action.index].count;
      }
      state.productsCart[action.index].statusPay = false;
      state.productsCart.splice(action.index, 1);
      return {
        productsCart: state.productsCart,
        allPrice: price,
      };
    case DELETE_PAY_FROM_CART:
      action.products.forEach(element => {
        for (let index = 0; index < state.productsCart.length; index++) {
          if(state.productsCart[index].id === element.id) {
            state.productsCart[index].statusPay = false;
            state.productsCart.splice(index, 1);
            index--
          }
        }
      }); 
      return { productsCart: state.productsCart, allPrice: 0 };

    case INCREMENT_COUNT_PRODUCT_CART:
      price = state.allPrice;
      if (state.productsCart[action.index].count < state.productsCart[action.index].limit) {
        state.productsCart[action.index].count =
          state.productsCart[action.index].count + 1;
        if (state.productsCart[action.index].statusPay) {
          price = state.allPrice + state.productsCart[action.index].price;
        }
      }
      return { productsCart: state.productsCart, allPrice: price };
    case DECREMENT_COUNT_PRODUCT_CART:
      price = state.allPrice;
      if (state.productsCart[action.index].count > 1) {
        state.productsCart[action.index].count =
          state.productsCart[action.index].count - 1;
        if (state.productsCart[action.index].statusPay) {
          price = state.allPrice - state.productsCart[action.index].price;
        }
      }
      return { productsCart: state.productsCart, allPrice: price };
    case SET_STATUS_PAY:
      if (state.productsCart[action.index].statusPay) {
        state.productsCart[action.index].statusPay = false;
        state.allPrice -= state.productsCart[action.index].price * state.productsCart[action.index].count
      } else {
        state.productsCart[action.index].statusPay = true;
        state.allPrice += state.productsCart[action.index].price * state.productsCart[action.index].count
      }

      return {
        productsCart: state.productsCart,
        allPrice: state.allPrice,
      };
    default:
      return state;
  }
};
