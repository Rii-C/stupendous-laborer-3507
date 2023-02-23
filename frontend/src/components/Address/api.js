

export const addAdress=(payload)=>{

    fetch(`http://localhost:8000/address/add`,{
        method: "POST",
        headers: {
            "Content-type": "application/json",
            "63f707594098b4b502b3aa47":eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiI2M2Y2NmU1YThlZDZkNmEwMDU1MDY4ZjIiLCJpYXQiOjE2NzcwOTQ1NTd9.sH6X-IuzkMRE9H76BIS_PX-DdSgGD3NBBwGgo9i_E-k
        },
        body:JSON.stringify(payload)
    }).then(res=>res.json())
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
    }