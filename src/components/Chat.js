import React, { useContext, useState, useEffect } from 'react';
import { WebSocketContext } from '../contexts/WebSocketContext';
import MsgForm from './MsgForm';

const Chat = ({ room }) => {
  const [messages, setMessages] = useState([]); // existing messages

  const ws = useContext(WebSocketContext);
  useEffect(() => {
    if (ws) {
      ws.send(JSON.stringify({ action: 'onChatEntry', room }));

      ws.addEventListener('message', response => {
        console.log(response);
        const { messages: newMessages, room: updatedRoom } = JSON.parse(
          response.data
        );
        console.log(newMessages);
        if (room === updatedRoom) {
          setMessages(messages => [...messages, ...newMessages]);
        }
      });
      return () => {
        // ws.close(); TODO: Leave chat
      };
    }
  }, [room, ws]);

  return (
    <div>
      <ul>
        {messages.map(({ messageId, Data }, i) => (
          <li key={messageId + i}>{Data}</li>
        ))}
      </ul>
      <MsgForm room={room} />
    </div>
  );
};

export default Chat;
