import { AUTH_USER, LOG_OUT_ACTION } from "../types/auth";

const defaultState = {
    id: null,
    username: '',
    isConnected: false
}

export default (state = defaultState, action) => {
    switch(action.type) {
        case AUTH_USER:
            return {
                ...state,
                ...action.payload
            }
        case LOG_OUT_ACTION:
            return  defaultState
        default: 
            return state
    }
}