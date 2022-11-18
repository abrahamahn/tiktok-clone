import React from 'react';
import Video from "./Video";
import './App.css';

function App() {
  return (
    // BEM
    <div className="App">
      <h1>Hello!</h1>

      <div className="app__videos">
        <Video />
        <Video />
        <Video />
        <Video />
      </div>
    </div>
  );
}

export default App;
