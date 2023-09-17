import {
    FETCH_CATEGORIES,
  } from "../types/types";
  
  const initialState = {
    categories: [],
    isLoadingCategories: false
  };
  
  export const categoriesReduser = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CATEGORIES:
          return {
            categories: action.categories,
            isLoadingCategories: true
          }
      default:
        return state;
    }
  };