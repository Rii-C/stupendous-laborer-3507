import React from "react";
import { PRODUCT_REQUEST,PRODUCT_SUCCESS,PRODUCT_FAILURE } from "./actionTypes";


const InitialState = {
products:[],
isLoading:false,
isError:false
}

export const reducer = (state=InitialState,{type,payload})=>{

   switch(type){
    case PRODUCT_REQUEST: {return {...state,isLoading:true}};
    case PRODUCT_SUCCESS: {
      // console.log(payload)
      return {...state,products:payload,isLoading:false}};
    case PRODUCT_FAILURE: {return {...state,isError:false}};
    default: return state;
   }
}