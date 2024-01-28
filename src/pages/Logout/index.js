import { useNavigate } from "react-router-dom";
import { deleteAllCookies } from "../../helpers/cookie";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { authen } from "../../action/authen";

const LogOut=()=>{
    //các việc cần làm ở trang log out:
    //xóa hết cookie trong cookie
    //chuyển hướng trang sang trang dang nhap
    //kg display ra màn hình cái gì cả

    const navigate=useNavigate();



    //neu log out thanh cong thì set lai value thanh fail
    const dispatch=useDispatch();

    
    


    //sau khi render ra giao dien trắng thì chuyển hướng trang sang trang dang nhap
    useEffect(()=>{
        deleteAllCookies();
        dispatch(authen(false));
        navigate("/login");
    },[]);




    return(
        <>
            {/* giao dien trắng */}
        </>
    );
}
export default LogOut;