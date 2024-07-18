import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { fetchUsers, selectUsersList } from "./store/reducers/usersListSlice";
import { useEffect } from "react";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    // eslint-disable-next-line
    const usersItems = useSelector(selectUsersList);

    return (
        <div className="App">
            <h1>work</h1>
        </div>
    );
}

export default App;
