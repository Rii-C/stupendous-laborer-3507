import { WISHLIST_PRODUCT_REQUEST,WISHLIST_PRODUCT_SUCCESS,WISHLIST_PRODUCT_FAILURE } from "./actionTypes";
import axios from "axios";



export const WishlistProductRequestAction = ()=>{
    return {type:WISHLIST_PRODUCT_REQUEST}
}


export const WishlistProductSuccessAction = (payload)=>{
    return {type:WISHLIST_PRODUCT_SUCCESS,payload}
}

export const WishlistProductFailureAction = ()=>{
    return {type:WISHLIST_PRODUCT_FAILURE}
}


export const GetWishData = (dispatch) => {
  dispatch(WishlistProductRequestAction())
axios({
    method:"get",
    baseURL:"http://localhost:8000/wishlist"
})
.then((res)=>{
dispatch(WishlistProductSuccessAction(res.data))
})
.catch((err)=>{
    console.log(err)
    dispatch(WishlistProductFailureAction())
})
}


