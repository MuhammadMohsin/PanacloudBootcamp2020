import React from 'react';
import './App.css';
import Dinner from './dinner.js';
function App() {
  return (
    <div className='App'>
      {/* <Dinner></Dinner> */}
      <Dinner dishName='Nihaari' sweetDish='Kheer' />
      <hr />
      <Dinner dishName='Biryani' sweetDish='Jaleebi' />
      <hr />
      <Dinner dishName='Karahi' sweetDish='Gajar ka Halwa' />
    </div>
  );
}
export default App;
