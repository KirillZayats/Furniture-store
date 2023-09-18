import {combineReducers} from 'redux';
import { countReducer } from './countReducer';
import { productsReduser } from './productsReducer';
import { categoriesReduser } from './categoriesReduser';
import { categoryReduser } from './categoryReducer';
import { productReduser } from './productReducer';
import { cartReduser } from './cartReduser';

export const rootReducer = combineReducers({
    count: countReducer,
    products: productsReduser,
    categories: categoriesReduser,
    category: categoryReduser,
    product: productReduser,
    cartProduct: cartReduser
});