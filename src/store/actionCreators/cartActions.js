import { ADD_TO_CART, DECREMENT_COUNT_PRODUCT_CART, DELETE_FROM_CART, DELETE_PAY_FROM_CART, INCREMENT_COUNT_PRODUCT_CART, SET_STATUS_PAY } from "../types/types"

export const addProduct = (product, count = 1) => {
   return {
      type: ADD_TO_CART,
      product,
      count
   }
}

export const deleteProduct = (index) => {
   return {
      type: DELETE_FROM_CART,
      index
   }
}

export const deleteProductsPayFromCart = (products) => {
   return {
      type: DELETE_PAY_FROM_CART,
      products
   }
}

export const incrementCountProduct = (index) => {
   return {
      type: INCREMENT_COUNT_PRODUCT_CART,
      index
   }
}

export const decrementCountProduct = (index) => {
   return {
      type: DECREMENT_COUNT_PRODUCT_CART,
      index
   }
}

export const setStatusPay = (index) => {
   return {
      type: SET_STATUS_PAY,
      index
   }
}


