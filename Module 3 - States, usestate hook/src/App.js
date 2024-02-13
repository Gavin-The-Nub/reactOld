import "./App.css";
import { useState } from "react";

/*function App() {
  let [age, setAge] = useState(0);

  let addAge = () => {
    setAge((age += 1));
  };

  return (
    <div className="App">
      {age}
      <button onClick={addAge}>CLICK</button>
    </div>
  );
}*/

/*
function App() {
  let [inputValue, setValue] = useState("");

  let changeValue = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="App">
      {inputValue}
      <input type="text" onChange={changeValue}></input>
    </div>
  );
}*/

function App() {
  let [count, setCount] = useState(0);

  return (
    <div className="App">
      <button
        onClick={() => {
          setCount((count += 1));
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          setCount((count -= 1));
        }}
      >
        Decrease
      </button>
      <button
        onClick={() => {
          setCount((count = 0))   ;
        }}
      >
        reset
      </button>
      {count}
    </div>
  );
}

export default App;
