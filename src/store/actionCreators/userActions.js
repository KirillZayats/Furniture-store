import { auth } from "../../utils/db";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  ERROR_USER,
  FETCH_USER,
  LOGOUT_USER,
  REGISTER_USER,
  USER_SUCCESS,
} from "../types/types";

export const logInEmail = (email, password) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_USER });
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      console.log(user);
      dispatch({ type: USER_SUCCESS, payload: user });
    } catch (error) {
      dispatch({
        type: ERROR_USER,
        payload: "Error. Try entering your email or password again!",
      });
    }
  };
};

export const registerUser = (email, password) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_USER });
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      dispatch({ type: REGISTER_USER, payload: user });
    } catch (error) {
      dispatch({ type: ERROR_USER, payload: "Error. Failed to register. Perhaps an account with this email has already been created!" });
    }
  };
};

export const logOut = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_USER });
    try {
      await signOut(auth);
      dispatch({ type: LOGOUT_USER });
    } catch (error) {
      dispatch({
        type: ERROR_USER,
        payload:
          "Error",
      });
    }
  };
};
