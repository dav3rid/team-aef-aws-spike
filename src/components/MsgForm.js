import React, { useContext, useState, useEffect } from 'react';
import { WebSocketContext } from '../contexts/WebSocketContext';

const MsgForm = ({ room }) => {
  const ws = useContext(WebSocketContext);
  const [message, setMessage] = useState(''); // new message

  const handleChange = event => {
    setMessage(event.target.value);
  };

  const handleSendData = event => {
    event.preventDefault();
    ws.send(JSON.stringify({ action: 'onMessage', message, room }));
    setMessage('');
  };

  return (
    <form>
      <label>
        Message: <input type="text" onChange={handleChange} value={message} />
      </label>
      <button onClick={handleSendData}>Send Message</button>
    </form>
  );
};

export default MsgForm;
