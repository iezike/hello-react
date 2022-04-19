import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.children}
    </button>
  )
};

const Application = (props) => {
  const [name, setName] = useState("");
  const handleChange = (event) => {
    setName(event.target.value? event.target.value: "")
  }

  const reset = () => {
    setName("");
    // your code here
  };

  return (
    <main>
      <input value={name} onChange={handleChange} placeholder='Type your name'></input>
      <Button onClick={reset}>RESET</Button>
      {name && <h1>Hello {name}</h1>}
    </main>
  );
};

ReactDOM.render(<Application />, document.getElementById("root"));
