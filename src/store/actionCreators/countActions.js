import { DECREMENT_COUNT, INCREMENT_COUNT } from "../types/types"

export const incrementCount = (count) => {
   return {
    type: INCREMENT_COUNT,
    payload: count
   }
}

export const decrementCount = (count) => {
    return {
        type: DECREMENT_COUNT,
        payload: count
       }
}
