import { CAROUSEL_REQUEST,CAROUSEL_SUCCESS,CAROUSEL_FAILURE } from "./actionTypes";
import axios from "axios";



export const CarouselRequestAction = ()=>{
    return {type:CAROUSEL_REQUEST}
}


export const CarouselSuccessAction = (payload)=>{
    return {type:CAROUSEL_SUCCESS,payload}
}

export const CarouselFailureAction = ()=>{
    return {type:CAROUSEL_FAILURE}
}



export const GetData =  (dispatch) => {
  dispatch(CarouselRequestAction())
//   axios.get(`http://localhost:1010/products`)
axios({
    method:"get",
    baseURL:"http://localhost:8000/product/carousel"
})
.then((res)=>{
dispatch(CarouselSuccessAction(res.data))
})
.catch((err)=>{
    console.log(err)
    dispatch(CarouselFailureAction())
})
}


