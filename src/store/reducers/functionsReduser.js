import { ADD_FUNCTION } from "../types/types";
  
  const initialState = {
    arrayFunctions: []
  };
  
  export const functionsReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_FUNCTION:
        console.log(state.arrayFunctions);
        console.log(action.functionValue);
        state.arrayFunctions.push(action.functionValue)
        return {
            arrayFunctions: state.arrayFunctions
        }
      default:
        return state;
    }
  };
  