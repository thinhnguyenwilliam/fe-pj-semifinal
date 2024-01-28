import { get,post } from "../Utils/request";



////////////
//có nhiệm vụ chọc vào api
export const getUser  = async (email,password)=>{  
    let stringPassword="";
    if(password)//neu co gửi pass lên
        stringPassword=`&password=${password}`;


    const result = await get(`/users?email=${email}${stringPassword}`);

    return result;//trả ra mảng rỗng or trả ra record
}


//////////////
export const createUser  = async (data)=>{  



    const result = await post(`/users`,data);

    return result;//trả ra mảng rỗng or trả ra record
}
