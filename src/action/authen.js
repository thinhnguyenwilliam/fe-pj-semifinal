//neu dang xuat thi gui action co gia tri la false, dang nhap thanh cong thi gui action la true
export const authen=(giatri)=>{
    return {//trả ra luôn luôn là object
        type:"AUTHEN",
        value:giatri 
    };
}

////////////
