
const reducer=(state,{type,payload})=>{
    switch(type){
        case "NAME":{
            return {...state,name:payload}

        }
        case "MOBILE":{
            return {...state,mobile:payload}

        }
        case "ADDRESS":{
            return {...state,address:payload}

        }
        case "LANDMARK":{
            return {...state,landmark:payload}

        }
        case "PINCODE":{
            return {...state,pincode:payload}

        }
    }
}

export default reducer