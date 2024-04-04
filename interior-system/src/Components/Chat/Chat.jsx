import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { message, viewmessage } from '../Services/allApis';
import { useParams } from 'react-router-dom';
import './Chat.css'; // Import your custom CSS file

function Chat() {
  const { agentid } = useParams();
  const { agentname } = useParams();

  const [messageText, setMessageText] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const token = localStorage.getItem('token');
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      };
      const result = await viewmessage(agentid, headers);
      setMessages(result.data);
      console.log(result);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching messages:', error);
      setLoading(false);
    }
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    const headers = {
      'Authorization': `Bearer ${token}`,
    };
    try {
      await message(agentid, { message: messageText }, headers);
      fetchMessages();
      setMessageText('');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <Container fluid className='con'>
      <Row className='mt-5 mb-5'>
        <Col md={4}></Col>
        <Col md={4} className="chat-container border shadow rounded ">
          <div className='user-profile'>
            <div className='avatar'>{agentname[0]}</div>
            <div className='username'>{agentname}</div>
          </div>

          <div className="messages-container">
            <div className="messages">
              {loading ? (
                <p>Loading messages...</p>
              ) : (
                messages.map((msg, index) => (
                  <div key={index} className={`message ${msg.type}`}>
                    <p className='msg-text'>{msg.message}</p>
                  </div>
                ))
              )}
            </div>
          </div>


          <Form onSubmit={sendMessage}>
            <div className="message-input">
              <Form.Group controlId="formChat">
                <input
                  type="text"
                  placeholder="Type a message..."
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  style={{ width: "443px", padding: '10px',backgroundColor: 'rgb(24, 24, 24)',color:'white' }}
                />
              </Form.Group>
              <Button variant="primary" type='submit'>
              <i className="fas fa-paper-plane"></i>                            
              </Button>
            </div>
          </Form>
        </Col>
        <Col md={4}>
          {/* User List */}
        </Col>
      </Row>
    </Container>
  );
}

export default Chat;
