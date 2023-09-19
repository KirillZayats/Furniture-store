import { ADD_TO_CART, DECREMENT_COUNT_PRODUCT_CART, DELETE_FROM_CART, INCREMENT_COUNT_PRODUCT_CART, SET_CATEGORY, SET_STATUS_PAY } from "../types/types"

export const addProduct = (product, count = 1) => {
   return {
    type: ADD_TO_CART,
    product,
    count
   }
}

export const deleteProduct = (id) => {
    return {
     type: DELETE_FROM_CART,
     id
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


