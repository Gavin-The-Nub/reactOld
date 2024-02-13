import "./App.css";


// dito naman ilalagay kung ano laman nung ilalagay sa browser      
function App() {
  return (
    <div className="App">
      <Job salary={300} position="crew" company="goodle" />
      <Job salary={1213123} position="manager" company="amazone" />
      <Job salary={123123123211200} position="janitor" company="faceboat" />
    </div>
  );
}
// ito ung lalabas sa browser
let Job = (props) => {
  return (
    <div>
      <h1>{props.salary}</h1>
      <h1>{props.position}</h1>
      <h1>{props.company}</h1> 
    </div>
  );
};

/* if else shorthand 
function App() {
  let age = 19;
  return (
    <div className="App">
      {age >= 18 ? <h1>OVER AGE</h1> : <h1>UNDER AGE</h1>}   
    </div>
  );
}*/

export default App;
