import { get, post } from "../Utils/request";

export const createAnswer  = async (data)=>{  
    const result = await post(`/answers`,data);
    return result;//trả ra mảng rỗng or trả ra record
}
//////////



//lấy theo câu trả lời bài viết id là gì
export const getListAnswerByID  = async (id)=>{  
    const result = await get(`/answers/${id}`);
    return result;//trả ra mảng rỗng or trả ra record
}

/////////////

export const getListAnswerByUserID  = async (id)=>{  
    const result = await get(`/answers?userId=${id}`);
    return result;//trả ra mảng rỗng or trả ra record
}

