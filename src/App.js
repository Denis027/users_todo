import "./App.css";
import { NavLink, Routes, Route } from "react-router-dom";
import UsersList from "./components/UsersList/UsersList";
import ToDoList from "./components/TodoList/ToDoList";

function App() {
    return (
        <div className="AppWrapper">
            <div className="navBar">
                <nav>
                    <ul className="navBarList">
                        <li className="navBarItem">
                            <NavLink to="/users">Users List</NavLink>
                        </li>
                        <li className="navBarItem">
                            <NavLink to="/todo">ToDo List</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="AppContentWrapper">
                <Routes>
                    <Route path="/users" element={<UsersList />} />
                    <Route path="/todo" element={<ToDoList />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
