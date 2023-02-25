import React from "react";
import { WISHLIST_PRODUCT_REQUEST,WISHLIST_PRODUCT_SUCCESS,WISHLIST_PRODUCT_FAILURE } from "./actionTypes";


const InitialState = {
Wishlist_Products:[],
isLoading:false,
isError:false
}

export const reducer = (state=InitialState,{type,payload})=>{

   switch(type){
    case WISHLIST_PRODUCT_REQUEST: {return {...state,isLoading:true}};
    case WISHLIST_PRODUCT_SUCCESS: {
      // console.log(payload)
      return {...state,Wishlist_Products:payload,isLoading:false}};
    case WISHLIST_PRODUCT_FAILURE: {return {...state,isError:false}};
    default: return state;
   }
}