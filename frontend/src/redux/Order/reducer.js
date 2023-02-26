import React from "react";
import { ORDERGET_REQUEST,ORDERGET_SUCCESS,ORDERGET_FAILURE,DELETE_ORDER,UPDATE_ORDER,ADDTO_ORDER } from "./actionTypes";


const InitialState = {
order:[],
isLoading:false,
isError:false
}

export const reducer = (state=InitialState,{type,payload})=>{

   switch(type){
    case ORDERGET_REQUEST: {return {...state,isLoading:true}};
    case ORDERGET_SUCCESS: {
      
      return {...state,order:payload,isLoading:false}};
    case ORDERGET_FAILURE: {return {...state,isError:true}};

    case DELETE_ORDER:{return {...state,isLoading:false,isError:false}}
   
    case ADDTO_ORDER:{return {...state,isloading:false,isError:false }}

    case UPDATE_ORDER:{return {...state,isLoading:false,isError:false}}


    default: return state;
   }
}