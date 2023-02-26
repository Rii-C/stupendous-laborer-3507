import { ORDERGET_REQUEST,ORDERGET_SUCCESS,ORDERGET_FAILURE,DELETE_ORDER,UPDATE_ORDER,ADDTO_ORDER } from "./actionTypes";




export const OrdergetRequestAction = ()=>{
    return {type:ORDERGET_REQUEST}
}


export const OrdergetSuccessAction = (payload)=>{
    return {type:ORDERGET_SUCCESS,payload}
}

export const OrdergetFailureAction = ()=>{
    return {type:ORDERGET_FAILURE}
}

export const DeleteItemFromOrder=()=>{
    return {type:DELETE_ORDER}
}

export const AddtoOrder=()=>{
    return {type:ADDTO_ORDER}
}
export const UpdateOrder=()=>{
    return {type:UPDATE_ORDER}
}





export const getOrderData=(token)=>async (dispatch)=>{
    dispatch(OrdergetRequestAction)
  try {
        const res = await fetch("http://localhost:8000/place/order", {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                "authorization":token 
            },
        });
        const res_1 = await res.json();
        console.log(res_1);
        dispatch(OrdergetSuccessAction(res_1));
    } catch (err) {
        console.log(err);
        dispatch(OrdergetFailureAction);
    }
}

export const deleteItemFromOrder=(id,token)=>async(dispatch)=>{

    try{
       
        const res = await fetch(`http://localhost:8000/place/order/delete/${id}`,{
            method: "DELETE",
            headers: {
                "Content-type": "application/json",
                "authorization":token 
            },
        });
        const res_1= await res.json();
       console.log(res_1)
       dispatch(DeleteItemFromOrder)
       dispatch(getOrderData(token))
    }catch(err){
        console.log(err)
    }
}

export const addToOrder=(payload,token)=>async(dispatch)=>{
    console.log(payload);

    try{
      
        const res = await fetch(`http://localhost:8000/place/order/add`,{
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "authorization":token 
            },
            body:JSON.stringify(payload)
        });
        const res_1= await res.json();
       console.log(res_1)
       dispatch(AddtoOrder)
       dispatch(getOrderData(token))
    }catch(err){
        console.log(err)
    }
}

export const updateOrder=(payload,id,token)=>async(dispatch)=>{

    try{
        
        const res = await fetch(`http://localhost:8000/place/order/update/${id}`,{
            method: "PATCH",
            headers: {
                "Content-type": "application/json",
                "authorization":token 
            },
            body:JSON.stringify(payload)
        });
        const res_1= await res.json();
       console.log(res_1)
       dispatch(UpdateOrder)
       dispatch(getOrderData(token))
    }catch(err){
        console.log(err)
    }
}
