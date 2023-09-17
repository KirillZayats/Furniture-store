import { SET_PRODUCT } from "../types/types"

export const setProduct = (product) => {
    return {
     type: SET_PRODUCT,
     product
    }
 }