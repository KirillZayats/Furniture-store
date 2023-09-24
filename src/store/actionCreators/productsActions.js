import {
  FETCH_PRODUCTS,
  FETCH_CATEGORIES,
  GET_PRODUCT,
  GET_VALUE_SEARCH,
} from "../types/types";
import { CATEGORIES, NAME_SITE_URL, PRODUCTS } from "../../constants";
import { getDatabase, ref, onValue, get, child } from "firebase/database";

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
  const database = getDatabase();
  // const response = ref(database, `/${namePath}`);
  let data = [];
  // onValue(ref(database, `/${namePath}`), (snapshot) => {
  //     data.push(snapshot.val());
  // }, {
  //     onlyOnce: true
  //   });
  const dbRef = ref(getDatabase());
  console.log(NAME_SITE_URL + namePath);

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
          dispatch(getProductsSuccess(data["0"]));
        } else if (namePath === CATEGORIES) {
          dispatch(getCategoriesSuccess(data["0"]));
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  // return async (dispatch) => {
  //     fetch(NAME_SITE_URL+namePath)
  //         .then(response => {
  //             if(!response.ok) {
  //                 throw new Error(response.statusText)
  //             }
  //             return response;
  //         })
  //         .then(response => response.json())
  //         .then(data => {
  //             if(namePath === PRODUCTS) {
  //                 dispatch(getProductsSuccess(data))
  //             }
  //             else if(namePath === CATEGORIES) {
  //                 dispatch(getCategoriesSuccess(data))
  //             }
  //         })
  // }
};
