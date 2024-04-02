import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { message, viewmessage } from '../Services/allApis';

function Chat() {
  const [messageText, setMessageText] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const agentId = localStorage.getItem('agentId');
      const token = localStorage.getItem('token');
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      };
      const result = await viewmessage(agentId, headers);
      console.log(result);
      setMessages(result.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching messages:', error);
      setLoading(false);
    }
  };

  const sendMessage = async () => {
    const agentId = localStorage.getItem('agentId');
    const token = localStorage.getItem('token');
    const headers = {
      'Authorization': `Bearer ${token}`,
    };
    try {
      await message(agentId, { message: messageText }, headers);
      fetchMessages();
      setMessageText('');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <Container fluid className="mt-3 mb-5">
      <Row>
        <Col md={3} className="sidebar border shadow rounded" style={{ background: '#d8c9ff' }}>
          <h3>Agent Name</h3>
        </Col>
        <Col md={6} className="chat-container border shadow rounded">
          <div style={{height:'400px'}} className="messages">
            {loading ? (
              <p>Loading messages...</p>
            ) : (
              messages.map((msg, index) => (
                <div key={index} className={`message ${msg.type}`}>
                  <p className='text-secondary'>{msg.message}</p>
                </div>
              ))
            )}
          </div>
          <Form>
          <div style={{display:'flex',width:"100%"}}>
              <Form.Group controlId="formChat">
                <input
               
                  type="text"
                  placeholder="Type a message..."
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  style={{width:"700px",padding:'20px'}}
                />
              </Form.Group>
              <Button variant="primary" onClick={sendMessage}>
                Send
              </Button>
          </div>
          </Form>
        </Col>
        <Col md={3} className="user-list border rounded shadow" style={{ background: '#fff9e0' }}>
          <h3>Users List</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Chat;
