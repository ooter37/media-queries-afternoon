import React from 'react';
import './App.css';
import './reset.css';
import Banner from './Components/Banner'

function App() {
  return (
    <div className="App">
      <Banner />
      <div className='greetings'>
        <h2 className='welcome'>Welcome To Our Studio!</h2>
        <h1 className='meet'>IT'S NICE TO MEET YOU</h1>
        <button className='tell-more'>TELL ME MORE</button>
      </div>
    </div>
  );
}

export default App;
