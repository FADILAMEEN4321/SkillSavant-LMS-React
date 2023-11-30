import React, { useState, useEffect, useContext } from 'react';
import AuthContext from './../../../context/AuthContext';
import { fetchPreviousChats } from './../../../api/studentAPI'

const DiscussionRoom = ({ enrolledCourseId }) => {

  const {user, authTokens} = useContext(AuthContext)
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [webSocket, setWebSocket] = useState(null);


  const user_id = user.user_id
  const jwtToken = authTokens.access

  const handleFetchPreviousChats = async(enrolledCourseId) =>{
    try{
      const response = await fetchPreviousChats(enrolledCourseId)
      console.log(response.data)
      setMessages(response.data)
    }catch(error){
      console.log('---->',error)
    }
  }

  useEffect(() => {

    
    handleFetchPreviousChats(enrolledCourseId)
  



    // Establish WebSocket connection
    const ws = new WebSocket(`ws://127.0.0.1:8000/ws/chat/${enrolledCourseId}/`);
    
    ws.onopen = () => {
      console.log('WebSocket connection opened');
     
    };

    ws.onmessage = (event) => {
      const message = JSON.parse(event.data);
      console.log('message---->',message)
      setMessages((prevMessages) => [...prevMessages, message]);

    };

    ws.onclose = () => {
      console.log('WebSocket connection closed');
    };

    setWebSocket(ws);

    // Cleanup on component unmount
    return () => {
      if (ws) {
        ws.close();
      }
    };
  }, [enrolledCourseId]);

  const handleSendMessage = () => {
    if (webSocket && inputMessage.trim() !== '') {
      const message = {
        message: inputMessage,
        user_id: user_id
      };

      // Send message to the WebSocket server
      webSocket.send(JSON.stringify(message));

      // Clear the input field
      setInputMessage('');
    }
  };

  return (
 

    <div className="mx-auto shadow-lg p-4 bg-white rounded-lg">
    <div className="h-80 overflow-y-auto border border-gray-200 p-4 rounded-lg mb-4">
      {/* {messages.map((msg, index) => (
        <div
          key={index}
          className={`flex mb-2 ${
            msg.user_id === user_id ? 'justify-end' : 'justify-start'
          }`}
        >
          <div
            className={`py-2 px-4 rounded-lg ${
              msg.user_id === user_id
                ? 'bg-blue-500 text-white rounded-t-lg rounded-bl-lg'
                : 'bg-gray-300 text-gray-800 rounded-t-lg rounded-br-lg'
            }`}
          >
            {msg.first_name}: {msg.message}
          </div>
        </div>
      ))} */}


{messages.map((msg, index) => (
  <div key={index} className={`chat ${msg.user_id === user_id ? 'chat-end' : 'chat-start'}`}>
    <div className="chat-image avatar">
      {/* <div className="w-10 rounded-full">
        <img
          alt="Tailwind CSS chat bubble component"
          src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
        />
      </div> */}

<div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
  <svg
    className="absolute w-12 h-12 text-gray-400 -left-1"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
      clipRule="evenodd"
    />
  </svg>
</div>



    </div>
    <div className="chat-header">
      {msg.first_name}
      <time className="text-xs opacity-50">
        {msg.timestamp /* Assuming you have a timestamp property in your message object */}
      </time>
    </div>
    <div
      className={`chat-bubble ${
        msg.user_id === user_id
          ? 'bg-blue-500 text-white rounded-t-lg rounded-bl-lg'
          : 'bg-gray-300 text-gray-800 rounded-t-lg rounded-br-lg'
      }`}
    >
      {msg.message}
    </div>
    
  </div>
))}






    </div>

    <div className="flex">
      <div className="w-full">
        {/* Input form */}
        <div className="flex items-center px-3 py-2 rounded-lg bg-gray-200 dark:bg-gray-700">
          <textarea
            rows={1}
            className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Your message..."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
          />
          <button
            type="button"
            onClick={handleSendMessage}
            className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600"
          >
            <svg
              className="w-5 h-5 rotate-90"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 20"
            >
              <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z" />
            </svg>
            <span className="sr-only">Send message</span>
          </button>
        </div>
      </div>
    </div>
  </div>





  );
};

export default DiscussionRoom;
