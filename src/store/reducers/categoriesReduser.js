import {
    FETCH_CATEGORIES,
  } from "../types/types";
  
  const initialState = {
    categories: []
  };
  
  export const categoriesReduser = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CATEGORIES:
          return {
            categories: action.categories
          }
      default:
        return state;
    }
  };