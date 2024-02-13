import "./App.css";
import { useState, useEffect } from "react";
import Axios from "axios";

function Exercise() {
  let [excuse, setExcuse] = useState([]);

  let party = (typeExcuse) => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${typeExcuse}`).then(
      (res) => {
        setExcuse(res.data[0].excuse);
      }
    );
  };

  return (
    <div className="App">
      <button onClick={() => party("party")}>Party</button>
      <button onClick={() => party("family")}>Family</button>
      <button onClick={() => party("office")}>Office</button>

      <p>{excuse}</p>
    </div>
  );
}

export default Exercise;
