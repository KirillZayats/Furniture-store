import { ADD_FUNCTION } from "../types/types"

export const addFunction = (functionValue) => {
    return {
     type: ADD_FUNCTION,
     functionValue
    }
 }