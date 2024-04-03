import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { listuser, message, viewmessage } from '../Services/allApis';
import './AgentChat.css'

function AgentChat() {
  const [messageText, setMessageText] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userlist, setUserlist] = useState([]);
  const [sender, setSender] = useState(null);
  const [sendername, setSendername] = useState(null);


  // useEffect(() => {
  //   // fetchMessage(sender);
  // }, []);

  useEffect(() => {
    fetchusers();
  }, []);


  const fetchusers = async () => {
    try {
      // const agentId = localStorage.getItem('agentId');
      const token = localStorage.getItem('token');
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      };
      const result = await listuser(headers);
      console.log(result.data);
      setUserlist(result.data);
    } catch (error) {
      console.error('Error fetching user list:', error);
      setLoading(false);
    }
  };


  const fetchMessage = async (senderId, sendernames) => {
    try {
      setSender(senderId);
      setSendername(sendernames);

      // const agentId = localStorage.getItem('agentId');
      const token = localStorage.getItem('token');
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      };
      const result = await viewmessage(senderId, headers);
      console.log(result);
      setMessages(result.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching messages:', error);
      setLoading(false);
    }
  };
  console.log(sendername);

  const sendMessage = async (e) => {
    e.preventDefault();
    const agentId = localStorage.getItem('agentId');
    const token = localStorage.getItem('token');
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    };
    try {
      await message(sender, { message: messageText }, headers);
      fetchMessage(sender, sendername);
      setMessageText('');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <Container fluid className="mt-3 mb-5">
      <Row>
        <Col md={4} className="sidebar border shadow rounded" style={{ background: "#F5F5DC" }}>
          <h3>User Name</h3>
          {<div className="user-list">
            {userlist.map((user, index) => (
              <div key={index} className={`user ${user.type || ''}`}>
                <div className='first-letter'>{user.username[0]}</div>
                <button onClick={() => fetchMessage(user?.id, user?.username)} className='username-button'>{user.username}</button>
              </div>
            ))}

          </div>

          }


        </Col>
        <Col md={8} className="chat-container border shadow rounded">
          {sender?<div className='user'>
            <div className='first-letter'>{sendername[0]}</div>
            <div className='username-name'>{sendername}</div>
          </div>:(<> <h2>Hi Alll</h2> </>)}

          
          <div style={{ height: '400px' }} className="messages">
            {loading ? (
              <></>
            ) : (
              messages.map((msg, index) => (
                <div key={index} className={`message ${msg.type}`}>
                  <p className='text-dark'>{msg.message}</p>
                </div>
              ))
            )}
          </div>
          {/* Chat input form */}
          {sender?
          <Form onSubmit={sendMessage}>
            <Form.Group controlId="formChat" className="mb-3">
              <Form.Control
                type="text"
                placeholder="Type a message..."
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Send
            </Button>
          </Form>
          :<></>}
        </Col>
      </Row>
    </Container>
  )
}

export default AgentChat;
