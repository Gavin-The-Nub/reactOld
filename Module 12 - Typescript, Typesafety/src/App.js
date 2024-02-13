import "./App.css";
import { Person } from "./person";

function App() {
  return (
    <div className="App">
      <Person
        name={"Ian"}
        email={"sadsa@gmail.com"}
        age={9}
        isMarried={false}
        friends={["axel", "cyrus"]}
      />
    </div>
  );
}

export default App;
