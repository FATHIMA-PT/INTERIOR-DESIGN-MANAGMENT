import React from 'react'
import { Link } from 'react-router-dom'

function Billing() {
    return (
        <div style={{ marginTop: '50px' }}>
            <>
                <div className='row ms-5 me-5 'style={{display:'flex',flexDirection:'column', alignItems:'center',justifyContent:'center'}} >
                    <div className='col-md-8'>
                        <table className='container table mt-5 rounded shadow border'>
                            <thead>
                                <tr className='text-center'>
                                    <th>#</th>
                                    <th>Product Name</th>
                                    <th> Image</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>

                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td> <img width={'100px'} height={'100px'} alt="" /></td>
                                    <td> </td>
                                    <td>
                                    <div className='d-flex align-items-center justify-content-center'>
                                            <button className='btn fw-bolder fs2'>-</button>
                                            <input type="num" className='form-control text-center' style={{maxWidth:'3rem'}} />
                                            <button className='btn fw-bolder fs2'>+</button>
                                        </div>
                                    </td>
                                    <td> <button className='btn'> <div className="fa-solid fa-trash text-danger fa-2x" style={{ fontSize: "30px" }}></div> </button> </td>

                                </tr>
                            </tbody>

                        </table>
                    </div>
                    <div className=' border rounded p-3 mt-5 shadow w-50 mt-5 mb-5 text-center'   >
                        <h3 className='text-success fw-bolder'>Cart Summary</h3>
                        <h5>Total Products : <span></span> </h5>
                        <h4>Total : $ <span className='text-danger fw-bolder fs-3'></span></h4>
                        <button className='btn btn-success mt-3 w-50'><Link to={`/thankyou`} className="text-light" style={{textDecoration:"none"}}>Pay Now</Link></button>
                    </div>
                </div>
            </>


        </div>
    )
}

export default Billing