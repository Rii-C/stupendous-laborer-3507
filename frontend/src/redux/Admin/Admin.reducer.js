
import { ADD_PRODUCT_SUCCESS, DELETE_PRODUCT_SUCCESS, GET_PRODUCTS_ERROR, GET_PRODUCTS_LOADING, GET_PRODUCT_SUCCESS, GET_TOTAL_COUNT, GET_TOTAL_PLACED_ORDERS_COUNT, GET_TOTAL_PLACED_ORDER_SUCCESS, GET_USERS_SUCCESS, UPDATE_DELIVER_TOTAL_PLACED_ORDER_SUCCESS, UPDATE_PRODUCT_SUCCESS, UPDATE_SHIPPING_TOTAL_PLACED_ORDER_SUCCESS } from "./Admin.types"

const initialState = {
    loading: false,
    error: false,
    TotalCount:0,
    Product: [],
    TotalPlacedOrderCount:0,
    TotalPlacedOrder: [],
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
        case GET_TOTAL_COUNT:{
            return {
                ...state,
                loading: false,
                error: false,
                TotalCount: payload,
            } 
        }
        case GET_TOTAL_PLACED_ORDERS_COUNT:{
            return {
                ...state,
                loading: false,
                error: false,
                TotalPlacedOrderCount: payload,
            } 
        }
        case GET_TOTAL_PLACED_ORDER_SUCCESS:{
            return {
                ...state,
                loading: false,
                error: false,
                TotalPlacedOrder: payload,
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
        case UPDATE_SHIPPING_TOTAL_PLACED_ORDER_SUCCESS:{
            return {
                ...state,
                loading: false,
                error: false,
            }
        }
        case UPDATE_DELIVER_TOTAL_PLACED_ORDER_SUCCESS:{
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