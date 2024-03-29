import React from "react";
import { CARTGET_REQUEST,CARTGET_SUCCESS,CARTGET_FAILURE, DELETE_DATA, ADDTOCART, UPDATE_CART } from "./actionTypes";


const InitialState = {
cart:[],
isLoading:false,
isError:false,
cartCount:0
}

export const reducer = (state=InitialState,{type,payload})=>{

   switch(type){
    case CARTGET_REQUEST: {return {...state,isLoading:true}};
    case CARTGET_SUCCESS: {
      
      return {...state,cart:payload.CartData,cartCount:payload.CartCount,isLoading:false}};
    case CARTGET_FAILURE: {return {...state,isError:true,isLoading:false}};

    case DELETE_DATA:{return {...state,isError:false}}
   
    case ADDTOCART:{return {...state,isError:false }}

    case UPDATE_CART:{return {...state,isError:false}}


    default: return state;
   }
}