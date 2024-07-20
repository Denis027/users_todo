import "./ToDoItem.modul.css";

const ToDoItem = (props) => {
  return (
    <div>
      <span>{props.do}</span>
    </div>
  );
};

export default ToDoItem;
