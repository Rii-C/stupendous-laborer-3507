import axios from 'axios';
//GET-API
export const getAdminProductAPI=async(page)=>{
 let res = await axios.get(`http://localhost:8000/total/product?_page=${page}`);
 return res.data;
}

export const getAdminUsersAPI=async()=>{
 let res = await axios.get('http://localhost:8000/user');
 return res.data;
}

//POST-API
export const postAdminProductAPI=async(Product)=>{
let res = await axios.post('http://localhost:8000/product/add',Product);
console.log(res.data);
return res.data;
}

//UPDATE-FUNCTION
export const updateAdminProductAPI=async(id,newMrp,newPrice,newDiscount)=>{
    let res = await axios.patch(`http://localhost:8000/product/update/${id}`,{
        mrp:newMrp,
        price:newPrice,
        discount:newDiscount,
    });
    return res.data;
    }

//DELETE-FUNCTION
export const deleteAdminProductAPI=async(id)=>{
    let res = await axios.delete(`http://localhost:8000/product/delete/${id}`);
    return res.data;
    }
