import "./App.css";
import { useState } from "react";

function App() {
  let [todoList, setTodoList] = useState([]);
  let [newTask, setNewTask] = useState("");

  let handleChange = (event) => {
    setNewTask(event.target.value);
  };

  let addTask = () => {
    let task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      isComplete: false,
    };
    setTodoList([...todoList, task]);
  };

  let deleteTask = (id) => {
    setTodoList(
      todoList.filter((task) => {
        return task.id !== id;
      })
    );
  };
  let completeTask = (id) => {
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          return { ...task, isComplete: true };
        } else {
          return task;
        }
      })
    );
  };

  return (
    <div className="App">
      <div className="addTask">
        <input type={Text} onChange={handleChange}></input>

        <button onClick={addTask}>addTask</button>
      </div>

      <div className="listTask">
        {todoList.map((task) => {
          return (
            <div
              className="task"
              style={{ backgroundColor: task.isComplete ? "green" : "white" }}
            >
              <h1>{task.taskName}</h1>
              <button onClick={() => completeTask(task.id)}>completed</button>
              <button onClick={() => deleteTask(task.id)}>remove task</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
