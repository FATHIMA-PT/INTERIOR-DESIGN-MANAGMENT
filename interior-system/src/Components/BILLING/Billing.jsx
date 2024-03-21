import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Billing() {
    const [showPaymentDetails, setShowPaymentDetails] = useState(false);

    const handleProceedToBuy = (event) => {
        event.preventDefault(); // Prevent form submission
        setShowPaymentDetails(true);
    };
    return (
        <div style={{ marginTop: '50px',marginBottom: '50px' }} >
            <>
                <div className='row ms-5 me-5'>
                    <div className='col-md-8'>
                        <table className='container table mt-5 rounded shadow border'>
                            <thead>
                                <tr className='text-center'>
                                    <th>#</th>
                                    <th>Product Name</th>
                                    <th>Image</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td><img width={'100px'} height={'100px'} alt="" /></td>
                                    <td></td>
                                    <td>
                                        <div className='d-flex align-items-center justify-content-center'>
                                            <button className='btn fw-bolder fs2'>-</button>
                                            <input type="num" className='form-control text-center' style={{ maxWidth: '3rem' }} />
                                            <button className='btn fw-bolder fs2'>+</button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className='col-md-4 border rounded p-3 mt-5 shadow text-center'>
                        <h3 className='text-success fw-bolder'>Cart Summary</h3>
                        <h5>Total Products: <span></span></h5>
                        <h4>Total: $<span className='text-danger fw-bolder fs-3'></span></h4>
                        <button className="btn btn-success ms-4" type="submit" onClick={handleProceedToBuy}>BUY</button>
                    </div>
                </div>




            </>
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
            <h4 className="fw-bolder">Total Amount: <span className="text-danger">total</span></h4>
            <div className="m-3"></div>
        </div>
    </div>
)}





        </div>
    )
}

export default Billing