import React from 'react';
import logo from './logo.svg';
import './App.css';
import DropCsvArea from './components/DropCsvArea';
import GraphArea from './components/GraphArea';
import Graph from './components/Graph';

function App() {
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
        <DropCsvArea>
          sample
    </DropCsvArea>
    <GraphArea>
          sample
    </GraphArea>
    <Graph>
          sample
    </Graph>
      </header>
    </div>
  );
}

export default App;
