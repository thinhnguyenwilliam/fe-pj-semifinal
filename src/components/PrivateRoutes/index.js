import { Navigate, Outlet } from "react-router-dom";
import { getCookie } from "../../helpers/cookie";

const PrivateRoutes = () => {
    //const token=null;

    //khi dang nhap thanh cong thi mới cho vào page topic
    const token=getCookie("Token");
    
    return (
        <>
            {token ? <Outlet /> :<Navigate to="/login" />}


            {/* <Outlet /> */}
            {/* InfoUser đóng vai trò outlet */}
            {/* Trang PrivateRoutes */}
        </>
    )
}
export default PrivateRoutes;