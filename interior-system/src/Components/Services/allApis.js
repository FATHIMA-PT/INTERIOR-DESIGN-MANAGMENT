import { BASEURL } from "./baseUrl";
import { commonAPI } from "./commonAPI";

// register API
export const registerAPI = async(body)=>{
    await commonAPI("POST",`${BASEURL}/register/`,body,"")
}

// login API
export const loginAPI = async(data)=>{
   return await commonAPI("POST",`${BASEURL}login/`,data,"")
}

export const productlistAPI = async(header)=>{
    return await commonAPI("GET",`${BASEURL}productlist/`,"",header)
 }
