import React, { useState } from 'react';
import './App.css';
import Chat from './components/Chat';

function App() {
  const [roomOneOpen, setRoomOneOpen] = useState(false);
  const [roomTwoOpen, setRoomTwoOpen] = useState(false);

  return (
    <div className="App">
      <h1>AWS Messenger</h1>
      <button onClick={() => setRoomOneOpen(current => !current)}>
        Toggle Room 1
      </button>
      {roomOneOpen && <Chat room="room-1" />}
      <button onClick={() => setRoomTwoOpen(current => !current)}>
        Toggle Room 2
      </button>
      {roomTwoOpen && <Chat room="room-2" />}
    </div>
  );
}

export default App;
