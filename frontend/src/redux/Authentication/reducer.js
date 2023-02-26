import {Log_in, Log_out} from "./actionType";

const count = localStorage.getItem("token")

const initState = {
  
  token: count || null,
  userDetails:{}
};

export const IsAuth = (state = initState, {type, payload}) => {
  // console.log("tokenR:-",initState.token)
  switch (type) {
    case Log_in: {
      // console.log("payload:-",payload)
      return {
        ...state,
        token: payload,
      };
    }
    case Log_out: {
      return {
        ...state,
        token: payload,
      };
    }
    default: {
      return state;
    }
  }
};