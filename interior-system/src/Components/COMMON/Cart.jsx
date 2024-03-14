import React from 'react'
import { Link } from 'react-router-dom'

function Cart() {
  return (
    <div style={{marginTop:'100px'}}>
      
       <>
        <div className='row ms-5 me-5'>
         <div className='col-md-8'>
            <table className='container table mt-5 rounded shadow border'>
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
                
                    <tr >
                      <td></td>
                      <td></td>
                      <td> <img width={'100px'}  height={'100px'}  alt="" /></td>
                      <td></td>
                      <td> <button  className='btn'> <div className="fa-solid fa-trash text-danger fa-2x" style={{fontSize:"30px"}}></div> </button> </td>
    
                    </tr>
    
                 
                
              </tbody>
    
            </table>
         </div>
        <div className='col-md-1'></div>
        <div className='col-md-3 border rounded p-3 mt-5 shadow'>
        <h3 className='text-success fw-bolder'>Cart Summary</h3>
        <h5>Total Products : <span></span> </h5>
        <h4>Total : $ <span className='text-danger fw-bolder fs-3'></span></h4>
        <button  className='btn btn-success mt-3 w-100'><Link to={`/billing`} className="text-light" style={{textDecoration:"none"}}>Check Out</Link></button>
        </div>
        </div>
        </>

          <p className='fw-bolder text-danger'>Cart is Empty</p>
        
    </div>
  )
}

export default Cart
