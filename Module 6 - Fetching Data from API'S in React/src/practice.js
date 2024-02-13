import "./App.css";
import { useState, useEffect } from "react";
import Axios from "axios";

function Practice() {
  let [text, setText] = useState();
  let [predictText, setPredictText] = useState();

  let fetchData = () => {
    Axios.get(`https://api.agify.io/?name=${text}`).then((res) => {
      setPredictText(res.data);
    });
  };

  return (
    <div className="App">
      <input
        placeholder="Ex: Axellerosh"
        onChange={(event) => {
          setText(event.target.value);
        }}
      ></input>
      <button onClick={fetchData}>Predict Age</button>

      <h1>Name:{predictText?.name}</h1>
      <h1>Predicted Age:{predictText?.age}</h1>
      <h1>count:{predictText?.count}</h1>
    </div>
  );
}

export default Practice;
