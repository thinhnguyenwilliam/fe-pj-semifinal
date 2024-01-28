import { Link, NavLink, Outlet } from "react-router-dom";
import './LayoutDefault.scss';
import { getCookie } from "../../helpers/cookie";
import { useSelector } from "react-redux";

const LayoutDefault = () => {

    //biên LayRaAuthen cập nhật giá trị mới thì phát hiện dòng code
    //"const LayRaAuthen=useSelector(state=>state.authenReducer);" có sự thay đổi nên render lại giao diện(LayoutDefault)
    const LayRaAuthen=useSelector(state=>state.authenReducer);



    //neu chua dang nhap thi chua co token
    const LayRaToken = getCookie("Token");
    //console.log(LayRaToken);

    return (
        <>
            {/* thẻ a sẽ làm load lại trang web */}
            {/* dùng component Link trong react router sẽ kg load lại trang web */}
            <header className="header">
                <h1 className="header__logo">
                    <Link to="/">Quiz</Link>
                </h1>

                {/* neu co LayRaToken thì mới show ra */}
                {LayRaToken && (
                    <ul className="header__menu">
                        <li>
                            <NavLink to="/">Trang chủ</NavLink>
                        </li>
                        <li>
                            <NavLink to="/topic">Topic</NavLink>
                        </li>
                        <li>
                            <NavLink to="/answer">Answer</NavLink>
                        </li>
                    </ul>
                )}


                <ul className="header__menu">
                    {LayRaToken ? (<>
                        <li>
                            <NavLink to="/logout">Logout</NavLink>
                        </li>
                    </>) : (<>
                        <li>
                            <NavLink to="/login">Login</NavLink>
                        </li>
                        <li>
                            <NavLink to="/register">Register</NavLink>
                        </li>
                    </>)}
                </ul>
            </header>


            {/* Outlet  là phần luôn thay đổi, phần main, mà mỗi trang chỉ có cái khung đó change thôi */}
            <Outlet />


            <footer className="footer">
                CopyRight ThinhNguyen
            </footer>
        </>
    )
}
export default LayoutDefault;