import React, { useEffect, useState } from 'react'
import { cartListApi, cartbuyApi } from '../Services/allApis';
import { Link, useNavigate } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Swal from "sweetalert2";
function Billing() {
    const [cartProductList, setCartProductList] = useState([]);
    const [showPaymentDetails, setShowPaymentDetails] = useState(false);
    const [total, setTotal] = useState(0); 
    const [filter,setFilter]=useState([])
    const navigate = useNavigate()
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const[cardDetails,setcardDetails] = useState({
    cardname:"",
    cardnumber:"",
    mm:"",
    cvv:""
    })
    
console.log(cardDetails);

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

console.log(buy);
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
      const {cardname,cardnumber,mm,cvv}=cardDetails
     const cartId=localStorage.getItem('cartId')
     if(!cardname || !cardnumber | !mm || !cvv){
        Swal.fire({
            icon: "warning",
            title: "Please Fill the Card Details Completely",
            showConfirmButton: false,
            timer: 1500,
          });
       }
      else{
        try {
    

            const result = await cartbuyApi(cartId,buy,headers)
            console.log(result);
            if (result.status === 200 || result.status === 201 ){
                
                Swal.fire({
                    icon: "success",
                    title: "Thanks For Purchase",
                    showConfirmButton: false,
                    timer: 1500,
                  });
             setTimeout(() => {
                navigate('/home-page')
             }, 3000);
    
    
            }
            else if (result.status !== 200) {
                alert("Booking faigitled");
              }
           
           } catch (error) {
            alert('internal server error')
           }
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
        const {name,apartment,place,pincode,phone_number} = buy
   if(!name || !apartment || !place || !pincode || !phone_number){
    Swal.fire({
        icon: "warning",
        title: "Please Fill the Details Completely",
        showConfirmButton: false,
        timer: 1500,
      });
   }
   else{
    setShowPaymentDetails(true)
   }
    };
    return (
     <>
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
                    <h5>{buy.name}</h5>
                    <h5>{buy.apartment}</h5>
                    <h5>{buy.place}</h5>
                    <h5>{buy.pincode}</h5>
                    <h5>{buy.phone_number}</h5>
                    <div className="d-flex justify-content-center mt-3 flex-column">
                        <h4 className="fw-bolder">Total Amount: <span className="text-danger">
                            {/* Show total price again */}
                            {total}
                        </span></h4>
                        <div className="m-3"></div>
                         <button onClick={handleShow} className="btn btn-success ms-4" type="submit">BUY</button>
    
                    </div>
                </div>
            )}
        </div>



        {/* modal */}
        <Modal show={show} onHide={handleClose}>
        <div style={{ display: 'grid', gridTemplateColumns: 'auto', gap: '0px' }}>
      <div style={{ width: '100%', background: 'rgb(255, 250, 235)', boxShadow: '0px 187px 75px rgba(0, 0, 0, 0.01), 0px 105px 63px rgba(0, 0, 0, 0.05), 0px 47px 47px rgba(0, 0, 0, 0.09), 0px 12px 26px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1)' }}>
        <label style={{ width: '100%', height: '40px', position: 'relative', display: 'flex', alignItems: 'center', paddingLeft: '20px', borderBottom: '1px solid rgba(16, 86, 82, .75)', fontWeight: '700', fontSize: '25px', color: 'blue' }}>PAYPAL</label>
        <div style={{ display: 'flex', flexDirection: 'column', padding: '20px' }}>
          <div style={{ display: 'grid', gap: '10px' }}>
            <div>
              <span style={{ fontSize: '13px', fontWeight: '600', color: '#000000', marginBottom: '8px', display: 'block' }}>SHIPPING TO</span>
              <p style={{ fontSize: '15px', fontWeight: '600', color: '#000000' }}> <span>Name:</span> {buy.name}</p>
             
              <div className='d-flex'>
                    <p style={{ fontSize: '13px', fontWeight: '600', color: '#000000' }}> <span>Address:</span> </p>
                <div className='d-flex flex-column  ms-2'>
                <p style={{ fontSize: '13px', fontWeight: '600', color: '#000000' }}>{buy.apartment}</p>
              <p style={{ fontSize: '11px', fontWeight: '600', color: '#000000' }}>{buy.place}</p>
              <p style={{ fontSize: '11px', fontWeight: '600', color: '#000000' }}>{buy.pincode}</p>
              <p style={{ fontSize: '11px', fontWeight: '600', color: '#000000' }}>{buy.phone_number}</p>
                </div>
              </div>
            </div>
            <hr style={{ height: '1px', backgroundColor: 'rgba(16, 86, 82, .75)', border: 'none' }} />
            <div>
              <span style={{ fontSize: '13px', fontWeight: '600', color: '#000000', marginBottom: '8px', display: 'block' }}>PAYMENT METHOD</span>
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', backgroundColor: '#2d3748', padding: '1rem', border: '1px solid rgba(255, 255, 255, 0.3)', borderRadius: '0.375rem', maxWidth: '20rem', margin: '0 auto' }}>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
        <input
          style={{ width: '100%', height: '2.5rem', border: 'none', outline: 'none', fontSize: '0.875rem', backgroundColor: '#2d3748', color: 'white', fontWeight: '600', paddingLeft: '0.5rem', flexGrow: '1' }}
          onChange={(e) => setcardDetails({ ...cardDetails, cardname: e.target.value })} 
          maxLength="15"
          type="text"
          name="cardName"
          id="cardName"
          placeholder="Full Name"
        />
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', width: '3.5rem', height: '2.25rem', backgroundColor: '#2d3748', border: '1px solid rgba(255, 255, 255, 0.2)', borderRadius: '0.25rem' }}>
          <svg
            style={{ fill: 'white' }}
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 48 48"
          >
            <path
              fill="#ff9800"
              d="M32 10A14 14 0 1 0 32 38A14 14 0 1 0 32 10Z"
            ></path>
            <path
              fill="#d50000"
              d="M16 10A14 14 0 1 0 16 38A14 14 0 1 0 16 10Z"
            ></path>
            <path
              fill="#ff3d00"
              d="M18,24c0,4.755,2.376,8.95,6,11.48c3.624-2.53,6-6.725,6-11.48s-2.376-8.95-6-11.48 C20.376,15.05,18,19.245,18,24z"
            ></path>
          </svg>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        <input
          style={{ width: '100%', height: '2.5rem', border: 'none', outline: 'none', fontSize: '0.875rem', backgroundColor: '#2d3748', color: 'white', fontWeight: '600', paddingLeft: '0.5rem' }}
          onChange={(e) => setcardDetails({ ...cardDetails, cardnumber: e.target.value })} 
          type="text"
          name="cardNumber"
          id="cardNumber"
          maxLength="16"
          placeholder="0000 0000 0000 0000"
        />
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <input
            style={{ width: 'calc(50% - 0.375rem)', height: '2.5rem', border: 'none', outline: 'none', fontSize: '0.875rem', backgroundColor: '#2d3748', color: 'white', fontWeight: '600', paddingLeft: '0.5rem' }}
            onChange={(e) => setcardDetails({ ...cardDetails, mm: e.target.value })} 
            type="text"
            name="expiryDate"
            id="expiryDate"
            placeholder="MM/AA"
            maxLength="5"
          />
          <input
            style={{ width: 'calc(50% - 0.375rem)', height: '2.5rem', border: 'none', outline: 'none', fontSize: '0.875rem', backgroundColor: '#2d3748', color: 'white', fontWeight: '600', paddingLeft: '0.5rem' }}
            onChange={(e) => setcardDetails({ ...cardDetails, cvv: e.target.value })} 
            type="text"
            name="cvv"
            id="cvv"
            placeholder="CVV"
            maxLength="3"
          />
        </div>
      </div>
    </div>
            </div>
         
            <hr style={{ height: '1px', backgroundColor: 'rgba(16, 86, 82, .75)', border: 'none' }} />
            <div className="payments">
              <span style={{ fontSize: '13px', fontWeight: '600', color: '#000000', marginBottom: '8px', display: 'block' }}>PAYMENT</span>
              <div className="details" style={{ display: 'grid', gridTemplateColumns: '6fr 1fr', padding: '0px', gap: '5px' }}>
                <span style={{ fontSize: '12px', fontWeight: '600', color: '#000000', margin: 'auto auto auto 0' }}>Subtotal:</span>
                <span style={{ fontSize: '13px', fontWeight: '600', color: '#000000' }}>${total}</span>
               
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card checkout" style={{ width: '100%', background: 'rgb(255, 250, 235)', boxShadow: '0px 187px 75px rgba(0, 0, 0, 0.01), 0px 105px 63px rgba(0, 0, 0, 0.05), 0px 47px 47px rgba(0, 0, 0, 0.09), 0px 12px 26px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1)' }}>
        <div className="footer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 10px 10px 20px', backgroundColor: 'rgba(16, 86, 82, .5)' }}>
          <label className="price" style={{ position: 'relative', fontSize: '22px', color: '#2B2B2F', fontWeight: '900' }}>${total}</label>
         <Link to={"/home-page"}> <button onClick={handleBuy} className="checkout-btn" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '150px', height: '36px', background: 'rgba(16, 86, 82, .55)', boxShadow: '0px 0.5px 0.5px rgba(16, 86, 82, .75), 0px 1px 0.5px rgba(16, 86, 82, .75)', borderRadius: '7px', border: '1px solid rgb(16, 86, 82)', color: '#000000', fontSize: '13px', fontWeight: '600', transition: 'all 0.3s cubic-bezier(0.15, 0.83, 0.66, 1)' }}>BUY</button></Link>
        </div>
      </div>
    </div>


      </Modal>
     </>
    )
}

export default Billing