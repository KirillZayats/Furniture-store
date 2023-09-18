import {
  DECREMENT_COUNT,
  INCREMENT_COUNT,
  INIT_LIMIT,
  RESET_COUNT,
} from "../types/types";

const initialState = {
  value: 1,
  limit: 1,
};

export const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      console.log(state.limit);
      return state.value < state.limit
        ? {
          value: state.value + 1,
          limit: state.limit,
          }
        : {
            value: state.value,
            limit: state.limit,
          };
    case DECREMENT_COUNT:
      return state.value === 1
        ? {
            value: 1,
            limit: state.limit,
          }
        : {
            value: state.value - 1,
            limit: state.limit,
          };
    case INIT_LIMIT:
      return {
        value: state.value,
        limit: action.limit,
      };
    case RESET_COUNT:
      return (state.value = 0);
    default:
      return state;
  }
};
