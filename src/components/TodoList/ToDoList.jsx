import { React, useEffect, useState } from "react";
import "./ToDoList.modul.css";
import ToDoItem from "./ToDoItem";
import AddToDoForm from "./Forms/AddToDoForm";

// const newToDoItem = React.createRef();

const ToDoList = () => {
    const [toDoList, setToDoList] = useState(
        JSON.parse(localStorage.getItem("ToDoList")) || []
    );
    const [filtredToDoList, setfiltredToDoList] = useState(toDoList);
    const [filter, setFilter] = useState(" ");
    useEffect(() => {
        localStorage.setItem("ToDoList", JSON.stringify(toDoList));
        setfiltredToDoList(toDoList);
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
            checked: false,
        };
        setToDoList((old) => [...old, newItem]);
    };

    const editToDoItem = ({ id, title, description, date }) => {
        const listItems = toDoList.map((item) =>
            item.id === id ? { ...item, title, description, date } : item
        );
        setToDoList(listItems);
    };

    const checkToDoItem = (id) => {
        const listItems = toDoList.map((item) =>
            item.id === id ? { ...item, checked: !item.checked } : item
        );
        setToDoList(listItems);
    };

    const deleteToDoItem = (id) => {
        const listItems = toDoList.filter((item) => item.id !== id);
        setToDoList(listItems);
    };

    const filterToDoItem = (filter) => {
        // eslint-disable-next-line
        const listItems = toDoList.filter((item) => {
            const param = item.checked.toString();
            if (param === filter) {
                return true;
            } else if (filter === " ") {
                return true;
            }
        });
        setfiltredToDoList(listItems);
    };

    const toDoItems = filtredToDoList.map((item) => (
        <ToDoItem
            key={item.id}
            item={item}
            checkToDoItem={checkToDoItem}
            deleteToDoItem={deleteToDoItem}
            editToDoItem={editToDoItem}
        />
    ));

    return (
        <div className="toDoListWrapper">
            <h1>ToDo List</h1>
            <div>
                <AddToDoForm setNewToDoItem={setNewToDoItem} />
            </div>
            <div className="filter">
                Filter:{" "}
                <select
                    value={filter}
                    onChange={(e) => {
                        filterToDoItem(e.target.value);
                        setFilter(e.target.value);
                    }}
                    className={"selectFilter"}
                >
                    <option value={" "}>All</option>
                    <option value={true}>Complited</option>
                    <option value={false}>Uncomplited</option>
                </select>
            </div>
            <div>{toDoItems}</div>
        </div>
    );
};

export default ToDoList;
