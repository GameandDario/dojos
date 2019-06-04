import { AUTH_USER, LOG_OUT_ACTION } from "../types/auth";

export function authAction(userData){
    return {
        type: AUTH_USER,
        payload: userData // {id: 1, username: 'toto', isConnected: true}
    }
}

export function logOutAction(){
    return {
        type: LOG_OUT_ACTION,
        payload: null
    }
}
