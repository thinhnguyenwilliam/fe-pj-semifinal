import { useDispatch } from "react-redux";
import { setCookie } from "../../helpers/cookie";
import { getUser } from "../../services/UserServices";
import { useNavigate } from "react-router-dom";
import { authen } from "../../action/authen";

const Login = () => {
    const chuyenHuong=useNavigate();
    const dispatch=useDispatch();


    //submit lên trả ra bản ghi có token và lưu token vào trong cookie
    const handleSubmit = async (event) => {
        event.preventDefault();
        const TaiKhoanEmail=event.target.elements.email.value;
        const MatKhau=event.target.elements.password.value;

        //console.log(TaiKhoanEmail);
        //console.log(MatKhau);

        const result=await getUser(TaiKhoanEmail,MatKhau);
        //console.log(result);
        if(result && result.length>0)//nếu có data và mảng data lenght>0
        {
            //console.log("làm gì đó");
            //nếu đã vào đây thì lưu result vào cookie

            const data=result[0];
            //console.log(data);

            let time=1;
            setCookie("id",data.id,time);//1 ngày
            setCookie("FullName",data.fullName,time);
            setCookie("Email",data.email,time);
            setCookie("Token",data.token,time);


            dispatch(authen(true));//dang nhap thanh cong


            chuyenHuong("/");//đăng nhập thành công chuyển hướng sang trang chủ
        }
        else{
            alert("email or mật khẩu kg hợp lệ");
        }
    }


    return (
        <>
            <div className="form">
                <h3 className="inner-title">Login Quiz</h3>
                <form onSubmit={handleSubmit}>
                    <input type="email" name="email" placeholder="Email" required />
                    <input type="password" name="password" placeholder="Password" required />
                    <button className="button button-main">Login</button>
                </form>
            </div>
        </>
    );
}
export default Login;