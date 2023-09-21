import { CLEAR_PRICE, PAY_PRODUCTS } from "../types/types"

export const payProducts = (products, value = 1) => {
    return {
     type: PAY_PRODUCTS,
     products,
     value,
    }
 }

 export const clearPrice = () => {
    return {
     type: CLEAR_PRICE,
    }
 }