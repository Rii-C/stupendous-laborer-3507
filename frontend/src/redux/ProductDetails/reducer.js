import React from "react";
import { PRODUCT_DETAILS_REQUEST,PRODUCT_DETAILS_SUCCESS,PRODUCT_DETAILS_FAILURE } from "./actionTypes";


const InitialState = {
data:{},
isLoading:false,
isError:false
}

export const reducer = (state=InitialState,{type,payload})=>{

   switch(type){
    case PRODUCT_DETAILS_REQUEST: {return {...state,isLoading:true}};
    case PRODUCT_DETAILS_SUCCESS: {
      // console.log(payload.image)
      return {...state,data:payload,isLoading:false}};
    case PRODUCT_DETAILS_FAILURE: {return {...state,isError:false}};
    default: return state;
   }
}