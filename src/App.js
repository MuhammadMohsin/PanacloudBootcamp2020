import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import { makeServer } from './server';

makeServer({ environment: 'development' });

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Counter />
      </header>
    </div>
  );
}

export default App;
