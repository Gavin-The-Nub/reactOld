import "./App.css";
import { useState } from "react";

function App() {
  let [todoList, setTodoList] = useState([]);
  let [newTask, setNewTask] = useState("");

  //COMMENT - triny ko pala dito yung fav nating gawin na idirect na sa eventlistener pero ayaw gumana nag eerror lintek
  //COMMENT - update nagana pala sya sa addTask, triny ko ulit e kaso ayoko na baguhin baka malito pako xD

  //COMMENT - kinukuha lang ng function nato yung value nung input para mailagay natin dun sa newTask na variable
  let handleChange = (event) => {
    setNewTask(event.target.value);
  };

  //COMMENT - gumawa pako ng new variable(newTodoList) e tyangala kase si yt prof sa huli sinabi na di naman need
  /*
  let addTask = () => {
    let newTodoList = [...todoList, newTask];

    setTodoList(newTodoList); 
  };
  */

  //COMMENT - kahit di kana gumawa new variable(newTodoList) tulad ng ginawa natin sa taas, dahil pede mo nalang idirect sa setTodoList
  //COMMENT - yung [...todolist, newTask] ang ginagawa nun ay pinagsasama yung value ng todolist at newTask
  let addTask = () => {
    setTodoList([...todoList, newTask]);
  };

  //COMMENT - gumawa ako ng new variable
  /*
  let deleteTask = (taskName) => {
       let newTodoList = todoList.filter((task) => {
      if (task === taskName) {
        return false;
      } else {
        return true;
      }
    });
 //COMMENT - shortcut lang to ng if else   
      return task !== taskName;
    };
   
    setTodoList(newTodolist)
    */

  //COMMENT - tulad ng sinabi ko nung una kahit di kana gumawa new variable(newTodoList) tulad ng ginawa natin sa taas, dahil pede mo nalang idirect sa setTodoList

  let deleteTask = (taskName) => {
    setTodoList(
      todoList.filter((task) => {
        return task !== taskName;
      })
    );
  };

  let isComplete = () => {
    setTodoList(todoList.map((task) => {}));
  };

  //COMMENT - <button onClick={() => deleteTask(task)}>remove task</button> sa part nato tandaan mo na laging need ng "() =>" pag may parameter yung function
  return (
    <div className="App">
      <div className="addTask">
        <input type={Text} onChange={handleChange}></input>

        <button onClick={addTask}>addTask</button>
      </div>

      <div className="listTask">
        {todoList.map((task) => {
          return (
            <div>
              <h1>{task}</h1>
              <button onClick>completed</button>
              <button onClick={() => deleteTask(task)}>remove task</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
