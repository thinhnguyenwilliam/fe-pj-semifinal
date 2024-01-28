import { generateToken } from "../../helpers/generateToken";
import { createUser, getUser } from "../../services/UserServices";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate=useNavigate();

    const handleSubmit= async (event)=>{
        event.preventDefault();

        const tenDayDu=event.target.elements.fullName.value;
        const TaiKhoanEmail=event.target.elements.email.value;
        const MatKhau=event.target.elements.password.value;


        const  existUser=await getUser(TaiKhoanEmail);//trả ra array
        //console.log(existUser);
        if(existUser.lenght > 0)
            alert("email đã tồn tại");
        else{
            const data={
                fullName:tenDayDu,
                email:TaiKhoanEmail,
                password:MatKhau,
                token:generateToken()
            };

            //console.log(data);
            const result= await createUser(data)
            if(result && result.id)//trả về phải đủ cả 2 điều kiện thì chuyển hướng sang trang dang nhap
                navigate("/login");
            else
                alert("dang ky tai khoan that bai");
        }


        //console.log(tenDayDu);
        //console.log(TaiKhoanEmail);
        //console.log(MatKhau);
    }

    return (
        <>
            <div className="form">
                <h3 className="inner-title">Register Account</h3>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="fullName" placeholder="Full Name" required />
                    <input type="email" name="email" placeholder="Email" required />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        required
                    />
                    <button className="button button-main">Register</button>
                </form>
            </div>
        </>
    );
}
export default Register;