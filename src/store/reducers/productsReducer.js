import {
  FETCH_PRODUCTS, GET_PRODUCT, GET_VALUE_SEARCH,
} from "../types/types";

const initialState = {
  products: [],
  isLoadingProducts: false,
  product: null,
  valueInput: ""
};

export const productsReduser = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        products: action.products,
        isLoadingProducts: true,
        product: state.product,
        valueInput: state.valueInput
      };
    case GET_PRODUCT: 
      return {
        products: state.products,
        isLoadingProducts: state.isLoadingProducts,
        product: state.products[action.payload - 1],
        valueInput: state.valueInput
      }
    
    case GET_VALUE_SEARCH: 
      return {
        products: state.products,
        isLoadingProducts: state.isLoadingProducts,
        product: state.product,
        valueInput: action.payload
      }
    
    default:
      return state;
  }
};
