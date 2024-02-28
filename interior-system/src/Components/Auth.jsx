import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';



function Auth() {

  return (
    <div  style={{width:'100%',height:'100vh'}} className='d-flex justify-content-center align-items-center'>
        <div className='container w-75 border shadow'>
       <Link style={{textDecoration:'none'}} to={"/"}> <h5><i className='fa-solid fa-arrow-left me-2'></i> Back To Home</h5></Link>
         <div className='row align-items-center'>
           <div className='col-lg-6'> 
             <img className='img img-fluid rounded mb-4' src="https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
           </div>
           <div className='col-lg-6'>
           <div className="d-flex flex-column align-items-center">
                <div className="d-flex flex-column align-items-center">
                  <div className="d-flex mt-2 text-success">
                  <span className='h1 fw-bolder mb-5'>
                                Interior Harmony
                                </span>
                  </div>
                  <Form className="text-light w-75">
                               
                               
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Enter EmailId"  />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="password" placeholder="Enter Password"  />
                                </Form.Group>
                               
                                      <div>
                                      <Button variant='dark' className='ms-5 mb-3' type='submit' size='lg' > Login </Button>
                                       <p className='text-dark'>New User? <Link to={'/register'}>Register Here</Link></p>
                                  </div>
                                </Form>
                  </div>               
             </div>                  
           </div>
         </div>

        </div>
      
    </div>
  )
  
}

export default Auth
