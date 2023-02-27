import axios from 'axios';
//GET-API
export const getAdminProductAPI=async(page)=>{
 let res = await axios.get(`https://outstanding-outfit-seal.cyclic.app/total/product?_page=${page}`);
 return res.data;
}

export const getAdminTotalPlacedOrdersAPI=async()=>{
    let res = await axios.get(`https://outstanding-outfit-seal.cyclic.app/total/place/order`);
    //console.log(res);
    return res.data;
   }

export const getAdminUsersAPI=async()=>{
 let res = await axios.get('http://localhost:8000/user');
 return res.data;
}

//POST-API
export const postAdminProductAPI=async(Product)=>{
let res = await axios.post('https://outstanding-outfit-seal.cyclic.app/product/add',Product);
console.log(res.data);
return res.data;
}

//UPDATE-FUNCTION
export const updateAdminProductAPI=async(id,newMrp,newPrice,newDiscount)=>{
    let res = await axios.patch(`https://outstanding-outfit-seal.cyclic.app/product/update/${id}`,{
        mrp:newMrp,
        price:newPrice,
        discount:newDiscount,
    });
    return res.data;
    }

export const updateShippingAdminTotalPlacedOrdersAPI=async(id)=>{
    let res = await axios.patch(`https://outstanding-outfit-seal.cyclic.app/total/place/order/update/${id}`,{
      shipping:true
    });
    console.log(res.data)
    return res.data;
    }    

export const updateDelivergAdminTotalPlacedOrdersAPI=async(id)=>{
    let res = await axios.patch(`https://outstanding-outfit-seal.cyclic.app/total/place/order/update/${id}`,{
        deliver:true
    })
    return res.data;
    }    
    

//DELETE-FUNCTION
export const deleteAdminProductAPI=async(id)=>{
    let res = await axios.delete(`https://outstanding-outfit-seal.cyclic.app/product/delete/${id}`);
    return res.data;
    }

export const deleteAdminTotalPlacedOrdersAPI=async(id)=>{
    let res = await axios.delete(`https://outstanding-outfit-seal.cyclic.app/total/place/order/delete/${id}`);
    return res.data;
    }    
