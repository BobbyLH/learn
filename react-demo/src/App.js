import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Upload } from '@hupu/rc-basic'
// const { Upload } = require('@hf/react-basic')

function App() {
  console.log(123, Upload)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button style={{ position: 'relative' }}>
          点我上传
          <Upload />
        </button>
      </header>
    </div>
  );
}

export default App;
