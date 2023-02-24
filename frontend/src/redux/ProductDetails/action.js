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
    baseURL:"http://localhost:8000/product"
// url:`/${id}`
})
.then((res)=>{
    // console.log(res)
   res = res.data
    for(let i=0; i<res.length;i++){
        if(res[i]._id==id){
            dispatch(SuccessAction(res[i]))
            break;
        }
    }
})
.catch((err)=>{
    console.log(err)
    dispatch(FailureAction())
})
}


