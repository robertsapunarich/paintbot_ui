import React from 'react';
import Grid from './Grid';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="grid-container">{Grid()}</div>
      </header>
    </div>
  );
}


export default App;
