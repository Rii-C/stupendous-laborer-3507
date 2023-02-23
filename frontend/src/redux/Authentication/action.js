import {Log_in, Log_out} from "./actionType";

export const isAuth = (payload = true) => ({type: Log_in, payload});

export const isNotAuth = (payload = false) => ({type: Log_out, payload});