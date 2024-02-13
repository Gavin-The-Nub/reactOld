import "./App.css";

/* 
function App() {
  let age = 20;
  let isGreen = true;
  return (
    <div className="App">
      {age >= 18 ? <h1>OVER AGE</h1> : <h1>UNDERAGE</h1>}
      <h1 style={{ color: isGreen ? "green" : "red" }}>THis has color</h1>
      {isGreen && <button>button</button>}
    </div>
  );
}
*/

/*function App() {
  let planets = ["ian", "reian", "rosh"];
  return (
    <div className="App">
      {planets.map((planet, key) => {
        return <h1 key={key}>{planet}</h1>;
      })}
    </div>
  );
}*/

/*
//WITHOUT PROPS(EXERCISE)
function App() {
  let planets = [
    { name: "Mars", isGasPlanet: false },
    { name: "Earth", isGasPlanet: false },
    { name: "Jupiter", isGasPlanet: true },
    { name: "Uranus", isGasPlanet: true },
  ];
  return (
    <div className="App">
      {planets.map(
        (planet, key) => planet.isGasPlanet && <div>{planet.name}</div>
      )}
    </div>
  );
}
*/

//WITH PROPS(EXERCISE)

function App() {
  let planets = [
    { name: "Mars", isGasPlanet: false },
    { name: "Earth", isGasPlanet: false },
    { name: "Jupiter", isGasPlanet: true },
    { name: "Uranus", isGasPlanet: true },
  ];
  return (
    <div className="App">
      {planets.map((planet, key) => (
        <Planet isGasPlanet={planet.isGasPlanet} name={planet.name} />
      ))}
    </div>
  );
}
let Planet = (props) => props.isGasPlanet && <div>{props.name}</div>;

export default App;
