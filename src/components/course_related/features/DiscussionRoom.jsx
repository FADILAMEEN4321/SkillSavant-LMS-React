// import React, { useState, useEffect } from 'react';

// const DiscussionRoom = ({ enrolledCourseId }) => {
//   return (
//     <div class="mx-auto shadow-lg p-4 bg-white rounded-lg">
//   <div class="h-80 overflow-y-auto border border-gray-200 p-4 rounded-lg mb-4">
//     {/* <!-- Messages go here --> */}
//     <div class="flex items-center justify-start mb-2">
//       <div class="py-2 px-4 bg-blue-500 text-white rounded-t-lg rounded-bl-lg">
//         Hello! how are you
//       </div>
//     </div>
//     <div class="flex items-center justify-end mb-2">
//       <div class="py-2 px-4 bg-gray-300 rounded-t-lg rounded-bl-lg">
//         I am fine what about you?
//       </div>
      
//     </div>

//     {/* <!-- More messages... --> */}
//   </div>

//   <div class="flex">
//     <form className="w-full"> 
//   <label htmlFor="chat" className="sr-only">
//     Your message
//   </label>
//   <div className="flex items-center px-3 py-2 rounded-lg bg-gray-200 dark:bg-gray-700">
//     <button
//       type="button"
//       className="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
//     >
//       <svg
//         className="w-5 h-5"
//         aria-hidden="true"
//         xmlns="http://www.w3.org/2000/svg"
//         fill="none"
//         viewBox="0 0 20 18"
//       >
//         <path
//           fill="currentColor"
//           d="M13 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7.565 7.423 4.5 14h11.518l-2.516-3.71L11 13 7.565 7.423Z"
//         />
//         <path
//           stroke="currentColor"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth={2}
//           d="M18 1H2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
//         />
//         <path
//           stroke="currentColor"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth={2}
//           d="M13 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7.565 7.423 4.5 14h11.518l-2.516-3.71L11 13 7.565 7.423Z"
//         />
//       </svg>
//       <span className="sr-only">Upload image</span>
//     </button>
//     <button
//       type="button"
//       className="p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
//     >
//       <svg
//         className="w-5 h-5"
//         aria-hidden="true"
//         xmlns="http://www.w3.org/2000/svg"
//         fill="none"
//         viewBox="0 0 20 20"
//       >
//         <path
//           stroke="currentColor"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth={2}
//           d="M13.408 7.5h.01m-6.876 0h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM4.6 11a5.5 5.5 0 0 0 10.81 0H4.6Z"
//         />
//       </svg>
//       <span className="sr-only">Add emoji</span>
//     </button>
//     <textarea
//       id="chat"
//       rows={1}
//       className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//       placeholder="Your message..."
//       defaultValue={""}
//     />
//     <button
//       type="submit"
//       className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600"
//     >
//       <svg
//         className="w-5 h-5 rotate-90"
//         aria-hidden="true"
//         xmlns="http://www.w3.org/2000/svg"
//         fill="currentColor"
//         viewBox="0 0 18 20"
//       >
//         <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z" />
//       </svg>
//       <span className="sr-only">Send message</span>
//     </button>
//   </div>
// </form>

//   </div>
// </div>

//   )
// }

// export default DiscussionRoom



import React, { useState, useEffect, useContext } from 'react';
import AuthContext from './../../../context/AuthContext'

const DiscussionRoom = ({ enrolledCourseId }) => {

  const {user, authTokens} = useContext(AuthContext)
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [webSocket, setWebSocket] = useState(null);


  const user_id = user.user_id
  const jwtToken = authTokens.access

  useEffect(() => {
    // Establish WebSocket connection
    const ws = new WebSocket(`ws://127.0.0.1:8000/ws/chat/${enrolledCourseId}/`);
    
    ws.onopen = () => {
      console.log('WebSocket connection opened');
     
    };

    ws.onmessage = (event) => {
      const message = JSON.parse(event.data);
      setMessages([...messages, message]);
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
  }, [enrolledCourseId, messages]);

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
      {messages.map((msg, index) => (
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
