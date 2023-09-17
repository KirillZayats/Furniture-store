import { DECREMENT_COUNT, INCREMENT_COUNT, INIT_LIMIT } from "../types/types"

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

export const initLimit = (limit) => {
    return {
        type: INIT_LIMIT,
        limit: limit
       }
}
