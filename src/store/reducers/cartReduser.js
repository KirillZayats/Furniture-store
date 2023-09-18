import {
  ADD_TO_CART,
  DECREMENT_COUNT_PRODUCT_CART,
  DELETE_FROM_CART,
  INCREMENT_COUNT_PRODUCT_CART,
} from "../types/types";

const initialState = {
  productsCart: [],
  allPrice: 0,
};

export const cartReduser = (state = initialState, action) => {
  console.log(action);
  let price = 0;
  switch (action.type) {
    case ADD_TO_CART:
      action.product.count = 1;
      state.productsCart.push(action.product)
      return {
        productsCart: state.productsCart,
        allPrice: state.allPrice + state.productsCart[state.productsCart.length - 1].price
      }
    case DELETE_FROM_CART:
      let indexItem = 0;
      for (let index = 0; index < state.productsCart.length; index++) {
        if (state.productsCart[index].id == action.id) {
          indexItem = index;
        }
      }
      price = state.allPrice - state.productsCart[indexItem].price * state.productsCart[indexItem].count;
      state.productsCart.splice(indexItem, 1);
      return {
        productsCart: state.productsCart,
        allPrice: price
      }
      case INCREMENT_COUNT_PRODUCT_CART:
        price = state.allPrice;
        if(state.productsCart[action.index].count < state.productsCart[action.index].limit) {
          price = state.allPrice + state.productsCart[action.index].price
          state.productsCart[action.index].count = state.productsCart[action.index].count + 1;
          console.log(state.productsCart[action.index]);
        }
        return {productsCart: state.productsCart,
          allPrice: price
          }
      case DECREMENT_COUNT_PRODUCT_CART:
        price = state.allPrice;
        if(state.productsCart[action.index].count > 1) {
          price = state.allPrice - state.productsCart[action.index].price
          state.productsCart[action.index].count = state.productsCart[action.index].count - 1;
        }
        return {productsCart: state.productsCart,
          allPrice: price
        }
    default:
      return state;
  }
};