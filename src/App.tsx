import React, { useEffect, useRef, useState } from 'react';
import { io, Socket } from 'socket.io-client';
import Ticker, { NewsTicker } from 'nice-react-ticker';

import './App.css';
import { BubbleMap } from './BubbleMap';


const mockMetabolicAge = [
  {
  title: 'Metabolic score 8.6',
  emoji: '😁',
  time: "11-01-22"
},
  {
    title:'Metabolic score 9.6',
    emoji: '😁',
    time: "11-01-22"
  }
]


function App() {
  const socket = useRef<null | Socket>(null);
  const [data, setData] = useState()

  useEffect(() => {
    // TODO: connect to server
    socket.current = io('0.0.0.0:4000');
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
      <>
        <Ticker   isNewsTicker={true} >
          {mockMetabolicAge.map(
            (m,i) => <NewsTicker id={i} title={`${m.title} ${m.emoji}`} meta={m.time} url='' /> )}
          </Ticker>
        </>
      <BubbleMap />
    </div>
  );
}

export default App;
