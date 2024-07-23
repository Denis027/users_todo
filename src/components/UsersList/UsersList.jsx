import { useDispatch, useSelector } from "react-redux";
import {
    fetchUsers,
    filterUsers,
    selectUsersList,
    sortUsersColumn,
} from "../../app/store/reducers/usersListSlice";
import { useEffect, useState } from "react";
import UserItem from "./UserItem";
import "./UsersList.modul.css";

const UsersList = () => {
    const dispatch = useDispatch();
    const usersList = useSelector(selectUsersList);
    const [columnSearch, setColumnSearch] = useState("");
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch, columnSearch, searchQuery]);

    const search = () => {
        if (columnSearch !== "" && searchQuery !== "") {
            dispatch(filterUsers({ columnSearch, searchQuery }));
        }
    };

    const sortColumn = (columnId) => {
        dispatch(sortUsersColumn(columnId));
    };

    return (
        <div className="usersListWrapper">
            <h1>Users List</h1>
            <div className="userListSearch">
                Поиск по:
                <select
                    className={"select"}
                    value={columnSearch}
                    onChange={(e) => {
                        setColumnSearch(e.target.value);
                    }}
                >
                    <option value={""}>select column</option>
                    <option value={"firstName"}>firstName</option>
                    <option value={"maidenName"}>maidenName</option>
                    <option value={"lastName"}>lastName</option>
                    <option value={"age"}>age</option>
                    <option value={"gender"}>gender</option>
                    <option value={"phone"}>phone</option>
                    <option value={"address.city"}>city</option>
                    <option value={"address.address"}>address</option>
                </select>
                <input
                    value={searchQuery}
                    onChange={(e) => {
                        setSearchQuery(e.target.value);
                    }}
                />
                <button onClick={search}>Search</button>
                <button
                    onClick={() => {
                        setColumnSearch("");
                        setSearchQuery("");
                    }}
                >
                    Clear
                </button>
            </div>
            <div className="usersListTabler">
                <UserItem sortColumn={sortColumn} usersList={usersList} />
            </div>
        </div>
    );
};

export default UsersList;
