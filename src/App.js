import React, { useState } from 'react';
import { Message } from './Message.js'
import './App.css';

export default function App() {

  let [count, setCount] = useState(1);
  let [isMorning, setMorning] = useState(false)

  return (
    <div className={`box ${isMorning ? 'dayLight' : ''}`}>

      <h1>Good {isMorning ? 'Morning' : 'Night'}</h1>

      <Message counter={count} />
      <br />

      <button onClick={() => setCount(count + 1)}>
        Update Counter
      </button>

      <button onClick={() => setMorning(!isMorning)}> 
        Update Day
      </button>

    </div>
  );
}

