import { useDispatch, useSelector } from "react-redux";
import {
    fetchUsers,
    selectUsersList,
} from "../../store/reducers/usersListSlice";
import { useEffect } from "react";
import UserItem from "./UserItem";
import "./UsersList.modul.css";

const UsersList = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchUsers());
        // eslint-disable-next-line
    }, []);

    const usersList = useSelector(selectUsersList);

    const usersItems = usersList.map((item) => (
        <UserItem key={item.id} item={item} />
    ));
    console.log(usersList);

    return (
        <div className="usersList">
            <h1>Users List</h1>
            <div className="usersListWrapper">{usersItems}</div>
        </div>
    );
};

export default UsersList;
