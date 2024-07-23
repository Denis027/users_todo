import { React, useEffect, useState } from "react";
import "./ToDoList.modul.css";
import ToDoItem from "./ToDoItem";
import AddToDoForm from "./Forms/AddToDoForm";

// const newToDoItem = React.createRef();

const ToDoList = () => {
    const [toDoList, setToDoList] = useState(
        JSON.parse(localStorage.getItem("ToDoList")) || []
    );
    useEffect(() => {
        localStorage.setItem("ToDoList", JSON.stringify(toDoList));
    }, [toDoList]);

    const setNewToDoItem = ({ title, description, date }) => {
        const uniqueID = `id-${Date.now().toString(36)}-${Math.random()
            .toString(36)
            .slice(2)}`;
        const newItem = {
            id: uniqueID,
            title,
            description,
            date,
            completed: false,
        };
        setToDoList((old) => [...old, newItem]);
    };

    const editToDoItem = ({ id, title, description, date }) => {
        console.log({ id, title, description, date });
        const listItems = toDoList.map((item) =>
            item.id === id ? { ...item, title, description, date } : item
        );
        setToDoList(listItems);
    };

    const handleCheck = (id) => {
        const listItems = toDoList.map((item) =>
            item.id === id ? { ...item, checked: !item.checked } : item
        );
        setToDoList(listItems);
    };

    const handleDelete = (id) => {
        const listItems = toDoList.filter((item) => item.id !== id);
        setToDoList(listItems);
    };

    const toDoItems = toDoList.map((item) => (
        <ToDoItem
            key={item.id}
            item={item}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
            editToDoItem={editToDoItem}
        />
    ));

    return (
        <div className="toDoListWrapper">
            <h1>ToDo List</h1>
            <div>
                <AddToDoForm setNewToDoItem={setNewToDoItem} />
            </div>
            <div>{toDoItems}</div>
        </div>
    );
};

export default ToDoList;
