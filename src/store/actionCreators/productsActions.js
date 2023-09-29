import {
  FETCH_PRODUCTS,
  FETCH_CATEGORIES,
  GET_PRODUCT,
  GET_VALUE_SEARCH,
} from "../types/types";
import { CATEGORIES, PRODUCTS } from "../../constants";
import { getDatabase, ref, get, child } from "firebase/database";

export const getProductsSuccess = (products) => {
  return {
    type: FETCH_PRODUCTS,
    products,
  };
};
export const getCategoriesSuccess = (categories) => {
  return {
    type: FETCH_CATEGORIES,
    categories,
  };
};

export const getProduct = (id) => {
  return {
    type: GET_PRODUCT,
    payload: id,
  };
};

export const getValueSearch = (value) => {
  return {
    type: GET_VALUE_SEARCH,
    payload: value,
  };
};

export const getDataProducts = (namePath) => {
  let data = [];
  const dbRef = ref(getDatabase());
  return async (dispatch) => {
    get(child(dbRef, `/${namePath}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          data.push(snapshot.val());
        } else {
          console.log("No data available");
        }
      })
      .then(() => {
        if (namePath === PRODUCTS) {
          console.log(data["0"]);
          dispatch(getProductsSuccess(data["0"]));
        } else if (namePath === CATEGORIES) {
          dispatch(getCategoriesSuccess(data["0"]));
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
};
