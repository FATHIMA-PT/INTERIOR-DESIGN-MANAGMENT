import React, { useState } from 'react'
import { Button, Card, Modal } from 'react-bootstrap';


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
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Do not even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
         </div>

            
      
    </div>
  )
}

export default AgentProductList
