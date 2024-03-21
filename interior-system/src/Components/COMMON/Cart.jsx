import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { cartListApi } from "../Services/allApis";
import { useCart } from "../CONTEXT/context";

function Cart() {
  const [addCart,setAddCart] = useState([])
  const [cartList, setCartList] = useState([]);
  const { cartItems, removeFromCart } = useCart();
  const [total,setTotal]= useState(0)

  // total amount
  const totalAmount = ()=> {
    if(cartList.length>0){
      setTotal(cartList.map(item=>item.price).reduce((p1,p2)=>p1+p2))
    }
    else{
      setTotal(0)
    }
  }
  
  const token = localStorage.getItem("token");
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  
  const addToCart = async()=>{
    const response = await addToCart
  }


  const handleCart = async () => {
    const response = await cartListApi(headers);
    setCartList(response.data);
  };
  console.log(cartList);

  const handleRemoveFromCart = (index) => {
    removeFromCart(index);
  };
  
  useEffect(() => {
    handleCart();
  }, []);

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
             
               <table className="container table mt-5 rounded shadow border">
                 <thead>
                   <tr>
                     <th>#</th>
                     <th>Product Name</th>
                     <th> Image</th>
                     <th>Price</th>
                     <th>Action</th>
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
                         <td>
                           {" "}
                           <button onClick={() => handleRemoveFromCart(index)} className="btn">
                             {" "}
                             <div
                               className="fa-solid fa-trash text-danger fa-2x"
                               style={{ fontSize: "30px" }}
                             ></div>{" "}
                           </button>{" "}
                         </td>
                       </tr>
                     ))
                  
                   }
                 </tbody>
               </table>
          
           </div>
           <div className="col-md-1"></div>
           <div className="col-md-3 border rounded p-3 mt-5 shadow">
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
