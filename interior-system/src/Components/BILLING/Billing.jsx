import React, { useEffect, useState } from 'react'
import { cartListApi } from '../Services/allApis';


function Billing() {
    const [cartProductList, setCartProductList] = useState([]);

    const [showPaymentDetails, setShowPaymentDetails] = useState(false);
    const [total, setTotal] = useState(0); 
    


    const token = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    const handleCart = async () => {
        const response = await cartListApi(headers);
        setCartProductList(response.data);
        // console.log(cartProductList);
      };
     
      useEffect(() => {
        handleCart();
      }, []);

    
  // total amount
  const totalAmount = ()=> {
    if(cartProductList.length>0){
      setTotal(cartProductList.map(item=>+item?.product?.price).reduce((p1,p2)=>p1+p2,0))
    }
    else{
      setTotal(0)
    }
  }
  
  useEffect(()=> {
    totalAmount()
  },[cartProductList])

    const handleProceedToBuy = (event) => {
        event.preventDefault(); // Prevent form submission
        setShowPaymentDetails(true);
    };
    return (
        <div style={{ marginTop: '50px', marginBottom: '50px' }}>
        {cartProductList.length > 0 && (
            <>
                <div className='row ms-5 me-5'>
                    <div className='col-md-8'>
                        <table className='container table mt-5 rounded shadow border'>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Product Name</th>
                                    <th>Image</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartProductList.map((item, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item.product.Name}</td>
                                        <td>
                                            <img src={item.product.photo} alt={item.product.name} width={'100px'} height={'100px'} />
                                        </td>
                                        <td>{item.product.price}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className='col-md-4 border rounded p-3 mt-5 shadow text-center'>
                        <h3 className='text-success fw-bolder'>Product Summary</h3>
                        <h5>Total Products:{cartProductList.length} </h5>
                        {/* Calculate total price */}
                        <h4>Total: $<span className='text-danger fw-bolder fs-3'>
                       {total}
                        </span></h4>
                        <button className="btn btn-success ms-4" type="submit" onClick={handleProceedToBuy}>BUY</button>
                    </div>
                </div>
            </>
        )}
        {showPaymentDetails && (
            <div className="w-50 border rounded shadow p-4 mt-4 mb-5 d-flex flex-column align-items-center mx-auto">
                <h1 className="mb-5">Payment Details</h1>
                <h2>Delivery Address</h2>
                <h5>aa</h5>
                <h5>bb</h5>
                <h5>cc</h5>
                <h5>dd</h5>
                <h5>ee</h5>
                <div className="d-flex justify-content-center mt-3 flex-column">
                    <h4 className="fw-bolder">Total Amount: <span className="text-danger">
                        {/* Show total price again */}
                        {total}
                    </span></h4>
                    <div className="m-3"></div>
                </div>
            </div>
        )}
    </div>
    )
}

export default Billing