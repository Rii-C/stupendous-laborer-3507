import { deleteAdminProductAPI, getAdminProductAPI, getAdminUsersAPI, postAdminProductAPI, updateAdminProductAPI } from "./Admin.api";
import { ADD_PRODUCT_SUCCESS, DELETE_PRODUCT_SUCCESS, GET_PRODUCTS_ERROR, GET_PRODUCTS_LOADING, GET_PRODUCT_SUCCESS, GET_USERS_SUCCESS, UPDATE_PRODUCT_SUCCESS } from "./Admin.types";

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
  
  export const getProductData = () => async (dispatch) => {
    dispatch({ type: GET_PRODUCTS_LOADING });
    try {
      let data = await getAdminProductAPI();
      dispatch({ type: GET_PRODUCT_SUCCESS, payload: data });
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
    (id, newPrice, newDiscount, newMrp) => async (dispatch) => {
      dispatch({ type: GET_PRODUCTS_LOADING });
      try {
        await updateAdminProductAPI(id, newPrice, newDiscount, newMrp);
        dispatch({ type: UPDATE_PRODUCT_SUCCESS });
      } catch (error) {
        dispatch({ type: GET_PRODUCTS_ERROR });
      }
    };
