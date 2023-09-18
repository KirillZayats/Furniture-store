import { FETCH_PRODUCTS, FETCH_CATEGORIES, GET_PRODUCT } from "../types/types"
import { CATEGORIES, NAME_SITE_URL, PRODUCTS } from '../../Constants';

export const getProductsSuccess = (products) => {
    return {
        type: FETCH_PRODUCTS,
        products
    }
}
export const getCategoriesSuccess = (categories) => {
    return {
        type: FETCH_CATEGORIES,
        categories
    }
}

export const getProduct = (id) => {
    return {
        type: GET_PRODUCT,
        payload: id
    }
}

export const getDataProducts = (namePath) => {
    console.log(NAME_SITE_URL+namePath);
    return async (dispatch) => {
        fetch(NAME_SITE_URL+namePath)
            .then(response => {
                if(!response.ok) {
                    throw new Error(response.statusText)
                }
                return response;
            })
            .then(response => response.json())
            .then(data => {
                if(namePath === PRODUCTS) {
                    dispatch(getProductsSuccess(data))
                } 
                else if(namePath === CATEGORIES) {
                    dispatch(getCategoriesSuccess(data))
                }
            })
    }
}