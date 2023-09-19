import {
    PAY_PRODUCTS,
} from "../types/types";

const initialState = {
    products: [],
};

export const payReduser = (state = initialState, action) => {
    state.products.length = 0;
    switch (action.type) {
        case PAY_PRODUCTS:
            if (Array.isArray(action.products)) {
                state.products = [...action.products];
            } else {
                console.log(action.products);
                action.products.count = action.value
                state.products.push(action.products)
            }
            return {
                products: state.products,
            }

        default:
            return state;
    }
};