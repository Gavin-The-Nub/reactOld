import "./App.css";
import { useState, useEffect } from "react";

export let Text = () => {
  let [text, setText] = useState("");

  useEffect(() => {
    console.log("component mounted");

    return () => console.log("component unmounted");
  }, []);

  return (
    <div>
      <input
        onChange={(event) => {
          setText(event.target.value);
        }}
      ></input>
      <h1>{text}</h1>
    </div>
  );
};
