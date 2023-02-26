import {Log_in, Log_out} from "./actionType";

const initState = {
  token: null,
  userDetails:{}
};

export const IsAuth = (state = initState, {type, payload}) => {
  switch (type) {
    case Log_in: {
      console.log("payload:-",payload)
      return {
        ...state,
        token: payload,
      };
    }
    case Log_out: {
      return {
        ...state,
        login: payload,
      };
    }
    default: {
      return state;
    }
  }
};