import React from "react";
import {TOTALORDERGET_REQUEST,TOTALORDERGET_SUCCESS,TOTALORDERGET_FAILURE,DELETE_TOTALORDER,UPDATE_TOTALORDER,ADDTO_TOTALORDER } from "./actionTypes";



const InitialState = {
Totalorder:[],
isLoading:false,
isError:false
}

export const reducer = (state=InitialState,{type,payload})=>{

   switch(type){
    case TOTALORDERGET_REQUEST: {return {...state,isLoading:true}};
    case TOTALORDERGET_SUCCESS: {
      
      return {...state,Totalorder:payload,isLoading:false}};
    case TOTALORDERGET_FAILURE: {return {...state,isError:true}};

    case DELETE_TOTALORDER:{return {...state,isLoading:false,isError:false}}
   
    case ADDTO_TOTALORDER:{return {...state,isloading:false,isError:false }}

    case UPDATE_TOTALORDER:{return {...state,isLoading:false,isError:false}}


    default: return state;
   }
}