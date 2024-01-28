import { get } from "../Utils/request";

export const getListQuestions  = async (topicID)=>{  
    const result = await get(`/questions?topicId=${topicID}`);

    return result;//trả ra mảng rỗng or trả ra record
}
