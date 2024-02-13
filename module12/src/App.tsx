import React from "react";
import { Person, Country } from "./person";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Person
        name={"Ian"}
        email={"sadsa@gmail.com"}
        age={9}
        isMarried={false}
        friends={["axel", "cyrus"]}
        country={Country.Philippines}
      />
    </div>
  );
}

export default App;
