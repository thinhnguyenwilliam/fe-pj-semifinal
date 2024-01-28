import { get } from "../Utils/request";

export const getListTopics  = async ()=>{  
    const result = await get(`/topics`);

    return result;//trả ra mảng rỗng or trả ra record
}
  
/////////
export const getTopic  = async (id)=>{  
    const result = await get(`/topics/${id}`);

    return result;//trả ra mảng rỗng or trả ra record
}