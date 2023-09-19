import { PAY_PRODUCTS } from "../types/types"

export const payProducts = (products, value = 1) => {
    console.log(products);
    return {
     type: PAY_PRODUCTS,
     products,
     value,
    }
 }