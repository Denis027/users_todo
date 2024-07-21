import { useEffect, useState } from "react";
import "./ToDoItem.modul.css";
import { FaTrashAlt } from "react-icons/fa";
import EditToDoForm from "./Forms/EditToDoForm";

const ToDoItem = (props) => {
    const [editMode, setEditMode] = useState(false);

    useEffect(() => {}, [editMode]);

    return (
        <div className="toDoWrapper">
            {editMode ? (
                <div
                    onDoubleClick={() => {
                        setEditMode(false);
                    }}
                >
                    <EditToDoForm
                        item={props.item}
                        editMode={editMode}
                        setEditMode={setEditMode}
                        editToDoItem={props.editToDoItem}
                    />
                </div>
            ) : (
                <li>
                    <h2
                        style={
                            props.item.checked
                                ? { textDecoration: "line-through" }
                                : null
                        }
                        onDoubleClick={() => {
                            setEditMode(true);
                        }}
                    >
                        {props.item.title}
                    </h2>
                    <h3
                        style={
                            props.item.checked
                                ? { textDecoration: "line-through" }
                                : null
                        }
                        onDoubleClick={() => {
                            setEditMode(true);
                        }}
                    >
                        {props.item.date}
                    </h3>
                    <label
                        style={
                            props.item.checked
                                ? { textDecoration: "line-through" }
                                : null
                        }
                        onDoubleClick={() => {
                            setEditMode(true);
                        }}
                    >
                        {props.item.description}
                    </label>
                    <input
                        type="checkbox"
                        checked={props.item.checked}
                        onChange={() => {}}
                        onClick={() => {
                            props.handleCheck(props.item.id);
                        }}
                    />
                    <button
                        onClick={() => {
                            setEditMode(true);
                        }}
                    >
                        Edit
                    </button>
                    <FaTrashAlt
                        role="button"
                        tabIndex="0"
                        onClick={() => {
                            props.handleDelete(props.item.id);
                        }}
                    />
                </li>
            )}
        </div>
    );
};

export default ToDoItem;
