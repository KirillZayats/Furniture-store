import {
  FETCH_PRODUCTS,
} from "../types/types";

const initialState = {
  products: [],
};

export const productsReduser = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        products: action.products
      }
    default:
      return state;
  }
};
