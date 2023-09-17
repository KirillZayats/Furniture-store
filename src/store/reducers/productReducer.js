import {
    SET_PRODUCT,
  } from "../types/types";
  
  const initialState = {
    product: {}
  };
  
  export const productReduser = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCT:
          return {
            product: action.product,
          }
      default:
        return state;
    }
  };