import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';


function Chat() {
  return (
    <>
    
    <Container fluid className='mt-3 mb-5 ' >
      <Row className='' >
        {/* Sidebar */}
        <Col md={3} className="sidebar border shadow rounded" style={{background:'#d8c9ff'}}>
      
          <h3>Agent Name</h3>
        </Col>
        {/* Chat messages */}
        <Col md={6} className="chat-container border shadow rounded">
          <div className="messages">
         
            <div className="message incoming">
              <p>Hello!</p>
            </div>
            <div className="message outgoing">
              <p>Hi</p>
            </div>
            
          </div>
          {/* Chat input form */}
          <Form>
            <Form.Group controlId="formChat">
              <Form.Control type="text" placeholder="Type a message..." />
            </Form.Group>
            <div className='btn mt-4 mb-3' style={{marginLeft:'650px'}}>
            <i class="fa-sharp fa-solid fa-play fa-beat" style={{fontSize:'30px',color:'#1b2b03'}}></i>
            </div>
          </Form>
        </Col>
        {/* Users List */}
        <Col md={3} className="user-list border rounded  shadow" style={{background:'#fff9e0'}}>
         
          <h3>Users List</h3>
        </Col>
      </Row>
    </Container>
   
    </>
  )
}

export default Chat
