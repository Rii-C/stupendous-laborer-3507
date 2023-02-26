import React from "react";
import { CAROUSEL_REQUEST,CAROUSEL_SUCCESS,CAROUSEL_FAILURE } from "./actionTypes";


const InitialState = {
Carousels:[],
isLoading:false,
isError:false
}



export const reducer = (state=InitialState,{type,payload})=>{

   switch(type){
    case CAROUSEL_REQUEST: {return {...state,isLoading:true}};
    case CAROUSEL_SUCCESS: {
      // console.log(payload)
      return {...state,Carousels:payload,isLoading:false}};
    case CAROUSEL_FAILURE: {return {...state,isError:false}};
    default: return state;
   }
}