//dùng để chứa tất cả reducer, hợp nhất lại

import { combineReducers } from "redux";
import { authenReducer } from "./authen";


export const allReducers=combineReducers({
    authenReducer,
    //thêm các reducer vào đây
}); 