import React, { useEffect, useState } from 'react';
// import { AddchatAPI, GetLivestremDetailsAPI, GetchatAPI, getallUsersAPI } from '../services/allapi';
import './chat.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { message, viewmessage } from '../Services/allApis';


const ChatBar = () => {
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
    <>
      <div className='chatbar'>
        <div className='nav-bar'>
          <h3>Live Chat</h3>
        </div>
        <div className='viewersdiv'>
          <h5><i class="fa-solid fa-user"></i> 568</h5>

        </div>
        <div className="messages-area">

          {messages && messages.length > 0 ? (
            messages.map((message, index) => (
              <div key={index} className='message one'>
                <h5>{message.username}</h5>
                <h6>{message.message}</h6>
              </div>
            ))
          ) : (
            <p>No chat available</p>
          )}



        </div>


        <div className='sender-area'>
          <div className="input-place">

            <input
              type="text"
              placeholder="Type a message..."
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
            />

            <div className="send" onClick={sendMessage}>
              <svg

                className="send-icon"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 512 512"
                style={{ enableBackground: 'new 0 0 512 512' }}
                xmlSpace="preserve"
              >
                <g>
                  <g>
                    <path
                      fill="#6B6C7B"
                      d="M481.508,210.336L68.414,38.926c-17.403-7.222-37.064-4.045-51.309,8.287C2.86,59.547-3.098,78.551,1.558,96.808 L38.327,241h180.026c8.284,0,15.001,6.716,15.001,15.001c0,8.284-6.716,15.001-15.001,15.001H38.327L1.558,415.193 c-4.656,18.258,1.301,37.262,15.547,49.595c14.274,12.357,33.937,15.495,51.31,8.287l413.094-171.409 C500.317,293.862,512,276.364,512,256.001C512,235.638,500.317,218.139,481.508,210.336z"
                    ></path>
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>


      <ToastContainer
        position="top-center"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
};

export default ChatBar;
