import {
    CLEAR_PRICE,
    PAY_PRODUCTS,
} from "../types/types";

const initialState = {
    products: [],
    pricePay: 0
};

export const payReduser = (state = initialState, action) => {
    state.products.length = 0;
    let price = 0;
    switch (action.type) {
        case PAY_PRODUCTS:
            if (Array.isArray(action.products)) {
                state.products = [...action.products.filter((element) => element.statusPay && element)];
                action.products.forEach(element => {
                    price += element.price * element.count
                });
            } else {
                console.log(action.products);
                action.products.count = action.value;
                price = action.products.price * action.products.count;
                state.products.push(action.products)
            }
            return {
                products: state.products,
                pricePay: price
            }
            case CLEAR_PRICE:
                return{
                    products: [],
                    pricePay: 0
                }
        default:
            return state;
    }
};