import {
    SET_CATEGORY,
  } from "../types/types";
  
  const initialState = {
    category: ""
  };
  
  export const categoryReduser = (state = initialState, action) => {
    switch (action.type) {
        case SET_CATEGORY:
          return {
            category: action.category,
          }
      default:
        return state;
    }
  };