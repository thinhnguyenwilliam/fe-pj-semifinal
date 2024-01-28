//khi sửa code ở reduer tự động load lại data



export const authenReducer = (state = false, action) => {
    //vì chỉ có 1 case nên xài if else cho nhanh
    if(action.type==="AUTHEN")
        return action.value;
    else    
        return state;
}