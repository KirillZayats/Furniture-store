import { ADD_TO_CART, DECREMENT_COUNT_PRODUCT_CART, DELETE_FROM_CART, INCREMENT_COUNT_PRODUCT_CART, SET_CATEGORY } from "../types/types"

export const addProduct = (product) => {
   return {
    type: ADD_TO_CART,
    product
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


