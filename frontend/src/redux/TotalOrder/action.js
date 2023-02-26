import {TOTALORDERGET_REQUEST,TOTALORDERGET_SUCCESS,TOTALORDERGET_FAILURE,DELETE_TOTALORDER,UPDATE_TOTALORDER,ADDTO_TOTALORDER } from "./actionTypes";




export const TotalOrdergetRequestAction = ()=>{
    return {type:TOTALORDERGET_REQUEST}
}


export const TotalOrdergetSuccessAction = (payload)=>{
    return {type:TOTALORDERGET_SUCCESS,payload}
}

export const TotalOrdergetFailureAction = ()=>{
    return {type:TOTALORDERGET_FAILURE}
}

export const DeleteItemFromTotalOrder=()=>{
    return {type:DELETE_TOTALORDER}
}

export const AddtoTotalOrder=()=>{
    return {type:ADDTO_TOTALORDER}
}
export const UpdateTotalOrder=()=>{
    return {type:UPDATE_TOTALORDER}
}





export const getTotalOrderData=()=>async (dispatch)=>{
    dispatch(TotalOrdergetRequestAction)
  try {
        const res = await fetch("http://localhost:8000/total/place/order", {
            method: "GET",
            headers: {
                "Content-type": "application/json"
                 },
        });
        const res_1 = await res.json();
        console.log(res_1);
        dispatch(TotalOrdergetSuccessAction(res_1));
    } catch (err) {
        console.log(err);
        dispatch(TotalOrdergetFailureAction);
    }
}

export const deleteItemFromTotalOrder=(id)=>async(dispatch)=>{

    try{
       
        const res = await fetch(`http://localhost:8000/place/order/delete/${id}`,{
            method: "DELETE",
            headers: {
                "Content-type": "application/json"
                
            },
        });
        const res_1= await res.json();
       console.log(res_1)
       dispatch(DeleteItemFromTotalOrder)
       dispatch(getTotalOrderData())
    }catch(err){
        console.log(err)
    }
}

export const addToTotalOrder=(payload)=>async(dispatch)=>{
    console.log(payload);

    try{
      
        const res = await fetch(`http://localhost:8000/total/place/order/add`,{
            method: "POST",
            headers: {
                "Content-type": "application/json"
                },
            body:JSON.stringify(payload)
        });
        const res_1= await res.json();
       console.log(res_1)
       dispatch(AddtoTotalOrder)
       dispatch(getTotalOrderData())
    }catch(err){
        console.log(err)
    }
}

export const updateTotalOrder=(payload,id)=>async(dispatch)=>{

    try{
        
        const res = await fetch(`http://localhost:8000/place/order/update/${id}`,{
            method: "PATCH",
            headers: {
                "Content-type": "application/json"
                
            },
            body:JSON.stringify(payload)
        });
        const res_1= await res.json();
       console.log(res_1)
       dispatch(UpdateTotalOrder)
       dispatch(getTotalOrderData())
    }catch(err){
        console.log(err)
    }
}
