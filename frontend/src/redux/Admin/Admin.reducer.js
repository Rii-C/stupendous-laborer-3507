
import { ADD_PRODUCT_SUCCESS, DELETE_PRODUCT_SUCCESS, GET_PRODUCTS_ERROR, GET_PRODUCTS_LOADING, GET_PRODUCT_SUCCESS, GET_USERS_SUCCESS, UPDATE_PRODUCT_SUCCESS } from "./Admin.types"

const initialState = {
    loading: false,
    error: false,
    Product: [],
    PlacedOrder: [],
    Users:[]
}
export const adminReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_PRODUCTS_LOADING: {
            return {
                ...state,
                loading: true,
            }
        }
        case GET_PRODUCTS_ERROR: {
            return {
                ...state,
                loading: false,
                error: true,
            }
        }
        case GET_PRODUCT_SUCCESS: {
            return {
                ...state,
                loading: false,
                error: false,
                Product: payload,
            }
        }
        case GET_USERS_SUCCESS: {
            return {
                ...state,
                loading: false,
                error: false,
                Users: payload,
            }
        }
        case ADD_PRODUCT_SUCCESS: {
            return {
                ...state,
                loading: false,
                error: false,
            }
        }
        case UPDATE_PRODUCT_SUCCESS: {
            return {
                ...state,
                loading: false,
                error: false,
            }
        }
        case DELETE_PRODUCT_SUCCESS: {
            return {
                ...state,
                loading: false,
                error: false,
            }
        }
        default: {
            return state
        }
    }
}