import { createStore } from 'redux';
import authReducer from "./reducers/auth";

export default createStore (authReducer)