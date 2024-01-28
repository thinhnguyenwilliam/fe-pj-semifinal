import PrivateRoutes from "../components/PrivateRoutes";
import LayoutDefault from "../layouts/LayoutDefault";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Quiz from "../pages/Quizs";
import Register from  "../pages/Register";
import Topic from  "../pages/Topics";
import Result from  "../pages/Result";
import Answer from "../pages/Answer";
import LogOut from "../pages/Logout";


export const routes=[
    {
        path:"/",
        element:<LayoutDefault />,
        children: [
            {
                index:true,
                element:<Home />
            },
            {
                path:"login",   
                element:<Login />
            },
            {
                path:"register",
                element:<Register />
            },
            {
                path:"logout",
                element:<LogOut />
            },
            {
                element:<PrivateRoutes />,
                children:[
                    {
                        path:"topic",
                        element:<Topic />
                    },
                    {
                        // them "/:id" thành router động
                        path:"quiz/:id",
                        element:<Quiz />
                    },
                    {
                        path:"result/:id",
                        element:<Result />
                    },
                    {
                        path:"answer",
                        element:<Answer />
                    }
                ]
            }
        ]
    }
];






// {/* dấu "/":trang chủ, dấu "*":những trường hợp còn lại */}

//       {/* phần dùng chung kg load lai */}
//       {/* <LayoutDefault /> */}
//       {/* tất cả xài chung LayoutDefault nên LayoutDefault để ngoài bọc lại cái route con */}

//       {/* 4 Route con dùng chung LayoutDefault */}

//       {/* tên file js chứ kg phải hàm trong tên file js ví dụ: {<BlogAll />} /> nó là tên cái file*/}

//       <Routes>
//         <Route path="/" element={<LayoutDefault />}>
//           <Route index element={<Home />} />
//           <Route path="about" element={<About />} />

//           <Route path="blog" element={<Blog />}>
//             <Route index element={<BlogAll />} />
//             <Route path="fashion" element={<BlogFashion />} />
//             <Route path="travel" element={<BlogTravel />} />
//             <Route path=":idBaiViet" element={<BlogDetail />} />
//           </Route>

//           <Route path="contact" element={<Contact />} />



//           <Route path="*" element={<Error404 />} />
//           {/* dấu "*": mà xài component Navigate thì link về trang chủ, cái link trên trình duyệt nó tự reset về trang chủ  */}
//           {/* <Route path="*" element={<Navigate to="/" />} /> */}


          
//           <Route path="login" element={<Login />} />
//           <Route element={<PrivateRoutes />}>
//             <Route path="info-user" element={<InfoUser />} />
//           </Route>
          
//         </Route>
//       </Routes>



