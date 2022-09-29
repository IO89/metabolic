import React, { useEffect, useRef, useState } from 'react';
import { io, Socket } from 'socket.io-client';
import './App.css';


function App() {
  const socket = useRef<null | Socket>(null);
  const [data, setData] = useState()

  useEffect(() => {
    // TODO: connect to server
    socket.current = io('0.0.0.0:5000');
    socket.current.emit('we are connected')


    return () => {
      socket.current?.emit('disconnected')
      socket.current?.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!socket.current) return;

    socket.current?.on('received-data', (data) => {
      const updatedData = JSON.parse(data);
      setData(updatedData);
    });
  }, [data]);

  return (
    <div className="App">
      Visualize data
    </div>
  );
}

export default App;
