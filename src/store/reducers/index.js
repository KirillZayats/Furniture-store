import {combineReducers} from 'redux';
import { countReducer } from './countReducer';
import { productsReduser } from './productsReducer';
import { categoriesReduser } from './categoriesReduser';

export const rootReducer = combineReducers({
    count: countReducer,
    products: productsReduser,
    categories: categoriesReduser
});