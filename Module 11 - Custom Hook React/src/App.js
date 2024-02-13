import "./App.css";
import { useState } from "react";

function App() {
  let [isVisible, setIsVisible] = useState(false);
  let [isVisible2, setIsVisible2] = useState(false);
  return (
    <div className="App">
      <button onClick={() => setIsVisible((prev) => !prev)}>
        {isVisible ? "Hide" : "Show"}
      </button>
      {isVisible && <h1>Hidden Text</h1>}

      <button onClick={() => setIsVisible2((prev) => !prev)}>
        {isVisible2 ? "Hide" : "Show"}
      </button>
      {isVisible2 && <h1>Hidden Text</h1>}
    </div>
  );
}

export default App;
