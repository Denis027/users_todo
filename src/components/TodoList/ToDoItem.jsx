import { useEffect, useState } from "react";
import "./ToDoItem.modul.css";
import { FaTrashAlt } from "react-icons/fa";
import EditToDoForm from "./Forms/EditToDoForm";

const ToDoItem = (props) => {
    const [editMode, setEditMode] = useState(false);
    useEffect(() => {}, [editMode]);

    return (
        <div className="toDoItemWrapper">
            {editMode ? (
                <div>
                    <EditToDoForm
                        item={props.item}
                        editMode={editMode}
                        setEditMode={setEditMode}
                        editToDoItem={props.editToDoItem}
                    />
                </div>
            ) : (
                <div className="toDoItem">
                    <div
                        style={
                            props.item.checked
                                ? { textDecoration: "line-through" }
                                : null
                        }
                        className="toDoData"
                    >
                        <div className="toDoTitle">
                            {props.item.date}
                            <h2>{props.item.title}</h2>
                        </div>
                        <div className="toDoDate"></div>
                        <div className="toDoDescription">
                            {props.item.description}
                        </div>
                    </div>
                    <div className="toDoButtons">
                        <input
                            type="checkbox"
                            checked={props.item.checked}
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
                    </div>
                </div>
            )}
        </div>
    );
};

export default ToDoItem;
