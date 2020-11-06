import React, { useState } from "react";
import ReactDOM from "react-dom";

function App() {
  const state = useState();

  function increase() {
    //count++;
  }

  return (
    <div className="container">
      <h1>0</h1>
      <button onClick={increase}>+</button>
    </div>
  );
}

export default App;
