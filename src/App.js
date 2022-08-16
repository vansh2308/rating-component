// import logo from '/./logo.svg';
import { useState } from 'react';
import './App.css';
import Rating from './components/rating';

function App() {
  return(
    <>
    <div className='container'>
      <Rating display = "block"/>
    </div>
    </>
  );
}

export default App;

