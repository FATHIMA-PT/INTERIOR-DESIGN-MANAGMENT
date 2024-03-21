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

// product list
export const productlistAPI = async(header)=>{
    return await commonAPI("GET",`${BASEURL}productlist/`,"",header)
 }

//  home category 
 export const diningroomlistAPI = async(id,header)=>{
    return await commonAPI("GET",`${BASEURL}homecategory/${id}`,{},header)
 }

 //  home category 
 export const officelistAPI = async(id,header)=>{
   return await commonAPI("GET",`${BASEURL}officecategory/${id}`,{},header)
}

//  home booking -pending
export const homedesignbookingAPI = async(id,body,header)=>{
   await commonAPI("POST",`${BASEURL}homebook/${id}/book/`,body,header)
}

//  home category single item  
export const homecategorysingleitemAPI = async(id,header)=>{
   return await commonAPI("GET",`${BASEURL}homedetails/${id}`,{},header)
}

//  office category single item  
export const officecategorysingleitemAPI = async(id,header)=>{
   return await commonAPI("GET",`${BASEURL}officedetails/${id}`,{},header)
}

// office booking 
export const officedesignbookingAPI = async(id,body,header)=>{
   await commonAPI("POST",`${BASEURL}officebook/${id}/book/`,body,header)
}





// export const homesingleviewAPI = async(id,header)=>{
//    return await commonAPI("GET",`${BASEURL}homecategory/${id}`,{},header)
// }
// add to cart
export const addTocartApi = async(id,quantity,body,header)=>{
   return await commonAPI("POST",`${BASEURL}AddToCart/ ${id}/${quantity}`,body,header)
}



// cartList
export const cartListApi = async(header)=>{
   return await commonAPI("GET",`${BASEURL}cartlist/ `,{},header)
}

// wishList
export const wishListApi = async(header)=>{
   return await commonAPI("GET",`${BASEURL}wishlistview/`,{},header)
}
// AGENT

// agent to add product
export const agentProductAdd = async(body,header)=>{
   return await commonAPI("POST",`${BASEURL}agent-product-create/`,body,header)
}

// get products
export const getProductsApi = async(id,header)=>{
   return await commonAPI("GET",`${BASEURL}agent-products/${id}/`,{},header)
}
 