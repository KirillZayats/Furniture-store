import { ERROR_USER, FETCH_USER, LOGOUT_USER, REGISTER_USER, USER_SUCCESS } from "../types/types";

const initialState = {
    user: null,
    loading: false,
    error: null,
};

export const userReduser = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USER:         
            return {
                user: null,
                loading: true,
                error: null
            }
            case USER_SUCCESS:         
            return {
                user: action.payload,
                loading: false,
                error: null
            }
            case REGISTER_USER:         
            return {
                user: action.payload,
                loading: false,
                error: null
            }
            case ERROR_USER:         
            return {
                user: state.user,
                loading: false,
                error: action.payload
            }
            case LOGOUT_USER:         
            return {
                user: null,
                loading: false,
                error: null
            }
        default:
            return state; 
    }
}