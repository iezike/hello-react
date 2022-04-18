import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = (props) => {
  const handleClick = () => {
    console.log("reset");
    // your code here
  };
  return (
    <button onClick = {handleClick}>
      {props.children}
    </button>
  )
};

const Application = (props) => {
  const [name, setName] = useState("Ikenna");
  return (
    <main>
      <input placeholder='Type your name'></input>
      <Button>RESET</Button>
      <h1>Hello {name}</h1>
    </main>
  );
};

ReactDOM.render(<Application />, document.getElementById("root"));
