import {
  DECREMENT_COUNT,
  INCREMENT_COUNT,
  RESET_COUNT,
} from "../types/types";

const initialState = {
  count: 1,
};

export const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      return {
        count: state.count + 1,
      };
    case DECREMENT_COUNT:
      return state.count === 1
        ? {
            count: 1,
          }
        : {
            count: state.count - 1,
          };
    case RESET_COUNT:
      return (state.count = 0);
    default:
      return state;
  }
};
