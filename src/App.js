import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [serverTime, setServerTime] = useState();
  useEffect(() => {
    fetch("/api/time")
      .then(response => response.text())
      .then(text => setServerTime(text));
  }, [setServerTime]);

  return (
    <div className="App">
      <header className="App-header">
        <p>The time on server is {serverTime}</p>
      </header>
    </div>
  );
};

export default App;
