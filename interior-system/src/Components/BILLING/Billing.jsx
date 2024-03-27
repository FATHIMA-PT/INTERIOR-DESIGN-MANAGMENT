import React, { useEffect, useState } from 'react'
import { cartListApi, cartbuyApi } from '../Services/allApis';
import { Link, useNavigate } from 'react-router-dom';
import { Form } from 'react-bootstrap';


function Billing() {
    const [cartProductList, setCartProductList] = useState([]);
    const [showPaymentDetails, setShowPaymentDetails] = useState(false);
    const [total, setTotal] = useState(0); 
    const [filter,setFilter]=useState([])
    const navigate = useNavigate()


    const [buy, setBuy] = useState({
        name: "",
        apartment: "",
        place: "",
        pincode: "",
        phone_number: null,
        price:"",
        // cartid:"",
        // userid:""

    });



    const token = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };


    useEffect(()=>{
    const filtered=cartProductList.filter(product=>(localStorage.setItem('cartId', product.cart)))
        // setFilter(filtered)
        // console.log('filter', filtered)
    }, [cartProductList])

    //function to buy products
    const handleBuy = async ()=>{
        
     const cartId=localStorage.getItem('cartId')
       try {
        const result = await cartbuyApi(cartId,buy,headers)
        console.log(result);
        if (result.status === 200 || result.status === 201 ){
            alert("Thanks for the purchase")
            navigate('/thankyou')


        }
        else if (result.status !== 200) {
            alert("Booking faigitled");
          }
       } catch (error) {
        alert('internal server error')
       }
    }

    const handleCart = async () => {
        const response = await cartListApi(headers);
        setCartProductList(response.data);
        console.log(response.data);
        localStorage.setItem('cartId',response.data.cart)
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

//   total to buy
  useEffect(() => {
    setBuy((prevBuy) => ({
        ...prevBuy,
        price: total
    }));
}, [total]);

    const handleProceedToBuy = (event) => {
        event.preventDefault(); // Prevent form submission
        setShowPaymentDetails(true);
    };
    return (
        <div style={{ marginTop: '50px', marginBottom: '50px' }}>
            <div style={{height:'auto',marginTop:'100px'}} className='container mb-5 d-flex justify-content-center align-items-center w-100 flex-column'>
    
    <div className='w-50'>
    <Form>
     <div className='form-floating mb-3'>
         <input onChange={(e) => setBuy({ ...buy, name: e.target.value })} type="text" class="form-control" id="floatingInputName" placeholder="Username" name="uname" formControlName="uname"/>
         <label htmlFor="floatingInput">UserName</label>
     </div>
     <div className='form-floating mb-3'>
         <input onChange={(e) => setBuy({ ...buy, apartment: e.target.value })} type="text" class="form-control" id="floatingInputflat" placeholder="Apartment / Flat.No" name="flat" formControlName="flat"/>
         <label htmlFor="floatingInputflat">Apartment / Flat.No</label>
     </div>
     <div class="form-floating mb-3">
         <input onChange={(e) => setBuy({ ...buy, place: e.target.value })} type="text"  class="form-control" id="floatingInputplace" placeholder="Place / Location" name="place" formControlName="place"/>
     <label for="floatingInputplace">Place / Location</label>
   </div>
   <div class="form-floating mb-3">
     <input onChange={(e) => setBuy({ ...buy, pincode: e.target.value })} type="text" class="form-control" id="floatingInputpincode" placeholder="PinCode" name="pincode" formControlName="pincode" />
     <label for="floatingInputpincode">PinCode</label>
   </div>
   <div class="form-floating mb-3">
     <input onChange={(e) => setBuy({ ...buy,  phone_number: e.target.value })} type="number"  class="form-control" id="floatingInputnumber" placeholder="Phone number" name="number" formControlName="number"/>
     <label for="floatingInputnumber">Phone number</label>
   </div>
   <div class="d-flex justify-content-center">
     {/* <button  class="btn btn-warning me-4"><Link to={``} className="text-dark" style={{ textDecoration: "none" }}>Delivery to this Address</Link></button> */}
     {/* <button  class="btn btn-warning me-4">Cancel</button> */}
     {/* <button class="btn btn-success ms-4"  type="submit"  onClick={handleProceedToBuy}>Proceed to Buy </button> */}
   </div>
    </Form>
</div>
</div>


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
                        <button  className="btn btn-success ms-4" type="submit" onClick={handleProceedToBuy}>Proceed</button>
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
                     <button onClick={handleBuy} className="btn btn-success ms-4" type="submit">BUY</button>

                </div>
            </div>
        )}
    </div>
    )
}

export default Billing