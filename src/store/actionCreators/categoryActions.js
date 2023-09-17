import { SET_CATEGORY } from "../types/types"

export const setCategory = (category) => {
   return {
    type: SET_CATEGORY,
    category
   }
}