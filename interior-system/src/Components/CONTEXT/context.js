import { createContext, useContext, useState } from "react";


const myContext = createContext();

export const useMyContext = ()=>{
    return useContext(myContext);
}


export const MyContextProvider =({children})=>{
    const [cart,setCart] = useState();

    const allproduct= {
        cart,
        setCart
    }


    return <myContext.Provider value={allproduct}> {children} </myContext.Provider>

}