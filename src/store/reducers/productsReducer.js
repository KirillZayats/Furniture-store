import {
  FETCH_PRODUCTS, GET_PRODUCT,
} from "../types/types";

const initialState = {
  products: [],
  isLoadingProducts: false,
  product: null
};

export const productsReduser = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        products: action.products,
        isLoadingProducts: true,
        product: state.product
      };
    case GET_PRODUCT: {
      return {
        products: state.products,
        isLoadingProducts: state.isLoadingProducts,
        product: state.products[action.payload - 1]
      }
    } 
    default:
      return state;
  }
};
