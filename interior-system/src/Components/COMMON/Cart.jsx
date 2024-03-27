import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { cartDeleteApi, cartListApi } from "../Services/allApis";
import { useCart } from "../CONTEXT/context";

function Cart() {
  const [cartList, setCartList] = useState([]);
  const { cartItems, removeFromCart } = useCart();
  const [total,setTotal]= useState(0)

  // total amount
  const totalAmount = ()=> {
    if(cartList.length>0){
      setTotal(cartList.map(item=>+item?.product?.price).reduce((p1,p2)=>p1+p2,0))
    }
    else{
      setTotal(0)
    }
  }
  
  const token = localStorage.getItem("token");
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  const handleCart = async () => {
    const response = await cartListApi(headers);
    setCartList(response.data);
    // console.log(cartList);
  };

  const handleRemoveFromCart = async (itemId) => {
    try {
      // Call the API to delete the item from the cart
      await cartDeleteApi(itemId, headers); 
      // Remove the item from the local cart state
      removeFromCart(itemId); 
      // Refresh the cart list after item removal
      handleCart();
    } catch (error) {
      console.error("Error removing item from cart:", error);
    }
  };
  
  useEffect(() => {
    handleCart();
  }, []);
  // console.log(total);

  useEffect(()=> {
    totalAmount()
  },[cartList])
  
  return (
    <div style={{ marginTop: "100px" }}>
      {
       cartList.length>0 ?
         <>
         <div className="row ms-5 me-5">
           <div className="col-md-8">
             
               <table className="container table  rounded shadow border mb-5 ">
                 <thead>
                   <tr className="">
                     <th>#</th>
                     <th>Product Name</th>
                     <th>Image</th>
                     <th>Price</th>
                     <th >Quantity</th>
                     <th>Action</th>
                     <th>Total</th>
                   </tr>
                 </thead>
                 <tbody>
                   {
                     cartList.map((cartItem, index) => (
                       <tr key={cartItem.id}>
                         <td>{index + 1}</td>
                         <td>{cartItem.product.Name}</td>
                         <img
                           width={"100px"}
                           height={"100px"}
                           alt=""
                           src={cartItem.product.photo}
                         />{" "}
                         <td>{cartItem.product.price}</td>
                         <td>{cartItem.product.quantity} </td>
                         <td>
                           {" "}
                           <button onClick={() => handleRemoveFromCart(cartItem?.product?.id)} className="btn">
                             {" "}
                             <div
                               className="fa-solid fa-trash text-danger fa-2x"
                               style={{ fontSize: "30px" }}
                             ></div>{" "}
                           </button>{" "}
                         </td>
                         <td>{cartItem.product.price * cartItem.product.quantity}
                      
                         
                       </td>
                       </tr>
                     ))
                  
                   }
                 </tbody>
               </table>
          
           </div>
           <div className="col-md-1"></div>
           <div className="col-md-3 border rounded p-3  shadow mb-5 ">
             <h3 className="text-success fw-bolder">Cart Summary</h3>
             <h5>
               Total Products : <span>{cartList?.length}</span>{" "}
             </h5>
             <h4>
               Total : $ <span className="text-danger fw-bolder fs-3">{total}</span>
             </h4>
             <button className="btn btn-success mt-3 w-100">
               <Link
                 to={`/billing`}
                 className="text-light"
                 style={{ textDecoration: "none" }}
               >
                 Check Out
               </Link>
             </button>
           </div>
         </div>
       </>
      :
     

      <p className="fw-bolder text-danger">Cart is Empty</p>
     }
    </div>
  );
}

export default Cart;
