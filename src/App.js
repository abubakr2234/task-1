import React, {useEffect} from 'react';
import './App.css';
import Current from './Current';

const BASE_URL = 'https://api.exchangeratesapi.io/v1/'

function App() {

  useEffect(() => {
    fetch(BASE_URL)
      .then(res => res.json())
      .then(data => console.log(data))
  }, [])

  return (
    <div className="App">

      <h1>converter</h1>
      <Current />

      <div>=</div>
      <Current />


    </div>
  );
}

export default App;
