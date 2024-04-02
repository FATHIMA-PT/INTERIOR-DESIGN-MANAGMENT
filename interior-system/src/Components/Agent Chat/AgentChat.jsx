import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';


function AgentChat() {
  return (
    <>
      <Container fluid className="mt-3 mb-5 ">
        <Row className="">
          {/* Sidebar */}
          <Col
            md={4}
            className="sidebar border shadow rounded"
            style={{ background: "#F5F5DC" }}
          >
            <h3>User Name</h3>
          </Col>
          {/* Chat messages */}
          <Col md={8} className="chat-container border shadow rounded">
            <div className="messages">
              <div className="message incoming">
                <p>Hello!</p>
              </div>
              <div className="message outgoing">
                <p>Hi</p>
              </div>
            </div>
            {/* Chat input form */}
            <div className="d-flex align-items-center justify-content-between">
              <Form className="flex-grow-1 d-flex align-items-center">
                <Form.Group
                  controlId="formChat"
                  className="mb-3 flex-grow-1 me-2"
                >
                  <Form.Control type="text" placeholder="Type a message..." />
                </Form.Group>
                <button
                  type="submit"
                  className="btn mb-2"
                  style={{ fontSize: "30px", color: "#1b2b03" }}
                >
                  <i className="fa-sharp fa-solid fa-play fa-beat"></i>
                </button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
      
    </>
  )
}

export default AgentChat
