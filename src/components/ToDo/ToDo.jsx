import { React, useEffect, useState } from "react";
import "./ToDo.modul.css";
import ToDoItem from "./ToDoItem";

// const newToDoItem = React.createRef();

const ToDoList = () => {
  const [toDoList, setToDoList] = useState([]);

  useEffect(() => {});

  const setToDoItem = (e) => {
    setToDoList(e.target.value);
  };

  const toDoItems = toDoList.map((item) => <ToDoItem do={item} />);

  return (
    <div className="toDo">
      <h1>ToDo List</h1>
      <div>
        <input onChange={setToDoItem}></input>
      </div>
      <div>{toDoItems}</div>
    </div>
  );
};

export default ToDoList;
