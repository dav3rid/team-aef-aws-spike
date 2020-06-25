import React, { createContext, useEffect, useState } from 'react';

export const WebSocketContext = createContext();

export const WebSocketProvider = ({ children }) => {
  const [webSocket, setWebSocket] = useState(null);
  useEffect(() => {
    const ws = new WebSocket(
      'wss://08znl0hk9c.execute-api.eu-west-1.amazonaws.com/test'
    );
    setWebSocket(ws);
  }, []);

  return (
    <WebSocketContext.Provider value={webSocket}>
      {children}
    </WebSocketContext.Provider>
  );
};
