import { PRODUCT_DETAILS_REQUEST,PRODUCT_DETAILS_SUCCESS,PRODUCT_DETAILS_FAILURE } from "./actionTypes";
import axios from "axios";



export const RequestAction = ()=>{
    return {type:PRODUCT_DETAILS_REQUEST}
}


export const SuccessAction = (payload)=>{
    return {type:PRODUCT_DETAILS_SUCCESS,payload}
}

export const FailureAction = ()=>{
    return {type:PRODUCT_DETAILS_FAILURE}
}


export const GetData = (id) => (dispatch) => {
  dispatch(RequestAction())

axios({
    method:"get",
    baseURL:"http://localhost:1010/products",
url:`/${id}`
})
.then((res)=>{
dispatch(SuccessAction(res.data))
})
.catch((err)=>{
    console.log(err)
    dispatch(FailureAction())
})
}


