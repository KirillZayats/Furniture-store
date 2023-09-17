import {
  FETCH_PRODUCTS,
} from "../types/types";

const initialState = {
  products: [],
  isLoadingProducts: false
};

export const productsReduser = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        products: action.products,
        isLoadingProducts: true
      }
    default:
      return state;
  }
};
