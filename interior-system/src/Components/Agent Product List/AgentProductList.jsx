import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';


function AgentProductList() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <div className='align-items-center justify-content-center d-flex    mt-5 mb-5'>
         <div className='d-flex w-50 align-items-center border rounded'>
             <input type="text"  placeholder='Search By Products' className='form-control '/>
             <div style={{marginLeft:'-50px'}} ><i className='fa-solid fa-magnifying-glass' ></i>
             </div>
         </div>
         <div className='ms-5'>
            <Button className='btn btn-primary ' onClick={handleShow}>ADD</Button>
            <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        style={{height:'600rem'}}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Products</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form className='border border-secondary p-3'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Enter Product Name" />
            </Form.Group>
          
            <Form.Group className="mb-3" controlId="formBasicEmail">
            </Form.Group>
            <label htmlFor="image" className='text-center'>
                <input id='image' className='mb-3' type="file" />
                
            </label>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Enter Product Price"  />
            </Form.Group>
            
         </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" className='btn btn-danger me-4 ' onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" className='btn btn-warning'>Upload</Button>
        </Modal.Footer>
      </Modal>
         </div>

            
      
    </div>
  )
}

export default AgentProductList
