import { deleteAdminProductAPI, deleteAdminTotalPlacedOrdersAPI, getAdminProductAPI, getAdminTotalPlacedOrdersAPI, getAdminUsersAPI, postAdminProductAPI, updateAdminProductAPI, updateDelivergAdminTotalPlacedOrdersAPI, updateShippingAdminTotalPlacedOrdersAPI } from "./Admin.api";
import { ADD_PRODUCT_SUCCESS, DELETE_PRODUCT_SUCCESS, DELETE_TOTAL_PLACED_ORDER_SUCCESS, GET_PRODUCTS_ERROR, GET_PRODUCTS_LOADING, GET_PRODUCT_SUCCESS, GET_TOTAL_COUNT, GET_TOTAL_PLACED_ORDERS_COUNT, GET_TOTAL_PLACED_ORDER_SUCCESS, GET_USERS_SUCCESS, UPDATE_DELIVER_TOTAL_PLACED_ORDER_SUCCESS, UPDATE_PRODUCT_SUCCESS, UPDATE_SHIPPING_TOTAL_PLACED_ORDER_SUCCESS } from "./Admin.types";

//POST-FUNCTION

  export const postProductData = (Product) => async (dispatch) => {
    console.log("Product", Product);
    dispatch({ type: GET_PRODUCTS_LOADING });
    try {
      await postAdminProductAPI(Product);
      dispatch({ type: ADD_PRODUCT_SUCCESS });
    } catch (error) {
      dispatch({ type: GET_PRODUCTS_ERROR });
    }
  };
  
  // GET-FUNCTION
  
  export const getProductData = (page) => async (dispatch) => {
    dispatch({ type: GET_PRODUCTS_LOADING });
    try {
      let data = await getAdminProductAPI(page);
      dispatch({ type: GET_PRODUCT_SUCCESS, payload: data.ProductData });
      dispatch({type:GET_TOTAL_COUNT,payload:data.TotalCount})
    } catch (error) {
      dispatch({ type: GET_PRODUCTS_ERROR });
    }
  };

  export const getTotalPlacedOrdersData = () => async (dispatch) => {
    dispatch({ type: GET_PRODUCTS_LOADING });
    try {
      let data = await getAdminTotalPlacedOrdersAPI();
      dispatch({ type: GET_TOTAL_PLACED_ORDER_SUCCESS, payload: data.TotalOrdersData});
      dispatch({type:GET_TOTAL_PLACED_ORDERS_COUNT,payload:data.TotalOrdersCount})
    } catch (error) {
      dispatch({ type: GET_PRODUCTS_ERROR });
    }
  };

  export const getUserData = () => async (dispatch) => {
    dispatch({ type: GET_PRODUCTS_LOADING });
    try {
      let data = await getAdminUsersAPI();
      dispatch({ type: GET_USERS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: GET_PRODUCTS_ERROR });
    }
  };
  
  //DELETE-FUNCTION
  
  export const deleteProductData = (id) => async (dispatch) => {
    dispatch({ type: GET_PRODUCTS_LOADING });
    try {
      await deleteAdminProductAPI(id);
      dispatch({ type: DELETE_PRODUCT_SUCCESS });
    } catch (error) {
      dispatch({ type: GET_PRODUCTS_ERROR });
    }
  };
  
  //UPDATE-FUNCTION
  
  export const updateProductData =
    (id,newMrp, newPrice, newDiscount) => async (dispatch) => {
      dispatch({ type: GET_PRODUCTS_LOADING });
      try {
        await updateAdminProductAPI(id, newMrp, newPrice, newDiscount);
        dispatch({ type: UPDATE_PRODUCT_SUCCESS });
      } catch (error) {
        dispatch({ type: GET_PRODUCTS_ERROR });
      }
    };

    export const updateTotalPlacedOrderShipping =
    (id) => async (dispatch) => {
      dispatch({ type: GET_PRODUCTS_LOADING });
      try {
        await updateShippingAdminTotalPlacedOrdersAPI(id);
        dispatch({ type: UPDATE_SHIPPING_TOTAL_PLACED_ORDER_SUCCESS });
      } catch (error) {
        dispatch({ type: GET_PRODUCTS_ERROR });
      }
    };

    export const updateTotalPlacedOrderDeliver =
    (id) => async (dispatch) => {
      dispatch({ type: GET_PRODUCTS_LOADING });
      try {
        await updateDelivergAdminTotalPlacedOrdersAPI(id);
        dispatch({ type: UPDATE_DELIVER_TOTAL_PLACED_ORDER_SUCCESS });
      } catch (error) {
        dispatch({ type: GET_PRODUCTS_ERROR });
      }
    };

    // DELETE-FUNCTION

    export const deleteTotalPlacedOrderData = (id) => async (dispatch) => {
      dispatch({ type: GET_PRODUCTS_LOADING });
      try {
        await deleteAdminTotalPlacedOrdersAPI(id);
        dispatch({ type: DELETE_TOTAL_PLACED_ORDER_SUCCESS });
      } catch (error) {
        dispatch({ type: GET_PRODUCTS_ERROR });
      }
    };
