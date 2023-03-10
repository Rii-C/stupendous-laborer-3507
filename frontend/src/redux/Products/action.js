import { PRODUCT_REQUEST,PRODUCT_SUCCESS,PRODUCT_FAILURE } from "./actionTypes";
import axios from "axios";



export const ProductRequestAction = ()=>{
    return {type:PRODUCT_REQUEST}
}


export const ProductSuccessAction = (payload)=>{
    return {type:PRODUCT_SUCCESS,payload}
}

export const ProductFailureAction = ()=>{
    return {type:PRODUCT_FAILURE}
}


export const GetData = (payload) => (dispatch) => {
  dispatch(ProductRequestAction())
//   axios.get(`http://localhost:1010/products`)
axios({
    method:"get",
    baseURL:"https://outstanding-outfit-seal.cyclic.app/product",
    params:payload
})
.then((res)=>{
    // console.log(res.headers["x-total-count"])
dispatch(ProductSuccessAction(res.data))
})
.catch((err)=>{
    console.log(err)
    dispatch(ProductFailureAction())
})
}


