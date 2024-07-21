import "./App.css";
import { NavLink, Routes, Route } from "react-router-dom";
import UsersList from "./components/UsersList/UsersList";
import ToDoList from "./components/TodoList/ToDo";

function App() {
    return (
        <div className="App">
            <div>
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/users">Users</NavLink>
                        </li>
                        <li>
                            <NavLink to="/todo">ToDo</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
            <div>
                <Routes>
                    <Route path="/users" element={<UsersList />} />
                    <Route path="/todo" element={<ToDoList />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
